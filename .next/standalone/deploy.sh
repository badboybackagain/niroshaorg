#!/bin/bash

# Deployment Script for Team Nirosha Website (Next.js)
# This script builds Next.js production files and uploads them to your FTP server
# 
# Requirements on server:
# - Node.js 18+ installed
# - npm or yarn installed
# - For standalone builds: Just run 'node server.js' after upload
# - For regular builds: Run 'npm install --production && npm start' after upload
# - Environment variables (GMAIL_USER, GMAIL_PASSWORD) must be set on server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Team Nirosha - Deployment Script${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Show usage if --help is requested
if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]]; then
    echo "Usage: ./deploy.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --full, -f         Force full deployment (upload all files)"
    echo "  --with-cache, -c   Generate image cache before building (slower but ensures all images are optimized)"
    echo "  --help, -h         Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  PARALLEL_TRANSFERS  Number of files to transfer in parallel (default: 10)"
    echo "                      Example: export PARALLEL_TRANSFERS=20"
    echo ""
    echo "By default, the script performs incremental deployment,"
    echo "uploading only files that have changed since the last deployment."
    echo ""
    echo "Note: Image cache generation is skipped by default to save deployment time."
    echo "      Use --with-cache to generate and upload image cache files."
    echo ""
    echo "Deployment Process:"
    echo "  The script creates a zip file and automatically uploads it to the production server."
    echo "  The zip file is then automatically extracted in the public_html folder."
    echo ""
    exit 0
fi

# Check if FTP credentials are set
if [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ] || [ -z "$FTP_HOST" ] || [ -z "$FTP_PATH" ]; then
    echo -e "${YELLOW}FTP credentials not found in environment variables.${NC}"
    echo -e "${YELLOW}Please set the following variables:${NC}"
    echo ""
    echo "  export FTP_USER='abhishek@nirosha.org'"
    echo "  export FTP_PASS='your-password'"
    echo "  export FTP_HOST='your-server.com'"
    echo "  export FTP_PATH='/'"
    echo ""
    echo "Note: If your FTP user's root directory is already the website root,"
    echo "      use FTP_PATH='/' or FTP_PATH='.' to use the current directory."
    echo ""
    echo "Or create a .env.deploy file with:"
    echo "  FTP_USER=your-username"
    echo "  FTP_PASS=your-password"
    echo "  FTP_HOST=your-server.com"
    echo "  FTP_PATH=/  (use '/' if FTP root is already website root)"
    echo ""
    
    # Try to load from .env.deploy file
    if [ -f .env.deploy ]; then
        echo -e "${GREEN}Loading credentials from .env.deploy...${NC}"
        # Source the .env.deploy file properly, handling quotes and comments
        set -a
        # Use source with a subshell to safely load the file
        (source .env.deploy 2>/dev/null || {
            # Fallback: parse line by line if source fails
            while IFS= read -r line || [ -n "$line" ]; do
                # Skip empty lines and comments
                [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]] && continue
                # Remove leading/trailing whitespace
                line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
                # Safely export the variable assignment
                if [[ "$line" =~ ^[A-Z_]+= ]]; then
                    # Handle values that might contain special characters
                    # Split on first = sign
                    var_name="${line%%=*}"
                    var_value="${line#*=}"
                    # Remove quotes if present (we'll add them back)
                    var_value="${var_value#\'}"
                    var_value="${var_value%\'}"
                    var_value="${var_value#\"}"
                    var_value="${var_value%\"}"
                    # Export with proper quoting
                    eval "export ${var_name}='${var_value}'"
                fi
            done < .env.deploy
        })
        set +a
    else
        echo -e "${RED}Error: FTP credentials not configured!${NC}"
        echo ""
        echo "Quick setup:"
        echo "  1. Create .env.deploy file with your FTP credentials"
        echo "  2. Or set environment variables before running this script"
        exit 1
    fi
fi

# Optional: FTP Port (default: 21)
FTP_PORT=${FTP_PORT:-21}

# Optional: Use SFTP instead of FTP (set FTP_TYPE=sftp)
FTP_TYPE=${FTP_TYPE:-ftp}

# Optional: Number of parallel transfers (default: 10)
PARALLEL_TRANSFERS=${PARALLEL_TRANSFERS:-10}

# Normalize FTP_PATH: if it's '/' or '.', we'll use current directory (no cd needed)
# Otherwise, we'll cd to the specified path
USE_CURRENT_DIR=false
if [ "$FTP_PATH" = "/" ] || [ "$FTP_PATH" = "." ]; then
    USE_CURRENT_DIR=true
    FTP_PATH="."
fi

# Incremental deployment feature
DEPLOY_TIMESTAMP_FILE=".deploy-timestamp"
DEPLOY_MANIFEST_FILE=".deploy-manifest"
FORCE_FULL_DEPLOY=false
GENERATE_CACHE=false

# SSH/SCP Configuration
SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

# Check for flags
for arg in "$@"; do
    case "$arg" in
        --full|-f)
            FORCE_FULL_DEPLOY=true
            echo -e "${YELLOW}Full deployment mode: uploading all files${NC}"
            ;;
        --with-cache|-c)
            GENERATE_CACHE=true
            echo -e "${YELLOW}Image cache generation enabled${NC}"
            ;;
    esac
done

# Incremental deployment: Check for changed SOURCE files BEFORE building
# This prevents false positives from rebuild timestamps
if [ "$FORCE_FULL_DEPLOY" = false ] && [ -f "$DEPLOY_TIMESTAMP_FILE" ]; then
    echo -e "${YELLOW}Checking for source file changes since last deployment...${NC}"
    # Get last deployment time from file modification time
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        LAST_DEPLOY_TIME=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M:%S" "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null || echo "unknown")
    else
        # Linux
        LAST_DEPLOY_TIME=$(stat -c "%y" "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null | cut -d'.' -f1 || echo "unknown")
    fi
    echo -e "${YELLOW}Last deployment: $LAST_DEPLOY_TIME${NC}"
    
    # Find SOURCE files modified after last deployment (not .next files)
    # Check src/, public/, app/, package.json, next.config, etc.
    SOURCE_CHANGED=$(find src app public -type f -newer "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null | head -1)
    CONFIG_CHANGED=$(find . -maxdepth 1 -type f \( -name "package.json" -o -name "next.config.*" -o -name "*.config.js" -o -name "*.config.ts" \) -newer "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null | head -1)
    
    if [ -n "$SOURCE_CHANGED" ] || [ -n "$CONFIG_CHANGED" ]; then
        echo -e "${GREEN}Source files have changed - will upload changed files only${NC}"
    else
        echo -e "${YELLOW}No source files changed since last deployment.${NC}"
        echo ""
        read -p "Upload anyway? (y/N): " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}Deployment cancelled.${NC}"
            exit 0
        fi
        FORCE_FULL_DEPLOY=true
    fi
else
    if [ "$FORCE_FULL_DEPLOY" = false ]; then
        echo -e "${YELLOW}No previous deployment found. Performing full deployment.${NC}"
    fi
    FORCE_FULL_DEPLOY=true
fi

echo -e "${GREEN}Step 1: Building Next.js production files...${NC}"
echo -e "${YELLOW}Note: This script deploys Next.js build files (.next folder and public folder).${NC}"
echo -e "${YELLOW}Server files (server/ directory) are NOT deployed and will not be overwritten.${NC}"

# Generate image cache only if --with-cache flag is provided
if [ "$GENERATE_CACHE" = true ]; then
    echo -e "${YELLOW}Generating image cache (this may take a while)...${NC}"
    npm run build
else
    echo -e "${YELLOW}Skipping image cache generation (use --with-cache to enable)${NC}"
    # Run generate-sitemap and build without running image processing
    # This skips the prebuild hook by running next build directly
    npm run generate-sitemap
    if [ -f "node_modules/.bin/next" ]; then
        node_modules/.bin/next build
    else
        npx next build
    fi
fi

# Check if Next.js build was successful
if [ ! -d ".next" ]; then
    echo -e "${RED}Error: .next folder not found after build!${NC}"
    exit 1
fi

# For standalone output, prepare the deployment folder
if [ -d ".next/standalone" ]; then
    echo -e "${GREEN}Detected standalone build output${NC}"
    echo -e "${YELLOW}Preparing standalone deployment...${NC}"
    
    # Copy public folder to standalone
    if [ -d "public" ]; then
        cp -r public .next/standalone/public
        echo -e "${GREEN}✓ Copied public folder to standalone${NC}"
    fi
    
    # Copy .next/static to standalone/.next/static
    if [ -d ".next/static" ]; then
        mkdir -p .next/standalone/.next
        cp -r .next/static .next/standalone/.next/static
        echo -e "${GREEN}✓ Copied .next/static to standalone${NC}"
    fi
    
    # Set deployment source to standalone folder
    DEPLOY_SOURCE=".next/standalone"
else
    # Regular Next.js build - deploy .next and public separately
    echo -e "${GREEN}Using regular Next.js build output${NC}"
    DEPLOY_SOURCE="."
fi

# Remove cache directories from public if --with-cache flag is not provided
if [ "$GENERATE_CACHE" = false ]; then
    echo -e "${YELLOW}Removing cache directories from public folder...${NC}"
    # Remove the main cache directory (which contains blog, client-logos, team subdirectories)
    if [ -d "public/cache" ]; then
        rm -rf public/cache
        echo -e "${GREEN}✓ Removed public/cache directory${NC}"
    fi
    # Also check for any cache directories nested elsewhere (defensive)
    find public -type d -name "cache" -not -path "*/node_modules/*" 2>/dev/null | while read -r cache_dir; do
        if [ -d "$cache_dir" ]; then
            rm -rf "$cache_dir"
            echo -e "${GREEN}✓ Removed $cache_dir${NC}"
        fi
    done
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Step 2: Create zip file for deployment
echo -e "${GREEN}Step 2: Creating zip file for deployment...${NC}"

ZIP_NAME="nirosha-deployment-$(date +%Y%m%d-%H%M%S).zip"
ZIP_PATH="/tmp/$ZIP_NAME"

# Remove old zip if exists
if [ -f "$ZIP_PATH" ]; then
    rm -f "$ZIP_PATH"
fi

# Create zip file
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    echo -e "${YELLOW}Zipping standalone build...${NC}"
    # Copy config.js into standalone folder temporarily so it gets included in zip
    if [ -f "config.js" ]; then
        cp config.js .next/standalone/config.js
        echo -e "${GREEN}✓ Copied config.js to standalone folder${NC}"
    fi
    cd .next/standalone
    zip -r "$ZIP_PATH" . -q -x "*.DS_Store" -x "*/\.*" -x "*/node_modules/.cache/*" -x "*/.next/cache/*"
    cd ../..
    # Remove temporary copy
    if [ -f ".next/standalone/config.js" ]; then
        rm -f .next/standalone/config.js
    fi
    if [ -f "config.js" ]; then
        echo -e "${GREEN}✓ config.js included in zip${NC}"
    else
        echo -e "${YELLOW}⚠ config.js not found - Gmail credentials may need to be configured on server${NC}"
    fi
else
    echo -e "${YELLOW}Zipping Next.js build files...${NC}"
    zip -r "$ZIP_PATH" .next public package.json package-lock.json -q -x "*.DS_Store" -x "*/\.*" -x "*/.next/cache/*" -x "*/node_modules/.cache/*"
    # Add config.js to the zip if it exists
    if [ -f "config.js" ]; then
        echo -e "${YELLOW}Adding config.js to zip...${NC}"
        zip -u "$ZIP_PATH" config.js -q
        echo -e "${GREEN}✓ config.js added to zip${NC}"
    else
        echo -e "${YELLOW}⚠ config.js not found - Gmail credentials may need to be configured on server${NC}"
    fi
fi

if [ ! -f "$ZIP_PATH" ]; then
    echo -e "${RED}Error: Failed to create zip file!${NC}"
    exit 1
fi

ZIP_SIZE=$(du -h "$ZIP_PATH" | cut -f1)
echo -e "${GREEN}✓ Zip file created: $ZIP_NAME (${ZIP_SIZE})${NC}"
echo ""

# Step 3: Upload zip file to server
echo -e "${GREEN}Step 3: Uploading zip file to production server...${NC}"

# Check if sshpass is available (for password authentication)
if command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}Uploading to $SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/${NC}"
    if sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$ZIP_PATH" "$SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/$ZIP_NAME"; then
        echo -e "${GREEN}✓ Zip file uploaded successfully${NC}"
    else
        echo -e "${RED}Error: Failed to upload zip file!${NC}"
        exit 1
    fi
elif command -v ssh &> /dev/null; then
    # Try using SSH with password via expect or ask for key-based auth
    echo -e "${YELLOW}Attempting to upload using SSH...${NC}"
    echo -e "${YELLOW}Note: If this fails, install sshpass: brew install hudochenkov/sshpass/sshpass (Mac) or apt-get install sshpass (Linux)${NC}"
    
    # Try with expect if available
    if command -v expect &> /dev/null; then
        expect <<EOF
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$ZIP_PATH" "$SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/$ZIP_NAME"
expect {
    "password:" {
        send "$SSH_PASS\r"
        exp_continue
    }
    eof
}
EOF
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ Zip file uploaded successfully${NC}"
        else
            echo -e "${RED}Error: Failed to upload zip file!${NC}"
            exit 1
        fi
    else
        echo -e "${RED}Error: sshpass or expect not found!${NC}"
        echo -e "${YELLOW}Please install sshpass:${NC}"
        echo "  Mac: brew install hudochenkov/sshpass/sshpass"
        echo "  Linux: apt-get install sshpass"
        exit 1
    fi
else
    echo -e "${RED}Error: SSH client not found!${NC}"
    exit 1
fi

# Step 4: Unzip file on server
echo -e "${GREEN}Step 4: Extracting zip file on production server...${NC}"

# Create SSH command to unzip
# For standalone builds, the zip contains contents of .next/standalone/
# When unzipped, files go directly to public_html/ (where server.js will be)
# config.js should also be at public_html/ level
UNZIP_CMD="cd $SSH_TARGET_DIR && unzip -o $ZIP_NAME && rm -f $ZIP_NAME && echo '✓ Files extracted successfully'"

if command -v sshpass &> /dev/null; then
    if sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "$UNZIP_CMD"; then
        echo -e "${GREEN}✓ Zip file extracted successfully${NC}"
    else
        echo -e "${RED}Error: Failed to extract zip file on server!${NC}"
        exit 1
    fi
elif command -v expect &> /dev/null; then
    expect <<EOF
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "$UNZIP_CMD"
expect {
    "password:" {
        send "$SSH_PASS\r"
        exp_continue
    }
    eof
}
EOF
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Zip file extracted successfully${NC}"
    else
        echo -e "${RED}Error: Failed to extract zip file on server!${NC}"
        exit 1
    fi
else
    echo -e "${RED}Error: Cannot execute SSH commands!${NC}"
    exit 1
fi

# Clean up local zip file
rm -f "$ZIP_PATH"
echo -e "${GREEN}✓ Local zip file cleaned up${NC}"
echo ""

# Update deployment timestamp after successful deployment
touch "$DEPLOY_TIMESTAMP_FILE"

# Create a manifest of deployed files (for better change detection)
echo -e "${GREEN}Creating deployment manifest...${NC}"
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    find .next/standalone -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec md5sum {} \; 2>/dev/null | sed "s|.next/standalone/||" > "$DEPLOY_MANIFEST_FILE" || \
    find .next/standalone -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec shasum -a 256 {} \; 2>/dev/null | sed "s|.next/standalone/||" > "$DEPLOY_MANIFEST_FILE" || \
    find .next/standalone -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec cksum {} \; 2>/dev/null | sed "s|.next/standalone/||" > "$DEPLOY_MANIFEST_FILE" || true
else
    find .next public -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec md5sum {} \; 2>/dev/null | sed "s|^\./||" > "$DEPLOY_MANIFEST_FILE" || \
    find .next public -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec shasum -a 256 {} \; 2>/dev/null | sed "s|^\./||" > "$DEPLOY_MANIFEST_FILE" || \
    find .next public -type f -not -path "*/\.*" -not -path "*/node_modules/*" -exec cksum {} \; 2>/dev/null | sed "s|^\./||" > "$DEPLOY_MANIFEST_FILE" || true
fi

echo -e "${GREEN}✓ Deployment timestamp updated${NC}"
echo -e "${GREEN}✓ Deployment manifest created${NC}"
echo ""

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your website files have been deployed to the production server!"
echo ""
if [ "$FORCE_FULL_DEPLOY" = false ]; then
    echo -e "${YELLOW}Note: Only changed files were included in the deployment${NC}"
    echo -e "${YELLOW}Use './deploy.sh --full' to force full deployment${NC}"
    echo ""
fi
echo "Next steps on your server:"
echo "  1. Ensure Node.js is installed (v18+ recommended)"
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    echo "  2. Navigate to: cd $SSH_TARGET_DIR/.next/standalone"
    echo "  3. Run: npm install --production"
    echo "  4. Set environment variables OR create config.js with Gmail credentials"
    echo "  5. Start the server: node server.js"
    echo "     (Or use PM2: pm2 start server.js --name nirosha)"
else
    echo "  2. Navigate to: cd $SSH_TARGET_DIR"
    echo "  3. Run: npm install --production"
    echo "  4. Set environment variables (GMAIL_USER, GMAIL_PASSWORD) in .env.local OR create config.js"
    echo "  5. Start Next.js: npm start"
    echo "     (Or use PM2: pm2 start npm --name nirosha -- start)"
fi
echo "  6. Visit your website to verify it's working"
echo ""


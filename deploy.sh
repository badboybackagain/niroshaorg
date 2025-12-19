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
    echo "  The script creates a tar.gz archive and automatically uploads it to the production server."
    echo "  The archive is then automatically extracted in the public_html folder."
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
    SOURCE_CHANGED=$(find src app public lib -type f -newer "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null | head -1)
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

echo -e "${GREEN}Step 1: Ensuring blog image cache exists...${NC}"
# Always ensure blog cache exists BEFORE building (required for blog images)
if [ ! -d "public/cache/blog" ] || [ -z "$(ls -A public/cache/blog 2>/dev/null)" ]; then
    echo -e "${YELLOW}⚠ Blog cache is missing or empty - regenerating...${NC}"
    npm run regenerate-blog-cache
    echo -e "${GREEN}✓ Blog cache regenerated${NC}"
else
    BLOG_CACHE_COUNT=$(find public/cache/blog -type f 2>/dev/null | wc -l | tr -d ' ')
    echo -e "${GREEN}✓ Blog cache exists (${BLOG_CACHE_COUNT} files)${NC}"
fi

# Verify blog images exist
if [ ! -d "public/images/blog" ]; then
    echo -e "${YELLOW}⚠ Blog images directory not found${NC}"
else
    BLOG_IMG_COUNT=$(find public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
    echo -e "${GREEN}✓ Blog source images found (${BLOG_IMG_COUNT} files)${NC}"
fi

echo -e "${GREEN}Step 2: Building Next.js production files...${NC}"
echo -e "${YELLOW}Note: This script deploys Next.js build files (.next folder and public folder).${NC}"
echo -e "${YELLOW}Server files (server/ directory) are NOT deployed and will not be overwritten.${NC}"

# Generate image cache only if --with-cache flag is provided
if [ "$GENERATE_CACHE" = true ]; then
    echo -e "${YELLOW}Generating image cache (this may take a while)...${NC}"
    npm run build
else
    echo -e "${YELLOW}Skipping full image cache generation (use --with-cache to enable)${NC}"
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

# CRITICAL: Ensure blog cache and images exist BEFORE copying to standalone
echo -e "${YELLOW}Pre-deployment verification...${NC}"
if [ ! -d "public/cache/blog" ] || [ -z "$(ls -A public/cache/blog 2>/dev/null)" ]; then
    echo -e "${YELLOW}⚠ Blog cache missing - regenerating...${NC}"
    npm run regenerate-blog-cache
fi

if [ ! -d "public/images/blog" ]; then
    echo -e "${RED}⚠ Blog source images directory missing!${NC}"
fi

BLOG_CACHE_COUNT=$(find public/cache/blog -type f 2>/dev/null | wc -l | tr -d ' ')
BLOG_IMG_COUNT=$(find public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
echo -e "${GREEN}✓ Blog cache: ${BLOG_CACHE_COUNT} files${NC}"
echo -e "${GREEN}✓ Blog images: ${BLOG_IMG_COUNT} files${NC}"

# For standalone output, prepare the deployment folder
if [ -d ".next/standalone" ]; then
    echo -e "${GREEN}Detected standalone build output${NC}"
    echo -e "${YELLOW}Preparing standalone deployment...${NC}"
    
    # Copy public folder to standalone (includes images AND cache)
    if [ -d "public" ]; then
        echo -e "${YELLOW}Copying public folder to standalone (including images and cache)...${NC}"
        # Remove existing public in standalone to ensure clean copy
        if [ -d ".next/standalone/public" ]; then
            rm -rf .next/standalone/public
        fi
        # Copy entire public folder including cache
        cp -r public .next/standalone/public
        echo -e "${GREEN}✓ Copied public folder to standalone${NC}"
        
        # Verify blog images are included
        if [ -d ".next/standalone/public/images/blog" ]; then
            STANDALONE_BLOG_IMG=$(find .next/standalone/public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
            if [ "$STANDALONE_BLOG_IMG" -eq "$BLOG_IMG_COUNT" ]; then
                echo -e "${GREEN}✓ Blog source images verified in standalone (${STANDALONE_BLOG_IMG} files)${NC}"
            else
                echo -e "${YELLOW}⚠ Blog images count mismatch: expected ${BLOG_IMG_COUNT}, found ${STANDALONE_BLOG_IMG}${NC}"
            fi
        else
            echo -e "${RED}⚠ Blog source images missing in standalone!${NC}"
        fi
        
        # Verify all cache folders are included
        if [ -d ".next/standalone/public/cache" ]; then
            CACHE_DIRS=$(find .next/standalone/public/cache -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
            TOTAL_CACHE_FILES=$(find .next/standalone/public/cache -type f 2>/dev/null | wc -l | tr -d ' ')
            echo -e "${GREEN}✓ Cache folders in standalone: ${CACHE_DIRS} directories, ${TOTAL_CACHE_FILES} files${NC}"
            
            # Verify specific cache folders
            if [ -d ".next/standalone/public/cache/blog" ]; then
                STANDALONE_BLOG_CACHE=$(find .next/standalone/public/cache/blog -type f 2>/dev/null | wc -l | tr -d ' ')
                echo -e "${GREEN}  - Blog cache: ${STANDALONE_BLOG_CACHE} files${NC}"
            fi
            if [ -d ".next/standalone/public/cache/client-logos" ]; then
                STANDALONE_CLIENT_LOGOS=$(find .next/standalone/public/cache/client-logos -type f 2>/dev/null | wc -l | tr -d ' ')
                echo -e "${GREEN}  - Client logos cache: ${STANDALONE_CLIENT_LOGOS} files${NC}"
            fi
            if [ -d ".next/standalone/public/cache/team" ]; then
                STANDALONE_TEAM_CACHE=$(find .next/standalone/public/cache/team -type f 2>/dev/null | wc -l | tr -d ' ')
                echo -e "${GREEN}  - Team cache: ${STANDALONE_TEAM_CACHE} files${NC}"
            fi
        else
            echo -e "${RED}⚠ Cache directory missing in standalone!${NC}"
        fi
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


echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Step 2: Create tar.gz archive for deployment
echo -e "${GREEN}Step 2: Creating tar.gz archive for deployment...${NC}"

ARCHIVE_NAME="nirosha-deployment-$(date +%Y%m%d-%H%M%S).tar.gz"
ARCHIVE_PATH="/tmp/$ARCHIVE_NAME"

# Remove old archive if exists
if [ -f "$ARCHIVE_PATH" ]; then
    rm -f "$ARCHIVE_PATH"
fi

# Create tar.gz archive
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    echo -e "${YELLOW}Creating tar.gz archive from standalone build...${NC}"
    # Copy .env file into standalone folder temporarily so it gets included in archive
    if [ -f ".env" ]; then
        cp .env .next/standalone/.env
        echo -e "${GREEN}✓ Copied .env to standalone folder${NC}"
    elif [ -f "config.js" ]; then
        # Fallback: if .env doesn't exist, try config.js
        cp config.js .next/standalone/config.js
        echo -e "${GREEN}✓ Copied config.js to standalone folder${NC}"
    fi
    # Verify files exist before zipping
    echo -e "${YELLOW}Verifying files before zipping...${NC}"
    if [ -d ".next/standalone/public/images/blog" ]; then
        STANDALONE_IMG_COUNT=$(find .next/standalone/public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
        echo -e "${GREEN}✓ Blog images in standalone: ${STANDALONE_IMG_COUNT} files${NC}"
    else
        echo -e "${RED}⚠ Blog images directory missing in standalone!${NC}"
    fi
    
    # Verify all cache folders are included
    if [ -d ".next/standalone/public/cache" ]; then
        CACHE_DIRS=$(find .next/standalone/public/cache -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
        TOTAL_CACHE_FILES=$(find .next/standalone/public/cache -type f 2>/dev/null | wc -l | tr -d ' ')
        echo -e "${GREEN}✓ All cache folders in standalone: ${CACHE_DIRS} directories, ${TOTAL_CACHE_FILES} files${NC}"
    else
        echo -e "${RED}⚠ Cache directory missing in standalone!${NC}"
    fi
    
    cd .next/standalone
    echo -e "${YELLOW}Creating tar.gz archive from standalone directory...${NC}"
    # Create tar.gz - IMPORTANT: Include ALL public files (images, ALL cache folders, etc.)
    # Only exclude system files and build cache, NOT public content or cache
    # Suppress macOS extended attribute warnings and exclude AppleDouble files
    if tar -czf "$ARCHIVE_PATH" \
        --exclude="*.DS_Store" \
        --exclude="._*" \
        --exclude="*/._*" \
        --exclude="*/node_modules/.cache/*" \
        --exclude="*/.next/cache/*" \
        --exclude="*/.git/*" \
        --no-xattrs \
        . 2>&1 | grep -v "Ignoring unknown extended header" | tee /tmp/tar-output.log; then
        echo -e "${GREEN}✓ Tar.gz archive created successfully${NC}"
    else
        echo -e "${RED}⚠ Warning: Archive creation had errors, checking file...${NC}"
        cat /tmp/tar-output.log | tail -20
    fi
    cd ../..
    
    # Verify archive integrity
    echo -e "${YELLOW}Verifying archive integrity...${NC}"
    if tar -tzf "$ARCHIVE_PATH" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Archive integrity verified${NC}"
    else
        echo -e "${RED}✗ ERROR: Archive is corrupted!${NC}"
        echo -e "${YELLOW}Attempting to test archive...${NC}"
        tar -tzf "$ARCHIVE_PATH" 2>&1 | head -30
        echo -e "${RED}Please check the archive creation process${NC}"
    fi
    
    # Double-check: Verify the archive actually contains the files
    echo -e "${YELLOW}Double-checking archive contents...${NC}"
    if ! tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep -q "public/images/blog.*\.png"; then
        echo -e "${RED}⚠ WARNING: Blog images may not be in archive!${NC}"
    fi
    if ! tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep -q "public/cache"; then
        echo -e "${YELLOW}⚠ WARNING: Cache folders may not be in archive!${NC}"
    fi
    
    # Verify archive contains the files
    echo -e "${YELLOW}Verifying archive contents...${NC}"
    ARCHIVE_BLOG_IMG=$(tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep "public/images/blog" | grep -E "\.(png|jpg|webp)$" | wc -l | tr -d ' ')
    ARCHIVE_BLOG_CACHE=$(tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep "public/cache/blog" | wc -l | tr -d ' ')
    ARCHIVE_CLIENT_LOGOS=$(tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep "public/cache/client-logos" | wc -l | tr -d ' ')
    ARCHIVE_TEAM_CACHE=$(tar -tzf "$ARCHIVE_PATH" 2>/dev/null | grep "public/cache/team" | wc -l | tr -d ' ')
    echo -e "${GREEN}✓ Archive contains ${ARCHIVE_BLOG_IMG} blog images${NC}"
    echo -e "${GREEN}✓ Archive contains ${ARCHIVE_BLOG_CACHE} blog cache files${NC}"
    echo -e "${GREEN}✓ Archive contains ${ARCHIVE_CLIENT_LOGOS} client-logos cache files${NC}"
    echo -e "${GREEN}✓ Archive contains ${ARCHIVE_TEAM_CACHE} team cache files${NC}"
    
    if [ "$ARCHIVE_BLOG_IMG" -lt 10 ]; then
        echo -e "${RED}⚠ WARNING: Archive seems to be missing blog images!${NC}"
        echo -e "${YELLOW}Expected: ~13 blog images${NC}"
        echo -e "${YELLOW}Found: ${ARCHIVE_BLOG_IMG} images${NC}"
    fi
    
    if [ "$ARCHIVE_BLOG_CACHE" -lt 100 ]; then
        echo -e "${YELLOW}⚠ WARNING: Archive seems to be missing blog cache files!${NC}"
        echo -e "${YELLOW}Expected: ~156 cache files${NC}"
        echo -e "${YELLOW}Found: ${ARCHIVE_BLOG_CACHE} cache files${NC}"
    fi
    # Remove temporary copy
    if [ -f ".next/standalone/.env" ]; then
        rm -f .next/standalone/.env
    fi
    if [ -f ".next/standalone/config.js" ]; then
        rm -f .next/standalone/config.js
    fi
    if [ -f ".env" ]; then
        echo -e "${GREEN}✓ .env file included in zip${NC}"
    elif [ -f "config.js" ]; then
        echo -e "${GREEN}✓ config.js included in zip${NC}"
    else
        echo -e "${YELLOW}⚠ Neither .env nor config.js found - Gmail credentials may need to be configured on server${NC}"
    fi
else
    echo -e "${YELLOW}Creating tar.gz archive from Next.js build files...${NC}"
    # Verify public/images/blog and all cache folders exist before archiving
    if [ -d "public/images/blog" ]; then
        BLOG_IMG_COUNT=$(find public/images/blog -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
        echo -e "${GREEN}✓ Blog images to include: ${BLOG_IMG_COUNT} files${NC}"
    fi
    if [ -d "public/cache" ]; then
        CACHE_DIRS=$(find public/cache -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l | tr -d ' ')
        TOTAL_CACHE_FILES=$(find public/cache -type f 2>/dev/null | wc -l | tr -d ' ')
        echo -e "${GREEN}✓ All cache folders to include: ${CACHE_DIRS} directories, ${TOTAL_CACHE_FILES} files${NC}"
        # Show breakdown by folder
        for cache_dir in public/cache/*/; do
            if [ -d "$cache_dir" ]; then
                dir_name=$(basename "$cache_dir")
                file_count=$(find "$cache_dir" -type f 2>/dev/null | wc -l | tr -d ' ')
                echo -e "${GREEN}  - ${dir_name}: ${file_count} files${NC}"
            fi
        done
    fi
    # Create tar.gz - INCLUDING all cache folders (blog, client-logos, team, etc.)
    # Only exclude build cache, NOT public cache folders
    # Suppress macOS extended attribute warnings and exclude AppleDouble files
    if tar -czf "$ARCHIVE_PATH" \
        --exclude="*.DS_Store" \
        --exclude="._*" \
        --exclude="*/._*" \
        --exclude="*/.next/cache/*" \
        --exclude="*/node_modules/.cache/*" \
        --exclude="*/.git/*" \
        --no-xattrs \
        .next public package.json package-lock.json 2>&1 | grep -v "Ignoring unknown extended header" | tee /tmp/tar-output.log; then
        echo -e "${GREEN}✓ Tar.gz archive created successfully${NC}"
    else
        echo -e "${RED}⚠ Warning: Archive creation had errors${NC}"
        cat /tmp/tar-output.log | tail -20
    fi
    
    # Verify archive integrity
    echo -e "${YELLOW}Verifying archive integrity...${NC}"
    if tar -tzf "$ARCHIVE_PATH" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Archive integrity verified${NC}"
    else
        echo -e "${RED}✗ ERROR: Archive is corrupted!${NC}"
        tar -tzf "$ARCHIVE_PATH" 2>&1 | head -30
    fi
    # Add .env file to the archive if it exists (preferred)
    if [ -f ".env" ]; then
        echo -e "${YELLOW}Adding .env to archive...${NC}"
        tar -czf "$ARCHIVE_PATH" --append .env 2>/dev/null || tar -czf "$ARCHIVE_PATH" .env
        echo -e "${GREEN}✓ .env file added to archive${NC}"
    elif [ -f "config.js" ]; then
        # Fallback: add config.js if .env doesn't exist
        echo -e "${YELLOW}Adding config.js to archive...${NC}"
        tar -czf "$ARCHIVE_PATH" --append config.js 2>/dev/null || tar -czf "$ARCHIVE_PATH" config.js
        echo -e "${GREEN}✓ config.js added to archive${NC}"
    else
        echo -e "${YELLOW}⚠ Neither .env nor config.js found - Gmail credentials may need to be configured on server${NC}"
    fi
fi

if [ ! -f "$ARCHIVE_PATH" ]; then
    echo -e "${RED}Error: Failed to create archive!${NC}"
    exit 1
fi

ARCHIVE_SIZE=$(du -h "$ARCHIVE_PATH" | cut -f1)
echo -e "${GREEN}✓ Archive created: $ARCHIVE_NAME (${ARCHIVE_SIZE})${NC}"
echo ""

# Step 3: Upload archive to server
echo -e "${GREEN}Step 3: Uploading archive to production server...${NC}"

# Check if sshpass is available (for password authentication)
if command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}Uploading to $SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/${NC}"
    if sshpass -p "$SSH_PASS" scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$ARCHIVE_PATH" "$SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/$ARCHIVE_NAME"; then
        echo -e "${GREEN}✓ Archive uploaded successfully${NC}"
        # Verify upload completed by checking file size on server
        echo -e "${YELLOW}Verifying upload integrity...${NC}"
        LOCAL_SIZE=$(stat -f%z "$ARCHIVE_PATH" 2>/dev/null || stat -c%s "$ARCHIVE_PATH" 2>/dev/null)
        REMOTE_SIZE=$(sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "stat -c%s $SSH_TARGET_DIR/$ARCHIVE_NAME 2>/dev/null || stat -f%z $SSH_TARGET_DIR/$ARCHIVE_NAME 2>/dev/null || echo 0")
        if [ "$LOCAL_SIZE" = "$REMOTE_SIZE" ] && [ "$LOCAL_SIZE" != "0" ]; then
            echo -e "${GREEN}✓ Upload verified: ${LOCAL_SIZE} bytes${NC}"
        else
            echo -e "${YELLOW}⚠ Size mismatch: local=${LOCAL_SIZE}, remote=${REMOTE_SIZE}${NC}"
            echo -e "${YELLOW}Continuing anyway...${NC}"
        fi
    else
        echo -e "${RED}Error: Failed to upload archive!${NC}"
        exit 1
    fi
elif command -v ssh &> /dev/null; then
    # Try using SSH with password via expect or ask for key-based auth
    echo -e "${YELLOW}Attempting to upload using SSH...${NC}"
    echo -e "${YELLOW}Note: If this fails, install sshpass: brew install hudochenkov/sshpass/sshpass (Mac) or apt-get install sshpass (Linux)${NC}"
    
    # Try with expect if available
    if command -v expect &> /dev/null; then
        expect <<EOF
set timeout 600
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$ARCHIVE_PATH" "$SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/$ARCHIVE_NAME"
expect {
    -re "(password:|Password:)" {
        send "$SSH_PASS\r"
        exp_continue
    }
    timeout {
        puts "Upload timed out after 10 minutes"
        exit 1
    }
    eof {
        # Upload completed
    }
}
set wait_result [wait]
if {[lindex \$wait_result 3] != 0} {
    exit 1
}
EOF
        UPLOAD_EXIT_CODE=$?
        if [ $UPLOAD_EXIT_CODE -eq 0 ]; then
            echo -e "${GREEN}✓ Archive uploaded successfully${NC}"
            # Verify upload
            echo -e "${YELLOW}Verifying upload integrity...${NC}"
            LOCAL_SIZE=$(stat -f%z "$ARCHIVE_PATH" 2>/dev/null || stat -c%s "$ARCHIVE_PATH" 2>/dev/null)
            REMOTE_SIZE=$(expect <<INNER_EOF
set timeout 30
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "stat -c%s $SSH_TARGET_DIR/$ARCHIVE_NAME 2>/dev/null || stat -f%z $SSH_TARGET_DIR/$ARCHIVE_NAME 2>/dev/null || echo 0"
expect {
    -re "(password:|Password:)" {
        send "$SSH_PASS\r"
        exp_continue
    }
    timeout {
        puts "0"
        exit 1
    }
    eof
}
INNER_EOF
)
            if [ "$LOCAL_SIZE" = "$REMOTE_SIZE" ] && [ "$LOCAL_SIZE" != "0" ]; then
                echo -e "${GREEN}✓ Upload verified: ${LOCAL_SIZE} bytes${NC}"
            else
                echo -e "${YELLOW}⚠ Size mismatch: local=${LOCAL_SIZE}, remote=${REMOTE_SIZE}${NC}"
                echo -e "${YELLOW}Continuing anyway...${NC}"
            fi
        else
            echo -e "${RED}Error: Failed to upload archive!${NC}"
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

# Step 4: Extract archive on server
echo -e "${GREEN}Step 4: Extracting archive on production server...${NC}"

# Create SSH command to extract tar.gz archive
# For standalone builds, the archive contains contents of .next/standalone/
# When extracted, files go directly to public_html/ (where server.js will be)
# Archive includes blog cache, so no server-side generation needed
# Create a simpler command that avoids complex shell syntax issues
# Simplify verification - just check directories exist, let script handle details
# Create command that will be passed through bash -c to avoid expect parsing issues
# Use test instead of [ to avoid expect parsing issues
# Simplified extraction command to avoid hanging issues
# Use double quotes for echo messages to avoid single quote escaping issues
EXTRACT_CMD_RAW="cd $SSH_TARGET_DIR && echo Step 1: Cleaning AppleDouble files && find . -name '._*' -type f -delete 2>/dev/null && echo Step 2: Verifying archive && test -f $ARCHIVE_NAME && tar -tzf $ARCHIVE_NAME > /dev/null 2>&1 && echo Step 3: Extracting archive && tar -xzf $ARCHIVE_NAME 2>&1 | grep -v 'Ignoring unknown extended header' && echo Step 4: Cleaning AppleDouble files again && find . -name '._*' -type f -delete 2>/dev/null && echo Step 5: Verifying deployment && test -d public/images/blog && echo Blog images: OK || echo Blog images: MISSING && test -d public/cache && CACHE_COUNT=\$(find public/cache -mindepth 1 -maxdepth 1 -type d 2>/dev/null | wc -l) && echo Cache folders: \$CACHE_COUNT || echo Cache: MISSING && echo Step 6: Removing archive && rm -f $ARCHIVE_NAME && echo Deployment complete"

if command -v sshpass &> /dev/null; then
    # Write extraction script to server to avoid quote escaping issues
    echo -e "${YELLOW}Creating extraction script on server...${NC}"
    sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "cat > /tmp/extract-deploy.sh <<'DEPLOY_SCRIPT'
cd $SSH_TARGET_DIR
echo Step 1: Cleaning AppleDouble files
find . -name '._*' -type f -delete 2>/dev/null
echo Step 2: Verifying archive
test -f $ARCHIVE_NAME && tar -tzf $ARCHIVE_NAME > /dev/null 2>&1
echo Step 3: Extracting archive
tar -xzf $ARCHIVE_NAME 2>&1 | grep -v 'Ignoring unknown extended header'
echo Step 4: Cleaning AppleDouble files again
find . -name '._*' -type f -delete 2>/dev/null
echo Step 5: Verifying deployment
test -d public/images/blog && echo Blog images: OK || echo Blog images: MISSING
test -d public/cache && echo Cache: OK || echo Cache: MISSING
echo Step 6: Removing archive
rm -f $ARCHIVE_NAME
echo Deployment complete
DEPLOY_SCRIPT
" > /dev/null 2>&1
    
    echo -e "${YELLOW}Extracting archive (this may take a few minutes)...${NC}"
    if sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ServerAliveInterval=60 "$SSH_USER@$SSH_HOST" "bash /tmp/extract-deploy.sh && rm -f /tmp/extract-deploy.sh"; then
        echo -e "${GREEN}✓ Archive extracted successfully${NC}"
    else
        echo -e "${RED}Error: Failed to extract archive on server!${NC}"
        exit 1
    fi
elif command -v expect &> /dev/null; then
    # Use a simpler approach - write command to a temp script on server
    # This avoids all quote escaping issues
    expect <<EOF
set timeout 900
# First, write the extraction script to server
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "cat > /tmp/extract-deploy.sh <<'DEPLOY_SCRIPT'
cd $SSH_TARGET_DIR
echo Step 1: Cleaning AppleDouble files
find . -name '._*' -type f -delete 2>/dev/null
echo Step 2: Verifying archive
test -f $ARCHIVE_NAME && tar -tzf $ARCHIVE_NAME > /dev/null 2>&1
echo Step 3: Extracting archive
tar -xzf $ARCHIVE_NAME 2>&1 | grep -v 'Ignoring unknown extended header'
echo Step 4: Cleaning AppleDouble files again
find . -name '._*' -type f -delete 2>/dev/null
echo Step 5: Verifying deployment
test -d public/images/blog && echo Blog images: OK || echo Blog images: MISSING
test -d public/cache && echo Cache: OK || echo Cache: MISSING
echo Step 6: Removing archive
rm -f $ARCHIVE_NAME
echo Deployment complete
DEPLOY_SCRIPT
"
expect {
    -re "(password:|Password:)" {
        send "$SSH_PASS\r"
        exp_continue
    }
    eof
}
wait

# Now execute the script
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$SSH_USER@$SSH_HOST" "bash /tmp/extract-deploy.sh && rm -f /tmp/extract-deploy.sh"
expect {
    -re "(password:|Password:)" {
        send "$SSH_PASS\r"
        exp_continue
    }
    timeout {
        puts "Command timed out after 15 minutes"
        exit 1
    }
    eof {
        # Command completed
    }
}
set wait_result [wait]
if {[lindex \$wait_result 3] != 0} {
    exit 1
}
EOF
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Archive extracted successfully${NC}"
    else
        echo -e "${RED}Error: Failed to extract archive on server!${NC}"
        exit 1
    fi
else
    echo -e "${RED}Error: Cannot execute SSH commands!${NC}"
    exit 1
fi

# Clean up local archive file
rm -f "$ARCHIVE_PATH"
echo -e "${GREEN}✓ Local archive file cleaned up${NC}"
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


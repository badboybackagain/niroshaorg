#!/bin/bash

# Deployment Script for Team Nirosha Website
# This script builds the production files and uploads them to your FTP server

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
    echo "  --full, -f    Force full deployment (upload all files)"
    echo "  --help, -h    Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  PARALLEL_TRANSFERS  Number of files to transfer in parallel (default: 10)"
    echo "                      Example: export PARALLEL_TRANSFERS=20"
    echo ""
    echo "By default, the script performs incremental deployment,"
    echo "uploading only files that have changed since the last deployment."
    echo "Files are transferred in parallel (10 at a time) for faster uploads."
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
                    eval "export $line"
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
FORCE_FULL_DEPLOY=false

# Check for --full flag to force full deployment
if [[ "$1" == "--full" ]] || [[ "$1" == "-f" ]]; then
    FORCE_FULL_DEPLOY=true
    echo -e "${YELLOW}Full deployment mode: uploading all files${NC}"
fi

echo -e "${GREEN}Step 1: Building production files...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: dist folder not found after build!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Incremental deployment: Check for changed files
CHANGED_FILES_COUNT=0
if [ "$FORCE_FULL_DEPLOY" = false ] && [ -f "$DEPLOY_TIMESTAMP_FILE" ]; then
    echo -e "${YELLOW}Checking for changed files since last deployment...${NC}"
    # Get last deployment time from file modification time
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        LAST_DEPLOY_TIME=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M:%S" "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null || echo "unknown")
    else
        # Linux
        LAST_DEPLOY_TIME=$(stat -c "%y" "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null | cut -d'.' -f1 || echo "unknown")
    fi
    echo -e "${YELLOW}Last deployment: $LAST_DEPLOY_TIME${NC}"
    
    # Find files modified after last deployment (using file modification time comparison)
    CHANGED_FILES=$(find dist -type f -newer "$DEPLOY_TIMESTAMP_FILE" 2>/dev/null)
    CHANGED_FILES_COUNT=$(echo "$CHANGED_FILES" | grep -v '^$' | wc -l | tr -d ' ' || echo "0")
    
    if [ "$CHANGED_FILES_COUNT" -gt 0 ]; then
        echo -e "${GREEN}Found $CHANGED_FILES_COUNT changed file(s) to upload${NC}"
    else
        echo -e "${YELLOW}No files changed since last deployment. Use --full to force upload.${NC}"
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

# Check if lftp is installed (best for FTP)
if command -v lftp &> /dev/null; then
    echo -e "${GREEN}Step 2: Uploading files to server using lftp...${NC}"
    
    # Prepare mirror flags based on deployment type
    # Exclude .DS_Store files and traffic-reports folder on server
    # The exclusion prevents both upload and deletion of these paths
    MIRROR_FLAGS="-R -v --exclude-glob .DS_Store --exclude-glob traffic-reports/**"
    
    # Skip logo and image files if they already exist on server (to avoid re-uploading large files)
    echo -e "${YELLOW}Note: Logo and image files will be skipped if they already exist on server${NC}"
    
    if [ "$FORCE_FULL_DEPLOY" = true ]; then
        echo -e "${YELLOW}Mode: Full deployment (all files)${NC}"
        echo -e "${YELLOW}Note: traffic-reports folder will be preserved on server${NC}"
        MIRROR_FLAGS="$MIRROR_FLAGS --delete"
        # For full deployment, add --only-newer for images/logos to skip existing ones
        # We'll do this by excluding them from main upload and uploading separately
        MIRROR_FLAGS="$MIRROR_FLAGS --exclude-glob logo*.png --exclude-glob logo*.webp --exclude-glob logo*.jpg --exclude-glob logo*.jpeg --exclude-glob logo*.svg"
    else
        echo -e "${YELLOW}Mode: Incremental deployment (changed files only)${NC}"
        # Use --only-newer to only upload files newer than remote
        # This compares local vs remote timestamps and uploads:
        # - Files that are newer locally than remotely
        # - New files that don't exist remotely
        MIRROR_FLAGS="$MIRROR_FLAGS --only-newer"
        # Also exclude logos/images from main upload - we'll handle separately
        MIRROR_FLAGS="$MIRROR_FLAGS --exclude-glob logo*.png --exclude-glob logo*.webp --exclude-glob logo*.jpg --exclude-glob logo*.jpeg --exclude-glob logo*.svg"
    fi
    
    # Prepare flags for logo and image files (always use --only-newer to skip if they exist)
    # Note: lftp doesn't support --include-glob well, so we'll use a workaround
    IMAGE_MIRROR_FLAGS="-R -v --only-newer"
    
    if [ "$FTP_TYPE" = "sftp" ]; then
        # SFTP upload using lftp with parallel transfers
        echo -e "${YELLOW}Using parallel transfers ($PARALLEL_TRANSFERS files at once) for faster upload...${NC}"
        if [ "$USE_CURRENT_DIR" = true ]; then
            echo -e "${YELLOW}Target directory: Current directory (FTP root)${NC}"
        else
            echo -e "${YELLOW}Target directory: $FTP_PATH${NC}"
            # First, verify the directory exists
            echo -e "${YELLOW}Verifying target directory exists...${NC}"
            if ! lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<DIRCHECKEOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
cd $FTP_PATH
bye
DIRCHECKEOF
            then
                echo ""
                echo -e "${RED}==========================================${NC}"
                echo -e "${RED}ERROR: Directory '$FTP_PATH' does not exist on the server${NC}"
                echo -e "${RED}==========================================${NC}"
                echo ""
                echo -e "${YELLOW}Checking server directory structure...${NC}"
                echo ""
                
                # Diagnostic: Show current directory and contents
                echo -e "${YELLOW}Running diagnostics...${NC}"
                lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<DIAGEOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
echo ""
echo "=== Current directory after login ==="
pwd
echo ""
echo "=== Contents of current directory ==="
ls -la
echo ""
echo "=== Common website directories to check ==="
echo "Look for directories like: public_html, www, htdocs, html, or your domain name"
echo ""
echo "If your FTP root is already the website root, use FTP_PATH='/' or FTP_PATH='.'"
bye
DIAGEOF
                
                echo ""
                echo -e "${YELLOW}Please verify the FTP_PATH in your configuration.${NC}"
                echo -e "${YELLOW}Current FTP_PATH: $FTP_PATH${NC}"
                echo -e "${YELLOW}Update your .env.deploy file or environment variable with the correct path.${NC}"
                exit 1
            fi
        fi
        
        # Try to upload and capture exit status
        # First upload all files except logos/images
        if [ "$USE_CURRENT_DIR" = true ]; then
            # No need to cd, we're already in the right directory
            UPLOAD_SCRIPT="set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $MIRROR_FLAGS dist/ .
bye"
        else
            # Need to cd to the target directory
            UPLOAD_SCRIPT="set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $MIRROR_FLAGS dist/ .
bye"
        fi
        
        echo -e "${GREEN}Uploading files (excluding logos and images)...${NC}"
        if ! lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<EOF
$UPLOAD_SCRIPT
EOF
        then
            echo ""
            echo -e "${RED}==========================================${NC}"
            echo -e "${RED}ERROR: Failed to upload files${NC}"
            echo -e "${RED}==========================================${NC}"
            exit 1
        fi
        
        # Now upload logo and image files separately (only if they don't exist or are newer)
        echo -e "${GREEN}Uploading logo and image files (skipping if already exist)...${NC}"
        
        # Upload logo files from dist root (only if newer or missing)
        if [ -d "dist" ] && find dist -maxdepth 1 -type f \( -name "logo*.png" -o -name "logo*.webp" -o -name "logo*.jpg" -o -name "logo*.jpeg" -o -name "logo*.svg" \) | grep -q .; then
            if [ "$USE_CURRENT_DIR" = true ]; then
                lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<EOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $IMAGE_MIRROR_FLAGS --include-glob "logo*.png" --include-glob "logo*.webp" --include-glob "logo*.jpg" --include-glob "logo*.jpeg" --include-glob "logo*.svg" dist/ .
bye
EOF
            else
                lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<EOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $IMAGE_MIRROR_FLAGS --include-glob "logo*.png" --include-glob "logo*.webp" --include-glob "logo*.jpg" --include-glob "logo*.jpeg" --include-glob "logo*.svg" dist/ .
bye
EOF
            fi
        fi
        
        # Upload image files from dist/images (only if newer or missing)
        if [ -d "dist/images" ]; then
            if [ "$USE_CURRENT_DIR" = true ]; then
                lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<EOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $IMAGE_MIRROR_FLAGS dist/images/ images/
bye
EOF
            else
                lftp -u "$FTP_USER,$FTP_PASS" sftp://$FTP_HOST:$FTP_PORT <<EOF
set sftp:auto-confirm yes
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $IMAGE_MIRROR_FLAGS dist/images/ images/
bye
EOF
            fi
        fi
    else
        # FTP upload using lftp (with FTPS support) with parallel transfers
        echo -e "${YELLOW}Using parallel transfers ($PARALLEL_TRANSFERS files at once) for faster upload...${NC}"
        if [ "$USE_CURRENT_DIR" = true ]; then
            echo -e "${YELLOW}Target directory: Current directory (FTP root)${NC}"
        else
            echo -e "${YELLOW}Target directory: $FTP_PATH${NC}"
            # First, verify the directory exists
            echo -e "${YELLOW}Verifying target directory exists...${NC}"
            if ! lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<DIRCHECKEOF
set ssl:verify-certificate no
cd $FTP_PATH
bye
DIRCHECKEOF
            then
                echo ""
                echo -e "${RED}==========================================${NC}"
                echo -e "${RED}ERROR: Directory '$FTP_PATH' does not exist on the server${NC}"
                echo -e "${RED}==========================================${NC}"
                echo ""
                echo -e "${YELLOW}Checking server directory structure...${NC}"
                echo ""
                
                # Diagnostic: Show current directory and contents
                echo -e "${YELLOW}Running diagnostics...${NC}"
                lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<DIAGEOF
set ssl:verify-certificate no
echo ""
echo "=== Current directory after login ==="
pwd
echo ""
echo "=== Contents of current directory ==="
ls -la
echo ""
echo "=== Common website directories to check ==="
echo "Look for directories like: public_html, www, htdocs, html, or your domain name"
echo ""
echo "If your FTP root is already the website root, use FTP_PATH='/' or FTP_PATH='.'"
bye
DIAGEOF
                
                echo ""
                echo -e "${YELLOW}Please verify the FTP_PATH in your configuration.${NC}"
                echo -e "${YELLOW}Current FTP_PATH: $FTP_PATH${NC}"
                echo -e "${YELLOW}Update your .env.deploy file or environment variable with the correct path.${NC}"
                exit 1
            fi
        fi
        
        # Try to upload and capture exit status
        # First upload all files except logos/images
        if [ "$USE_CURRENT_DIR" = true ]; then
            # No need to cd, we're already in the right directory
            UPLOAD_SCRIPT="set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $MIRROR_FLAGS dist/ .
bye"
        else
            # Need to cd to the target directory
            UPLOAD_SCRIPT="set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $MIRROR_FLAGS dist/ .
bye"
        fi
        
        echo -e "${GREEN}Uploading files (excluding logos and images)...${NC}"
        if ! lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<EOF
$UPLOAD_SCRIPT
EOF
        then
            echo ""
            echo -e "${RED}==========================================${NC}"
            echo -e "${RED}ERROR: Failed to upload files${NC}"
            echo -e "${RED}==========================================${NC}"
            exit 1
        fi
        
        # Now upload logo and image files separately (only if they don't exist or are newer)
        echo -e "${GREEN}Uploading logo and image files (skipping if already exist)...${NC}"
        
        # Upload logo files from dist root (only if newer or missing)
        if [ -d "dist" ] && find dist -maxdepth 1 -type f \( -name "logo*.png" -o -name "logo*.webp" -o -name "logo*.jpg" -o -name "logo*.jpeg" -o -name "logo*.svg" \) | grep -q .; then
            if [ "$USE_CURRENT_DIR" = true ]; then
                lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<EOF
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $IMAGE_MIRROR_FLAGS --include-glob "logo*.png" --include-glob "logo*.webp" --include-glob "logo*.jpg" --include-glob "logo*.jpeg" --include-glob "logo*.svg" dist/ .
bye
EOF
            else
                lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<EOF
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $IMAGE_MIRROR_FLAGS --include-glob "logo*.png" --include-glob "logo*.webp" --include-glob "logo*.jpg" --include-glob "logo*.jpeg" --include-glob "logo*.svg" dist/ .
bye
EOF
            fi
        fi
        
        # Upload image files from dist/images (only if newer or missing)
        if [ -d "dist/images" ]; then
            if [ "$USE_CURRENT_DIR" = true ]; then
                lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<EOF
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
mirror $IMAGE_MIRROR_FLAGS dist/images/ images/
bye
EOF
            else
                lftp -u "$FTP_USER,$FTP_PASS" ftp://$FTP_HOST:$FTP_PORT <<EOF
set ssl:verify-certificate no
set cmd:parallel $PARALLEL_TRANSFERS
cd $FTP_PATH
mirror $IMAGE_MIRROR_FLAGS dist/images/ images/
bye
EOF
            fi
        fi
    fi
    
    # Update deployment timestamp after successful upload
    # Touch the file to update its modification time (used for incremental deployment)
    touch "$DEPLOY_TIMESTAMP_FILE"
    echo -e "${GREEN}✓ Upload completed successfully${NC}"
    echo -e "${GREEN}✓ Deployment timestamp updated${NC}"
    
elif command -v curl &> /dev/null; then
    echo -e "${YELLOW}Step 2: Uploading files to server using curl...${NC}"
    echo -e "${YELLOW}Note: curl has limited FTP support. Consider installing lftp for better results.${NC}"
    
    # Create a temporary file with FTP commands
    FTP_SCRIPT=$(mktemp)
    cat > "$FTP_SCRIPT" <<EOF
cd $FTP_PATH
binary
prompt
mput dist/*
quit
EOF
    
    curl -u "$FTP_USER:$FTP_PASS" --ftp-ssl -T "dist/index.html" "ftp://$FTP_HOST:$FTP_PORT$FTP_PATH/"
    
    echo -e "${YELLOW}Note: curl upload is limited. Please use lftp or upload manually.${NC}"
    rm "$FTP_SCRIPT"
    
elif command -v ncftp &> /dev/null; then
    echo -e "${GREEN}Step 2: Uploading files to server using ncftp...${NC}"
    
    ncftp -u "$FTP_USER" -p "$FTP_PASS" "$FTP_HOST" <<EOF
cd $FTP_PATH
put -R dist/*
quit
EOF
    
    echo -e "${GREEN}✓ Upload completed successfully${NC}"
    
else
    echo -e "${RED}Error: No FTP client found!${NC}"
    echo ""
    echo "Please install one of the following:"
    echo "  - lftp (recommended): brew install lftp (Mac) or apt-get install lftp (Linux)"
    echo "  - ncftp: brew install ncftp (Mac) or apt-get install ncftp (Linux)"
    echo ""
    echo "Or upload manually:"
    echo "  All files in the 'dist' folder need to be uploaded to: $FTP_PATH"
    exit 1
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your website should now be live!"
echo ""
if [ "$FORCE_FULL_DEPLOY" = false ]; then
    echo -e "${YELLOW}Note: Only changed files were uploaded (incremental deployment)${NC}"
    echo -e "${YELLOW}Use './deploy.sh --full' to upload all files${NC}"
    echo ""
fi
echo "Next steps:"
echo "  1. Visit your website to verify it's working"
echo "  2. Test navigation (click through pages)"
echo "  3. Test direct URLs (e.g., /services, /about)"
echo "  4. Check mobile responsiveness"
echo ""


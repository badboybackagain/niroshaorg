#!/bin/bash

# Next-Gen Deployment Script for Team Nirosha Website (Next.js)
# This script performs incremental deployment, uploading only changed or new files
# 
# Requirements on server:
# - Node.js 18+ installed
# - npm or yarn installed
# - rsync available on both local and server
# - Environment variables (GMAIL_USER, GMAIL_PASSWORD) must be set on server

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Team Nirosha - Next-Gen Deployment Script${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Show usage if --help is requested
if [[ "$1" == "--help" ]] || [[ "$1" == "-h" ]]; then
    echo "Usage: ./deploynextgen.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --images           Include cache versions of images in deployment"
    echo "  --noorigimage      Exclude original images folder (public/images)"
    echo "  --incremental      Only upload changed or new files (default behavior)"
    echo "  --full             Force full deployment (upload all files)"
    echo "  --help, -h         Show this help message"
    echo ""
    echo "Example:"
    echo "  ./deploynextgen.sh --images --noorigimage --incremental"
    echo "    - Uploads only changed/new files"
    echo "    - Includes cache images"
    echo "    - Excludes original images"
    echo ""
    echo "Environment Variables:"
    echo "  SSH_HOST           Server hostname or IP (default: from .env.deploy)"
    echo "  SSH_USER           SSH username (default: from .env.deploy)"
    echo "  SSH_PASS           SSH password (default: from .env.deploy)"
    echo "  SSH_TARGET_DIR     Target directory on server (default: public_html)"
    echo ""
    exit 0
fi

# Check if FTP/SSH credentials are set
if [ -z "$SSH_USER" ] || [ -z "$SSH_PASS" ] || [ -z "$SSH_HOST" ]; then
    echo -e "${YELLOW}SSH credentials not found in environment variables.${NC}"
    echo -e "${YELLOW}Loading from .env.deploy if available...${NC}"
    
    # Try to load from .env.deploy file
    if [ -f .env.deploy ]; then
        echo -e "${GREEN}Loading credentials from .env.deploy...${NC}"
        set -a
        (source .env.deploy 2>/dev/null || {
            while IFS= read -r line || [ -n "$line" ]; do
                [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]] && continue
                line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
                if [[ "$line" =~ ^[A-Z_]+= ]]; then
                    var_name="${line%%=*}"
                    var_value="${line#*=}"
                    var_value="${var_value#\'}"
                    var_value="${var_value%\'}"
                    var_value="${var_value#\"}"
                    var_value="${var_value%\"}"
                    eval "export ${var_name}='${var_value}'"
                fi
            done < .env.deploy
        })
        set +a
    else
        echo -e "${RED}Error: SSH credentials not configured!${NC}"
        echo ""
        echo "Create a .env.deploy file with:"
        echo "  SSH_USER=your-username"
        echo "  SSH_PASS=your-password"
        echo "  SSH_HOST=your-server.com"
        echo "  SSH_TARGET_DIR=public_html"
        exit 1
    fi
fi

# SSH/SCP Configuration
SSH_HOST=${SSH_HOST:-"37.27.54.247"}
SSH_USER=${SSH_USER:-"nirosha_1"}
SSH_PASS=${SSH_PASS:-"Celorita13jan!!"}
SSH_TARGET_DIR=${SSH_TARGET_DIR:-"public_html"}

# Flags
INCLUDE_IMAGES=false
EXCLUDE_ORIG_IMAGES=false
INCREMENTAL=true
FORCE_FULL=false

# Check for flags
for arg in "$@"; do
    case "$arg" in
        --images)
            INCLUDE_IMAGES=true
            echo -e "${YELLOW}✓ Including cache versions of images${NC}"
            ;;
        --noorigimage)
            EXCLUDE_ORIG_IMAGES=true
            echo -e "${YELLOW}✓ Excluding original images folder (public/images)${NC}"
            ;;
        --incremental)
            INCREMENTAL=true
            echo -e "${YELLOW}✓ Incremental deployment mode (only changed/new files)${NC}"
            ;;
        --full|-f)
            FORCE_FULL=true
            INCREMENTAL=false
            echo -e "${YELLOW}✓ Full deployment mode (all files)${NC}"
            ;;
    esac
done

# Check if rsync is available
if ! command -v rsync &> /dev/null; then
    echo -e "${RED}Error: rsync is not installed!${NC}"
    echo "Please install rsync:"
    echo "  Mac: brew install rsync"
    echo "  Linux: apt-get install rsync"
    exit 1
fi

# Check if sshpass is available (for password authentication)
if ! command -v sshpass &> /dev/null; then
    echo -e "${YELLOW}Warning: sshpass not found. Will try to use SSH keys or prompt for password.${NC}"
    USE_SSHPASS=false
else
    USE_SSHPASS=true
fi

# Ensure blog cache exists
echo -e "${GREEN}Step 1: Ensuring blog image cache exists...${NC}"
if [ ! -d "public/cache/blog" ] || [ -z "$(ls -A public/cache/blog 2>/dev/null)" ]; then
    echo -e "${YELLOW}⚠ Blog cache is missing or empty - regenerating...${NC}"
    npm run regenerate-blog-cache
    echo -e "${GREEN}✓ Blog cache regenerated${NC}"
else
    BLOG_CACHE_COUNT=$(find public/cache/blog -type f 2>/dev/null | wc -l | tr -d ' ')
    echo -e "${GREEN}✓ Blog cache exists (${BLOG_CACHE_COUNT} files)${NC}"
fi

# Build Next.js
echo -e "${GREEN}Step 2: Building Next.js production files...${NC}"
npm run generate-sitemap
if [ -f "node_modules/.bin/next" ]; then
    node_modules/.bin/next build
else
    npx next build
fi

# Check if Next.js build was successful
if [ ! -d ".next" ]; then
    echo -e "${RED}Error: .next folder not found after build!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

# Prepare deployment source
if [ -d ".next/standalone" ]; then
    echo -e "${GREEN}Detected standalone build output${NC}"
    DEPLOY_SOURCE=".next/standalone"
    
    # Copy public folder to standalone if needed
    if [ -d "public" ] && [ ! -d ".next/standalone/public" ]; then
        echo -e "${YELLOW}Copying public folder to standalone...${NC}"
        cp -r public .next/standalone/public
    fi
    
    # Copy .next/static to standalone/.next/static
    if [ -d ".next/static" ]; then
        mkdir -p .next/standalone/.next/static
        cp -r .next/static/* .next/standalone/.next/static/ 2>/dev/null || true
    fi
else
    echo -e "${GREEN}Using regular Next.js build output${NC}"
    DEPLOY_SOURCE="."
fi

echo -e "${GREEN}Step 3: Preparing file list for incremental deployment...${NC}"

# Create temporary directory for rsync
TEMP_DIR=$(mktemp -d)
MANIFEST_FILE="$TEMP_DIR/deploy-manifest.txt"
CHANGED_FILES="$TEMP_DIR/changed-files.txt"

# Build rsync exclude patterns
RSYNC_EXCLUDES=(
    "--exclude=.DS_Store"
    "--exclude=._*"
    "--exclude=*/._*"
    "--exclude=*/.next/cache/*"
    "--exclude=*/node_modules/.cache/*"
    "--exclude=*/.git/*"
    "--exclude=*.log"
)

# Handle image exclusions based on flags
# Always exclude original images when --noorigimage is set, or when --images is set (cache only)
if [ "$EXCLUDE_ORIG_IMAGES" = true ] || [ "$INCLUDE_IMAGES" = true ]; then
    RSYNC_EXCLUDES+=("--exclude=public/images/")
    RSYNC_EXCLUDES+=("--exclude=public/images/**")
fi

# Exclude cache if --images flag is not set
if [ "$INCLUDE_IMAGES" = false ]; then
    RSYNC_EXCLUDES+=("--exclude=public/cache/")
    RSYNC_EXCLUDES+=("--exclude=public/cache/**")
fi

# Build rsync command
RSYNC_CMD="rsync"
RSYNC_OPTS=(
    "-avz"
    "--progress"
    "--delete-excluded"
)

# Add excludes to rsync options
for exclude in "${RSYNC_EXCLUDES[@]}"; do
    RSYNC_OPTS+=("$exclude")
done

# For incremental deployment, use checksum-based comparison
if [ "$INCREMENTAL" = true ] && [ "$FORCE_FULL" = false ]; then
    RSYNC_OPTS+=("--checksum")
    echo -e "${YELLOW}Using checksum-based incremental sync (only changed files will be uploaded)${NC}"
else
    echo -e "${YELLOW}Full sync mode (all files will be checked)${NC}"
fi

# Determine what to sync
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    SYNC_SOURCE=".next/standalone/"
    
    # For rsync, we need to be explicit about what to include/exclude
    # If --images is set, include cache but still exclude original images if --noorigimage is set
    if [ "$INCLUDE_IMAGES" = true ]; then
        # Include cache, but exclude original images if flag is set
        if [ "$EXCLUDE_ORIG_IMAGES" = true ]; then
            # Already excluded above, so we're good
            :
        fi
    fi
else
    SYNC_SOURCE=".next/ public/ package.json package-lock.json"
fi

# Build remote path
REMOTE_PATH="${SSH_USER}@${SSH_HOST}:${SSH_TARGET_DIR}/"

# Add .env or config.js if they exist
if [ -f ".env" ]; then
    RSYNC_OPTS+=("--include=.env")
    if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
        cp .env .next/standalone/.env
    fi
elif [ -f "config.js" ]; then
    RSYNC_OPTS+=("--include=config.js")
    if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
        cp config.js .next/standalone/config.js
    fi
fi

# Use sshpass if available, otherwise rely on SSH keys
if [ "$USE_SSHPASS" = true ]; then
    export SSHPASS="$SSH_PASS"
    RSYNC_RSH="sshpass -e ssh"
else
    RSYNC_RSH="ssh"
fi

echo -e "${GREEN}Step 4: Uploading files to production server...${NC}"
echo -e "${YELLOW}Source: $SYNC_SOURCE${NC}"
echo -e "${YELLOW}Destination: $REMOTE_PATH${NC}"
echo ""

# Show what will be excluded
echo -e "${YELLOW}Exclusions:${NC}"
if [ "$EXCLUDE_ORIG_IMAGES" = true ]; then
    echo -e "  ${RED}✗${NC} Original images (public/images/)"
else
    echo -e "  ${GREEN}✓${NC} Original images (public/images/)"
fi

if [ "$INCLUDE_IMAGES" = true ]; then
    echo -e "  ${GREEN}✓${NC} Cache images (public/cache/)"
else
    echo -e "  ${RED}✗${NC} Cache images (public/cache/)"
fi
echo ""

# Perform rsync
if [ "$USE_SSHPASS" = true ]; then
    if rsync -e "sshpass -e ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" \
        "${RSYNC_OPTS[@]}" \
        $SYNC_SOURCE \
        "$REMOTE_PATH"; then
        echo -e "${GREEN}✓ Files uploaded successfully${NC}"
    else
        echo -e "${RED}Error: Failed to upload files!${NC}"
        rm -rf "$TEMP_DIR"
        exit 1
    fi
else
    # Try without sshpass (uses SSH keys or prompts for password)
    if rsync -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" \
        "${RSYNC_OPTS[@]}" \
        $SYNC_SOURCE \
        "$REMOTE_PATH"; then
        echo -e "${GREEN}✓ Files uploaded successfully${NC}"
    else
        echo -e "${RED}Error: Failed to upload files!${NC}"
        rm -rf "$TEMP_DIR"
        exit 1
    fi
fi

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your files have been deployed to the production server!"
echo ""
if [ "$INCREMENTAL" = true ]; then
    echo -e "${GREEN}Only changed or new files were uploaded${NC}"
else
    echo -e "${YELLOW}All files were checked and uploaded as needed${NC}"
fi
echo ""
echo "Next steps on your server:"
echo "  1. Ensure Node.js is installed (v18+ recommended)"
if [ "$DEPLOY_SOURCE" = ".next/standalone" ]; then
    echo "  2. Navigate to: cd $SSH_TARGET_DIR"
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


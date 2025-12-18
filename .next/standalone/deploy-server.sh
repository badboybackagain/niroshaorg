#!/bin/bash

# Deploy Email Server to Hosting Provider
# This script uploads the server files to your hosting server

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Nirosha Email Server Deployment ===${NC}\n"

# Check if .env.deploy exists
if [ ! -f .env.deploy ]; then
    echo -e "${RED}Error: .env.deploy file not found!${NC}"
    echo -e "${YELLOW}Please create .env.deploy file with your server credentials.${NC}"
    echo -e "You can copy env.deploy.example to .env.deploy and fill in your details.\n"
    exit 1
fi

# Load environment variables
source .env.deploy

# Validate required variables
if [ -z "$SERVER_USER" ] || [ -z "$SERVER_HOST" ] || [ -z "$SERVER_PATH" ]; then
    echo -e "${RED}Error: Missing required variables in .env.deploy${NC}"
    echo -e "Required: SERVER_USER, SERVER_HOST, SERVER_PATH"
    exit 1
fi

# Set defaults
SERVER_PORT=${SERVER_PORT:-22}
SERVER_PATH=${SERVER_PATH%/}  # Remove trailing slash

echo -e "${YELLOW}Deployment Configuration:${NC}"
echo -e "  Server: ${SERVER_USER}@${SERVER_HOST}"
echo -e "  Port: ${SERVER_PORT}"
echo -e "  Remote Path: ${SERVER_PATH}/server"
echo -e "  Method: ${FTP_TYPE:-SFTP}\n"

# Check if server directory exists locally
if [ ! -d "server" ]; then
    echo -e "${RED}Error: server/ directory not found!${NC}"
    exit 1
fi

# Check if required files exist
if [ ! -f "server/server.js" ] || [ ! -f "server/package.json" ]; then
    echo -e "${RED}Error: Required files not found in server/ directory!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Local files verified${NC}\n"

# Create temporary directory for files to upload
TEMP_DIR=$(mktemp -d)
echo -e "${YELLOW}Preparing files for upload...${NC}"

# Copy required files to temp directory
cp server/server.js "$TEMP_DIR/"
cp server/package.json "$TEMP_DIR/"

# Copy package-lock.json if it exists
if [ -f "server/package-lock.json" ]; then
    cp server/package-lock.json "$TEMP_DIR/"
    echo -e "  ✓ server.js"
    echo -e "  ✓ package.json"
    echo -e "  ✓ package-lock.json"
else
    echo -e "  ✓ server.js"
    echo -e "  ✓ package.json"
    echo -e "  ⚠ package-lock.json not found (optional)"
fi

echo ""

# Upload files based on method
if [ "$FTP_TYPE" = "ftp" ]; then
    echo -e "${YELLOW}Uploading via FTP...${NC}"
    
    if ! command -v lftp &> /dev/null; then
        echo -e "${RED}Error: lftp is not installed${NC}"
        echo -e "Install it with: brew install lftp (macOS) or apt-get install lftp (Linux)"
        exit 1
    fi
    
    lftp -c "
    set ftp:ssl-allow no
    open -u $SERVER_USER,$SERVER_PASS -p $SERVER_PORT ftp://$SERVER_HOST
    cd $SERVER_PATH
    mkdir -p server
    cd server
    lcd $TEMP_DIR
    mput server.js package.json
    $(if [ -f "$TEMP_DIR/package-lock.json" ]; then echo "put package-lock.json"; fi)
    bye
    "
    
else
    # Default to SFTP/SCP
    echo -e "${YELLOW}Uploading via SFTP/SCP...${NC}"
    
    # Create remote directory if it doesn't exist
    ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" "mkdir -p $SERVER_PATH/server" || {
        echo -e "${RED}Error: Could not create remote directory${NC}"
        echo -e "Please check your SSH credentials and server path"
        exit 1
    }
    
    # Upload files
    scp -P "$SERVER_PORT" \
        "$TEMP_DIR/server.js" \
        "$TEMP_DIR/package.json" \
        "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/server/"
    
    # Upload package-lock.json if it exists
    if [ -f "$TEMP_DIR/package-lock.json" ]; then
        scp -P "$SERVER_PORT" \
            "$TEMP_DIR/package-lock.json" \
            "$SERVER_USER@$SERVER_HOST:$SERVER_PATH/server/"
    fi
fi

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo -e "${GREEN}✓ Files uploaded successfully${NC}\n"

# Install dependencies on server (optional)
if [ "$INSTALL_DEPS" = "true" ]; then
    echo -e "${YELLOW}Installing dependencies on server...${NC}"
    ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_HOST" "cd $SERVER_PATH/server && npm install --production"
    echo -e "${GREEN}✓ Dependencies installed${NC}\n"
else
    echo -e "${YELLOW}Note: Dependencies will be installed automatically by your hosting provider${NC}"
    echo -e "Or install manually via SSH: cd $SERVER_PATH/server && npm install --production\n"
fi

# Test connection (optional)
if [ "$TEST_HEALTH" = "true" ] && [ ! -z "$SERVER_URL" ]; then
    echo -e "${YELLOW}Testing health endpoint...${NC}"
    sleep 2  # Wait a moment for server to restart
    if curl -f -s "$SERVER_URL/health" > /dev/null; then
        echo -e "${GREEN}✓ Health check passed${NC}\n"
    else
        echo -e "${YELLOW}⚠ Health check failed (server might need to restart)${NC}\n"
    fi
fi

echo -e "${GREEN}=== Deployment Complete ===${NC}\n"
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. Set environment variables in your hosting control panel:"
echo -e "   - GMAIL_USER"
echo -e "   - GMAIL_PASSWORD"
echo -e "   - ALLOWED_ORIGINS (optional)"
echo -e ""
echo -e "2. Restart your Node.js app in the hosting control panel"
echo -e ""
echo -e "3. Test the health endpoint:"
echo -e "   curl ${SERVER_URL:-https://your-server-url}/health"
echo -e ""
echo -e "4. Update your frontend .env.production:"
echo -e "   VITE_CONTACT_API_URL=${SERVER_URL:-https://your-server-url}/api/contact"
echo -e ""

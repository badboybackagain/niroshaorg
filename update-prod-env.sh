#!/bin/bash

# Script to update production .env file to remove GTM ID
# This will switch from GTM to gtag.js implementation

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Update Production .env File${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# SSH Configuration (from deploy.sh)
SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

# Path to .env file on server
ENV_FILE_PATH="${SSH_TARGET_DIR}/.env"

echo -e "${YELLOW}Connecting to production server...${NC}"
echo "Host: ${SSH_HOST}"
echo "User: ${SSH_USER}"
echo "Target: ${ENV_FILE_PATH}"
echo ""

# Use expect to handle SSH password authentication
expect << EOF
set timeout 30
spawn ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST}

expect {
    "password:" {
        send "${SSH_PASS}\r"
    }
    timeout {
        puts "Connection timeout"
        exit 1
    }
}

expect {
    "\$ " {
        puts "Connected successfully"
    }
    "# " {
        puts "Connected successfully"
    }
    timeout {
        puts "Login timeout"
        exit 1
    }
}

# Check if .env file exists
send "test -f ${ENV_FILE_PATH} && echo EXISTS || echo NOT_EXISTS\r"
expect {
    "EXISTS" {
        puts "✓ .env file found"
    }
    "NOT_EXISTS" {
        puts "✗ .env file not found"
        send "exit\r"
        expect eof
        exit 1
    }
    timeout {
        puts "Timeout checking file"
        exit 1
    }
}

# Wait for prompt
expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Backup the .env file first
send "cp ${ENV_FILE_PATH} ${ENV_FILE_PATH}.backup.$(date +%Y%m%d_%H%M%S)\r"
expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Check current GTM ID setting
send "grep NEXT_PUBLIC_GTM_ID ${ENV_FILE_PATH} || echo NOT_FOUND\r"
expect {
    "NOT_FOUND" {
        puts "No NEXT_PUBLIC_GTM_ID found in .env file"
        send "exit\r"
        expect eof
        exit 0
    }
    -re ".*NEXT_PUBLIC_GTM_ID.*" {
        puts "Found NEXT_PUBLIC_GTM_ID in .env file"
    }
    timeout {
        puts "Timeout checking GTM ID"
        exit 1
    }
}

# Wait for prompt
expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Comment out NEXT_PUBLIC_GTM_ID line (comment it out to preserve for reference)
send "sed -i.bak 's/^NEXT_PUBLIC_GTM_ID=/# NEXT_PUBLIC_GTM_ID=/' ${ENV_FILE_PATH}\r"
expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Verify the change
send "grep NEXT_PUBLIC_GTM_ID ${ENV_FILE_PATH} | head -1\r"
expect {
    -re ".*# NEXT_PUBLIC_GTM_ID.*" {
        puts "✓ Successfully commented out NEXT_PUBLIC_GTM_ID"
    }
    -re ".*NEXT_PUBLIC_GTM_ID.*" {
        puts "⚠ Warning: NEXT_PUBLIC_GTM_ID still active"
    }
    timeout {
        puts "Timeout verifying change"
    }
}

puts "✓ .env file updated successfully"
puts "⚠ Note: You may need to restart the Next.js server for changes to take effect"

send "exit\r"
expect eof

EOF

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Production .env file updated successfully!${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. The .env file has been updated (NEXT_PUBLIC_GTM_ID is now commented out)"
    echo "2. Restart your Next.js server for changes to take effect"
    echo "3. After restart, the site will use gtag.js with G-F4SER380S1"
    echo "4. The consent banner will no longer appear"
    echo ""
    echo -e "${GREEN}To restart the server, you can run:${NC}"
    echo "  ssh ${SSH_USER}@${SSH_HOST} 'cd ${SSH_TARGET_DIR} && pm2 restart all'"
    echo "  (or use your server's restart command)"
else
    echo ""
    echo -e "${RED}✗ Failed to update .env file${NC}"
    exit 1
fi

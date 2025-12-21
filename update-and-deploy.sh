#!/bin/bash

# Script to ensure .env is correct and trigger a rebuild/deploy
# This will switch production from GTM to gtag.js

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Update Production to Use gtag.js${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# SSH Configuration
SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

echo -e "${YELLOW}Step 1: Ensuring .env file is correct on production...${NC}"

expect << EOF
set timeout 30
spawn ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST}

expect {
    "password:" {
        send "${SSH_PASS}\r"
    }
    timeout { exit 1 }
}

expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Ensure NEXT_PUBLIC_GTM_ID is commented out or removed
send "cd ${SSH_TARGET_DIR} && if grep -q '^NEXT_PUBLIC_GTM_ID=' .env 2>/dev/null; then sed -i.bak 's/^NEXT_PUBLIC_GTM_ID=/# NEXT_PUBLIC_GTM_ID=/' .env && echo 'Commented out GTM ID'; else echo 'GTM ID already commented/removed'; fi\r"
expect {
    -re ".*" {
        puts "\$expect_out(buffer)"
    }
    timeout {}
}

expect {
    "\$ " {}
    "# " {}
}

send "exit\r"
expect eof

EOF

echo ""
echo -e "${YELLOW}Step 2: The .env file is now configured correctly${NC}"
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. ✓ .env file updated (NEXT_PUBLIC_GTM_ID is commented/removed)"
echo "2. You need to rebuild and redeploy the Next.js app"
echo "3. Run: ./deploy.sh (or your deployment process)"
echo ""
echo -e "${YELLOW}Important:${NC}"
echo "Since Next.js bakes environment variables at BUILD TIME, you must:"
echo "- Rebuild the app (npm run build)"
echo "- Redeploy the new build"
echo ""
echo -e "${GREEN}After redeployment:${NC}"
echo "- The site will use gtag.js with G-F4SER380S1"
echo "- No consent banner will appear"
echo "- Direct Google Analytics tracking will be active"
echo ""

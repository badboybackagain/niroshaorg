#!/bin/bash

# Script to check GTM configuration on production server

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# SSH Configuration
SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

echo -e "${GREEN}Checking production GTM configuration...${NC}"
echo ""

expect << EOF
set timeout 30
spawn ssh -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST}

expect {
    "password:" {
        send "${SSH_PASS}\r"
    }
    timeout {
        exit 1
    }
}

expect {
    "\$ " {}
    "# " {}
    timeout {}
}

# Check .env file
send "echo '=== .env file ==='\r"
expect {
    "\$ " {}
    "# " {}
}

send "grep NEXT_PUBLIC_GTM ${SSH_TARGET_DIR}/.env 2>/dev/null || echo 'Not in .env file'\r"
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

# Check system environment (if using PM2 or systemd)
send "echo '=== System Environment ==='\r"
expect {
    "\$ " {}
    "# " {}
}

send "env | grep NEXT_PUBLIC_GTM || echo 'Not in system env'\r"
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

# Check PM2 ecosystem if exists
send "echo '=== PM2 Config ==='\r"
expect {
    "\$ " {}
    "# " {}
}

send "test -f ${SSH_TARGET_DIR}/ecosystem.config.js && grep -A 5 NEXT_PUBLIC_GTM ${SSH_TARGET_DIR}/ecosystem.config.js 2>/dev/null || echo 'No PM2 config found'\r"
expect {
    -re ".*" {
        puts "\$expect_out(buffer)"
    }
    timeout {}
}

send "exit\r"
expect eof

EOF

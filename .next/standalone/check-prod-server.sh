#!/bin/bash

# Script to check production server status
# Uses expect for password authentication

SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

expect <<EOF
set timeout 30
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $SSH_USER@$SSH_HOST
expect {
    "password:" {
        send "$SSH_PASS\r"
        exp_continue
    }
    "$ " {
        send "cd $SSH_TARGET_DIR && pwd\r"
        expect "$ "
        send "echo '=== Checking API directory structure ==='\r"
        expect "$ "
        send "ls -la .next/server/app/api/ 2>/dev/null || ls -la .next/standalone/.next/server/app/api/ 2>/dev/null || find . -type d -name 'api' | head -5\r"
        expect "$ "
        send "echo '=== Checking for health endpoint ==='\r"
        expect "$ "
        send "find . -path '*/api/health*' -o -name 'health' 2>/dev/null | head -10\r"
        expect "$ "
        send "echo '=== Checking Node.js processes ==='\r"
        expect "$ "
        send "ps aux | grep -E 'node|next' | grep -v grep || echo 'No Node.js processes found'\r"
        expect "$ "
        send "echo '=== Checking config.js ==='\r"
        expect "$ "
        send "ls -la config.js 2>/dev/null && echo 'config.js found' || echo 'config.js NOT found'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EOF

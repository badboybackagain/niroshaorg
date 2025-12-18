#!/bin/bash

# Script to create health endpoint on production server
SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"
SSH_TARGET_DIR="public_html"

# Create health route file locally first
cat > /tmp/health_route.js <<'EOF'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString(),
    service: 'nirosha.org'
  })
}
EOF

# Upload the file and create directory structure
expect <<'EXPECTEOF'
set timeout 30
set ssh_host "37.27.54.247"
set ssh_user "nirosha_1"
set ssh_pass "Celorita13jan!!"
set target_dir "public_html"

spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null /tmp/health_route.js $ssh_user@$ssh_host:/tmp/health_route.js
expect {
    "password:" {
        send "$ssh_pass\r"
        exp_continue
    }
    eof
}

spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $ssh_user@$ssh_host
expect {
    "password:" {
        send "$ssh_pass\r"
        exp_continue
    }
    "$ " {
        send "cd $target_dir\r"
        expect "$ "
        send "API_DIR=\$(find . -type d -path '*/app/api' 2>/dev/null | head -1)\r"
        expect "$ "
        send "if [ -z \"\$API_DIR\" ]; then API_DIR=\$(find . -type d -name 'api' | grep -E 'server|standalone' | head -1); fi\r"
        expect "$ "
        send "echo \"Found API directory: \$API_DIR\"\r"
        expect "$ "
        send "mkdir -p \"\$API_DIR/health\"\r"
        expect "$ "
        send "cp /tmp/health_route.js \"\$API_DIR/health/route.js\"\r"
        expect "$ "
        send "ls -la \"\$API_DIR/health/\"\r"
        expect "$ "
        send "cat \"\$API_DIR/health/route.js\"\r"
        expect "$ "
        send "echo 'Health endpoint created successfully'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

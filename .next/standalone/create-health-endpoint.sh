#!/bin/bash

SSH_HOST="37.27.54.247"
SSH_USER="nirosha_1"
SSH_PASS="Celorita13jan!!"

# Create the health route file content
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

# Upload file
expect <<'EXPECTEOF'
set timeout 30
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null /tmp/health_route.js nirosha_1@37.27.54.247:/tmp/health_route.js
expect {
    "password:" {
        send "Celorita13jan!!\r"
        exp_continue
    }
    eof
}
EXPECTEOF

# Execute commands on server
expect <<'EXPECTEOF'
set timeout 30
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null nirosha_1@37.27.54.247
expect {
    "password:" {
        send "Celorita13jan!!\r"
        exp_continue
    }
    "$ " {
        send "cd public_html\r"
        expect "$ "
        send "find . -type d -path '*/app/api' 2>/dev/null | head -1\r"
        expect "$ "
        send "API_DIR=\$(find . -type d -path '*/app/api' 2>/dev/null | head -1); if [ -z \"\$API_DIR\" ]; then API_DIR=\$(find . -type d -name 'api' | grep server | head -1); fi; echo \"API_DIR=\$API_DIR\"\r"
        expect "$ "
        send "mkdir -p \"\$API_DIR/health\"\r"
        expect "$ "
        send "cp /tmp/health_route.js \"\$API_DIR/health/route.js\"\r"
        expect "$ "
        send "ls -la \"\$API_DIR/health/\"\r"
        expect "$ "
        send "echo 'Health endpoint created at:'\r"
        expect "$ "
        send "echo \"\$API_DIR/health/route.js\"\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

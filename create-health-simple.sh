#!/bin/bash

# Simple script to create health endpoint
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

expect <<'EXPECTEOF'
set timeout 30
# Upload file
spawn scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null /tmp/health_route.js nirosha_1@37.27.54.247:/tmp/health_route.js
expect {
    "password:" {
        send "Celorita13jan!!\r"
        exp_continue
    }
    eof
}

# Create directory and copy file
spawn ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null nirosha_1@37.27.54.247
expect {
    "password:" {
        send "Celorita13jan!!\r"
        exp_continue
    }
    "$ " {
        send "cd public_html\r"
        expect "$ "
        send "mkdir -p .next/server/app/api/health\r"
        expect "$ "
        send "cp /tmp/health_route.js .next/server/app/api/health/route.js\r"
        expect "$ "
        send "ls -la .next/server/app/api/health/\r"
        expect "$ "
        send "cat .next/server/app/api/health/route.js\r"
        expect "$ "
        send "echo 'Health endpoint created successfully!'\r"
        expect "$ "
        send "echo 'You may need to restart the Next.js server for changes to take effect'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

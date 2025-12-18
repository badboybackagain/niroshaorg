#!/bin/bash

# Verify health endpoint and server status
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
        send "echo '=== Testing health endpoint locally ==='\r"
        expect "$ "
        send "curl -s http://localhost:3000/api/health || echo 'Local test failed'\r"
        expect "$ "
        send "echo '=== Checking server process ==='\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo '=== Verifying health route file exists ==='\r"
        expect "$ "
        send "ls -la .next/server/app/api/health/route.js\r"
        expect "$ "
        send "echo '=== Checking if server.js exists ==='\r"
        expect "$ "
        send "ls -la server.js 2>/dev/null || echo 'server.js not in public_html'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

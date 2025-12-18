#!/bin/bash

# Final check and restart script
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
        send "echo '=== Verifying health endpoint exists ==='\r"
        expect "$ "
        send "ls -la .next/server/app/api/health/route.js 2>/dev/null || ls -la .next/standalone/.next/server/app/api/health/route.js 2>/dev/null || echo 'Health endpoint not found'\r"
        expect "$ "
        send "echo '=== Restarting Next.js server ==='\r"
        expect "$ "
        send "pkill -f next-server\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "echo '=== Starting server ==='\r"
        expect "$ "
        send "if [ -f server.js ]; then nohup node server.js > server.log 2>&1 & elif [ -f .next/standalone/server.js ]; then cd .next/standalone && nohup node server.js > ../../server.log 2>&1 & else echo 'server.js not found'; fi\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo '=== Testing health endpoint locally ==='\r"
        expect "$ "
        send "sleep 2 && curl -s http://localhost:3000/api/health | head -5\r"
        expect "$ "
        send "echo '=== Done ==='\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

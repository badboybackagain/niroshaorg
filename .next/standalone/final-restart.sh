#!/bin/bash

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
        send "echo 'Killing all Next.js processes...'\r"
        expect "$ "
        send "pkill -9 -f next-server\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "lsof -ti:3000 | xargs kill -9 2>/dev/null || echo 'Port 3000 cleared'\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "echo 'Starting fresh server...'\r"
        expect "$ "
        send "nohup node server.js > server.log 2>&1 &\r"
        expect "$ "
        send "sleep 5\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo 'Waiting for server to be ready...'\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "curl -s http://localhost:3000/api/health\r"
        expect "$ "
        send "echo ''\r"
        expect "$ "
        send "curl -s -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test User\",\"email\":\"test@example.com\",\"whatsappNumber\":\"1234567890\",\"serviceInterested\":[\"Web Development\"],\"countryCode\":\"+91\"}'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

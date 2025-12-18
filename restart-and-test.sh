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
        send "echo 'Stopping Next.js server...'\r"
        expect "$ "
        send "pkill -f next-server\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "echo 'Starting server from public_html...'\r"
        expect "$ "
        send "nohup node server.js > server.log 2>&1 &\r"
        expect "$ "
        send "sleep 5\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo 'Testing health endpoint...'\r"
        expect "$ "
        send "curl -s http://localhost:3000/api/health\r"
        expect "$ "
        send "echo ''\r"
        expect "$ "
        send "echo 'Testing contact endpoint...'\r"
        expect "$ "
        send "curl -s -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test\",\"email\":\"test@test.com\",\"whatsappNumber\":\"123\",\"serviceInterested\":[\"Web Dev\"],\"countryCode\":\"+91\"}' | head -3\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

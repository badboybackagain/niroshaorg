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
        send "echo '=== Recent server logs ==='\r"
        expect "$ "
        send "tail -100 server.log 2>/dev/null | grep -E '(config|Config|Gmail|🔍|✅|❌|⚠️)' | tail -30\r"
        expect "$ "
        send "echo '=== Making a test request to trigger logs ==='\r"
        expect "$ "
        send "curl -s -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test\",\"email\":\"test@test.com\",\"whatsappNumber\":\"123\",\"serviceInterested\":[\"Web\"],\"countryCode\":\"+91\"}' > /dev/null\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "echo '=== Logs after request ==='\r"
        expect "$ "
        send "tail -50 server.log 2>/dev/null | grep -E '(config|Config|Gmail|🔍|✅|❌|⚠️|Looking|Importing|Loaded)' | tail -20\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

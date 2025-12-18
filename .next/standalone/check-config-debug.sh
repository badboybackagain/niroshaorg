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
        send "echo '=== Triggering contact API to generate logs ==='\r"
        expect "$ "
        send "curl -s -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Debug Test\",\"email\":\"debug@test.com\",\"whatsappNumber\":\"9999999999\",\"serviceInterested\":[\"Debug\"],\"countryCode\":\"+91\"}' > /dev/null\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "echo '=== Server logs (last 50 lines) ==='\r"
        expect "$ "
        send "tail -50 server.log 2>/dev/null\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

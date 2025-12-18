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
        send "echo '=== Testing ES module import ==='\r"
        expect "$ "
        send "node --input-type=module -e \"import('./config.js').then(m => console.log('Config:', m.config ? 'FOUND' : 'NOT FOUND', m.default ? 'DEFAULT FOUND' : 'NO DEFAULT')).catch(e => console.log('Error:', e.message))\"\r"
        expect "$ "
        send "echo '=== Checking server logs for recent errors ==='\r"
        expect "$ "
        send "tail -100 server.log 2>/dev/null | tail -20\r"
        expect "$ "
        send "echo '=== Testing contact API directly ==='\r"
        expect "$ "
        send "curl -v -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test\",\"email\":\"test@test.com\",\"whatsappNumber\":\"123\",\"serviceInterested\":[\"Web\"],\"countryCode\":\"+91\"}' 2>&1 | head -15\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

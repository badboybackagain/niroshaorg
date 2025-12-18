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
        send "echo '=== Checking server logs for config errors ==='\r"
        expect "$ "
        send "tail -50 server.log 2>/dev/null | grep -i config || echo 'No config errors in log'\r"
        expect "$ "
        send "echo '=== Testing config-loader path resolution ==='\r"
        expect "$ "
        send "node -e \"console.log('CWD:', process.cwd()); const path = require('path'); const fs = require('fs'); const configPath = path.join(process.cwd(), 'config.js'); console.log('Looking for:', configPath); console.log('Exists:', fs.existsSync(configPath));\"\r"
        expect "$ "
        send "echo '=== Copying config.js to .next/standalone if it exists ==='\r"
        expect "$ "
        send "if [ -d .next/standalone ]; then cp config.js .next/standalone/config.js && echo 'Copied to standalone'; fi\r"
        expect "$ "
        send "echo '=== Also checking if we need it in lib directory ==='\r"
        expect "$ "
        send "if [ -d lib ]; then cp config.js lib/../config.js 2>/dev/null || echo 'lib parent copy not needed'; fi\r"
        expect "$ "
        send "echo '=== Restarting server ==='\r"
        expect "$ "
        send "pkill -f next-server && sleep 2 && nohup node server.js > server.log 2>&1 &\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "echo '=== Testing contact endpoint again ==='\r"
        expect "$ "
        send "curl -s -X POST http://localhost:3000/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test\",\"email\":\"test@test.com\",\"whatsappNumber\":\"123\",\"serviceInterested\":[\"Web\"],\"countryCode\":\"+91\"}'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

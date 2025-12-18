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
        send "echo '=== Checking config.js content ==='\r"
        expect "$ "
        send "head -20 config.js\r"
        expect "$ "
        send "echo '=== Checking config.js permissions ==='\r"
        expect "$ "
        send "ls -la config.js\r"
        expect "$ "
        send "echo '=== Testing if Node can read config ==='\r"
        expect "$ "
        send "node -e \"try { const config = require('./config.js'); console.log('Config loaded:', config.config ? 'YES' : 'NO'); } catch(e) { console.log('Error:', e.message); }\"\r"
        expect "$ "
        send "echo '=== Checking server.js location ==='\r"
        expect "$ "
        send "pwd && ls -la server.js\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

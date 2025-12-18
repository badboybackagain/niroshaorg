#!/bin/bash

# Check config.js location and server setup
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
        send "echo '=== Finding config.js ==='\r"
        expect "$ "
        send "find . -name config.js -type f 2>/dev/null\r"
        expect "$ "
        send "echo '=== Finding server.js ==='\r"
        expect "$ "
        send "find . -name server.js -type f 2>/dev/null\r"
        expect "$ "
        send "echo '=== Checking where server is running from ==='\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo '=== Checking current directory structure ==='\r"
        expect "$ "
        send "ls -la | grep -E 'config|server|standalone'\r"
        expect "$ "
        send "echo '=== Checking if config.js is readable ==='\r"
        expect "$ "
        send "if [ -f config.js ]; then head -5 config.js; else echo 'config.js not in public_html root'; fi\r"
        expect "$ "
        send "if [ -f .next/standalone/config.js ]; then echo 'config.js found in standalone'; head -5 .next/standalone/config.js; fi\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

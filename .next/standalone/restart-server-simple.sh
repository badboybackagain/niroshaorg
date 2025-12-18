#!/bin/bash

# Simple script to restart Next.js server
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
        send "echo 'Checking if PM2 is managing the server...'\r"
        expect "$ "
        send "pm2 list 2>/dev/null || echo 'PM2 not found or not running'\r"
        expect "$ "
        send "echo 'Finding Next.js process...'\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo 'Killing Next.js process...'\r"
        expect "$ "
        send "pkill -f next-server\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "echo 'Starting Next.js server...'\r"
        expect "$ "
        send "cd public_html && nohup node server.js > server.log 2>&1 &\r"
        expect "$ "
        send "sleep 3\r"
        expect "$ "
        send "ps aux | grep next-server | grep -v grep\r"
        expect "$ "
        send "echo 'Server restart complete!'\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

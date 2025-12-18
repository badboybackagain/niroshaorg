#!/bin/bash

# Script to restart Next.js server on production
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
        send "echo '=== Finding Next.js process ==='\r"
        expect "$ "
        send "ps aux | grep -E 'node.*server|next-server' | grep -v grep\r"
        expect "$ "
        send "PID=\$(ps aux | grep -E 'node.*server|next-server' | grep -v grep | awk '{print \$2}' | head -1)\r"
        expect "$ "
        send "if [ -n \"\$PID\" ]; then echo \"Killing process \$PID\"; kill \$PID; sleep 2; fi\r"
        expect "$ "
        send "echo '=== Starting Next.js server ==='\r"
        expect "$ "
        send "nohup node server.js > /dev/null 2>&1 &\r"
        expect "$ "
        send "sleep 2\r"
        expect "$ "
        send "ps aux | grep -E 'node.*server|next-server' | grep -v grep\r"
        expect "$ "
        send "echo '=== Server restarted ==='\r"
        expect "$ "
        send "exit\r"
        expect eof
    }
    eof
}
EXPECTEOF

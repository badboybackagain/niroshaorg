#!/bin/bash
# Simple script to update Gmail password in config.js
# Usage: ./update-gmail-simple.sh NEW_APP_PASSWORD

if [ -z "$1" ]; then
    echo "Usage: ./update-gmail-simple.sh NEW_APP_PASSWORD"
    echo "Example: ./update-gmail-simple.sh abcdefghijklmnop"
    exit 1
fi

NEW_PASSWORD="$1"

# Remove spaces from password
NEW_PASSWORD=$(echo "$NEW_PASSWORD" | tr -d ' ')

# Check password length
if [ ${#NEW_PASSWORD} -ne 16 ]; then
    echo "Warning: App Password should be 16 characters (got ${#NEW_PASSWORD})"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "Updating Gmail password in config.js..."
echo "New password: ${NEW_PASSWORD:0:4}****${NEW_PASSWORD: -4} (first 4 and last 4 chars shown)"

# Create expect script to update
cat > /tmp/update-gmail.exp << EOF
#!/usr/bin/expect -f
set timeout 60
set host "37.27.54.247"
set user "nirosha_1"
set password "Celorita13jan!!"
set port "22"
set new_pass "$NEW_PASSWORD"

spawn ssh -p \$port \$user@\$host

expect {
    "password:" {
        send "\$password\r"
        exp_continue
    }
    "yes/no" {
        send "yes\r"
        exp_continue
    }
    "\$ " {
        send "cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server\r"
        expect "\$ "
        send "cp config.js config.js.backup.\\\$(date +%Y%m%d_%H%M%S)\r"
        expect "\$ "
        send "sed -i \"s/password: '.*'/password: '\$new_pass'/\" config.js\r"
        expect "\$ "
        send "echo '=== Updated Gmail config ==='\r"
        expect "\$ "
        send "grep -A 2 'gmail:' config.js | head -4\r"
        expect "\$ "
        send "echo ''\r"
        expect "\$ "
        send "echo '✅ Config updated successfully!'\r"
        expect "\$ "
        send "echo 'Backup saved. Now restart the server.'\r"
        expect "\$ "
        send "exit\r"
    }
}

expect eof
EOF

chmod +x /tmp/update-gmail.exp
/tmp/update-gmail.exp

echo ""
echo "✅ Done! Now restart the server:"
echo "   ssh -p 22 nirosha_1@37.27.54.247"
echo "   cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server"
echo "   pkill -f 'node.*server'"
echo "   nohup node server.js > nohup.out 2>&1 &"

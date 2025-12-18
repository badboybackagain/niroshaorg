#!/bin/bash

echo "=========================================="
echo "Contact Form Server Diagnostic"
echo "=========================================="
echo ""

# 1. Check if server is running
echo "1. Checking Node.js server process..."
if pgrep -f "node.*server" > /dev/null; then
    echo "   ✓ Node.js server process found:"
    pgrep -f "node.*server" | while read pid; do
        ps -p $pid -o pid,user,cmd --no-headers
    done
else
    echo "   ✗ No Node.js server process found"
fi
echo ""

# 2. Check ports
echo "2. Checking listening ports..."
echo "   Port 3000:"
if lsof -i :3000 2>/dev/null | grep -q LISTEN; then
    lsof -i :3000 2>/dev/null
else
    echo "   Nothing listening on port 3000"
fi
echo "   Port 80:"
if lsof -i :80 2>/dev/null | grep -q LISTEN; then
    lsof -i :80 2>/dev/null | head -3
else
    echo "   Nothing listening on port 80"
fi
echo "   Port 443:"
if lsof -i :443 2>/dev/null | grep -q LISTEN; then
    lsof -i :443 2>/dev/null | head -3
else
    echo "   Nothing listening on port 443"
fi
echo ""

# 3. Check web server
echo "3. Checking web server configuration..."
if [ -f /etc/nginx/sites-enabled/default ] || [ -f /etc/nginx/conf.d/default.conf ]; then
    echo "   ✓ nginx configuration found"
    NGINX_CONF=$(find /etc/nginx -name "*.conf" -type f 2>/dev/null | head -1)
    if [ -n "$NGINX_CONF" ]; then
        echo "   Checking for contact/api endpoints in nginx config:"
        grep -n -i "contact\|/api" $NGINX_CONF 2>/dev/null | head -10 || echo "   No contact endpoints found"
    fi
elif [ -f /etc/apache2/sites-enabled/000-default.conf ] || [ -f /etc/httpd/conf/httpd.conf ]; then
    echo "   ✓ Apache configuration found"
else
    echo "   No web server config found (direct Node.js?)"
fi
echo ""

# 4. Find server directory
echo "4. Looking for server directory..."
if [ -d ~/server ]; then
    SERVER_DIR=~/server
elif [ -d /home/nirosha_1/server ]; then
    SERVER_DIR=/home/nirosha_1/server
elif [ -d server ]; then
    SERVER_DIR=./server
else
    SERVER_DIR=$(find ~ -type d -name "server" -path "*/node_modules" -prune -o -type d -name "server" -print 2>/dev/null | head -1)
fi

if [ -n "$SERVER_DIR" ] && [ -d "$SERVER_DIR" ]; then
    echo "   ✓ Found server directory: $SERVER_DIR"
    cd "$SERVER_DIR" 2>/dev/null || cd ~
    echo ""
    echo "   Checking config.js..."
    if [ -f config.js ]; then
        echo "   ✓ config.js exists"
        echo "   Allowed origins:"
        grep -A 3 "allowedOrigins" config.js 2>/dev/null | head -5 || echo "   Could not find allowedOrigins"
    else
        echo "   ✗ config.js not found"
    fi
    echo ""
    echo "   Checking package.json..."
    if [ -f package.json ]; then
        echo "   ✓ package.json exists"
    fi
else
    echo "   ✗ Server directory not found"
    echo "   Current directory: $(pwd)"
    echo "   Home directory: $HOME"
    echo "   Listing home directory:"
    ls -la ~ | head -10
fi
echo ""

# 5. Test endpoints locally
echo "5. Testing endpoints on localhost..."
if [ -n "$SERVER_DIR" ] && [ -d "$SERVER_DIR" ]; then
    cd "$SERVER_DIR"
    echo "   Testing /health..."
    HEALTH=$(curl -s http://localhost:3000/health 2>/dev/null)
    if [ -n "$HEALTH" ]; then
        echo "   ✓ /health: $HEALTH"
    else
        echo "   ✗ /health not responding"
    fi
    
    echo "   Testing /api/health..."
    API_HEALTH=$(curl -s http://localhost:3000/api/health 2>/dev/null)
    if [ -n "$API_HEALTH" ]; then
        echo "   ✓ /api/health: $API_HEALTH"
    else
        echo "   ✗ /api/health not responding"
    fi
    
    echo "   Testing /contact (POST)..."
    CONTACT_RESPONSE=$(curl -s -X POST http://localhost:3000/contact \
        -H "Content-Type: application/json" \
        -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"123","email":"test@test.com","serviceInterested":["Web Development"]}' 2>/dev/null)
    if [ -n "$CONTACT_RESPONSE" ]; then
        echo "   Response: $(echo $CONTACT_RESPONSE | head -c 200)"
    else
        echo "   ✗ /contact not responding"
    fi
fi
echo ""

# 6. Check logs
echo "6. Checking server logs..."
if [ -n "$SERVER_DIR" ] && [ -d "$SERVER_DIR" ]; then
    cd "$SERVER_DIR"
    if [ -f nohup.out ]; then
        echo "   Last 30 lines of nohup.out:"
        tail -30 nohup.out 2>/dev/null | head -30
    elif [ -f logs/app.log ]; then
        echo "   Last 30 lines of app.log:"
        tail -30 logs/app.log 2>/dev/null
    else
        echo "   No log files found"
        echo "   Files in server directory:"
        ls -la | head -10
    fi
fi
echo ""

# 7. Check environment and process manager
echo "7. Environment and process manager..."
echo "   NODE_ENV: ${NODE_ENV:-not set}"
echo "   PORT: ${PORT:-not set}"
echo "   User: $(whoami)"
echo "   Home: $HOME"
echo "   PWD: $(pwd)"
echo ""
echo "   Checking for PM2..."
if command -v pm2 &> /dev/null; then
    echo "   ✓ PM2 is installed"
    pm2 list 2>/dev/null || echo "   PM2 not running or no processes"
else
    echo "   PM2 not found"
fi
echo ""

# 8. Check nginx proxy configuration
echo "8. Checking nginx proxy configuration..."
if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "   Checking default nginx config:"
    grep -A 10 -B 5 "location.*contact\|location.*api\|proxy_pass" /etc/nginx/sites-enabled/default 2>/dev/null | head -30
fi
echo ""

echo "=========================================="
echo "Diagnostic complete"
echo "=========================================="

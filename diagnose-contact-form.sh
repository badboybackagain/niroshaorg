#!/bin/bash

# Diagnostic script for contact form issues
# Run this on your production server

echo "=========================================="
echo "Contact Form Diagnostic Script"
echo "=========================================="
echo ""

# 1. Check if server is running
echo "1. Checking if Node.js server is running..."
if pgrep -f "node.*server" > /dev/null; then
    echo "   ✓ Node.js server process found"
    pgrep -f "node.*server" | head -1 | xargs ps -p
else
    echo "   ✗ No Node.js server process found"
fi
echo ""

# 2. Check server port
echo "2. Checking what's listening on common ports..."
echo "   Port 3000:"
lsof -i :3000 2>/dev/null || echo "   Nothing listening on port 3000"
echo "   Port 80:"
lsof -i :80 2>/dev/null || echo "   Nothing listening on port 80"
echo "   Port 443:"
lsof -i :443 2>/dev/null || echo "   Nothing listening on port 443"
echo ""

# 3. Check web server configuration
echo "3. Checking for web server (nginx/apache)..."
if command -v nginx &> /dev/null; then
    echo "   ✓ nginx is installed"
    if [ -f /etc/nginx/sites-enabled/default ]; then
        echo "   Checking nginx config for /contact and /api/contact..."
        grep -n "contact\|/api" /etc/nginx/sites-enabled/default 2>/dev/null || echo "   No contact endpoint found in nginx config"
    fi
elif command -v apache2 &> /dev/null || command -v httpd &> /dev/null; then
    echo "   ✓ Apache is installed"
else
    echo "   No web server found (direct Node.js access?)"
fi
echo ""

# 4. Check server directory and config
echo "4. Looking for server directory..."
if [ -d "server" ]; then
    echo "   ✓ Found server directory"
    cd server
    echo "   Current directory: $(pwd)"
    echo ""
    echo "   Checking for config.js..."
    if [ -f "config.js" ]; then
        echo "   ✓ config.js exists"
        echo "   Checking allowedOrigins..."
        grep -A 5 "allowedOrigins" config.js 2>/dev/null || echo "   Could not find allowedOrigins in config.js"
    else
        echo "   ✗ config.js not found"
    fi
    echo ""
    echo "   Checking package.json..."
    if [ -f "package.json" ]; then
        echo "   ✓ package.json exists"
    else
        echo "   ✗ package.json not found"
    fi
    cd ..
else
    echo "   ✗ server directory not found in current location"
    echo "   Please run this script from the project root"
fi
echo ""

# 5. Test endpoints locally
echo "5. Testing endpoints locally..."
if [ -d "server" ]; then
    cd server
    echo "   Testing /health endpoint..."
    curl -s http://localhost:3000/health 2>/dev/null && echo "" || echo "   ✗ /health endpoint not responding"
    echo "   Testing /api/health endpoint..."
    curl -s http://localhost:3000/api/health 2>/dev/null && echo "" || echo "   ✗ /api/health endpoint not responding"
    echo "   Testing /contact endpoint..."
    curl -s -X POST http://localhost:3000/contact \
        -H "Content-Type: application/json" \
        -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"123","email":"test@test.com","serviceInterested":["Web Development"]}' \
        2>/dev/null | head -c 200 && echo "" || echo "   ✗ /contact endpoint not responding"
    cd ..
fi
echo ""

# 6. Check server logs
echo "6. Recent server logs (if available)..."
if [ -f "server/nohup.out" ]; then
    echo "   Last 20 lines of nohup.out:"
    tail -20 server/nohup.out 2>/dev/null
elif [ -f "server/logs/app.log" ]; then
    echo "   Last 20 lines of app.log:"
    tail -20 server/logs/app.log 2>/dev/null
else
    echo "   No log files found in server directory"
fi
echo ""

# 7. Check environment
echo "7. Environment check..."
echo "   NODE_ENV: ${NODE_ENV:-not set}"
echo "   PORT: ${PORT:-not set}"
echo "   Current user: $(whoami)"
echo "   Current directory: $(pwd)"
echo ""

echo "=========================================="
echo "Diagnostic complete"
echo "=========================================="

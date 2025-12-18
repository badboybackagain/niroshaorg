#!/bin/bash

# Comprehensive Production Server Debugging Script
# Run this on the production server via SSH

echo "=========================================="
echo "Production Contact Form Debugging"
echo "=========================================="
echo ""

# 1. Check server status
echo "1. SERVER STATUS"
echo "   Checking if Node.js server is running..."
if pgrep -f "node.*server" > /dev/null; then
    PID=$(pgrep -f "node.*server" | head -1)
    echo "   ✓ Server is running (PID: $PID)"
    ps -p $PID -o pid,user,cmd,etime
else
    echo "   ✗ Server is NOT running!"
fi
echo ""

# 2. Check port 3000
echo "2. PORT 3000 STATUS"
if lsof -i :3000 2>/dev/null | grep -q LISTEN; then
    echo "   ✓ Port 3000 is listening:"
    lsof -i :3000
else
    echo "   ✗ Port 3000 is NOT listening"
fi
echo ""

# 3. Test endpoints from localhost
echo "3. TESTING ENDPOINTS FROM LOCALHOST"
echo "   Testing /health..."
HEALTH=$(curl -s -w "\nHTTP_CODE:%{http_code}" http://localhost:3000/health 2>/dev/null)
HTTP_CODE=$(echo "$HEALTH" | grep "HTTP_CODE" | cut -d: -f2)
BODY=$(echo "$HEALTH" | grep -v "HTTP_CODE")
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ /health: $BODY"
else
    echo "   ✗ /health failed (HTTP $HTTP_CODE)"
fi

echo "   Testing /api/health..."
API_HEALTH=$(curl -s -w "\nHTTP_CODE:%{http_code}" http://localhost:3000/api/health 2>/dev/null)
HTTP_CODE=$(echo "$API_HEALTH" | grep "HTTP_CODE" | cut -d: -f2)
BODY=$(echo "$API_HEALTH" | grep -v "HTTP_CODE")
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ /api/health: $BODY"
else
    echo "   ✗ /api/health failed (HTTP $HTTP_CODE)"
fi

echo "   Testing /api/contact (POST)..."
CONTACT_RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -H "Origin: https://nirosha.org" \
    -d '{"fullName":"Debug Test","countryCode":"+91","whatsappNumber":"1234567890","email":"debug@test.com","serviceInterested":["Web Development"],"comments":"Debug test"}' 2>/dev/null)
HTTP_CODE=$(echo "$CONTACT_RESPONSE" | grep "HTTP_CODE" | cut -d: -f2)
BODY=$(echo "$CONTACT_RESPONSE" | grep -v "HTTP_CODE" | head -c 300)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ /api/contact: $BODY"
else
    echo "   ✗ /api/contact failed (HTTP $HTTP_CODE)"
    echo "   Response: $BODY"
fi

echo "   Testing /contact (POST)..."
CONTACT2_RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X POST http://localhost:3000/contact \
    -H "Content-Type: application/json" \
    -H "Origin: https://nirosha.org" \
    -d '{"fullName":"Debug Test","countryCode":"+91","whatsappNumber":"1234567890","email":"debug@test.com","serviceInterested":["Web Development"],"comments":"Debug test"}' 2>/dev/null)
HTTP_CODE=$(echo "$CONTACT2_RESPONSE" | grep "HTTP_CODE" | cut -d: -f2)
BODY=$(echo "$CONTACT2_RESPONSE" | grep -v "HTTP_CODE" | head -c 300)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ /contact: $BODY"
else
    echo "   ✗ /contact failed (HTTP $HTTP_CODE)"
    echo "   Response: $BODY"
fi
echo ""

# 4. Check CORS headers
echo "4. CHECKING CORS HEADERS"
echo "   Testing CORS preflight (OPTIONS)..."
CORS_RESPONSE=$(curl -s -i -X OPTIONS http://localhost:3000/api/contact \
    -H "Origin: https://nirosha.org" \
    -H "Access-Control-Request-Method: POST" \
    -H "Access-Control-Request-Headers: Content-Type" 2>/dev/null)
echo "$CORS_RESPONSE" | grep -i "access-control" || echo "   ⚠ No CORS headers found"
echo ""

# 5. Check config.js
echo "5. CHECKING CONFIG.JS"
SERVER_DIR="/var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server"
if [ -f "$SERVER_DIR/config.js" ]; then
    echo "   ✓ config.js exists"
    echo "   Allowed origins:"
    grep -A 5 "allowedOrigins" "$SERVER_DIR/config.js" 2>/dev/null | head -10
    echo ""
    echo "   Gmail user:"
    grep "user:" "$SERVER_DIR/config.js" 2>/dev/null | head -1 | sed 's/.*user: *//' | sed "s/[',\"]//g" | sed 's/^/   /'
else
    echo "   ✗ config.js not found at $SERVER_DIR/config.js"
fi
echo ""

# 6. Check for reverse proxy/load balancer
echo "6. CHECKING FOR REVERSE PROXY"
echo "   Checking nginx..."
if [ -f /etc/nginx/nginx.conf ] || [ -d /etc/nginx/sites-enabled ]; then
    echo "   ✓ nginx is installed"
    echo "   Checking nginx status..."
    systemctl status nginx 2>/dev/null | head -5 || service nginx status 2>/dev/null | head -5 || echo "   Could not check nginx status"
    echo ""
    echo "   Checking nginx config for api/contact..."
    find /etc/nginx -name "*.conf" -type f 2>/dev/null | while read conf; do
        if grep -q "api/contact\|/contact" "$conf" 2>/dev/null; then
            echo "   Found in: $conf"
            grep -n -A 5 -B 5 "api/contact\|/contact" "$conf" 2>/dev/null | head -20
        fi
    done
else
    echo "   No nginx found"
fi

echo "   Checking Apache..."
if [ -f /etc/apache2/apache2.conf ] || [ -f /etc/httpd/conf/httpd.conf ]; then
    echo "   ✓ Apache is installed"
else
    echo "   No Apache found"
fi

echo "   Checking for other web servers..."
if lsof -i :80 2>/dev/null | grep -q LISTEN; then
    echo "   ⚠ Something is listening on port 80:"
    lsof -i :80 2>/dev/null | head -3
fi
if lsof -i :443 2>/dev/null | grep -q LISTEN; then
    echo "   ⚠ Something is listening on port 443:"
    lsof -i :443 2>/dev/null | head -3
fi
echo ""

# 7. Check server logs
echo "7. RECENT SERVER LOGS"
if [ -f "$SERVER_DIR/nohup.out" ]; then
    echo "   Last 50 lines of nohup.out:"
    tail -50 "$SERVER_DIR/nohup.out" 2>/dev/null | tail -30
elif [ -f "$SERVER_DIR/logs/app.log" ]; then
    echo "   Last 50 lines of app.log:"
    tail -50 "$SERVER_DIR/logs/app.log" 2>/dev/null | tail -30
else
    echo "   No log files found"
    echo "   Checking if server outputs to stdout/stderr..."
    echo "   (If server is running in background, check with: ps aux | grep node)"
fi
echo ""

# 8. Test from external IP
echo "8. TESTING FROM EXTERNAL IP"
EXTERNAL_IP=$(curl -s ifconfig.me 2>/dev/null || curl -s ipinfo.io/ip 2>/dev/null || echo "unknown")
echo "   Server external IP: $EXTERNAL_IP"
echo "   Testing https://nirosha.org/api/contact from server..."
EXTERNAL_TEST=$(curl -s -w "\nHTTP_CODE:%{http_code}" -X POST https://nirosha.org/api/contact \
    -H "Content-Type: application/json" \
    -H "Origin: https://nirosha.org" \
    -d '{"fullName":"External Test","countryCode":"+91","whatsappNumber":"1234567890","email":"external@test.com","serviceInterested":["Web Development"],"comments":"External test"}' 2>/dev/null)
HTTP_CODE=$(echo "$EXTERNAL_TEST" | grep "HTTP_CODE" | cut -d: -f2)
BODY=$(echo "$EXTERNAL_TEST" | grep -v "HTTP_CODE" | head -c 300)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✓ External test successful: $BODY"
else
    echo "   ✗ External test failed (HTTP $HTTP_CODE)"
    echo "   Response: $BODY"
fi
echo ""

# 9. Network connectivity
echo "9. NETWORK CONNECTIVITY"
echo "   Testing DNS resolution for nirosha.org..."
if host nirosha.org 2>/dev/null | grep -q "has address"; then
    echo "   ✓ DNS resolution works"
    host nirosha.org 2>/dev/null | grep "has address" | head -3
else
    echo "   ✗ DNS resolution failed"
fi
echo ""

# 10. Process information
echo "10. PROCESS INFORMATION"
if pgrep -f "node.*server" > /dev/null; then
    PID=$(pgrep -f "node.*server" | head -1)
    echo "   Server process details:"
    ps -p $PID -f
    echo ""
    echo "   Open file descriptors:"
    lsof -p $PID 2>/dev/null | grep -E "TCP|LISTEN" | head -10
fi
echo ""

echo "=========================================="
echo "Debugging complete"
echo "=========================================="
echo ""
echo "NEXT STEPS:"
echo "1. Check browser console for errors (F12 → Console)"
echo "2. Check browser Network tab for the /api/contact request"
echo "3. Verify CORS headers in the response"
echo "4. Check if there's a reverse proxy blocking the request"
echo "5. Test with: curl -X POST https://nirosha.org/api/contact -H 'Content-Type: application/json' -d '{\"fullName\":\"Test\",\"countryCode\":\"+91\",\"whatsappNumber\":\"123\",\"email\":\"test@test.com\",\"serviceInterested\":[\"Web Development\"]}'"

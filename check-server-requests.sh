#!/bin/bash
# Script to check server logs for contact form requests

echo "=== Checking server process ==="
ps aux | grep 'node.*server' | grep -v grep

echo ""
echo "=== Checking for log output ==="
echo "If server is running with nohup, check nohup.out"
echo "If server is running in terminal, check that terminal"
echo ""

echo "=== Testing endpoint directly ==="
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://nirosha.org" \
  -d '{
    "fullName": "Server Test",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@test.com",
    "serviceInterested": ["Web Development"],
    "comments": "Test from server"
  }' 2>&1 | head -20

echo ""
echo "=== If you see server logs, they should show: ==="
echo "📧 Contact form request received"
echo "Request method: POST"
echo "Request URL: /api/contact"
echo "✅ Validation passed, processing email..."
echo "✅ Emails sent successfully!"

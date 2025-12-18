#!/bin/bash

# Quick script to start the Next.js server on production
# Run this on your server after uploading config.js

echo "=========================================="
echo "Starting Next.js Server"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "server.js" ]; then
    echo "❌ Error: server.js not found!"
    echo "Please run this script from public_html directory"
    echo "Current directory: $(pwd)"
    exit 1
fi

# Check for config.js
if [ ! -f "config.js" ]; then
    echo "⚠️  Warning: config.js not found!"
    echo "You need to upload config.js or set environment variables"
    echo ""
    echo "Options:"
    echo "  1. Upload config.js to this directory"
    echo "  2. Or set environment variables:"
    echo "     export GMAIL_USER=info@nirosha.org"
    echo "     export GMAIL_PASSWORD=your-app-password"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js not found!"
    exit 1
fi

echo "Node.js version: $(node --version)"
echo ""

# Check if PM2 is available
if command -v pm2 &> /dev/null; then
    echo "PM2 is available. Starting with PM2..."
    echo ""
    pm2 start server.js --name nirosha
    pm2 save
    echo ""
    echo "✅ Server started with PM2!"
    echo "View logs: pm2 logs nirosha"
    echo "View status: pm2 status"
else
    echo "PM2 not found. Starting directly..."
    echo "Press Ctrl+C to stop the server"
    echo ""
    node server.js
fi

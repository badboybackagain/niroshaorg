#!/bin/bash

# Script to check if static files are in the correct location on the server
# Run this on the production server to diagnose the 404 issue

echo "Checking Next.js static files location..."
echo ""

# Check if we're in the right directory
if [ -f "server.js" ]; then
    echo "✓ Found server.js (running from standalone directory)"
    CURRENT_DIR=$(pwd)
    echo "Current directory: $CURRENT_DIR"
    echo ""
    
    # Check for .next/static relative to current directory
    if [ -d ".next/static" ]; then
        STATIC_COUNT=$(find .next/static -type f 2>/dev/null | wc -l)
        echo "✓ Found .next/static with $STATIC_COUNT files"
        echo ""
        echo "Sample static files:"
        find .next/static -type f | head -10
        echo ""
        
        # Check for chunks specifically
        if [ -d ".next/static/chunks" ]; then
            CHUNK_COUNT=$(find .next/static/chunks -type f 2>/dev/null | wc -l)
            echo "✓ Found .next/static/chunks with $CHUNK_COUNT files"
            echo ""
            echo "Sample chunk files:"
            find .next/static/chunks -type f | head -5
        else
            echo "✗ ERROR: .next/static/chunks directory not found!"
        fi
    else
        echo "✗ ERROR: .next/static directory not found!"
        echo ""
        echo "Checking parent directory..."
        if [ -d "../.next/static" ]; then
            echo "⚠ Found .next/static in parent directory (wrong location)"
            echo "Static files should be at: $CURRENT_DIR/.next/static"
            echo "But found at: $(cd .. && pwd)/.next/static"
        fi
    fi
    
    echo ""
    echo "Directory structure:"
    ls -la | head -20
    echo ""
    
    if [ -d ".next" ]; then
        echo ".next directory contents:"
        ls -la .next/ | head -20
    fi
else
    echo "✗ ERROR: server.js not found!"
    echo "Please run this script from the directory containing server.js"
    echo "Usually: cd public_html/.next/standalone"
    exit 1
fi

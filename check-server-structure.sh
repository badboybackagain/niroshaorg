#!/bin/bash

# Diagnostic script to check server structure after unzipping
# Run this on your server after unzipping the deployment file

echo "=========================================="
echo "Server Structure Diagnostic"
echo "=========================================="
echo ""

echo "Current directory:"
pwd
echo ""

echo "Contents of current directory:"
ls -la
echo ""

echo "Checking for .next folder:"
if [ -d ".next" ]; then
    echo "  ✓ .next folder exists"
    echo "  Contents of .next/:"
    ls -la .next/ 2>/dev/null || echo "    (empty or not accessible)"
    
    if [ -d ".next/standalone" ]; then
        echo "  ✓ .next/standalone folder exists"
        echo "  Contents of .next/standalone/:"
        ls -la .next/standalone/ 2>/dev/null | head -20
        echo ""
        echo "  Checking for server.js:"
        if [ -f ".next/standalone/server.js" ]; then
            echo "    ✓ server.js found"
        else
            echo "    ✗ server.js NOT found"
        fi
    else
        echo "  ✗ .next/standalone folder NOT found"
        echo ""
        echo "  Available folders in .next/:"
        find .next -maxdepth 1 -type d 2>/dev/null
    fi
else
    echo "  ✗ .next folder NOT found"
fi

echo ""
echo "Checking for public folder:"
if [ -d "public" ]; then
    echo "  ✓ public folder exists"
    echo "  (showing first 10 files)"
    ls -la public/ 2>/dev/null | head -10
else
    echo "  ✗ public folder NOT found"
fi

echo ""
echo "Checking for package.json:"
if [ -f "package.json" ]; then
    echo "  ✓ package.json found"
else
    echo "  ✗ package.json NOT found"
fi

echo ""
echo "Checking for config.js:"
if [ -f "config.js" ]; then
    echo "  ✓ config.js found"
else
    echo "  ✗ config.js NOT found (you may need to upload it separately)"
fi

echo ""
echo "=========================================="
echo "Summary"
echo "=========================================="
echo ""
echo "Expected structure for standalone build:"
echo "  .next/standalone/"
echo "    ├── server.js"
echo "    ├── package.json"
echo "    ├── public/"
echo "    └── .next/"
echo "        ├── static/"
echo "        └── server/"
echo "            └── app/"
echo ""
echo "If .next/standalone/ doesn't exist, the zip may have been:"
echo "  1. Extracted in the wrong location"
echo "  2. Created incorrectly"
echo "  3. Missing files during extraction"
echo ""

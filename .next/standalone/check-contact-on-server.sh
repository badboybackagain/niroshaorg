#!/bin/bash
# Script to check Contact component on production server

cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/public_html

echo "=== Latest ContactPage file ==="
LATEST=$(ls -t assets/js/ContactPage*.js 2>/dev/null | head -1)
echo "File: $LATEST"
echo ""

echo "=== Checking for mount message ==="
if grep -q "Contact component mounted" "$LATEST" 2>/dev/null; then
    echo "✓ Found: Contact component mounted"
else
    echo "✗ NOT FOUND: Contact component mounted"
fi
echo ""

echo "=== Checking for handleSubmit ==="
if grep -q "handleSubmit" "$LATEST" 2>/dev/null; then
    echo "✓ Found: handleSubmit"
else
    echo "✗ NOT FOUND: handleSubmit"
fi
echo ""

echo "=== Console.log statements ==="
grep -o 'console\.log([^)]*)' "$LATEST" 2>/dev/null | head -5
echo ""

echo "=== File info ==="
ls -lah "$LATEST"
echo ""

echo "=== Checking index.html ==="
echo "Main script:"
grep "script.*src.*index" index.html | head -1
echo ""
echo "ContactPage might be lazy loaded (not in index.html)"

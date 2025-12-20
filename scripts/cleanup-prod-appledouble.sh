#!/bin/bash

# Script to clean up macOS AppleDouble files (._*) from production server
# Run this on the production server via SSH

echo "🧹 Cleaning up macOS AppleDouble files (._*) from production server..."
echo ""

# Count files before cleanup
BEFORE=$(find . -name "._*" -type f 2>/dev/null | wc -l | tr -d ' ')
echo "Found $BEFORE AppleDouble files"

if [ "$BEFORE" -gt 0 ]; then
    # Find and remove all ._* files
    find . -name "._*" -type f -print -delete 2>/dev/null
    
    # Count remaining ._* files
    AFTER=$(find . -name "._*" -type f 2>/dev/null | wc -l | tr -d ' ')
    
    REMOVED=$((BEFORE - AFTER))
    echo ""
    echo "✅ Removed $REMOVED AppleDouble files"
    
    if [ "$AFTER" -gt 0 ]; then
        echo "⚠️  $AFTER AppleDouble files still remain (may be in use)"
    else
        echo "✨ All AppleDouble files removed!"
    fi
else
    echo "✨ No AppleDouble files found - already clean!"
fi

echo ""
echo "Cleanup complete!"

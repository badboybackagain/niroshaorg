#!/bin/bash

# Script to clean up macOS AppleDouble files (._*) from production server
# These files are created by macOS and are not needed on Linux servers

echo "🧹 Cleaning up macOS AppleDouble files (._*) from production..."

# Find and remove all ._* files
find . -name "._*" -type f -print -delete

# Count remaining ._* files
REMAINING=$(find . -name "._*" -type f 2>/dev/null | wc -l | tr -d ' ')

if [ "$REMAINING" -eq 0 ]; then
    echo "✅ All AppleDouble files removed"
else
    echo "⚠️  $REMAINING AppleDouble files still remain"
fi

echo "✨ Cleanup complete!"

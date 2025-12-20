# Blog Deployment Fix

## Issues Found

1. **Blog images not deployed**: Only 1 image in `public/images/blog/` on production (should be 13)
2. **Blog cache missing**: `public/cache/blog/` folder is missing on production (should have ~156 files)

## Root Cause

The deployment script was:
1. Removing cache directories if `--with-cache` flag wasn't used
2. Not verifying files before/after copying to standalone
3. Not checking zip contents before uploading

## Fixes Applied

### 1. Pre-Build Blog Cache Check
- Added blog cache verification BEFORE building
- Automatically regenerates blog cache if missing
- Ensures cache exists before copying to standalone

### 2. Enhanced Standalone Copy Verification
- Verifies blog images count before copying
- Verifies blog cache count before copying
- Re-copies if counts don't match
- Shows file counts for transparency

### 3. Zip Creation Improvements
- Removed overly broad exclusion pattern (`-x "*/\.*"`)
- Added specific exclusions only for cache and git files
- Added zip content verification before upload
- Shows counts of blog images and cache files in zip

### 4. Server-Side Verification
- Added verification after unzip on server
- Checks blog images and cache file counts
- Reports what was actually extracted

## How to Deploy Now

### Standard Deployment (Recommended)
```bash
./deploy.sh
```

This will:
1. ✅ Check and regenerate blog cache if needed
2. ✅ Build Next.js production files
3. ✅ Copy public folder to standalone (including all images and cache)
4. ✅ Verify file counts before zipping
5. ✅ Create zip with all blog files
6. ✅ Verify zip contents
7. ✅ Upload and extract on server
8. ✅ Verify extraction on server

### What Gets Deployed

- ✅ All blog source images (`public/images/blog/*.png`)
- ✅ All blog cache files (`public/cache/blog/*.webp`, `*.png`)
- ✅ Blog data (`src/data/blogData.js` - bundled in Next.js)
- ✅ All Next.js build files

## Verification

After deployment, the script will show:
- Blog images count in zip
- Blog cache count in zip
- Server-side verification after extraction

If counts don't match, the script will warn you.

## Manual Verification on Server

After deployment, SSH to your server and check:
```bash
# Check blog images
ls -la public_html/public/images/blog/ | wc -l
# Should show ~14 files (13 images + README.md)

# Check blog cache
ls -la public_html/public/cache/blog/ | wc -l
# Should show ~157 files (156 cache files + directory listing)
```

## Next Steps

1. Run `./deploy.sh` again
2. Check the verification output
3. If issues persist, check server logs and file permissions

# Server-Side Blog Cache Generation

## Overview

Blog image cache is now generated **dynamically on the production server** after deployment, instead of being uploaded from local. This approach:

✅ **Reduces zip file size** - No need to upload ~156 cache files  
✅ **Always up-to-date** - Cache is generated from actual source images on server  
✅ **Handles new images automatically** - Any new blog image will be processed  
✅ **Less sync issues** - No risk of cache being out of sync with images  

## How It Works

### 1. Local Build
- Blog source images (`public/images/blog/*.png`) are included in the zip
- Blog cache (`public/cache/blog/`) is **excluded** from the zip
- Cache generation script (`scripts/generate-blog-cache-server.js`) is included

### 2. Server Deployment
- Zip is extracted on the server
- After extraction, the cache generation script runs automatically
- Script scans `public/images/blog/` for all image files
- Generates optimized cache files in `public/cache/blog/`

### 3. Cache Generation Script

The script (`scripts/generate-blog-cache-server.js`):
- Automatically detects where it's running (standalone build or project root)
- Finds all image files in `public/images/blog/`
- Extracts image slug from filename (e.g., `digital-marketing-strategy-featured.png` → `digital-marketing-strategy`)
- Generates optimized versions:
  - **Thumbnail**: 400x300 (1x and 2x)
  - **Featured**: 1200x630 (1x and 2x)
  - **Large**: 1600x900 (1x and 2x)
  - **Formats**: PNG and WebP for each size

## Requirements

### Server Requirements
- ✅ Node.js 18+ installed
- ✅ `sharp` package available (moved to `dependencies` in `package.json`)
- ✅ Write permissions to `public/cache/blog/` directory

### Package Changes
- `sharp` moved from `devDependencies` to `dependencies` (so it's available on server)

## Deployment Process

### Automatic (via deploy.sh)
```bash
./deploy.sh
```

The script will:
1. Build Next.js application
2. Copy public folder to standalone (excluding blog cache)
3. Copy cache generation script to standalone
4. Create zip file
5. Upload to server
6. Extract on server
7. **Run cache generation script automatically**
8. Verify deployment

### Manual Cache Generation

If you need to regenerate cache manually on the server:

```bash
# SSH into server
ssh user@server

# Navigate to deployment directory
cd /path/to/public_html

# Run the script
node scripts/generate-blog-cache-server.js
```

## Script Location

The script is located at:
- **Local**: `scripts/generate-blog-cache-server.js`
- **Server**: `scripts/generate-blog-cache-server.js` (in standalone build)

## Troubleshooting

### Cache Not Generated

1. **Check script exists:**
   ```bash
   ls -la scripts/generate-blog-cache-server.js
   ```

2. **Check sharp is installed:**
   ```bash
   node -e "require('sharp')"
   ```
   If error, run: `npm install sharp`

3. **Check permissions:**
   ```bash
   ls -la public/cache/
   ```
   Ensure write permissions exist

4. **Run script manually:**
   ```bash
   node scripts/generate-blog-cache-server.js
   ```
   Check for error messages

### Images Not Found

1. **Verify images exist:**
   ```bash
   ls -la public/images/blog/
   ```

2. **Check script paths:**
   The script auto-detects paths, but if issues occur, check the console output for detected paths

### Cache Files Missing

1. **Check cache directory:**
   ```bash
   ls -la public/cache/blog/
   ```

2. **Regenerate cache:**
   ```bash
   node scripts/generate-blog-cache-server.js
   ```

## Benefits

1. **Smaller Deployments**: Zip file is ~50MB smaller (no cache files)
2. **Faster Uploads**: Less data to transfer
3. **Always Fresh**: Cache is always generated from current source images
4. **Automatic**: No manual steps needed
5. **Scalable**: Works with any number of blog images

## Future Enhancements

Potential improvements:
- Cache only new/changed images (incremental generation)
- Parallel processing for faster generation
- Cache validation (check if source image changed)
- Background generation (don't block deployment)

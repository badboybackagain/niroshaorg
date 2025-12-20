# Deployment Fix for Blog Data and Images

## Issues Fixed

### 1. Blog Images Not Being Deployed
**Problem:** The deployment script was removing `public/cache/blog/` directory if `--with-cache` flag was not used.

**Solution:**
- Updated `deploy.sh` to always check and regenerate blog cache if missing
- Blog cache is now always preserved and included in deployment
- Added verification step to ensure blog cache is copied to standalone builds

### 2. Blog Data Not Being Deployed
**Problem:** Changes to `src/data/blogData.js` might not trigger deployment detection.

**Solution:**
- Added `lib` directory to change detection (line 171)
- `src/data/blogData.js` is already included in `src/` directory check
- Blog data is bundled into Next.js build, so it's automatically included

## Changes Made to deploy.sh

1. **Always ensure blog cache exists** (lines 254-263):
   - Checks if blog cache exists before deployment
   - Automatically regenerates if missing
   - Shows count of cached files

2. **Improved standalone build handling** (lines 225-243):
   - Verifies blog cache is copied to standalone builds
   - Regenerates cache if missing during standalone preparation

3. **Enhanced change detection** (line 171):
   - Added `lib` directory to source file change detection
   - Ensures sitemap and other lib files trigger deployment

## How to Deploy

### Standard Deployment (with blog cache)
```bash
./deploy.sh
```
This will:
- Check for blog cache and regenerate if needed
- Build Next.js production files
- Include blog cache in deployment
- Upload to production server

### Full Deployment (regenerate all caches)
```bash
./deploy.sh --with-cache
```
This will:
- Regenerate all image caches (blog, team, client-logos)
- Build Next.js production files
- Upload everything to production

## Verification

After deployment, verify on production:
1. Check blog cache exists: `ls -la public_html/public/cache/blog/`
2. Check blog data is working: Visit `/blog` page
3. Check new blog post: Visit the new blog post URL

## Notes

- Blog cache is now always included (not removed)
- Blog data (`src/data/blogData.js`) is bundled into Next.js build
- If a new blog post doesn't appear, ensure:
  1. Blog cache was regenerated: `npm run regenerate-blog-cache`
  2. Next.js build was run: `npm run build`
  3. Deployment included the new files

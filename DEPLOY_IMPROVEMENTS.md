# Deployment Script Improvements

## Changes Made

### 1. Fixed Parallel Transfers

**Issue:** Only one file was uploading at a time despite `PARALLEL_TRANSFERS` setting.

**Solution:** Changed from `set cmd:parallel` to `set cmd:queue-parallel` with `set cmd:queue-run 1`.

**Before:**
```bash
set cmd:parallel $PARALLEL_TRANSFERS
```

**After:**
```bash
set cmd:queue-parallel $PARALLEL_TRANSFERS
set cmd:queue-run 1
```

**Why:** `cmd:parallel` doesn't work well with `mirror` command. `cmd:queue-parallel` enables true parallel transfers by queuing multiple file operations simultaneously.

### 2. Improved File Existence Checking

**Issue:** Cache files and unchanged files were being uploaded every time.

**Solution:** 
- Added `--only-newer` flag (already present, but now enforced)
- Excluded cache files and temporary files from upload
- Enhanced exclusion patterns

**Exclusions Added:**
- `*.timestamp-*` - Timestamp files
- `*.cache` - Cache files
- `.vite/**` - Vite cache directory
- `.cache/**` - General cache directory
- `**/cache/**` - Any cache subdirectories
- `**/cache` - Cache directories
- `**/*.map.cache` - Source map cache files
- `**/*.vite-*` - Vite temporary files

**How `--only-newer` Works:**
- Compares local file timestamp with remote file timestamp
- Only uploads if:
  - File doesn't exist on server
  - Local file is newer than remote file
  - File sizes are different
- Skips files that are identical or older

### 3. Better Cache File Handling

The script now automatically excludes:
- Build cache files
- Timestamp files
- Vite cache directories
- Any `cache` directories in the dist folder

## Testing

After these changes:

1. **Parallel transfers should work:**
   - You should see multiple files uploading simultaneously
   - Check the upload progress - files should transfer in parallel

2. **Cache files should be skipped:**
   - Cache files won't appear in upload list
   - Unchanged files won't be re-uploaded

3. **Faster deployments:**
   - Only changed files are uploaded
   - Parallel transfers speed up the process

## Verification

To verify parallel transfers are working:

1. **Watch the upload output:**
   ```bash
   ./deploy.sh
   ```
   You should see multiple files being transferred at once.

2. **Check upload speed:**
   - Should be noticeably faster with parallel transfers
   - Multiple files should show progress simultaneously

3. **Verify cache exclusion:**
   - Check that `dist/images/team/cache` and similar directories are not uploaded
   - Unchanged files should be skipped

## Configuration

You can adjust parallel transfer count:

```bash
export PARALLEL_TRANSFERS=20  # Increase for faster uploads (default: 10)
./deploy.sh
```

Or add to `.env.deploy`:
```env
PARALLEL_TRANSFERS=20
```

## Troubleshooting

### Still seeing one file at a time?
- Check lftp version: `lftp --version`
- Some older versions may not support queue-parallel
- Try updating lftp: `brew upgrade lftp` (Mac) or `apt-get update && apt-get upgrade lftp` (Linux)

### Cache files still uploading?
- Verify exclusion patterns match your cache file names
- Check if cache files are in unexpected locations
- Use `--full` flag once to see what's being excluded

### Files not skipping even when unchanged?
- `--only-newer` requires accurate file timestamps
- Some FTP servers don't preserve timestamps correctly
- Try using `--full` once, then subsequent deployments should skip unchanged files

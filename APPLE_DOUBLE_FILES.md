# macOS AppleDouble Files (._*)

## What are these files?

Files starting with `._` are **macOS AppleDouble files** (also called resource forks). macOS automatically creates these files to store:

- Extended attributes (xattr)
- Resource forks
- Metadata (like Finder info, custom icons, etc.)

## Why are they on the server?

These files get created when:
1. Files are copied from macOS to other systems
2. Files are archived using tar/zip on macOS
3. Files are transferred via SCP/FTP from macOS

## Are they needed?

**No!** These files are:
- ❌ Not needed on Linux servers
- ❌ Not needed for your application
- ❌ Just clutter taking up space
- ❌ Can cause confusion

## Solution

### Prevention (Already Fixed)

The deployment script now excludes these files when creating archives:
- `--exclude="._*"` - Excludes all files starting with `._`
- `--exclude="*/._*"` - Excludes `._*` files in subdirectories
- `--no-xattrs` - Prevents creating extended attributes

### Cleanup Existing Files

To remove existing `._*` files on your production server:

**Option 1: SSH and run manually**
```bash
ssh user@server
cd /path/to/public_html
find . -name "._*" -type f -delete
```

**Option 2: Use the cleanup script**
```bash
# On server
cd /path/to/public_html
./scripts/cleanup-appledouble-files.sh
```

**Option 3: One-liner**
```bash
find . -name "._*" -type f -print -delete
```

## Verification

After cleanup, verify they're gone:
```bash
find . -name "._*" -type f | wc -l
# Should return 0
```

## Future Deployments

The deployment script now automatically:
1. ✅ Excludes `._*` files from archives
2. ✅ Cleans up any existing `._*` files after extraction
3. ✅ Prevents them from being created

You shouldn't see these files in future deployments!

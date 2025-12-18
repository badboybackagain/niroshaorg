# Fix .env.deploy File

## Issue

Your `.env.deploy` file has a password with special characters (`#`, `;`) that bash interprets as commands. The password needs to be quoted.

## Current Format (Causing Error)

```env
FTP_PASS=g#X8Ti#?Ok79vN;N
```

The `#` is interpreted as a comment, and `;` as a command separator.

## Fixed Format

**Option 1: Use Quotes (Recommended)**

```env
FTP_USER=abhishek@nirosha.org
FTP_PASS='g#X8Ti#?Ok79vN;N'
FTP_HOST=37.27.54.247
FTP_PORT=21
FTP_PATH='/'
```

**Option 2: Use Double Quotes**

```env
FTP_USER=abhishek@nirosha.org
FTP_PASS="g#X8Ti#?Ok79vN;N"
FTP_HOST=37.27.54.247
FTP_PORT=21
FTP_PATH='/'
```

## Quick Fix Command

```bash
# Backup your current file
cp .env.deploy .env.deploy.backup

# Edit the file and add quotes around FTP_PASS
# Or use sed to automatically fix it:
sed -i.bak "s|^FTP_PASS=\(.*\)|FTP_PASS='\1'|" .env.deploy
```

## Verify Fix

After fixing, test loading:

```bash
source .env.deploy
echo "FTP_USER: $FTP_USER"
echo "FTP_PASS: $FTP_PASS"
echo "FTP_HOST: $FTP_HOST"
```

You should see all values correctly loaded without errors.

# Zip Deployment Guide

## 🚀 Quick Start

Use the `--zip` flag to create a zip file and upload it to your server:

```bash
./deploy.sh --zip
```

## What Happens

1. **Build**: Next.js application is built
2. **Zip**: Creates a zip file of the deployment files
3. **Upload**: Uploads the zip file to your server
4. **Config**: Also uploads `config.js` separately (if it exists)

## 📦 Zip File Contents

### For Standalone Build:
The zip contains the contents of `.next/standalone/` folder:
- `server.js` (entry point)
- `package.json`
- `node_modules/` (if included)
- `public/` (static files)
- `.next/` (build output)

### For Regular Build:
The zip contains:
- `.next/` folder
- `public/` folder
- `package.json`
- `package-lock.json`

## 📍 Zip File Location

- **Local**: `/tmp/nirosha-deployment-YYYYMMDD-HHMMSS.zip`
- **Server**: `$FTP_PATH/nirosha-deployment-YYYYMMDD-HHMMSS.zip`

## 🔧 On Server - Manual Unzip

After the zip file is uploaded, SSH into your server and:

### Step 1: Navigate to deployment directory
```bash
cd /path/to/public_html
# or wherever your FTP_PATH points to
```

### Step 2: Unzip the file
```bash
unzip nirosha-deployment-*.zip
```

### Step 3: For Standalone Build
```bash
# Files are extracted to current directory
# You should see .next/standalone/ folder

cd .next/standalone
npm install --production
node server.js

# Or with PM2:
pm2 start server.js --name nirosha
pm2 save
```

### Step 4: For Regular Build
```bash
# Files are extracted to current directory
# You should see .next/, public/, package.json

npm install --production
npm start

# Or with PM2:
pm2 start npm --name nirosha -- start
```

### Step 5: Clean up
```bash
# Delete the zip file after successful deployment
rm nirosha-deployment-*.zip
```

## ✅ Verification

After unzipping, verify the structure:

```bash
# For standalone build
ls -la .next/standalone/server.js
ls -la .next/standalone/.next/server/app/api/contact/route.js

# For regular build
ls -la .next/server/app/api/contact/route.js
ls -la public/
```

## 🔒 Config File

If you're using `config.js`:
- It's uploaded separately (not in the zip)
- Location: `$FTP_PATH/config.js`
- Set permissions: `chmod 600 config.js`

## 💡 Benefits of Zip Mode

1. **Faster Upload**: Single file transfer instead of thousands
2. **More Reliable**: Less prone to connection issues
3. **Atomic**: All files arrive together or not at all
4. **Easier Verification**: One file to check instead of many
5. **Manual Control**: You control when and how to extract

## 🐛 Troubleshooting

### "zip command not found"
Install zip:
```bash
# macOS (usually pre-installed)
# Linux
sudo apt-get install zip
```

### "Failed to create zip file"
- Check disk space: `df -h /tmp`
- Check permissions: `ls -la /tmp`
- Try different location: Edit `ZIP_PATH` in deploy.sh

### "Unzip fails on server"
- Check disk space on server
- Verify zip file is complete: `ls -lh nirosha-deployment-*.zip`
- Try: `unzip -t nirosha-deployment-*.zip` (test zip integrity)

### "Files extracted to wrong location"
- Make sure you're in the correct directory before unzipping
- Check `pwd` before running `unzip`
- The zip contains relative paths, so extract in the right place

## 📝 Example Workflow

```bash
# 1. Build and create zip
./deploy.sh --zip

# 2. SSH to server
ssh user@server

# 3. Navigate to deployment directory
cd /path/to/public_html

# 4. Unzip
unzip nirosha-deployment-20241218-143022.zip

# 5. For standalone build
cd .next/standalone
npm install --production
node server.js

# 6. Clean up
cd ../..
rm nirosha-deployment-*.zip
```

## 🎯 Summary

- Use `./deploy.sh --zip` to create and upload zip file
- SSH to server and navigate to `$FTP_PATH`
- Run `unzip nirosha-deployment-*.zip`
- Follow the instructions shown after upload
- Delete zip file after successful deployment

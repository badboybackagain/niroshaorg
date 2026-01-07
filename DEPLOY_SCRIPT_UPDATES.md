# Deploy Script Updates - Folder Structure Creation

## ✅ Changes Made

The `deploy.sh` script has been updated to automatically create the proper folder structure on your production server and ensure files are placed correctly.

## 🆕 New Features

### 1. **Automatic Directory Creation**
The script now creates the necessary directory structure on the server before uploading files:

**For Standalone Build:**
- Creates `.next/standalone/`
- Creates `.next/standalone/.next/`
- Creates `.next/standalone/.next/server/`
- Creates `.next/standalone/.next/static/`
- Creates `.next/standalone/public/`

**For Regular Build:**
- Creates `.next/`
- Creates `.next/server/`
- Creates `.next/static/`
- Creates `public/`

### 2. **Automatic config.js Upload**
If you have a `config.js` file in your project root, it will be automatically uploaded to the server root (same level as `.next/`).

### 3. **Better Error Handling**
The script now ensures directories exist before attempting to upload files, preventing upload failures.

## 📁 Final Server Structure

After deployment, your `public_html` (or FTP_PATH) will have:

```
public_html/
├── .next/
│   └── standalone/              ← Standalone build
│       ├── server.js           ← Entry point
│       ├── package.json
│       ├── node_modules/
│       ├── public/             ← Static files
│       └── .next/
│           ├── static/         ← Static assets
│           └── server/         ← Server-side code
│               └── app/        ← Your routes
│                   ├── api/
│                   │   └── contact/
│                   │       └── route.js
│                   ├── about/
│                   ├── blog/
│                   └── ...
├── config.js                    ← Config file (if using config file approach)
└── (other files)
```

## 🚀 How to Use

### 1. Build and Deploy
```bash
./deploy.sh
```

The script will:
1. ✅ Build Next.js application
2. ✅ Create directory structure on server
3. ✅ Upload all files to correct locations
4. ✅ Upload config.js (if it exists)

### 2. On Server - Start the Application

```bash
# Navigate to deployment directory
cd public_html

# Go to standalone folder
cd .next/standalone

# Install dependencies (first time only)
npm install --production

# Start the server
node server.js

# Or use PM2 for process management
pm2 start server.js --name nirosha
pm2 save
```

### 3. Config File Setup (if using config.js)

If you're using the config file approach:

1. **Create config.js locally:**
   ```bash
   cp config.example.js config.js
   # Edit config.js with your Gmail credentials
   ```

2. **Deploy:**
   ```bash
   ./deploy.sh
   ```
   The script will automatically upload `config.js` to `public_html/config.js`

3. **On server, verify:**
   ```bash
   ls -la public_html/config.js
   chmod 600 public_html/config.js  # Set secure permissions
   ```

## 🔍 Verification

After deployment, verify the structure:

```bash
# Check entry point exists
ls -la public_html/.next/standalone/server.js

# Check API route exists
ls -la public_html/.next/standalone/.next/server/app/api/contact/route.js

# Check public folder exists
ls -la public_html/.next/standalone/public/

# Check config.js (if using)
ls -la public_html/config.js
```

## 📝 What Changed in deploy.sh

1. **Added directory creation step** before file uploads
2. **Added config.js upload** if file exists locally
3. **Updated instructions** to show correct paths
4. **Improved error messages** with correct file locations

## ⚠️ Important Notes

1. **First Deployment**: Since you deleted all files, the script will create everything from scratch
2. **Directory Permissions**: Make sure your FTP user has permission to create directories
3. **Config File**: If `config.js` exists locally, it will be uploaded automatically
4. **Node Modules**: The standalone build includes `node_modules/`, but you may need to run `npm install --production` on the server if some dependencies are missing

## 🐛 Troubleshooting

### "Directory creation failed"
- Check FTP user permissions
- Verify FTP_PATH is correct
- Try creating directories manually via FTP client first

### "config.js not uploaded"
- Make sure `config.js` exists in project root (not in `.next/standalone/`)
- Check file permissions locally: `ls -la config.js`
- Upload manually if needed: `scp config.js user@server:/path/to/public_html/config.js`

### "Cannot find module after deployment"
- Run `npm install --production` in `.next/standalone/` folder on server
- Check that `node_modules/` was uploaded correctly

## ✅ Summary

The deploy script now:
- ✅ Creates proper folder structure automatically
- ✅ Uploads files to correct locations
- ✅ Handles config.js upload automatically
- ✅ Works with empty server directories (fresh deployment)

Just run `./deploy.sh` and everything will be set up correctly!




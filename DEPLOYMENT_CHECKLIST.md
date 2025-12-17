# Node.js Email Server Deployment Checklist

## Files to Upload to Your Hosting Server

### Required Files (from `server/` folder):

✅ **server.js** - Main server file  
✅ **package.json** - Dependencies and scripts  
✅ **package-lock.json** - Locked dependency versions (optional but recommended)

### Files NOT to Upload:

❌ **.env** - Never upload this! Set environment variables in hosting control panel  
❌ **.env.example** - Example file, not needed on server  
❌ **node_modules/** - Will be installed on server  
❌ **.gitignore** - Not needed on server  
❌ **README.md** - Documentation, not needed on server  
❌ **TROUBLESHOOTING.md** - Documentation, not needed on server  
❌ **test-smtp.js** - Testing script, not needed on server  

## Upload Methods

### Option 1: Using FTP/SFTP

1. **Connect to your server** using FileZilla, Cyberduck, or similar
2. **Navigate to your Node.js app directory** (usually provided by your host)
3. **Create a `server` folder** if it doesn't exist
4. **Upload these files:**
   - `server/server.js`
   - `server/package.json`
   - `server/package-lock.json` (if exists)

### Option 2: Using Git (if your host supports it)

1. **SSH into your server:**
   ```bash
   ssh user@your-server.com
   ```

2. **Navigate to your app directory:**
   ```bash
   cd /path/to/your/node-app
   ```

3. **Clone or pull your repository:**
   ```bash
   git clone https://github.com/your-username/niroshaorg.git
   cd niroshaorg/server
   ```

4. **Install dependencies:**
   ```bash
   npm install --production
   ```

### Option 3: Using Hosting Control Panel File Manager

1. **Login to your hosting control panel**
2. **Open File Manager**
3. **Navigate to your Node.js app directory**
4. **Create `server` folder**
5. **Upload the required files** via the web interface

## After Uploading Files

### 1. Install Dependencies

Your hosting provider might do this automatically, but if not:

**Via SSH:**
```bash
cd /path/to/your/app/server
npm install --production
```

**Via Hosting Control Panel:**
- Some hosts have a "Install Dependencies" button
- Or it might auto-install when you deploy

### 2. Set Environment Variables

**In your hosting control panel**, add these environment variables:

- `GMAIL_USER` = `your-email@gmail.com`
- `GMAIL_PASSWORD` = `your-16-char-app-password`
- `PORT` = `3000` (optional, defaults to 3000)
- `ALLOWED_ORIGINS` = `https://nirosha.org,https://www.nirosha.org`

**Important:** Never put these in files you upload! Always use environment variables.

### 3. Verify Deployment

1. **Check server logs** in your hosting control panel
2. **Test health endpoint:**
   ```bash
   curl https://your-server-url/health
   ```
3. **Test contact endpoint** (from your website)

## Directory Structure on Server

Your server directory should look like this:

```
/path/to/your/app/
└── server/
    ├── server.js          ✅ Required
    ├── package.json       ✅ Required
    ├── package-lock.json  ✅ Recommended
    └── node_modules/      ✅ Auto-generated (don't upload)
```

## Quick Upload Checklist

- [ ] Upload `server/server.js`
- [ ] Upload `server/package.json`
- [ ] Upload `server/package-lock.json` (if exists)
- [ ] Set environment variables in hosting control panel
- [ ] Verify `node_modules` will be installed (or install manually)
- [ ] Test health endpoint after deployment
- [ ] Update frontend with production API URL

## Troubleshooting

### "Cannot find module" errors
- Make sure `node_modules` is installed
- Run `npm install --production` in the server directory

### "Port already in use"
- Check if another app is using port 3000
- Change PORT environment variable if needed

### Environment variables not working
- Verify they're set in hosting control panel (not in .env file)
- Restart the Node.js app after setting variables
- Check variable names match exactly (case-sensitive)

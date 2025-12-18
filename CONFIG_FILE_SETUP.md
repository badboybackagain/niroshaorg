# Config File Setup for Next.js (Without Environment Variables)

If your hosting provider doesn't support environment variables, you can use a `config.js` file instead.

## 🚀 Quick Setup

### Step 1: Create config.js file

On your **local machine**, create the config file:

```bash
cp config.example.js config.js
```

### Step 2: Edit config.js

Open `config.js` and add your Gmail credentials:

```javascript
export const config = {
  gmail: {
    user: 'info@nirosha.org',  // Your Gmail address
    password: 'your-16-char-app-password'  // Your 16-character App Password
  }
};
```

### Step 3: Upload config.js to Server

**IMPORTANT:** Upload `config.js` to your server, but **NEVER commit it to git**!

**Via SFTP/SSH:**
```bash
scp config.js user@server:/path/to/project/config.js
```

**Via FTP:**
- Upload `config.js` to the **project root** directory (same level as `package.json`)

**Via deploy script:**
- The `config.js` file is in `.gitignore`, so it won't be uploaded automatically
- Manually upload it after deployment

### Step 4: Verify File Permissions

Make sure `config.js` has proper permissions (readable by Node.js, not world-readable):

```bash
chmod 600 config.js  # Owner read/write only
```

Or via SSH:
```bash
ssh user@server
cd /path/to/project
chmod 600 config.js
```

## 📁 File Structure on Server

Your project directory should have:

```
project/
├── app/                    ✅ (committed to git)
├── public/                 ✅ (committed to git)
├── package.json            ✅ (committed to git)
├── config.js               ⚠️  (NOT in git, upload manually)
├── config.example.js       ✅ (committed to git, example only)
├── .next/                  ✅ (build output)
└── node_modules/           ✅ (installed on server)
```

## 🔒 Security Best Practices

### ✅ DO:
- Keep `config.js` in `.gitignore` (already done)
- Use file permissions `600` (owner read/write only)
- Use Gmail App Passwords (not regular password)
- Rotate passwords regularly
- Upload `config.js` via secure SFTP/SSH

### ❌ DON'T:
- Commit `config.js` to git
- Share `config.js` in chat/email
- Make `config.js` world-readable
- Use regular Gmail password
- Upload `config.js` via public FTP without encryption

## 🔄 Priority Order

The API route checks credentials in this order:

1. **config.js file** (if exists) - Highest priority
2. **Environment variables** (if config.js doesn't exist)
3. **Error** (if neither exists)

## ✅ Verification

After setting up `config.js`, test:

1. **Check file exists on server:**
   ```bash
   ls -la config.js
   ```
   Should show: `-rw-------` (600 permissions)

2. **Test contact form:**
   - Submit the contact form on your website
   - Check server logs for: "✅ Loaded configuration from config.js file"
   - Verify emails are sent successfully

3. **Check server logs:**
   ```bash
   # If using PM2
   pm2 logs nirosha
   
   # Or check Next.js logs
   # Should see: "✅ Loaded configuration from config.js file"
   ```

## 🐛 Troubleshooting

### "Gmail credentials not configured"
- Check `config.js` exists on server in project root
- Verify file has correct format (JavaScript ES module, not JSON)
- Check file permissions (should be readable): `chmod 600 config.js`
- Verify file is in project root (same directory as `package.json`)

### "Cannot find module './config.js'"
- Make sure `config.js` is in the project root directory
- Verify file name is exactly `config.js` (case-sensitive)
- Check file is not in a subdirectory

### Config not loading
- Check file syntax (valid JavaScript ES module)
- Verify file exports `config` or default export
- Check file permissions: `ls -la config.js`
- Look for errors in server logs

### "Module not found: '@/lib/config-loader'"
- Make sure `lib/config-loader.js` exists
- Verify Next.js path alias `@` is configured in `tsconfig.json` or `jsconfig.json`
- Try restarting the Next.js server

## 📝 Example config.js

```javascript
/**
 * Configuration file for Next.js API routes
 * 
 * IMPORTANT: This file is in .gitignore - NEVER commit it to git!
 */

export const config = {
  gmail: {
    user: 'info@nirosha.org',
    password: 'rxljjbbpwgctunwj'  // 16-character App Password
  }
};

export default config;
```

## 🔄 Updating Credentials

If you need to update credentials:

1. **Edit config.js locally:**
   ```bash
   nano config.js
   ```

2. **Upload to server:**
   ```bash
   scp config.js user@server:/path/to/project/config.js
   ```

3. **Set permissions:**
   ```bash
   ssh user@server
   cd /path/to/project
   chmod 600 config.js
   ```

4. **Restart Next.js:**
   ```bash
   # If using PM2
   pm2 restart nirosha
   
   # Or restart your Next.js process
   ```

## 🆘 Alternative: SSH Environment Variables

If you have SSH access but prefer environment variables:

### Option 1: Set in ~/.bashrc

```bash
ssh user@server
nano ~/.bashrc
```

Add at the end:
```bash
export GMAIL_USER="info@nirosha.org"
export GMAIL_PASSWORD="your-app-password"
```

Then reload:
```bash
source ~/.bashrc
```

### Option 2: Create startup script

Create `start.sh`:
```bash
#!/bin/bash
export GMAIL_USER="info@nirosha.org"
export GMAIL_PASSWORD="your-app-password"
npm start
```

Make it executable:
```bash
chmod +x start.sh
```

Then run:
```bash
./start.sh
```

---

**Summary**: Create `config.js` from `config.example.js`, add your Gmail credentials, upload to server root, set permissions to 600, and restart Next.js. The config file approach works perfectly for hosting without environment variable support!

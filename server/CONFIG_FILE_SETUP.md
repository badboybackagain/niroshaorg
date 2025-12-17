# Config File Setup (For Hosting Without Environment Variables UI)

If your hosting provider doesn't support environment variables in the UI, you can use a `config.js` file instead.

## Quick Setup

### Step 1: Create config.js file

On your **local machine**, create the config file:

```bash
cd server
cp config.example.js config.js
```

### Step 2: Edit config.js

Open `config.js` and add your Gmail credentials:

```javascript
export const config = {
  gmail: {
    user: 'your-email@gmail.com',  // Your Gmail address
    password: 'abcdefghijklmnop'    // Your 16-character App Password
  },
  
  port: 3000,
  
  allowedOrigins: [
    'https://nirosha.org',
    'https://www.nirosha.org'
  ]
};
```

### Step 3: Upload config.js to Server

**IMPORTANT:** Upload `config.js` to your server, but **NEVER commit it to git**!

**Via SFTP/SSH:**
```bash
scp server/config.js user@server:/path/to/server/config.js
```

**Via FTP:**
- Upload `config.js` to the `server/` directory on your server

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
cd /path/to/server
chmod 600 config.js
```

## Security Best Practices

### ✅ DO:
- Keep `config.js` in `.gitignore` (already done)
- Use file permissions `600` (owner read/write only)
- Use Gmail App Passwords (not regular password)
- Rotate passwords regularly

### ❌ DON'T:
- Commit `config.js` to git
- Share `config.js` in chat/email
- Make `config.js` world-readable
- Use regular Gmail password

## File Structure on Server

Your server directory should have:

```
server/
├── server.js          ✅ (committed to git)
├── package.json       ✅ (committed to git)
├── config.js          ⚠️  (NOT in git, upload manually)
├── config.example.js  ✅ (committed to git, example only)
└── node_modules/      ✅ (installed on server)
```

## Alternative: SSH Environment Variables

If you have SSH access, you can also set environment variables via SSH:

### Option 1: Set in ~/.bashrc

```bash
ssh user@server
nano ~/.bashrc
```

Add at the end:
```bash
export GMAIL_USER="your-email@gmail.com"
export GMAIL_PASSWORD="your-app-password"
export ALLOWED_ORIGINS="https://nirosha.org,https://www.nirosha.org"
```

Then reload:
```bash
source ~/.bashrc
```

### Option 2: Create startup script

Create `server/start.sh`:

```bash
#!/bin/bash
export GMAIL_USER="your-email@gmail.com"
export GMAIL_PASSWORD="your-app-password"
export ALLOWED_ORIGINS="https://nirosha.org,https://www.nirosha.org"
node server.js
```

Make it executable:
```bash
chmod +x start.sh
```

Then update your hosting "Startup command" to:
```
./start.sh
```

## Priority Order

The server checks credentials in this order:

1. **config.js file** (if exists) - Highest priority
2. **Environment variables** (if set)
3. **Error** (if neither exists)

## Verification

After setting up `config.js`, test:

1. **Check server starts:**
   ```bash
   node server.js
   ```
   Should see: "Gmail configuration: User: your-email@gmail.com"

2. **Test health endpoint:**
   ```bash
   curl http://localhost:3000/health
   ```

3. **Test email sending** via contact form

## Troubleshooting

### "Gmail credentials not configured"
- Check `config.js` exists on server
- Verify file has correct format (JavaScript, not JSON)
- Check file permissions (should be readable)

### "Cannot find module './config.js'"
- Make sure `config.js` is in the same directory as `server.js`
- Verify file name is exactly `config.js` (case-sensitive)

### Config not loading
- Check file syntax (valid JavaScript)
- Verify file is in `server/` directory
- Check file permissions: `ls -la config.js`

## Quick Reference

**Create config:**
```bash
cp config.example.js config.js
# Edit config.js with your credentials
```

**Upload to server:**
```bash
scp server/config.js user@server:/path/to/server/
```

**Set permissions:**
```bash
chmod 600 config.js
```

**Test:**
```bash
node server.js
```

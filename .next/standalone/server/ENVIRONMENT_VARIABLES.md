# Setting Environment Variables for Email Server

## ⚠️ IMPORTANT: Never Put Credentials in Code Files!

**DO NOT:**
- ❌ Put credentials in `server.js`
- ❌ Commit `.env` file to git
- ❌ Hardcode credentials anywhere in the code
- ❌ Share credentials in chat/email

**DO:**
- ✅ Use environment variables in hosting control panel
- ✅ Keep `.env` file local only (already in .gitignore)
- ✅ Use different credentials for development and production

## Where to Set Environment Variables

### Option 1: Hosting Control Panel (Recommended for Production)

Most hosting providers have an "Environment Variables" or "Config Vars" section:

1. **Login to your hosting control panel**
2. **Navigate to your Node.js app settings**
3. **Look for:**
   - "Environment Variables"
   - "Config Vars"
   - "App Settings"
   - "Environment"
   - "Secrets"

4. **Add these variables:**
   ```
   GMAIL_USER = your-email@gmail.com
   GMAIL_PASSWORD = your-16-char-app-password
   ALLOWED_ORIGINS = https://nirosha.org,https://www.nirosha.org
   PORT = 3000
   ```

### Option 2: .env File (Local Development Only)

For **local development only**, create a `.env` file in the `server/` directory:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-16-char-app-password
PORT=3000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173
```

**Important:** This file is already in `.gitignore` and should NEVER be committed to git.

### Option 3: System Environment Variables (Advanced)

If you have SSH access and want to set system-wide:

```bash
# Add to ~/.bashrc or ~/.profile
export GMAIL_USER="your-email@gmail.com"
export GMAIL_PASSWORD="your-16-char-app-password"
export ALLOWED_ORIGINS="https://nirosha.org,https://www.nirosha.org"
```

Then reload:
```bash
source ~/.bashrc
```

## How the Server Reads Environment Variables

The server reads from:
1. **System environment variables** (highest priority)
2. **`.env` file** (if exists, for local development)
3. **Default values** (if neither exists)

## Setting Variables by Hosting Provider

### cPanel
1. Go to **Node.js App** → **Your App**
2. Click **Environment Variables**
3. Add each variable

### Heroku
```bash
heroku config:set GMAIL_USER=your-email@gmail.com
heroku config:set GMAIL_PASSWORD=your-app-password
```

Or via dashboard:
1. Go to **Settings** → **Config Vars**
2. Click **Reveal Config Vars**
3. Add variables

### Railway
1. Go to your project → **Variables**
2. Add new variables

### Render
1. Go to your service → **Environment**
2. Add environment variables

### DigitalOcean App Platform
1. Go to **Settings** → **App-Level Environment Variables**
2. Add variables

### Cloudflare Workers
1. Go to **Workers** → **Your Worker** → **Settings** → **Variables**
2. Add variables (use **Encrypted** for secrets)

### Generic Hosting
Look for:
- "Environment Variables"
- "Config"
- "Settings" → "Environment"
- "Secrets"

## Required Variables

### GMAIL_USER
- **Value:** Your full Gmail address
- **Example:** `yourname@gmail.com`
- **Required:** Yes

### GMAIL_PASSWORD
- **Value:** Your 16-character Gmail App Password
- **Example:** `abcdefghijklmnop` (no spaces, exactly 16 chars)
- **Required:** Yes
- **Security:** This is sensitive! Never share or commit.

### ALLOWED_ORIGINS (Optional)
- **Value:** Comma-separated list of allowed origins
- **Example:** `https://nirosha.org,https://www.nirosha.org`
- **Default:** Allows all origins (`*`)
- **Required:** No (but recommended for production)

### PORT (Optional)
- **Value:** Port number
- **Example:** `3000`
- **Default:** `3000`
- **Required:** No

## Verification

After setting variables, verify they're loaded:

1. **Check server logs** when it starts - you should see:
   ```
   === Environment Check ===
   GMAIL_USER: Set (your-email@gmail.com)
   GMAIL_PASSWORD: Set (16 characters)
   ```

2. **Test the health endpoint:**
   ```bash
   curl https://your-server-url/health
   ```

3. **Test sending an email** via the contact form

## Security Checklist

- [ ] Credentials are set in hosting control panel (not in code)
- [ ] `.env` file is in `.gitignore` (already done)
- [ ] No credentials in git history
- [ ] Using App Password (not regular Gmail password)
- [ ] Different credentials for dev and production
- [ ] `ALLOWED_ORIGINS` is set for production
- [ ] Regular password rotation

## Troubleshooting

### "Gmail credentials not configured"
- Environment variables not set in hosting control panel
- Variable names don't match exactly (case-sensitive)
- Server needs to be restarted after setting variables

### Variables not loading
- Restart your Node.js app after setting variables
- Check variable names match exactly (case-sensitive)
- Verify no extra spaces in values
- Check hosting provider documentation

### Still using old credentials
- Clear any cached values
- Restart the Node.js app
- Some hosts require a full redeploy

## Quick Reference

**For Production:**
```
Set in hosting control panel → Environment Variables
```

**For Local Development:**
```
Create server/.env file (already in .gitignore)
```

**Never:**
```
❌ Hardcode in server.js
❌ Commit to git
❌ Share in chat/email
```

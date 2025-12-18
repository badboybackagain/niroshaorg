# Fix Config Loader Issue

## 🔍 Problem

The contact form is returning a 500 error:
```
Gmail credentials not configured. Please contact the administrator.
```

Even though `config.js` exists on the server.

## ✅ Solution

I've updated `lib/config-loader.js` to:
1. Use `process.cwd()` to find the project root (where `server.js` runs from)
2. Add better error logging to debug the issue
3. Use absolute file:// URLs for ES module imports

## 🚀 Next Steps

You need to **rebuild and redeploy** your Next.js application with the fixed config-loader:

### Option 1: Rebuild and Deploy (Recommended)

1. **Rebuild locally:**
   ```bash
   npm run build
   ```

2. **Create new zip:**
   ```bash
   ./deploy.sh --zip
   ```

3. **Upload the new zip to server** and unzip it (replacing the old files)

4. **Restart the Node.js app** in your hosting panel

### Option 2: Quick Fix - Add Debug Logging

If you want to see what's happening without rebuilding, you can check the server logs. The updated config-loader will now log:
- Where it's looking for config.js
- Whether the file exists
- Any import errors

## 🔍 Verify on Server

After redeploying, check the server logs to see:
```
🔍 Looking for config.js at: /var/www/.../public_html/config.js
🔍 Project root: /var/www/.../public_html
✅ config.js file found
✅ Loaded configuration from config.js file
```

## 📝 Alternative: Use Environment Variables

If the config file approach continues to have issues, you can use environment variables instead:

In your hosting panel's Node.js deployment settings, add environment variables:
- `GMAIL_USER=info@nirosha.org`
- `GMAIL_PASSWORD=rxljjbbpwgctunwj`

The config-loader will automatically use environment variables if the config file isn't found.

## 🐛 Why This Happened

In standalone builds, the file structure is different:
- `lib/config-loader.js` is compiled into `.next/server/...`
- The relative path calculation was wrong
- Using `process.cwd()` (the working directory) is more reliable

The fix ensures config.js is found in the same directory where `server.js` runs from.

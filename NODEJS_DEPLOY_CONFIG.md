# Node.js Deployment Configuration for Next.js

## 📋 Configuration Values for Your Hosting Panel

Based on your server structure, here are the values to fill in:

### ✅ Deployment Type
**Select:** `Automatic (Production)`
- This ensures your app starts automatically and restarts if it crashes

### ✅ Node Version
**Select:** `stable` (or the latest available version)
- Next.js works with Node.js 18+ (you have v25.2.1, which is perfect)

### ⚠️ Startup Command
**Change from:** `npm start`
**To:** `node server.js`

**Why?** 
- Your Next.js standalone build has `server.js` as the entry point
- `npm start` would look for a `start` script in `package.json`
- `node server.js` directly runs the standalone server

### 🔴 Working Directory (CRITICAL - Currently Blank!)
**Fill with:** `/var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/public_html`

**Why?**
- This is where your `server.js` and `package.json` are located
- The hosting panel needs to know where to run the command from
- Without this, it won't find your application

### ✅ Proxy Enabled
**Keep:** `Enabled` (blue/on)
- This allows OLS to forward traffic from `https://nirosha.org` to your Node.js app

### ✅ Path
**Keep:** `/`
- This proxies all traffic from your domain to the Node.js app

### ✅ Port
**Keep:** `3000`
- Next.js runs on port 3000 by default
- Your `server.js` should be listening on this port

## 📝 Complete Configuration Summary

```
Deployment Type:     Automatic (Production)
Node Version:         stable (or latest)
Startup Command:     node server.js
Working Directory:   /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/public_html
Proxy Enabled:       ✓ Enabled
Path:                /
Port:                3000
```

## 🔍 How to Find Your Exact Working Directory

If the path above doesn't work, SSH into your server and run:

```bash
ssh nirosha_1@37.27.54.247
cd public_html
pwd
```

Copy the output and use it as the Working Directory.

## ⚠️ Important Notes

1. **After saving the configuration:**
   - The hosting panel should automatically start your Node.js app
   - Check the status/logs in the hosting panel
   - Visit `https://nirosha.org` to verify it's working

2. **If it doesn't start:**
   - Check the logs in the hosting panel
   - Verify `server.js` exists in the working directory
   - Make sure `config.js` is uploaded (if using config file approach)

3. **Port Configuration:**
   - Your Next.js server must listen on `0.0.0.0:3000` (not just `localhost:3000`)
   - The standalone `server.js` should do this by default
   - If not, you may need to set `HOSTNAME=0.0.0.0` environment variable

## 🚀 After Configuration

Once you save these settings:

1. **Check if the app started:**
   - Look for status indicators in the hosting panel
   - Check for any error messages

2. **Test the website:**
   - Visit `https://nirosha.org`
   - Check if pages load correctly
   - Test the contact form

3. **Check logs:**
   - Most hosting panels have a "Logs" or "View Logs" option
   - Look for any startup errors

## 🐛 Troubleshooting

### "Cannot find server.js"
- Verify Working Directory is correct
- SSH and check: `ls -la /var/www/.../public_html/server.js`

### "Port 3000 already in use"
- Another process might be using port 3000
- Check: `ps aux | grep "node server.js"`
- Kill the old process or change the port

### "Application not starting"
- Check hosting panel logs
- Verify Node.js version is compatible
- Make sure `config.js` exists (if using config file)

### "502 Bad Gateway" or "Connection Refused"
- App might not be listening on `0.0.0.0:3000`
- Check if the app actually started
- Verify proxy settings are correct

## ✅ Quick Checklist

Before saving the configuration:

- [ ] Working Directory is filled with the correct path
- [ ] Startup Command is `node server.js` (not `npm start`)
- [ ] Port is `3000`
- [ ] Proxy is enabled
- [ ] Path is `/`
- [ ] `server.js` exists in the working directory
- [ ] `config.js` is uploaded (if using config file approach)

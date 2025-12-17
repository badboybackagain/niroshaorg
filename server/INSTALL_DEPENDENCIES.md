# Installing Dependencies on Production Server

## The Error

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'express'
```

This means `node_modules` is not installed. You need to run `npm install` on the server.

## Solution

### Option 1: Via SSH (Recommended)

1. **SSH into your server:**
   ```bash
   ssh your-username@your-server.com
   ```

2. **Navigate to the server directory:**
   ```bash
   cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
   ```
   (Use the path shown in your error, or wherever you uploaded the server files)

3. **Install dependencies:**
   ```bash
   npm install --production
   ```

   The `--production` flag installs only production dependencies (not devDependencies).

4. **Verify installation:**
   ```bash
   ls -la node_modules
   ```
   You should see the `node_modules` folder with all packages.

5. **Test the server:**
   ```bash
   node server.js
   ```
   Or if your hosting provider auto-starts it, restart the Node.js app in the control panel.

### Option 2: Via Hosting Control Panel

Some hosting providers have a button to install dependencies:

1. **Login to your hosting control panel**
2. **Navigate to your Node.js app**
3. **Look for:**
   - "Install Dependencies" button
   - "npm install" option
   - "Rebuild" or "Restart" (which might auto-install)

### Option 3: Update deploy-server.sh

If you're using the deployment script, set this in `.env.deploy`:

```env
INSTALL_DEPS=true
```

Then run:
```bash
./deploy-server.sh
```

## Verify Installation

After installing, check:

1. **node_modules exists:**
   ```bash
   ls -la /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server/node_modules
   ```

2. **express is installed:**
   ```bash
   ls /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server/node_modules/express
   ```

3. **All dependencies are there:**
   ```bash
   cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
   npm list --depth=0
   ```

## Expected Output

After `npm install --production`, you should see:

```
added 45 packages, and audited 45 packages in 5s
```

And these packages should be installed:
- express
- cors
- nodemailer
- dotenv

## Troubleshooting

### "npm: command not found"
- Node.js/npm might not be installed
- Check with: `node --version` and `npm --version`
- Your hosting provider should have Node.js installed

### "Permission denied"
- You might need sudo (not recommended for node_modules)
- Or fix permissions:
  ```bash
  chown -R your-user:your-user /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
  ```

### Still getting errors after install
- Make sure you're in the correct directory (where package.json is)
- Check package.json exists: `cat package.json`
- Try deleting node_modules and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install --production
  ```

## Quick Command Reference

```bash
# SSH into server
ssh user@server.com

# Navigate to server directory
cd /path/to/server

# Install dependencies
npm install --production

# Verify
ls node_modules

# Test (if needed)
node server.js
```

## After Installation

1. **Restart your Node.js app** in the hosting control panel
2. **Check logs** for any errors
3. **Test health endpoint:**
   ```bash
   curl https://your-server-url/health
   ```

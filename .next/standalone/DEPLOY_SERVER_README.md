# Deploy Server Script Usage

This script helps you deploy the email server files to your hosting provider.

## Quick Start

1. **Create deployment configuration:**
   ```bash
   cp env.deploy.example .env.deploy
   ```

2. **Edit `.env.deploy`** with your server credentials:
   ```env
   SERVER_USER=your-username
   SERVER_HOST=your-server.com
   SERVER_PORT=22
   SERVER_PATH=/path/to/your/app
   ```

3. **Run the deployment script:**
   ```bash
   ./deploy-server.sh
   ```

## Configuration Options

### Required Variables

- `SERVER_USER` - Your SSH/FTP username
- `SERVER_HOST` - Your server hostname or IP
- `SERVER_PATH` - Remote path where your Node.js app is located

### Optional Variables

- `SERVER_PORT` - SSH port (default: 22)
- `FTP_TYPE` - Set to `ftp` to use FTP instead of SFTP
- `INSTALL_DEPS` - Set to `true` to install npm dependencies on server
- `TEST_HEALTH` - Set to `true` to test health endpoint after deployment
- `SERVER_URL` - Your server URL for health check (e.g., `https://api.nirosha.org`)

## Examples

### Example 1: Basic SFTP Deployment

```env
SERVER_USER=myuser
SERVER_HOST=myserver.com
SERVER_PATH=/home/myuser/apps/email-server
```

```bash
./deploy-server.sh
```

### Example 2: With Auto-Install Dependencies

```env
SERVER_USER=myuser
SERVER_HOST=myserver.com
SERVER_PATH=/home/myuser/apps/email-server
INSTALL_DEPS=true
```

### Example 3: With Health Check

```env
SERVER_USER=myuser
SERVER_HOST=myserver.com
SERVER_PATH=/home/myuser/apps/email-server
TEST_HEALTH=true
SERVER_URL=https://api.nirosha.org
```

### Example 4: Using FTP

```env
FTP_TYPE=ftp
FTP_USER=myuser
FTP_PASS=mypassword
FTP_HOST=myserver.com
FTP_PORT=21
FTP_PATH=/public_html/apps/email-server
```

## What Gets Uploaded

The script uploads only the essential files:
- ✅ `server/server.js`
- ✅ `server/package.json`
- ✅ `server/package-lock.json` (if exists)

**Files NOT uploaded:**
- ❌ `.env` (set environment variables in hosting control panel)
- ❌ `node_modules/` (installed on server)
- ❌ Documentation files

## Prerequisites

### For SFTP/SSH (Default):
- SSH access to your server
- SSH key configured or password authentication

### For FTP:
- `lftp` installed (`brew install lftp` on macOS, `apt-get install lftp` on Linux)
- FTP credentials

## Troubleshooting

### "Permission denied" error
- Make sure SSH key is configured: `ssh-copy-id user@server`
- Or use password authentication
- Check file permissions on server

### "Could not create remote directory"
- Verify `SERVER_PATH` is correct
- Check that you have write permissions
- Ensure the parent directory exists

### "Connection refused"
- Verify `SERVER_HOST` and `SERVER_PORT` are correct
- Check if SSH/FTP service is running on server
- Check firewall settings

### Files uploaded but app not working
- Make sure environment variables are set in hosting control panel
- Restart the Node.js app
- Check server logs for errors
- Verify `node_modules` is installed

## Manual Deployment Alternative

If the script doesn't work, you can manually upload:

1. **Using SFTP client (FileZilla, Cyberduck, etc.):**
   - Connect to your server
   - Navigate to `SERVER_PATH`
   - Create `server` folder
   - Upload: `server.js`, `package.json`, `package-lock.json`

2. **Using Git:**
   ```bash
   ssh user@server
   cd /path/to/your/app
   git pull
   cd server
   npm install --production
   ```

## Security Notes

- ⚠️ Never commit `.env.deploy` to git (it's in .gitignore)
- ⚠️ Use SSH keys instead of passwords when possible
- ⚠️ Keep your `.env.deploy` file secure
- ⚠️ Don't share your deployment credentials

## After Deployment

1. **Set environment variables** in hosting control panel:
   - `GMAIL_USER`
   - `GMAIL_PASSWORD`
   - `ALLOWED_ORIGINS` (optional)

2. **Restart your Node.js app** in hosting control panel

3. **Test the health endpoint:**
   ```bash
   curl https://your-server-url/health
   ```

4. **Update frontend** with production API URL

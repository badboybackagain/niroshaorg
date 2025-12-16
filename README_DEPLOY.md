# Deployment Script Setup

## Quick Start

### Option 1: Using .env.deploy file (Recommended)

1. **Copy the example file:**
   ```bash
   cp .env.deploy.example .env.deploy
   ```

2. **Edit .env.deploy with your credentials:**
   ```bash
   nano .env.deploy
   ```
   
   Fill in:
   ```
   FTP_USER=your-username
   FTP_PASS=your-password
   FTP_HOST=your-server.com
   FTP_PORT=21
   FTP_PATH=/public_html
   ```

3. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

### Option 2: Using Environment Variables

```bash
export FTP_USER='your-username'
export FTP_PASS='your-password'
export FTP_HOST='your-server.com'
export FTP_PORT=21
export FTP_PATH='/public_html'

./deploy.sh
```

## FTP Path Examples

Common paths on different hosting providers:

- **cPanel/Shared Hosting**: `/public_html` or `/www`
- **Plesk**: `/httpdocs`
- **Custom Server**: `/var/www/html` or `/var/www/yourdomain.com`
- **Subdomain**: `/public_html/subdomain` or `/subdomain`

## Installing FTP Client (if needed)

### macOS:
```bash
brew install lftp
```

### Linux (Ubuntu/Debian):
```bash
sudo apt-get install lftp
```

### Linux (CentOS/RHEL):
```bash
sudo yum install lftp
```

## Using SFTP Instead of FTP

If your server supports SFTP (more secure):

1. **Update .env.deploy:**
   ```
   FTP_TYPE=sftp
   FTP_PORT=22
   ```

2. **Run deploy script:**
   ```bash
   ./deploy.sh
   ```

## What the Script Does

1. ✅ Builds production files (`npm run build`)
2. ✅ Uploads all files from `dist/` folder to your server
3. ✅ Excludes system files (`.DS_Store`)
4. ✅ Shows upload progress
5. ✅ Handles errors gracefully

## Security Notes

- **Never commit .env.deploy to git** (it's already in .gitignore)
- Use SFTP instead of FTP when possible (more secure)
- Consider using SSH keys for authentication if available

## Troubleshooting

### "No FTP client found"
Install lftp (see instructions above)

### "Connection refused"
- Check FTP_HOST and FTP_PORT
- Verify your server allows FTP connections
- Check firewall settings

### "Login incorrect"
- Verify FTP_USER and FTP_PASS
- Some servers require full email as username
- Check if your account is active

### "No such file or directory" (FTP_PATH)
- Verify the path exists on your server
- Try absolute path starting with `/`
- Check permissions on the directory

### Files uploaded but site shows 404
- Make sure `.htaccess` file was uploaded
- Verify `index.html` is in the root directory
- Check file permissions (should be 644 for files, 755 for folders)

## Manual Upload Alternative

If the script doesn't work, you can manually upload:

1. Build: `npm run build`
2. Use FTP client (FileZilla, Cyberduck, etc.)
3. Upload all files from `dist/` folder to your server's root directory



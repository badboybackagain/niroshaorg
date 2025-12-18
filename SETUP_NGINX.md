# Setup Nginx to Make Website Accessible

## 🔍 Problem

Your Next.js server is running on port 3000, but there's no web server (nginx/apache) to:
- Listen on ports 80/443 (HTTP/HTTPS)
- Proxy requests from `https://nirosha.org` to `localhost:3000`

## ✅ Solution: Configure Nginx

### Step 1: Check if Nginx is Installed

SSH into your server and check:
```bash
ssh nirosha_1@37.27.54.247
which nginx
# or
nginx -v
```

### Step 2: Install Nginx (if not installed)

```bash
sudo apt-get update
sudo apt-get install nginx -y
```

### Step 3: Create Nginx Configuration

I've created `nginx-nirosha.conf` for you. Upload it to your server:

```bash
# From your local machine
scp nginx-nirosha.conf nirosha_1@37.27.54.247:/tmp/
```

### Step 4: Configure Nginx on Server

SSH into server and run:

```bash
ssh nirosha_1@37.27.54.247

# Copy the config file
sudo cp /tmp/nginx-nirosha.conf /etc/nginx/sites-available/nirosha.org

# Create symlink to enable it
sudo ln -s /etc/nginx/sites-available/nirosha.org /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx

# Start nginx if not running
sudo systemctl start nginx

# Enable nginx to start on boot
sudo systemctl enable nginx
```

### Step 5: Verify

1. **Check if nginx is running:**
   ```bash
   sudo systemctl status nginx
   ```

2. **Check if port 80 is listening:**
   ```bash
   sudo netstat -tlnp | grep ':80'
   # or
   sudo ss -tlnp | grep ':80'
   ```

3. **Test from browser:**
   - Visit `http://nirosha.org` (should work)
   - Visit `https://nirosha.org` (will need SSL certificate)

## 🔒 SSL/HTTPS Setup (Optional but Recommended)

For HTTPS, you need an SSL certificate. Options:

### Option 1: Let's Encrypt (Free)

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx -y

# Get certificate
sudo certbot --nginx -d nirosha.org -d www.nirosha.org

# Certbot will automatically update nginx config
```

### Option 2: Use Existing Certificate

If you have an SSL certificate:
1. Upload certificate files to server
2. Update nginx config with certificate paths
3. Uncomment the HTTPS server block in nginx config
4. Reload nginx

## 🐛 Troubleshooting

### Nginx won't start
```bash
# Check nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check nginx config syntax
sudo nginx -t
```

### Port 80 already in use
```bash
# Find what's using port 80
sudo lsof -i :80
# or
sudo netstat -tlnp | grep ':80'

# Stop the conflicting service or change nginx port
```

### Next.js server not responding
```bash
# Check if Next.js is running
ps aux | grep "node server.js"

# Check if it's listening on port 3000
netstat -tlnp | grep ':3000'

# Test directly
curl http://localhost:3000
```

### 502 Bad Gateway
- Next.js server is not running on port 3000
- Firewall blocking localhost connections
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

## ✅ Quick Setup Script

I can create a script to automate this. Would you like me to create one?

## 📝 Summary

**Current Status:**
- ✅ Next.js server running on port 3000
- ❌ No web server (nginx) to handle HTTP/HTTPS
- ❌ Ports 80/443 not listening

**What You Need:**
1. Install nginx (if not installed)
2. Configure nginx to proxy to port 3000
3. Start nginx
4. (Optional) Set up SSL for HTTPS

After this, `https://nirosha.org` will work!

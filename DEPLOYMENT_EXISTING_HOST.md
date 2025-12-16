# Deploying to Your Existing Hosting

## Step 1: Build Production Files

```bash
npm run build
```

This creates the `/dist` folder with all your production files.

## Step 2: Upload Files to Your Hosting

### Option A: Using FTP/SFTP (Most Common)

1. **Get your FTP credentials** from your hosting provider:
   - FTP Host/Server
   - Username
   - Password
   - Port (usually 21 for FTP, 22 for SFTP)

2. **Use an FTP client** (FileZilla, Cyberduck, WinSCP, etc.)

3. **Connect to your server**

4. **Upload all files from `/dist` folder:**
   - Navigate to your website's root directory (usually `public_html`, `www`, or `htdocs`)
   - Upload ALL files and folders from `/dist` to the root
   - Make sure `index.html` is in the root directory

### Option B: Using cPanel File Manager

1. **Login to cPanel**

2. **Open File Manager**

3. **Navigate to your website root** (`public_html` or `www`)

4. **Upload files:**
   - Click "Upload" button
   - Select all files from `/dist` folder
   - Or zip the `/dist` folder, upload, then extract in cPanel

### Option C: Using SSH/SCP (If you have SSH access)

```bash
# From your project directory
scp -r dist/* username@your-server.com:/path/to/website/root/

# Or using rsync (better for updates)
rsync -avz --delete dist/ username@your-server.com:/path/to/website/root/
```

### Option D: Using Git (If your host supports Git)

1. **Initialize git in dist folder:**
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Initial deployment"
   ```

2. **Push to your hosting's git repository**

---

## Step 3: Configure Your Server for React Router

**IMPORTANT:** Since this is a Single Page Application (SPA), you need to configure your server to serve `index.html` for all routes.

### For Apache (.htaccess file)

Create a `.htaccess` file in your website root with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### For Nginx

Add to your nginx configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### For cPanel/Shared Hosting

Most shared hosting uses Apache. Create `.htaccess` file as shown above.

---

## Step 4: Verify Deployment

1. **Visit your website** - Should load the homepage
2. **Test navigation** - Click through different pages
3. **Test direct URLs** - Try accessing `/services` or `/about` directly
4. **Check mobile** - Test on mobile devices
5. **Verify images** - Make sure all images load correctly

---

## File Structure After Upload

Your hosting root should look like this:

```
/
├── index.html          (Main HTML file)
├── assets/
│   ├── index-xxxxx.js  (JavaScript bundle)
│   ├── index-xxxxx.css (CSS bundle)
│   └── ...             (Other assets)
├── logo.png            (Logo files)
├── logo@2x.png
├── logo.webp
└── ...                 (Other static files)
```

---

## Quick Upload Checklist

- [ ] Built production files (`npm run build`)
- [ ] Uploaded ALL files from `/dist` folder
- [ ] `index.html` is in the root directory
- [ ] Created `.htaccess` file (for Apache)
- [ ] Tested homepage loads
- [ ] Tested navigation works
- [ ] Tested direct URL access (e.g., `/services`)
- [ ] Verified images load
- [ ] Checked mobile responsiveness

---

## Troubleshooting

### 404 Errors on Routes
- **Problem:** Direct URLs like `/services` show 404
- **Solution:** Add `.htaccess` file (see Step 3)

### Images Not Loading
- **Problem:** Images show broken links
- **Solution:** Make sure all files from `/dist` are uploaded, including `/public` folder contents

### White/Blank Page
- **Problem:** Site loads but shows blank page
- **Solution:** 
  - Check browser console for errors
  - Verify all JavaScript files uploaded
  - Check file permissions (should be 644 for files, 755 for folders)

### CSS Not Loading
- **Problem:** Site loads but no styling
- **Solution:** 
  - Verify CSS files uploaded to `/assets` folder
  - Check file paths in browser DevTools Network tab

---

## Updating Your Site

When you make changes:

1. **Build again:**
   ```bash
   npm run build
   ```

2. **Upload only changed files** (or all files to be safe)

3. **Clear browser cache** or do hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

---

## Need Help?

**What hosting provider are you using?** (cPanel, Plesk, custom server, etc.)
I can provide specific instructions for your provider!



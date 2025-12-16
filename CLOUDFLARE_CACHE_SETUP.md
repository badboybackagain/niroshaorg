# Cloudflare Cache Configuration Guide

This guide will help you configure Cloudflare to properly cache your static assets, especially JavaScript files in the `/assets/` directory.

## Option 1: Using Cloudflare Cache Rules (Recommended - Free Plan)

Cache Rules provide more granular control and are available on all Cloudflare plans.

### Steps:

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Select your domain (nirosha.org)

2. **Navigate to Cache Rules**
   - Go to **Caching** → **Cache Rules** (or **Rules** → **Cache Rules**)
   - Click **Create rule**

3. **Create Rule for JavaScript Files**
   - **Rule name**: `Cache JS Assets`
   - **When incoming requests match**:
     - **Field**: `URI Path`
     - **Operator**: `starts with`
     - **Value**: `/assets/`
   - **AND**
     - **Field**: `File extension`
     - **Operator**: `is`
     - **Value**: `js`
   - **Then the settings are**:
     - **Cache status**: `Cache everything`
     - **Edge TTL**: `1 year`
     - **Browser TTL**: `Respect existing headers`
   - Click **Deploy**

4. **Create Rule for CSS Files**
   - **Rule name**: `Cache CSS Assets`
   - **When incoming requests match**:
     - **Field**: `URI Path`
     - **Operator**: `starts with`
     - **Value**: `/assets/`
   - **AND**
     - **Field**: `File extension`
     - **Operator**: `is`
     - **Value**: `css`
   - **Then the settings are**:
     - **Cache status**: `Cache everything`
     - **Edge TTL**: `1 year`
     - **Browser TTL**: `Respect existing headers`
   - Click **Deploy**

5. **Create Rule for Images**
   - **Rule name**: `Cache Images`
   - **When incoming requests match**:
     - **Field**: `File extension`
     - **Operator**: `is one of`
     - **Value**: `jpg, jpeg, png, gif, webp, svg, ico`
   - **Then the settings are**:
     - **Cache status**: `Cache everything`
     - **Edge TTL**: `1 year`
     - **Browser TTL**: `Respect existing headers`
   - Click **Deploy**

6. **Create Rule for HTML (No Cache)**
   - **Rule name**: `Don't Cache HTML`
   - **When incoming requests match**:
     - **Field**: `File extension`
     - **Operator**: `is`
     - **Value**: `html`
   - **Then the settings are**:
     - **Cache status**: `Bypass`
   - Click **Deploy**

---

## Option 2: Using Page Rules (Free Plan - Limited to 3 rules)

If you're on the free plan and have limited Page Rules, use this simpler approach:

1. **Go to Rules** → **Page Rules**
2. **Create a Page Rule**:
   - **URL**: `*nirosha.org/assets/*.js`
   - **Settings**:
     - **Cache Level**: `Cache Everything`
     - **Edge Cache TTL**: `1 year`
     - **Browser Cache TTL**: `Respect Existing Headers`
   - Click **Save and Deploy**

3. **Create another Page Rule**:
   - **URL**: `*nirosha.org/assets/*.css`
   - **Settings**:
     - **Cache Level**: `Cache Everything`
     - **Edge Cache TTL**: `1 year`
     - **Browser Cache TTL**: `Respect Existing Headers`
   - Click **Save and Deploy**

---

## Option 3: Using Transform Rules (Advanced)

If you want to set cache headers via Cloudflare:

1. **Go to Rules** → **Transform Rules** → **Modify Response Header**
2. **Create Rule**:
   - **Rule name**: `Set Cache Headers for Assets`
   - **When**: `(http.request.uri.path matches "^/assets/.*\\.(js|css)$")`
   - **Then**: 
     - **Set static**: `Cache-Control` = `public, max-age=31536000, immutable`
   - Click **Deploy**

---

## Verify Configuration

After setting up the rules:

1. **Purge Cloudflare Cache**:
   - Go to **Caching** → **Configuration**
   - Click **Purge Everything**
   - Or use **Custom Purge** to clear only `/assets/*`

2. **Test the Cache Headers**:
   ```bash
   curl -I https://nirosha.org/assets/index-DdLfifO9.js
   ```
   
   You should see:
   ```
   Cache-Control: public, max-age=31536000, immutable
   CF-Cache-Status: HIT (after first request)
   ```

3. **Test with Browser DevTools**:
   - Open Chrome DevTools (F12)
   - Go to **Network** tab
   - Reload the page
   - Check the JavaScript file in `/assets/`
   - Look for `Cache-Control` header in Response Headers
   - Status should show `(from disk cache)` or `(from memory cache)` on reload

---

## Additional Cloudflare Settings

### 1. Enable Auto Minify (Optional)
- Go to **Speed** → **Optimization**
- Enable **Auto Minify** for JavaScript and CSS
- This can help reduce file sizes further

### 2. Enable Brotli Compression
- Go to **Speed** → **Optimization**
- Enable **Brotli** compression
- This provides better compression than Gzip

### 3. Enable HTTP/2 and HTTP/3
- Go to **Network**
- Enable **HTTP/2** and **HTTP/3 (with QUIC)**
- These are usually enabled by default

### 4. Set Browser Cache TTL
- Go to **Caching** → **Configuration**
- Set **Browser Cache TTL** to `Respect Existing Headers`
- This ensures your `.htaccess` cache headers are respected

---

## Troubleshooting

### Issue: Cache headers not showing
- **Solution**: Make sure your `.htaccess` file is uploaded to the server root
- Verify `mod_headers` is enabled on your Apache server
- Check Cloudflare is in "Proxied" mode (orange cloud)

### Issue: Files still not cached
- **Solution**: 
  1. Purge Cloudflare cache
  2. Wait 5-10 minutes for changes to propagate
  3. Test with a hard refresh (Ctrl+Shift+R)

### Issue: Changes not taking effect
- **Solution**: 
  1. Clear browser cache
  2. Purge Cloudflare cache
  3. Wait for DNS propagation (if you just changed settings)

---

## Quick Checklist

- [ ] Created Cache Rule for `/assets/*.js` files
- [ ] Created Cache Rule for `/assets/*.css` files  
- [ ] Created Cache Rule for images
- [ ] Set Browser Cache TTL to "Respect Existing Headers"
- [ ] Purged Cloudflare cache
- [ ] Verified cache headers with curl or DevTools
- [ ] Tested page load speed improvement

---

## Expected Results

After proper configuration:
- ✅ JavaScript files will have `Cache-Control: public, max-age=31536000, immutable`
- ✅ PageSpeed Insights will show "Use efficient cache lifetimes" as passed
- ✅ Repeat visits will load much faster (files served from cache)
- ✅ Estimated savings: ~93 KiB on repeat visits

---

## Need Help?

If you're still seeing issues:
1. Check Cloudflare Analytics to see cache hit ratio
2. Verify your server is sending correct headers (check with curl)
3. Make sure Cloudflare is in "Proxied" mode (orange cloud icon)
4. Contact your hosting provider to ensure `mod_headers` is enabled


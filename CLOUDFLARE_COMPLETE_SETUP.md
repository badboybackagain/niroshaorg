# Complete Cloudflare Configuration Guide for nirosha.org

This guide covers all performance and security settings needed in Cloudflare to replace Firebase hosting configuration.

## Table of Contents
1. [Cache Rules](#cache-rules)
2. [Security Headers](#security-headers)
3. [Performance Optimizations](#performance-optimizations)
4. [Transform Rules](#transform-rules)
5. [Verification](#verification)

---

## 1. Cache Rules

### Step 1: Navigate to Cache Rules
1. Go to https://dash.cloudflare.com
2. Select your domain **nirosha.org**
3. Go to **Caching** → **Cache Rules** (or **Rules** → **Cache Rules**)

### Step 2: Create Cache Rules

#### Rule 1: Cache JavaScript Assets
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

#### Rule 2: Cache CSS Assets
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

#### Rule 3: Cache Static Images & Fonts
- **Rule name**: `Cache Static Assets`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is one of`
  - **Value**: `png, jpg, jpeg, gif, svg, webp, ico, woff, woff2, ttf, eot`
- **Then the settings are**:
  - **Cache status**: `Cache everything`
  - **Edge TTL**: `1 year`
  - **Browser TTL**: `Respect existing headers`
- Click **Deploy**

#### Rule 4: Don't Cache HTML
- **Rule name**: `Don't Cache HTML`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Cache status**: `Bypass`
- Click **Deploy**

---

## 2. Security Headers

### Step 1: Navigate to Transform Rules
1. Go to **Rules** → **Transform Rules** → **Modify Response Header**
2. Click **Create rule**

### Step 2: Create Security Header Rules

#### Rule 1: Content Security Policy (CSP)
- **Rule name**: `Set CSP Header for HTML`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**: 
    - **Header name**: `Content-Security-Policy`
    - **Value**: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://calendly.com https://wa.me https://www.google-analytics.com; frame-src https://calendly.com; object-src 'none'; base-uri 'self'; form-action 'self' https://calendly.com;`
- Click **Deploy**

#### Rule 2: X-Content-Type-Options
- **Rule name**: `Set X-Content-Type-Options`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `X-Content-Type-Options`
    - **Value**: `nosniff`
- Click **Deploy**

#### Rule 3: X-Frame-Options
- **Rule name**: `Set X-Frame-Options`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `X-Frame-Options`
    - **Value**: `SAMEORIGIN`
- Click **Deploy**

#### Rule 4: X-XSS-Protection
- **Rule name**: `Set X-XSS-Protection`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `X-XSS-Protection`
    - **Value**: `1; mode=block`
- Click **Deploy**

#### Rule 5: Referrer-Policy
- **Rule name**: `Set Referrer-Policy`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `Referrer-Policy`
    - **Value**: `strict-origin-when-cross-origin`
- Click **Deploy**

#### Rule 6: Permissions-Policy
- **Rule name**: `Set Permissions-Policy`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `Permissions-Policy`
    - **Value**: `geolocation=(), microphone=(), camera=()`
- Click **Deploy**

#### Rule 7: Strict-Transport-Security (HSTS)
- **Rule name**: `Set HSTS Header`
- **When incoming requests match**:
  - **Field**: `Request scheme`
  - **Operator**: `is`
  - **Value**: `HTTPS`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `Strict-Transport-Security`
    - **Value**: `max-age=31536000; includeSubDomains; preload`
- Click **Deploy**

#### Rule 8: Cross-Origin-Opener-Policy
- **Rule name**: `Set COOP Header`
- **When incoming requests match**:
  - **Field**: `File extension`
  - **Operator**: `is`
  - **Value**: `html`
- **Then the settings are**:
  - **Set static**:
    - **Header name**: `Cross-Origin-Opener-Policy`
    - **Value**: `same-origin`
- Click **Deploy**

---

## 3. Performance Optimizations

### Step 1: Enable Auto Minify
1. Go to **Speed** → **Optimization**
2. Under **Auto Minify**, enable:
   - ✅ **JavaScript**
   - ✅ **CSS**
   - ✅ **HTML** (optional)
3. Click **Save**

### Step 2: Enable Brotli Compression
1. Go to **Speed** → **Optimization**
2. Enable **Brotli** compression
3. Click **Save**

### Step 3: Enable HTTP/2 and HTTP/3
1. Go to **Network**
2. Ensure these are enabled:
   - ✅ **HTTP/2**
   - ✅ **HTTP/3 (with QUIC)**
3. Click **Save**

### Step 4: Set Browser Cache TTL
1. Go to **Caching** → **Configuration**
2. Set **Browser Cache TTL** to: `Respect Existing Headers`
3. Click **Save**

### Step 5: Enable Early Hints (Pro Plan+)
1. Go to **Speed** → **Optimization**
2. Enable **Early Hints** (if available on your plan)
3. Click **Save**

### Step 6: Enable Rocket Loader (Optional)
1. Go to **Speed** → **Optimization**
2. Enable **Rocket Loader** (can help with JavaScript loading)
3. Click **Save**

---

## 4. Transform Rules (Alternative Method)

If you prefer to set cache headers via Transform Rules instead of relying on server headers:

### Set Cache-Control for Assets
1. Go to **Rules** → **Transform Rules** → **Modify Response Header**
2. **Create Rule**:
   - **Rule name**: `Set Cache Headers for JS/CSS`
   - **When**: `(http.request.uri.path matches "^/assets/.*\\.(js|css)$")`
   - **Then**: 
     - **Set static**: 
       - **Header name**: `Cache-Control`
       - **Value**: `public, max-age=31536000, immutable`
   - Click **Deploy**

### Set Cache-Control for Images
1. **Create Rule**:
   - **Rule name**: `Set Cache Headers for Images`
   - **When**: `(http.request.uri.path matches ".*\\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|ico)$")`
   - **Then**: 
     - **Set static**: 
       - **Header name**: `Cache-Control`
       - **Value**: `public, max-age=31536000, immutable`
   - Click **Deploy**

### Set Cache-Control for HTML
1. **Create Rule**:
   - **Rule name**: `Set Cache Headers for HTML`
   - **When**: `(http.request.uri.path matches ".*\\.html$")`
   - **Then**: 
     - **Set static**: 
       - **Header name**: `Cache-Control`
       - **Value**: `public, max-age=0, must-revalidate`
   - Click **Deploy**

---

## 5. Verification

### Step 1: Purge Cloudflare Cache
1. Go to **Caching** → **Configuration**
2. Click **Purge Everything**
3. Or use **Custom Purge** to clear only specific paths

### Step 2: Test Cache Headers

#### Test JavaScript File:
```bash
curl -I https://nirosha.org/assets/index-*.js
```

Expected response:
```
Cache-Control: public, max-age=31536000, immutable
CF-Cache-Status: HIT (after first request)
```

#### Test HTML File:
```bash
curl -I https://nirosha.org/
```

Expected response:
```
Cache-Control: public, max-age=0, must-revalidate
Content-Security-Policy: default-src 'self'; ...
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Step 3: Test with Browser DevTools
1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Reload the page (Ctrl+Shift+R for hard refresh)
4. Check response headers for:
   - ✅ `Cache-Control` headers on assets
   - ✅ Security headers on HTML
   - ✅ `CF-Cache-Status: HIT` on cached assets

### Step 4: Verify with PageSpeed Insights
1. Go to https://pagespeed.web.dev
2. Test your site: `https://nirosha.org`
3. Check that these audits pass:
   - ✅ "Use efficient cache lifetimes"
   - ✅ Security headers are present
   - ✅ Performance score improved

---

## Quick Setup Checklist

### Cache Rules
- [ ] Created Cache Rule for `/assets/*.js` files
- [ ] Created Cache Rule for `/assets/*.css` files
- [ ] Created Cache Rule for images and fonts
- [ ] Created Cache Rule to bypass HTML caching

### Security Headers
- [ ] Set Content-Security-Policy
- [ ] Set X-Content-Type-Options
- [ ] Set X-Frame-Options
- [ ] Set X-XSS-Protection
- [ ] Set Referrer-Policy
- [ ] Set Permissions-Policy
- [ ] Set Strict-Transport-Security (HSTS)
- [ ] Set Cross-Origin-Opener-Policy

### Performance Settings
- [ ] Enabled Auto Minify (JS, CSS)
- [ ] Enabled Brotli compression
- [ ] Enabled HTTP/2 and HTTP/3
- [ ] Set Browser Cache TTL to "Respect Existing Headers"
- [ ] Purged Cloudflare cache
- [ ] Verified headers with curl or DevTools

---

## Expected Results

After proper configuration:
- ✅ JavaScript files cached for 1 year
- ✅ CSS files cached for 1 year
- ✅ Images cached for 1 year
- ✅ HTML files not cached (always fresh)
- ✅ All security headers present
- ✅ PageSpeed Insights "Use efficient cache lifetimes" passes
- ✅ Estimated savings: ~100 KiB+ on repeat visits
- ✅ Improved performance score

---

## Troubleshooting

### Issue: Headers not showing
- **Solution**: Make sure Transform Rules are deployed and active
- Check Cloudflare is in "Proxied" mode (orange cloud icon)
- Wait 5-10 minutes for changes to propagate

### Issue: Cache not working
- **Solution**: 
  1. Purge Cloudflare cache
  2. Verify Cache Rules are active
  3. Check Browser Cache TTL is set correctly
  4. Test with hard refresh (Ctrl+Shift+R)

### Issue: Security headers missing
- **Solution**:
  1. Verify Transform Rules are deployed
  2. Check rule conditions match your URLs
  3. Test with curl to see actual headers
  4. Ensure you're testing HTTPS (not HTTP)

---

## Additional Notes

- **Cache Rules** are available on all Cloudflare plans (including Free)
- **Transform Rules** are available on Pro plan and above
- If you're on Free plan, you can use **Page Rules** (limited to 3 rules) as an alternative
- Security headers can also be set via Cloudflare Workers (if you have access)
- Always test changes in a staging environment first

---

## Support

If you need help:
1. Check Cloudflare Analytics for cache hit ratio
2. Use Cloudflare's diagnostic tools
3. Verify with browser DevTools Network tab
4. Check Cloudflare community forums



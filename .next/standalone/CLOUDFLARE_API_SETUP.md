# Cloudflare API Automatic Setup Guide

This guide explains how to use the automated script to configure Cloudflare settings.

## Prerequisites

1. **Cloudflare Account** with your domain added
2. **API Token** with appropriate permissions (see below)

## Getting Your Cloudflare API Token

### Option 1: Create API Token (Recommended)

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Use **Edit zone DNS** template, or create custom token with these permissions:
   - **Zone** → **Cache Rules** → **Edit**
   - **Zone** → **Transform Rules** → **Edit**
   - **Zone** → **Zone Settings** → **Edit**
   - **Zone** → **Zone** → **Read**
4. Include your zone: `nirosha.org`
5. Click **Continue to summary** → **Create Token**
6. **Copy the token immediately** (you won't see it again!)

### Option 2: Use Global API Key (Less Secure)

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Scroll to **API Keys** section
3. Click **View** next to "Global API Key"
4. Enter your password to reveal the key
5. Copy the key

**Note**: The script currently uses API Tokens. If you prefer Global API Key, you'll need to modify the script.

## Running the Script

### Method 1: Using npm script

```bash
npm run setup-cloudflare
```

### Method 2: Direct execution

```bash
node scripts/setup-cloudflare.js
```

## What the Script Does

The script automatically configures:

### 1. Cache Rules (4 rules)
- ✅ Cache JavaScript files (`/assets/*.js`) for 1 year
- ✅ Cache CSS files (`/assets/*.css`) for 1 year
- ✅ Cache static assets (images, fonts) for 1 year
- ✅ Bypass cache for HTML files

### 2. Transform Rules (8 rules)
- ✅ Content-Security-Policy
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Strict-Transport-Security (HSTS)
- ✅ Cross-Origin-Opener-Policy

### 3. Performance Settings
- ✅ Auto Minify (JavaScript, CSS)
- ✅ Brotli Compression
- ✅ HTTP/2
- ✅ HTTP/3
- ✅ Browser Cache TTL

## Script Output

The script will:
1. Prompt for your API Token
2. Prompt for your domain (defaults to `nirosha.org`)
3. Look up your Zone ID
4. Create all cache rules
5. Create all transform rules
6. Configure performance settings
7. Show success/failure for each operation

## Example Output

```
🚀 Cloudflare Automatic Configuration Script

This script will configure:
  ✓ Cache Rules for static assets
  ✓ Transform Rules for security headers
  ✓ Performance optimizations

Enter your Cloudflare API Token: [your-token]
Enter your domain (default: nirosha.org): 

📡 Connecting to Cloudflare...

🔍 Looking up Zone ID for nirosha.org...
✅ Found Zone ID: abc123def456

📦 Creating Cache Rules...
  Creating: Cache JS Assets...
  ✅ Created: Cache JS Assets
  Creating: Cache CSS Assets...
  ✅ Created: Cache CSS Assets
  ...

🔒 Creating Security Header Rules...
  Creating: Set CSP Header for HTML...
  ✅ Created: Set CSP Header for HTML
  ...

⚡ Configuring Performance Settings...
  ✅ Updated: minify
  ✅ Updated: brotli
  ...

🎉 Configuration complete!

Next steps:
  1. Go to Cloudflare Dashboard and verify the rules
  2. Purge Cloudflare cache (Caching → Configuration → Purge Everything)
  3. Test your site with PageSpeed Insights
  4. Verify headers with: curl -I https://nirosha.org/
```

## Troubleshooting

### Error: "Zone not found"
- **Solution**: Make sure your domain is added to Cloudflare and the DNS is active
- Verify the domain name is spelled correctly

### Error: "API request failed" or "Unauthorized"
- **Solution**: 
  - Check your API Token is correct
  - Verify the token has the required permissions
  - Make sure the token includes your zone

### Error: "Transform Rules require Pro plan"
- **Solution**: 
  - Transform Rules require Cloudflare Pro plan or higher
  - Cache Rules work on Free plan
  - You can manually set security headers via Page Rules (limited to 3 on Free plan)

### Rules already exist
- **Solution**: The script will skip rules that already exist
- You can delete existing rules in Cloudflare Dashboard and re-run the script

## Manual Verification

After running the script, verify the configuration:

### 1. Check Cache Rules
- Go to **Caching** → **Cache Rules**
- You should see 4 rules created

### 2. Check Transform Rules
- Go to **Rules** → **Transform Rules** → **Modify Response Header**
- You should see 8 rules created

### 3. Check Performance Settings
- Go to **Speed** → **Optimization**
- Verify Auto Minify, Brotli are enabled

### 4. Test Headers
```bash
curl -I https://nirosha.org/
```

You should see security headers in the response.

### 5. Test Cache
```bash
curl -I https://nirosha.org/assets/index-*.js
```

You should see `Cache-Control: public, max-age=31536000, immutable`

## Security Note

⚠️ **Never commit your API Token to version control!**

The script prompts for the token interactively. If you need to automate this, use environment variables:

```bash
export CLOUDFLARE_API_TOKEN="your-token-here"
node scripts/setup-cloudflare.js
```

Then modify the script to read from `process.env.CLOUDFLARE_API_TOKEN`.

## Next Steps

After running the script:

1. ✅ **Purge Cloudflare Cache**
   - Go to **Caching** → **Configuration**
   - Click **Purge Everything**

2. ✅ **Verify in Dashboard**
   - Check all rules are created and active
   - Review performance settings

3. ✅ **Test Your Site**
   - Run PageSpeed Insights
   - Check browser DevTools Network tab
   - Verify cache headers

4. ✅ **Monitor Performance**
   - Check Cloudflare Analytics
   - Monitor cache hit ratio
   - Review PageSpeed scores

## Support

If you encounter issues:

1. Check Cloudflare API documentation: https://developers.cloudflare.com/api/
2. Verify your API Token permissions
3. Check Cloudflare status page
4. Review script error messages for specific API errors




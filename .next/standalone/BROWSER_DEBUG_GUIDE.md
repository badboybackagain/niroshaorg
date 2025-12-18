# Browser-Side Debugging Guide for Contact Form

## Step 1: Check Browser Console

1. **Open your website:** `https://nirosha.org/contact`
2. **Open Developer Tools:** Press `F12` or `Right-click → Inspect`
3. **Go to Console tab**
4. **Submit the contact form**
5. **Look for:**
   - The log message: `"Sending request to: /api/contact"` (should show `/api/contact`)
   - Any error messages (red text)
   - CORS errors
   - Network errors

## Step 2: Check Network Tab

1. **Open Developer Tools** → **Network tab**
2. **Clear the network log** (trash icon)
3. **Submit the contact form**
4. **Find the request** to `/api/contact` or `/contact`
5. **Click on it** and check:

### Request Details:
- **Request URL:** Should be `https://nirosha.org/api/contact`
- **Request Method:** Should be `POST`
- **Status Code:** 
  - `200` = Success
  - `404` = Endpoint not found
  - `500` = Server error
  - `CORS error` = CORS issue

### Request Headers:
- `Content-Type: application/json`
- `Origin: https://nirosha.org`

### Response Headers:
- `Access-Control-Allow-Origin: https://nirosha.org` (should be present)
- `Content-Type: application/json`

### Response Body:
- Should be JSON like: `{"success": true, "message": "Emails sent successfully"}`
- If it's HTML, the endpoint is wrong or returning an error page

## Step 3: Test Directly in Browser Console

Open browser console and run:

```javascript
fetch('https://nirosha.org/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Browser Test',
    countryCode: '+91',
    whatsappNumber: '1234567890',
    email: 'browser@test.com',
    serviceInterested: ['Web Development'],
    comments: 'Testing from browser console'
  })
})
  .then(res => {
    console.log('Status:', res.status);
    console.log('Headers:', [...res.headers.entries()]);
    return res.json();
  })
  .then(data => {
    console.log('✅ Success:', data);
  })
  .catch(err => {
    console.error('❌ Error:', err);
  });
```

**Expected output:**
```
Status: 200
Headers: [["content-type", "application/json"], ["access-control-allow-origin", "https://nirosha.org"], ...]
✅ Success: {success: true, message: "Emails sent successfully", ...}
```

## Step 4: Check if Frontend is Updated

1. **View page source:** Right-click → View Page Source
2. **Search for:** `apiEndpoint` or `/contact` or `/api/contact`
3. **Check the built JavaScript:**
   - Open DevTools → Sources tab
   - Find the Contact component file
   - Search for the endpoint URL
   - Should show `/api/contact` not `/contact`

## Step 5: Clear Browser Cache

The browser might be using cached JavaScript:

1. **Hard refresh:** `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Or clear cache:**
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Firefox: Settings → Privacy → Clear Data → Cached Web Content
   - Safari: Develop → Empty Caches

## Step 6: Check if Build was Deployed

Verify the latest build is deployed:

1. **Check the build timestamp:**
   ```bash
   # On your local machine
   ls -la dist/assets/*.js | head -1
   ```

2. **Check deployed files:**
   - The JavaScript files in `dist/assets/` should be recent
   - Check file modification dates

## Common Issues and Solutions

### Issue: "Sending request to: /contact" (wrong endpoint)

**Solution:** Frontend wasn't rebuilt. Run:
```bash
npm run build
./deploy.sh
```

### Issue: CORS error in console

**Symptoms:**
- Console shows: `Access to fetch at '...' from origin '...' has been blocked by CORS policy`
- Network tab shows CORS error

**Solution:** 
- Server CORS is configured correctly (verified)
- Check if request is going to wrong domain
- Check browser console for exact error

### Issue: 404 Not Found

**Symptoms:**
- Network tab shows status `404`
- Response is HTML error page

**Possible causes:**
1. Frontend still using `/contact` instead of `/api/contact`
2. Reverse proxy not configured correctly
3. Build not deployed

**Solution:**
1. Rebuild and redeploy frontend
2. Check browser console for actual endpoint being called
3. Verify the endpoint works with curl

### Issue: Network Error / Failed to fetch

**Symptoms:**
- Console shows: `Failed to fetch` or `NetworkError`
- Network tab shows request failed

**Possible causes:**
1. Server is down (but we verified it's running)
2. Network connectivity issue
3. Firewall blocking request
4. SSL/TLS certificate issue

**Solution:**
- Test with curl from your machine
- Check if other pages on the site work
- Check browser console for specific error

### Issue: 500 Internal Server Error

**Symptoms:**
- Network tab shows status `500`
- Response shows server error

**Solution:**
- Check server logs (we verified server works)
- Test endpoint with curl
- Check server configuration

## Quick Test Commands

### Test from your local machine:

```bash
# Test the endpoint
curl -X POST https://nirosha.org/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://nirosha.org" \
  -d '{
    "fullName": "Test",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@test.com",
    "serviceInterested": ["Web Development"],
    "comments": "Test"
  }'
```

### Test CORS preflight:

```bash
curl -X OPTIONS https://nirosha.org/api/contact \
  -H "Origin: https://nirosha.org" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v
```

## What to Share for Further Debugging

If it's still not working, share:

1. **Browser console output** (screenshot or copy/paste)
2. **Network tab details** for the `/api/contact` request:
   - Request URL
   - Status code
   - Request headers
   - Response headers
   - Response body
3. **The exact error message** from console
4. **Browser and version** (Chrome, Firefox, Safari, etc.)
5. **Whether you rebuilt and redeployed** after the fix

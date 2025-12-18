# Contact Form Debugging Guide

## Quick Checks

### 1. Check Browser Console

Open browser console (F12) and look for:
- The API endpoint being called
- Any CORS errors
- Network errors
- Error messages from the API

### 2. Check Network Tab

1. Open DevTools (F12) → Network tab
2. Submit the form
3. Look for the request to `/contact` or `/api/contact`
4. Check:
   - **Status code** (should be 200)
   - **Request URL** (should match your server)
   - **Response** (should show success or error message)

### 3. Verify API Endpoint

The form now uses:
- **Local development:** `http://localhost:3000/api/contact`
- **Production:** `/contact` (relative URL, works with your proxy)

### 4. Test API Directly

Test the endpoint with curl:

```bash
# Test /contact (since proxy strips /api)
curl -X POST https://nirosha.org/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@example.com",
    "serviceInterested": ["Web Development"],
    "comments": "Test message"
  }'
```

### 5. Check Server Logs

Check your Node.js server logs for:
- Incoming requests
- Error messages
- Gmail connection issues
- Configuration problems

### 6. Verify Server Configuration

**On your server, check:**

1. **config.js exists and has credentials:**
   ```bash
   ssh user@server
   cd /path/to/server
   ls -la config.js
   cat config.js  # Verify credentials are set
   ```

2. **Server is running:**
   ```bash
   curl https://nirosha.org/api/health
   # Should return: {"status":"ok","message":"Email server is running"}
   ```

3. **Gmail credentials are correct:**
   - Verify `config.js` has correct Gmail App Password
   - Test Gmail connection: `npm run test-smtp` (on server)

## Common Issues

### Issue: "Failed to fetch" or Network Error

**Causes:**
- Wrong API endpoint URL
- Server not running
- CORS blocking the request

**Solution:**
- Check browser console for the exact endpoint being called
- Verify server is running: `curl https://nirosha.org/api/health`
- Check CORS settings in `config.js`

### Issue: 404 Not Found

**Causes:**
- Wrong endpoint path
- Proxy configuration issue

**Solution:**
- The form now uses `/contact` (without `/api`) for production
- Test both `/contact` and `/api/contact` endpoints

### Issue: 500 Internal Server Error

**Causes:**
- Gmail credentials not configured
- Server error

**Solution:**
- Check server logs
- Verify `config.js` is uploaded and has correct credentials
- Test Gmail connection

### Issue: CORS Error

**Causes:**
- `allowedOrigins` not configured correctly

**Solution:**
- Update `config.js` on server:
  ```javascript
  allowedOrigins: [
    'https://nirosha.org',
    'https://www.nirosha.org'
  ]
  ```
- Restart Node.js app

## Step-by-Step Debugging

1. **Open browser console (F12)**
2. **Submit the form**
3. **Check console for:**
   - "Sending request to: [URL]" - shows which endpoint is being called
   - Any error messages
4. **Check Network tab:**
   - Find the POST request
   - Check status code
   - Check response body
5. **Test endpoint directly:**
   ```bash
   curl -X POST https://nirosha.org/contact \
     -H "Content-Type: application/json" \
     -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"1234567890","email":"test@example.com","serviceInterested":["Web Development"]}'
   ```
6. **Check server logs** for errors

## Quick Fixes

### Update Frontend API URL

If you need to use a different endpoint, create `.env.production`:

```env
VITE_CONTACT_API_URL=https://nirosha.org/contact
```

Then rebuild:
```bash
npm run build
```

### Verify Server is Working

```bash
# Health check
curl https://nirosha.org/api/health

# Test contact endpoint
curl -X POST https://nirosha.org/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"1234567890","email":"test@example.com","serviceInterested":["Web Development"]}'
```

## Expected Behavior

**When form is submitted:**
1. Browser sends POST to `/contact`
2. Server receives request
3. Server sends email to `info@nirosha.org`
4. Server sends thank you email to user
5. Server returns success response
6. Form shows success message

**If any step fails:**
- Check browser console for errors
- Check Network tab for request/response
- Check server logs for errors

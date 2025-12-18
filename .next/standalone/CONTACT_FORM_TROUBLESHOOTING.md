# Contact Form Troubleshooting

## Issue: Form works with curl but not from browser

If you can send emails using curl but the contact form doesn't work, here are the most common causes:

### 1. CORS (Cross-Origin Resource Sharing) Issue

**Symptoms:**
- Browser console shows CORS error
- Network tab shows OPTIONS request failing
- Error: "Access to fetch at '...' from origin '...' has been blocked by CORS policy"

**Solution:**
The server has been updated to allow localhost origins. Make sure:
1. Your email server is running: `cd server && npm start`
2. Check server logs for CORS errors
3. Verify `ALLOWED_ORIGINS` in `server/.env` includes your frontend URL

For local development, the server now automatically allows all localhost origins.

### 2. Wrong API Endpoint URL

**Symptoms:**
- Network tab shows 404 or connection refused
- Error: "Failed to fetch" or "Network error"

**Solution:**
Create a `.env.local` file in the project root:

```env
VITE_CONTACT_API_URL=http://localhost:3000/api/contact
```

Then restart your Vite dev server:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

**Check:**
- Open browser console (F12)
- Look for the log: "Sending request to: http://localhost:3000/api/contact"
- If it shows a different URL, the environment variable isn't loaded

### 3. Server Not Running

**Symptoms:**
- Network error or connection refused
- Error: "Failed to fetch"

**Solution:**
1. Make sure the email server is running:
   ```bash
   cd server
   npm start
   ```

2. Test the health endpoint:
   ```bash
   curl http://localhost:3000/health
   ```

3. If it doesn't respond, check:
   - Is port 3000 already in use?
   - Are there any errors in the server console?
   - Did you install dependencies? (`npm install` in server directory)

### 4. Browser Console Errors

**Check the browser console (F12) for:**
- CORS errors
- Network errors
- JavaScript errors
- The debug log showing the API endpoint being called

### 5. Environment Variable Not Loading

**Vite requires:**
- File name: `.env.local` (for local development)
- Variable prefix: `VITE_`
- Restart dev server after creating/modifying `.env` files

**Steps:**
1. Create `.env.local` in project root (not in `server/` folder)
2. Add: `VITE_CONTACT_API_URL=http://localhost:3000/api/contact`
3. Restart Vite: Stop (`Ctrl+C`) and run `npm run dev` again

### 6. Check Network Tab

1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit the form
4. Look for the request to `/api/contact`
5. Check:
   - Request URL (should be `http://localhost:3000/api/contact`)
   - Status code (should be 200)
   - Response (should show success message)

## Quick Debug Checklist

- [ ] Email server is running (`cd server && npm start`)
- [ ] Health endpoint works (`curl http://localhost:3000/health`)
- [ ] `.env.local` file exists in project root
- [ ] `.env.local` contains `VITE_CONTACT_API_URL=http://localhost:3000/api/contact`
- [ ] Vite dev server was restarted after creating `.env.local`
- [ ] Browser console shows the correct API endpoint in logs
- [ ] No CORS errors in browser console
- [ ] Network tab shows the request going to port 3000

## Testing Steps

1. **Start email server:**
   ```bash
   cd server
   npm start
   ```

2. **In another terminal, start frontend:**
   ```bash
   npm run dev
   ```

3. **Open browser console (F12)** and look for:
   - "Sending request to: http://localhost:3000/api/contact"
   - Any error messages

4. **Submit the form** and check:
   - Browser console for errors
   - Network tab for the request
   - Server console for incoming requests

## Common Error Messages

### "Failed to fetch"
- Server not running
- Wrong API URL
- Network connectivity issue

### "CORS policy blocked"
- Server CORS not configured correctly
- Check `ALLOWED_ORIGINS` in server `.env`

### "404 Not Found"
- Wrong API endpoint URL
- Server route not matching

### "500 Internal Server Error"
- Check server console for error details
- Gmail credentials issue
- Server-side error

## Still Not Working?

1. **Check server logs** - Look for incoming requests and errors
2. **Check browser console** - Look for JavaScript errors
3. **Check Network tab** - See the actual request/response
4. **Test with curl** - If curl works, it's a frontend/CORS issue
5. **Verify both servers are running** - Frontend (Vite) and backend (Express)

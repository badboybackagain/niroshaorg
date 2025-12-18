# Production Endpoint Configuration - Fixed

## ✅ Test Results

**Production endpoint test:**
```bash
curl -X POST https://nirosha.org/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"1234567890","email":"test@test.com","serviceInterested":["Web Development"],"comments":"Test"}'
```

**Result:** ✅ Success
```json
{
  "success": true,
  "message": "Emails sent successfully",
  "adminEmailId": "...",
  "userEmailId": "..."
}
```

## 🔧 Changes Made

### 1. Hardcoded Production URL in Contact.jsx

The Contact component now uses a **hardcoded production endpoint** that doesn't require `.env` file:

```javascript
// Production: HARDCODED to use relative URL /api/contact
// This works for nirosha.org and any production domain
// Relative URL resolves to: https://nirosha.org/api/contact
apiEndpoint = '/api/contact';
```

**Logic:**
1. **First:** Check `VITE_CONTACT_API_URL` environment variable (if set)
2. **Second:** If hostname is `localhost` or `127.0.0.1`, use `http://localhost:3000/api/contact`
3. **Default:** Use `/api/contact` (relative URL) for all production domains

### 2. Deploy.sh Protection

**Confirmed:** `deploy.sh` only uploads the `dist/` folder, so:
- ✅ Server files (`server/` directory) are **NOT** deployed
- ✅ `server/config.js` will **NOT** be overwritten
- ✅ `server/server.js` will **NOT** be overwritten
- ✅ Any `.env` files on server are safe

**Added note in deploy.sh:**
```bash
echo "Note: This script only deploys the 'dist' folder (frontend)."
echo "Server files (server/ directory) are NOT deployed and will not be overwritten."
```

## 📋 Current Configuration

### Frontend (Contact.jsx)
- **Production:** Uses `/api/contact` (hardcoded, no .env needed)
- **Local dev:** Uses `http://localhost:3000/api/contact` (when on localhost)
- **Environment variable:** Can override with `VITE_CONTACT_API_URL` if needed

### Server (server.js)
- **Endpoint:** `/api/contact` and `/contact` (both supported)
- **CORS:** Configured for `https://nirosha.org` and `https://www.nirosha.org`
- **Config:** Uses `server/config.js` (not overwritten by deploy.sh)

## 🚀 Next Steps

1. **Rebuild frontend:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   ./deploy.sh
   ```

3. **Test:**
   - Form should now use `/api/contact`
   - Check browser console for: `🌐 Production mode: using hardcoded relative URL /api/contact`
   - Form should work end-to-end

## ✅ Verification Checklist

After rebuilding and deploying:

- [ ] Form uses `/api/contact` (check browser console)
- [ ] No more `localhost:3000` in network requests
- [ ] Form submission succeeds
- [ ] Emails are sent successfully
- [ ] Server files remain untouched (config.js, server.js)

## 🔒 Protection Against Overwrites

**Server files are protected because:**
1. `deploy.sh` only uploads `dist/` folder
2. Server directory is not included in deployment
3. `config.js` and `server.js` remain on server unchanged

**To update server files:**
- Manually upload via SSH/FTP
- Or use a separate deployment script for server

## 📝 Notes

- **No .env file needed** for production frontend
- Production URL is **hardcoded** in the source code
- Works for any production domain (uses relative URL)
- Local development still works with localhost detection


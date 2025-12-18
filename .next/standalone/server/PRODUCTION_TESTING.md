# Production Testing Guide

This guide helps you test your email server after deployment to production.

## Prerequisites

- ✅ Server is deployed and running
- ✅ `config.js` is uploaded with Gmail credentials
- ✅ Dependencies are installed (`node_modules` exists)
- ✅ Server is accessible via URL

## Step 1: Test Health Endpoint

The health endpoint doesn't require credentials and confirms the server is running.

### Using curl:

```bash
curl https://your-server-url/health
```

**Expected response:**
```json
{"status":"ok","message":"Email server is running"}
```

### Using Browser:

Open in your browser:
```
https://your-server-url/health
```

### Using JavaScript (Browser Console):

```javascript
fetch('https://your-server-url/health')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

**✅ Success:** You see the JSON response  
**❌ Failure:** Check server logs, verify server is running

## Step 2: Test Contact Form Endpoint

Test the actual email sending functionality.

### Using curl:

```bash
curl -X POST https://your-server-url/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@example.com",
    "serviceInterested": ["Web Development"],
    "comments": "This is a test message from production"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Emails sent successfully",
  "adminEmailId": "...",
  "userEmailId": "..."
}
```

### Using Postman or Insomnia:

1. **Method:** POST
2. **URL:** `https://your-server-url/api/contact`
3. **Headers:**
   - `Content-Type: application/json`
4. **Body (JSON):**
   ```json
   {
     "fullName": "Test User",
     "countryCode": "+91",
     "whatsappNumber": "1234567890",
     "email": "test@example.com",
     "serviceInterested": ["Web Development"],
     "comments": "This is a test message"
   }
   ```

### Using JavaScript (Browser Console):

```javascript
fetch('https://your-server-url/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fullName: 'Test User',
    countryCode: '+91',
    whatsappNumber: '1234567890',
    email: 'test@example.com',
    serviceInterested: ['Web Development'],
    comments: 'This is a test message'
  })
})
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
    if (data.success) {
      console.log('✅ Emails sent successfully!');
    }
  })
  .catch(err => console.error('Error:', err));
```

**✅ Success:** You receive:
- Email at `info@nirosha.org` with form submission
- Thank you email at `test@example.com`

**❌ Failure:** Check error message and server logs

## Step 3: Test from Frontend

Test the actual contact form on your website.

### Update Frontend API URL

Make sure your frontend is pointing to the production server:

**Option A: Environment Variable**

Create `.env.production` in project root:
```env
VITE_CONTACT_API_URL=https://your-server-url/api/contact
```

Then rebuild:
```bash
npm run build
```

**Option B: Update Contact Component**

Edit `src/components/Contact.jsx` and update the default:
```javascript
const apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || 
  'https://your-server-url/api/contact';
```

### Test the Form

1. **Go to your website:** `https://nirosha.org/contact` (or your contact page)
2. **Fill out the form:**
   - Full Name: Test User
   - Country Code: Select your country
   - Phone Number: Your test number
   - Email: Your email address
   - Services: Select at least one service
   - Comments: Test message
3. **Submit the form**
4. **Check:**
   - Form shows success message
   - Browser console shows no errors
   - You receive email at `info@nirosha.org`
   - You receive thank you email at your email address

## Step 4: Verify Emails

### Check Email Inbox

1. **Check `info@nirosha.org`:**
   - Should receive form submission email
   - Contains all form data
   - From: "Nirosha Contact Form"

2. **Check user email:**
   - Should receive thank you email
   - Contains inquiry details
   - From: "Nirosha Enterprises"

### Email Not Received?

1. **Check spam/junk folder**
2. **Check server logs** for errors
3. **Verify Gmail credentials** in `config.js`
4. **Test Gmail connection:**
   ```bash
   cd server
   npm run test-smtp
   ```

## Step 5: Check Server Logs

Monitor server logs for errors or issues.

### Via Hosting Control Panel:

1. Go to your Node.js app
2. Look for "Logs" or "Console Output"
3. Check for:
   - Startup messages
   - Configuration check output
   - Error messages
   - Email sending confirmations

### Via SSH:

```bash
ssh user@server
cd /path/to/server
# Check if using PM2
pm2 logs

# Or check application logs
tail -f /path/to/logs/app.log
```

## Common Issues & Solutions

### Issue: "Cannot find package 'express'"

**Solution:** Dependencies not installed
```bash
cd /path/to/server
npm install --production
```

### Issue: "Gmail credentials not configured"

**Solution:** `config.js` not uploaded or incorrect
- Verify `config.js` exists on server
- Check file has correct format
- Verify credentials are correct

### Issue: CORS errors

**Solution:** Update `allowedOrigins` in `config.js`
```javascript
allowedOrigins: [
  'https://nirosha.org',
  'https://www.nirosha.org'
]
```

### Issue: "Connection refused" or timeout

**Solution:** 
- Verify server is running
- Check port is correct (3000)
- Verify firewall allows connections
- Check hosting provider status

### Issue: Emails not sending

**Solution:**
1. Test Gmail connection: `npm run test-smtp`
2. Verify App Password is correct (16 characters, no spaces)
3. Check Gmail account for security alerts
4. Verify 2-Step Verification is enabled

## Testing Checklist

- [ ] Health endpoint returns `{"status":"ok"}`
- [ ] Contact endpoint accepts POST requests
- [ ] Contact endpoint returns success response
- [ ] Email received at `info@nirosha.org`
- [ ] Thank you email received at user email
- [ ] Frontend form submits successfully
- [ ] No CORS errors in browser console
- [ ] Server logs show no errors
- [ ] All form fields are included in email
- [ ] Honeypot fields work (bots are blocked)

## Quick Test Commands

```bash
# Test health
curl https://your-server-url/health

# Test contact form
curl -X POST https://your-server-url/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","countryCode":"+91","whatsappNumber":"1234567890","email":"test@example.com","serviceInterested":["Web Development"],"comments":"Test"}'

# Test from frontend (browser console)
fetch('https://your-server-url/api/contact', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    fullName: 'Test',
    countryCode: '+91',
    whatsappNumber: '1234567890',
    email: 'test@example.com',
    serviceInterested: ['Web Development'],
    comments: 'Test'
  })
}).then(r => r.json()).then(console.log)
```

## Production Readiness

Before going live, verify:

- [ ] Health endpoint works
- [ ] Contact form sends emails successfully
- [ ] Emails are received correctly
- [ ] Frontend is connected to production API
- [ ] CORS is configured for your domain
- [ ] Server logs are monitored
- [ ] Error handling works
- [ ] Honeypot spam protection works

## Support

If you encounter issues:

1. Check server logs
2. Verify `config.js` is correct
3. Test Gmail connection: `npm run test-smtp`
4. Check browser console for errors
5. Verify all dependencies are installed
6. Review troubleshooting guides in `server/` directory

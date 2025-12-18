# Fix Gmail Authentication Error

## Current Status
✅ **Form is working correctly!** The form validation passes and requests reach the server.
❌ **Gmail authentication is failing** - Server can't send emails due to invalid credentials.

## Error Message
```
Invalid login: 535-5.7.8 Username and Password not accepted
```

This means the Gmail credentials in `server/config.js` are incorrect or expired.

## Solution: Update Gmail Credentials

### Step 1: Generate Gmail App Password

1. **Go to your Google Account:** https://myaccount.google.com
2. **Enable 2-Step Verification** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the setup process
3. **Generate App Password:**
   - Go to Security → 2-Step Verification → App passwords
   - Or directly: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter name: "Nirosha Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (no spaces)

### Step 2: Update Server Config

SSH into your server and update `config.js`:

```bash
ssh -p 22 nirosha_1@37.27.54.247
cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
nano config.js
```

Update the Gmail credentials:

```javascript
export const config = {
  gmail: {
    user: 'info@nirosha.org',  // Your full Gmail address
    password: 'xxxx xxxx xxxx xxxx'  // 16-character App Password (no spaces)
  },
  // ... rest of config
}
```

**Important:**
- Use your **full email address** (e.g., `info@nirosha.org`)
- Use the **16-character App Password** (not your regular Gmail password)
- Remove any spaces from the App Password
- The App Password should look like: `abcd efgh ijkl mnop` (but remove spaces: `abcdefghijklmnop`)

### Step 3: Restart Server

After updating config.js, restart the server:

```bash
# Find the server process
ps aux | grep 'node.*server'

# Kill the old process (replace PID with actual process ID)
kill <PID>

# Start server again
cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
nohup node server.js > nohup.out 2>&1 &

# Or if using PM2:
pm2 restart server
```

### Step 4: Test

Test the endpoint:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test",
    "countryCode": "+91",
    "whatsappNumber": "1234567890",
    "email": "test@test.com",
    "serviceInterested": ["Web Development"],
    "comments": "Test"
  }'
```

Should return:
```json
{
  "success": true,
  "message": "Emails sent successfully",
  "adminEmailId": "...",
  "userEmailId": "..."
}
```

## Common Issues

### Issue: "Username and Password not accepted"

**Causes:**
1. Using regular Gmail password instead of App Password
2. App Password has spaces (remove them)
3. Email address is incorrect
4. 2-Step Verification not enabled

**Solution:**
- Generate a new App Password
- Make sure 2-Step Verification is enabled
- Use full email address (e.g., `info@nirosha.org`)

### Issue: "Less secure app access"

**Solution:**
- Google no longer supports "less secure apps"
- You **must** use App Passwords with 2-Step Verification enabled

### Issue: App Password not working

**Solution:**
1. Generate a new App Password
2. Make sure you copy all 16 characters
3. Remove any spaces
4. Restart the server after updating config

## Quick Checklist

- [ ] 2-Step Verification enabled on Google Account
- [ ] App Password generated (16 characters)
- [ ] `config.js` updated with correct credentials
- [ ] App Password has no spaces in config.js
- [ ] Server restarted after updating config
- [ ] Test endpoint returns success

## After Fixing

Once credentials are fixed:
1. The form will work end-to-end
2. Emails will be sent to `info@nirosha.org`
3. Users will receive thank you emails
4. No more 500 errors

The form is working correctly - this is just a server configuration issue!

# Update Gmail Password on Server

## Current Status
- Current password in config: `rxljjbbpwgctunwj` (not working)
- Email: `info@nirosha.org` (correct)

## Step 1: Generate New Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Make sure 2-Step Verification is enabled
3. Select "Mail" and generate password
4. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
5. Remove all spaces (should be: `abcdefghijklmnop`)

## Step 2: Update on Server

### Option A: Use the script (easiest)

```bash
./update-gmail-simple.sh YOUR_NEW_APP_PASSWORD
```

Example:
```bash
./update-gmail-simple.sh abcdefghijklmnop
```

### Option B: Manual update via SSH

```bash
ssh -p 22 nirosha_1@37.27.54.247
cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server

# Backup current config
cp config.js config.js.backup

# Edit config
nano config.js
```

Update this line:
```javascript
password: 'YOUR_NEW_16_CHAR_APP_PASSWORD'  // No spaces!
```

Save and exit (Ctrl+X, then Y, then Enter)

## Step 3: Restart Server (You'll do this)

After updating the password, restart the server:

```bash
# Find and kill the server process
pkill -f "node.*server"

# Or find the PID first
ps aux | grep "node.*server"

# Start server again
cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
nohup node server.js > nohup.out 2>&1 &

# Verify it's running
ps aux | grep "node.*server"
```

## Step 4: Test

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
  "message": "Emails sent successfully"
}
```

## Quick Command Reference

```bash
# Update password (replace with your new password)
./update-gmail-simple.sh abcdefghijklmnop

# Then SSH and restart
ssh -p 22 nirosha_1@37.27.54.247
cd /var/www/5fcedb5f-4188-4356-a8e9-4f09d37e27af/server
pkill -f "node.*server"
nohup node server.js > nohup.out 2>&1 &
```

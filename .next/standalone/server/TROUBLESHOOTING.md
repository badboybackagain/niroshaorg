# Gmail SMTP Troubleshooting Guide

## Common "Invalid Login" Issues

### 1. Check Your App Password Format

**App passwords are 16 characters with NO spaces.**

❌ **Wrong:**
```
GMAIL_PASSWORD=abcd efgh ijkl mnop
```

✅ **Correct:**
```
GMAIL_PASSWORD=abcdefghijklmnop
```

**How to verify:**
- App passwords are exactly 16 characters
- They contain only letters and numbers (no spaces, dashes, or special characters)
- When you copy from Google, make sure you copied the entire password

### 2. Check Your Email Address

Make sure you're using the **full email address**, not just the username:

❌ **Wrong:**
```
GMAIL_USER=yourname
```

✅ **Correct:**
```
GMAIL_USER=yourname@gmail.com
```

### 3. Verify 2-Step Verification is Enabled

App Passwords **require** 2-Step Verification to be enabled:

1. Go to https://myaccount.google.com/security
2. Check that "2-Step Verification" shows as **ON**
3. If it's OFF, enable it first, then create an App Password

### 4. Check Your .env File Format

Make sure there are **no quotes** around values and **no trailing spaces**:

❌ **Wrong:**
```
GMAIL_USER="yourname@gmail.com"
GMAIL_PASSWORD="abcdefghijklmnop "
```

✅ **Correct:**
```
GMAIL_USER=yourname@gmail.com
GMAIL_PASSWORD=abcdefghijklmnop
```

### 5. Regenerate Your App Password

Sometimes the password gets corrupted. Try creating a new one:

1. Go to https://myaccount.google.com/apppasswords
2. Delete the old "Nirosha Contact Form" app password
3. Create a new one
4. Copy it immediately (you can only see it once)
5. Update your `.env` file

### 6. Check for Hidden Characters

Sometimes copying from certain sources adds hidden characters:

**Solution:** Type the password manually, or use a text editor that shows hidden characters.

### 7. Verify Environment Variables are Loaded

Add this temporary debug code to `server.js` (after `dotenv.config()`):

```javascript
console.log('Environment check:');
console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set (' + process.env.GMAIL_USER.length + ' chars)' : 'NOT SET');
console.log('GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD ? 'Set (' + process.env.GMAIL_PASSWORD.length + ' chars)' : 'NOT SET');
```

Run the server and check:
- If it says "NOT SET", your `.env` file isn't being loaded
- If password length is not 16, there's an issue with the password

### 8. Test with a Simple Script

Create a test file `test-smtp.js`:

```javascript
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Error:', error.message);
    console.error('Code:', error.code);
    console.error('Command:', error.command);
  } else {
    console.log('✅ Server is ready to send emails');
  }
});
```

Run: `node test-smtp.js`

### 9. Common Error Codes

- **EAUTH**: Authentication failed - Check username/password
- **EENVELOPE**: Invalid email address
- **ETIMEDOUT**: Connection timeout - Check internet/firewall

### 10. Alternative: Use OAuth2 (Advanced)

If App Passwords continue to fail, you can use OAuth2. This is more complex but more secure. Let me know if you want instructions for this.

## Step-by-Step Verification

1. **Check your .env file:**
   ```bash
   cat server/.env
   ```
   Make sure it looks like:
   ```
   GMAIL_USER=yourname@gmail.com
   GMAIL_PASSWORD=abcdefghijklmnop
   ```

2. **Check for spaces:**
   ```bash
   # This should show exactly 16 characters
   echo $GMAIL_PASSWORD | wc -c
   ```

3. **Test the connection:**
   ```bash
   cd server
   npm start
   ```
   Look for the SMTP verification message in the console.

4. **Check server logs:**
   The server will now show detailed error messages when SMTP connection fails.

## Still Not Working?

If none of these work, try:

1. **Use a different Gmail account** to test
2. **Check Google Account security alerts** - Google might be blocking the login
3. **Wait a few minutes** - Sometimes Google temporarily blocks after failed attempts
4. **Check if "Less secure app access" is needed** (though this shouldn't be necessary with App Passwords)

## Quick Fix Checklist

- [ ] App Password is exactly 16 characters (no spaces)
- [ ] GMAIL_USER is full email (yourname@gmail.com)
- [ ] 2-Step Verification is enabled
- [ ] .env file has no quotes around values
- [ ] .env file has no trailing spaces
- [ ] Server is reading .env file (check console logs)
- [ ] Tried generating a new App Password
- [ ] Checked Google Account for security alerts

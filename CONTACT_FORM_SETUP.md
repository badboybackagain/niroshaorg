# Contact Form Email Setup Guide

This guide explains how to set up the contact form to send emails via Gmail.

## Prerequisites

1. A Gmail account
2. Firebase project with Functions enabled
3. Firebase CLI installed (`npm install -g firebase-tools`)

## Gmail Setup

### Step 1: Enable App Passwords (Recommended)

For better security, use an App Password instead of your regular Gmail password:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Nirosha Contact Form" as the name
6. Click **Generate**
7. **Copy the 16-character password** (you'll need this)

### Step 2: Alternative - Less Secure Apps (Not Recommended)

If you don't want to use App Passwords, you can enable "Less secure app access" in your Google Account settings, but this is less secure.

## Firebase Functions Setup

### Step 1: Install Dependencies

```bash
cd functions
npm install
```

### Step 2: Set Gmail Credentials

You have two options:

#### Option A: Using Firebase Functions Config (Recommended for Production)

```bash
firebase functions:config:set gmail.user="your-email@gmail.com" gmail.password="your-app-password"
```

#### Option B: Using Environment Variables (For Local Development)

Create a `.env` file in the `functions` directory:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
```

### Step 3: Deploy Functions

```bash
firebase deploy --only functions
```

After deployment, you'll get a URL like:
```
https://us-central1-your-project-id.cloudfunctions.net/sendContactEmail
```

### Step 4: Update Frontend Endpoint

Update the endpoint URL in `src/components/Contact.jsx`:

```javascript
const response = await fetch('https://us-central1-YOUR-PROJECT-ID.cloudfunctions.net/sendContactEmail', {
  // ... rest of the code
});
```

Replace `YOUR-PROJECT-ID` with your actual Firebase project ID.

## Testing

1. Fill out the contact form on your website
2. Check that you receive:
   - An email at `info@nirosha.org` with the form submission
   - A thank you email at the user's email address

## Troubleshooting

### Error: "Gmail credentials not configured"
- Make sure you've set the Firebase Functions config or environment variables
- Verify the credentials are correct

### Error: "Invalid login"
- If using App Password, make sure you copied the 16-character password correctly
- If using regular password, ensure "Less secure app access" is enabled

### Error: "Connection timeout"
- Check your internet connection
- Verify Firebase Functions are deployed correctly
- Check Firebase Functions logs: `firebase functions:log`

### Emails not sending
- Check Firebase Functions logs for errors
- Verify the Gmail account has sufficient quota
- Make sure the recipient email addresses are valid

## Security Notes

1. **Never commit credentials to Git** - The `.gitignore` file excludes `.env` files
2. **Use App Passwords** - More secure than regular passwords
3. **Rotate passwords regularly** - Change your App Password periodically
4. **Monitor usage** - Check Firebase Functions logs regularly for suspicious activity

## Local Development

To test functions locally:

```bash
cd functions
npm run serve
```

This starts the Firebase emulator. The function will be available at:
```
http://localhost:5001/your-project-id/us-central1/sendContactEmail
```

## Production Deployment

1. Set production credentials:
   ```bash
   firebase functions:config:set gmail.user="your-email@gmail.com" gmail.password="your-app-password"
   ```

2. Deploy:
   ```bash
   firebase deploy --only functions
   ```

3. Update the frontend endpoint URL to use the production function URL.

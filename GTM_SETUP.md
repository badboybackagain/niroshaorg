# Google Tag Manager (GTM) Setup Guide

## 📋 Overview

This guide explains how to set up Google Tag Manager with the consent banner on your production site.

## 🔑 Step 1: Get Your GTM Container ID

1. **Go to Google Tag Manager**: https://tagmanager.google.com/
2. **Select your container** (or create a new one)
3. **Copy your Container ID** - It looks like `GTM-XXXXXXX` (e.g., `GTM-ABC123`)
4. **Note it down** - You'll need this for the next step

## 🚀 Step 2: Set Up on Production

### Option 1: Environment Variable (Recommended)

#### For Next.js Standalone Build:

1. **SSH into your production server**
2. **Navigate to your deployment directory**:
   ```bash
   cd /path/to/your/deployment
   ```

3. **Create or edit `.env.local` file**:
   ```bash
   nano .env.local
   ```

4. **Add your GTM Container ID**:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
   Replace `GTM-XXXXXXX` with your actual Container ID.

5. **Save and exit** (Ctrl+X, then Y, then Enter)

6. **Restart your Next.js server**:
   ```bash
   # If using PM2:
   pm2 restart nirosha
   
   # Or if running directly:
   # Stop the current process (Ctrl+C) and restart:
   npm start
   ```

#### For Regular Next.js Build:

Same steps as above, but make sure the `.env.local` file is in the root directory where `package.json` is located.

### Option 2: Hosting Control Panel

If your hosting provider has an environment variables section:

1. **Login to your hosting control panel**
2. **Navigate to Environment Variables / Config Vars**
3. **Add a new variable**:
   - **Name**: `NEXT_PUBLIC_GTM_ID`
   - **Value**: `GTM-XXXXXXX` (your Container ID)
4. **Save** and restart your application

### Option 3: System Environment Variable

If you have SSH access and want to set it system-wide:

```bash
# Add to ~/.bashrc or ~/.profile
export NEXT_PUBLIC_GTM_ID="GTM-XXXXXXX"

# Reload
source ~/.bashrc
```

Then restart your Next.js server.

## ✅ Step 3: Verify It's Working

1. **Visit your production site**: https://nirosha.org
2. **Check for the consent banner** - It should appear at the bottom of the page on first visit
3. **Open browser DevTools** (F12)
4. **Go to Network tab** and filter by "gtm"
5. **Accept the consent banner**
6. **You should see**:
   - A request to `googletagmanager.com/gtm.js?id=GTM-XXXXXXX`
   - This confirms GTM is loading

7. **Check Console** (in DevTools):
   - Look for any GTM-related errors
   - Should see dataLayer initialized

8. **Verify in Google Tag Manager**:
   - Go to GTM dashboard
   - Click "Preview" mode
   - Enter your website URL
   - You should see tags firing when you interact with the site

## 🔍 Step 4: Test Consent Functionality

1. **Clear your browser data** (or use incognito mode)
2. **Visit your site** - Consent banner should appear
3. **Click "Reject"** - GTM should NOT load
4. **Check Network tab** - No GTM requests should appear
5. **Refresh and click "Accept"** - GTM should load
6. **Check Network tab** - GTM requests should appear

## 📝 Important Notes

### Environment Variable Naming

- **Must start with `NEXT_PUBLIC_`** - This makes it available to the browser
- **Format**: `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
- **No spaces** around the `=` sign

### After Setting Environment Variable

- **Rebuild is NOT required** for environment variable changes in Next.js
- **Server restart IS required** for the changes to take effect
- The variable is read at runtime, not build time

### Local Development

For local development, create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Note**: `.env.local` is already in `.gitignore` and won't be committed to git.

## 🐛 Troubleshooting

### GTM Not Loading

1. **Check environment variable is set**:
   ```bash
   # On server, check if variable exists:
   echo $NEXT_PUBLIC_GTM_ID
   ```

2. **Verify the variable name** - Must be exactly `NEXT_PUBLIC_GTM_ID`

3. **Check browser console** for errors

4. **Verify GTM Container ID format** - Should be `GTM-` followed by alphanumeric characters

### Consent Banner Not Appearing

1. **Clear localStorage**:
   ```javascript
   // In browser console:
   localStorage.removeItem('gtm-consent')
   ```

2. **Refresh the page** - Banner should appear

### GTM Loading Without Consent

- This shouldn't happen, but if it does:
  1. Check that `GoogleTagManager.jsx` is correctly checking `consentGranted`
  2. Verify consent state is being passed correctly
  3. Check browser console for errors

## 📚 Additional Resources

- [Google Tag Manager Documentation](https://support.google.com/tagmanager)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GDPR Consent Mode v2](https://support.google.com/tagmanager/answer/10718549)

## 🔒 Security Notes

- ✅ GTM Container ID is safe to expose in client-side code
- ✅ The consent banner stores user preference in localStorage (client-side only)
- ✅ No sensitive data is stored or transmitted
- ✅ GTM only loads when user consents

---

**Need Help?** Check the component files:
- `src/components/GTMConsentWrapper.jsx` - Main wrapper component
- `src/components/GoogleTagManager.jsx` - GTM integration
- `src/components/ConsentBanner.jsx` - Consent UI

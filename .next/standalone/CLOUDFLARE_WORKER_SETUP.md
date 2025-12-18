# Cloudflare Workers Setup Guide (Free Tier)

Cloudflare Workers offers a **free tier** that's perfect for hosting your email server! Here's how to set it up.

## Cloudflare Workers Free Tier Limits

- ✅ **100,000 requests/day** (free)
- ✅ **10ms CPU time per request** (usually enough for email sending)
- ✅ **128MB memory**
- ✅ **Unlimited bandwidth**
- ✅ **Free SSL/HTTPS**

**Note:** Cloudflare Workers don't support direct SMTP connections, so we'll use **Resend API** (also free) to send emails via Gmail.

## Step 1: Sign Up for Resend (Free Email API)

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email
4. Go to **API Keys** section
5. Create a new API key
6. **Copy the API key** (you'll need this)

**Resend Free Tier:**
- ✅ 3,000 emails/month
- ✅ 100 emails/day
- ✅ Perfect for contact forms

## Step 2: Set Up Cloudflare Workers

### Option A: Using Cloudflare Dashboard (Easiest)

1. **Sign up/Login to Cloudflare:**
   - Go to https://dash.cloudflare.com
   - Sign up or log in

2. **Create a Worker:**
   - Go to **Workers & Pages** → **Create application**
   - Click **Create Worker**
   - Name it: `nirosha-email-server`
   - Click **Deploy**

3. **Add the Code:**
   - Click **Edit code**
   - Delete the default code
   - Copy and paste the contents of `cloudflare-worker/worker-gmail.js`
   - Click **Save and deploy**

4. **Set Environment Variables:**
   - Go to **Settings** → **Variables**
   - Add these variables:
     - `RESEND_API_KEY`: Your Resend API key
     - `GMAIL_USER`: Your Gmail address (e.g., `yourname@gmail.com`)
   - Click **Save**

5. **Get Your Worker URL:**
   - Go to **Settings** → **Triggers**
   - Copy your Worker URL (e.g., `https://nirosha-email-server.your-subdomain.workers.dev`)

### Option B: Using Wrangler CLI (Advanced)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Navigate to worker directory:**
   ```bash
   cd cloudflare-worker
   ```

4. **Deploy:**
   ```bash
   wrangler deploy
   ```

5. **Set environment variables:**
   ```bash
   wrangler secret put RESEND_API_KEY
   wrangler secret put GMAIL_USER
   ```

## Step 3: Update Frontend

Update your frontend to use the Cloudflare Worker URL:

**Option A: Environment Variable (Recommended)**

Create `.env.production` in project root:
```env
VITE_CONTACT_API_URL=https://nirosha-email-server.your-subdomain.workers.dev/api/contact
```

**Option B: Update Contact Component**

Edit `src/components/Contact.jsx`:
```javascript
const apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || 
  'https://nirosha-email-server.your-subdomain.workers.dev/api/contact';
```

## Step 4: Test

1. **Test health endpoint:**
   ```bash
   curl https://nirosha-email-server.your-subdomain.workers.dev/health
   ```

2. **Test contact form:**
   - Submit the form on your website
   - Check that emails are sent

## Step 5: Custom Domain (Optional)

You can use a custom domain like `email.nirosha.org`:

1. **In Cloudflare Dashboard:**
   - Go to **Workers & Pages** → Your Worker → **Settings** → **Triggers**
   - Under **Routes**, click **Add Route**
   - Pattern: `email.nirosha.org/*`
   - Zone: `nirosha.org`
   - Click **Save**

2. **Update frontend:**
   ```env
   VITE_CONTACT_API_URL=https://email.nirosha.org/api/contact
   ```

## Alternative: Use SendGrid Instead of Resend

If you prefer SendGrid (free tier: 100 emails/day):

1. Sign up at https://sendgrid.com
2. Get your API key
3. Modify `worker-gmail.js` to use SendGrid API instead
4. Set `SENDGRID_API_KEY` in environment variables

## Alternative: Use Mailgun Instead

If you prefer Mailgun (free tier: 5,000 emails/month):

1. Sign up at https://www.mailgun.com
2. Get your API key
3. Modify `worker-gmail.js` to use Mailgun API
4. Set `MAILGUN_API_KEY` in environment variables

## Cost Comparison

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Cloudflare Workers** | 100k requests/day | ✅ Hosting (FREE) |
| **Resend** | 3,000 emails/month | ✅ Recommended |
| **SendGrid** | 100 emails/day | Small sites |
| **Mailgun** | 5,000 emails/month | Higher volume |

## Troubleshooting

### Worker returns 500 error
- Check Cloudflare Dashboard → Workers → Logs
- Verify environment variables are set correctly
- Check Resend API key is valid

### Emails not sending
- Verify Resend API key in environment variables
- Check Resend dashboard for API usage/errors
- Ensure you haven't exceeded free tier limits

### CORS errors
- The worker already handles CORS
- Make sure you're using the correct Worker URL

## Advantages of Cloudflare Workers

✅ **Completely free** for most use cases  
✅ **Fast** - Runs on Cloudflare's edge network  
✅ **Reliable** - 99.9% uptime SLA  
✅ **Scalable** - Handles traffic spikes automatically  
✅ **No server management** - Fully managed  
✅ **Global CDN** - Fast worldwide  

## Next Steps

1. Set up Resend account
2. Deploy Worker to Cloudflare
3. Set environment variables
4. Update frontend API URL
5. Test and deploy!

Your email server will be running on Cloudflare's infrastructure for **free**! 🎉

# Email Server Setup Guide

This guide explains how to set up the email server for the contact form without using Firebase.

## Prerequisites

1. A Gmail account
2. Node.js 18+ installed
3. A server/hosting provider (or run locally for testing)

## Gmail Setup

### Step 1: Enable App Passwords (Required)

For security, you must use an App Password instead of your regular Gmail password:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Nirosha Contact Form" as the name
6. Click **Generate**
7. **Copy the 16-character password** (you'll need this)

## Local Development Setup

### Step 1: Install Dependencies

```bash
cd server
npm install
```

### Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Gmail credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-16-character-app-password
   PORT=3000
   ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173
   ```

### Step 3: Start the Server

```bash
npm start
```

The server will run on `http://localhost:3000`

### Step 4: Update Frontend to Use Local Server

Create a `.env` file in the project root:

```env
VITE_CONTACT_API_URL=http://localhost:3000/api/contact
```

Then start your frontend:
```bash
npm run dev
```

## Production Deployment Options

### Option 1: Deploy to Your Own Server

If you have a VPS or dedicated server:

1. **Upload server files:**
   ```bash
   scp -r server/ user@your-server.com:/path/to/your/app/
   ```

2. **SSH into your server:**
   ```bash
   ssh user@your-server.com
   ```

3. **Install dependencies:**
   ```bash
   cd /path/to/your/app/server
   npm install --production
   ```

4. **Set up environment variables:**
   ```bash
   nano .env
   # Add your Gmail credentials
   ```

5. **Run with PM2 (recommended for production):**
   ```bash
   npm install -g pm2
   pm2 start server.js --name nirosha-email
   pm2 save
   pm2 startup
   ```

6. **Set up reverse proxy with Nginx:**
   ```nginx
   server {
       listen 80;
       server_name api.nirosha.org;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 2: Deploy to Heroku

1. **Install Heroku CLI:**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create a new app:**
   ```bash
   cd server
   heroku create nirosha-email-server
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set GMAIL_USER=your-email@gmail.com
   heroku config:set GMAIL_PASSWORD=your-app-password
   heroku config:set ALLOWED_ORIGINS=https://nirosha.org,https://www.nirosha.org
   ```

5. **Deploy:**
   ```bash
   git add .
   git commit -m "Add email server"
   git push heroku main
   ```

6. **Get your server URL:**
   ```bash
   heroku info
   # Your API will be at: https://nirosha-email-server.herokuapp.com/api/contact
   ```

### Option 3: Deploy to Railway

1. **Sign up at:** https://railway.app
2. **Create a new project**
3. **Connect your GitHub repository** or deploy from the server folder
4. **Add environment variables:**
   - `GMAIL_USER`
   - `GMAIL_PASSWORD`
   - `ALLOWED_ORIGINS`
5. **Deploy** - Railway will automatically detect Node.js and deploy

### Option 4: Deploy to Render

1. **Sign up at:** https://render.com
2. **Create a new Web Service**
3. **Connect your repository** or upload the server folder
4. **Configure:**
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
5. **Add environment variables** in the dashboard
6. **Deploy**

### Option 5: Deploy to DigitalOcean App Platform

1. **Sign up at:** https://www.digitalocean.com
2. **Create a new App**
3. **Connect your repository**
4. **Configure:**
   - **Type:** Web Service
   - **Build Command:** `cd server && npm install`
   - **Run Command:** `cd server && npm start`
5. **Add environment variables**
6. **Deploy**

## Update Frontend Configuration

After deploying your server, update your frontend to use the production API URL:

### Option A: Environment Variable (Recommended)

Create a `.env.production` file in the project root:

```env
VITE_CONTACT_API_URL=https://your-server-url.com/api/contact
```

### Option B: Update Contact Component

Edit `src/components/Contact.jsx` and change the default API endpoint:

```javascript
const apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || 
  'https://your-server-url.com/api/contact';
```

## Testing

1. **Test locally:**
   ```bash
   # Terminal 1: Start email server
   cd server
   npm start

   # Terminal 2: Start frontend
   npm run dev
   ```

2. **Fill out the contact form** on your website

3. **Check emails:**
   - You should receive an email at `info@nirosha.org`
   - The user should receive a thank you email

## Troubleshooting

### Error: "Gmail credentials not configured"
- Make sure you've set `GMAIL_USER` and `GMAIL_PASSWORD` in your `.env` file
- Verify the credentials are correct
- Make sure you're using an App Password, not your regular Gmail password

### Error: "Invalid login"
- Double-check your App Password (16 characters, no spaces)
- Ensure 2-Step Verification is enabled on your Google Account
- Try generating a new App Password

### CORS Errors
- Make sure `ALLOWED_ORIGINS` includes your website's domain
- For local development, include `http://localhost:5173` (Vite default port)

### Emails Not Sending
- Check server logs for errors
- Verify Gmail account has sufficient quota
- Check that recipient email addresses are valid
- Ensure the server is accessible from the internet (for production)

## Security Best Practices

1. **Never commit `.env` files** - They're already in `.gitignore`
2. **Use App Passwords** - More secure than regular passwords
3. **Restrict CORS** - Set `ALLOWED_ORIGINS` to only your domain(s) in production
4. **Use HTTPS** - Always use HTTPS in production
5. **Rotate passwords** - Change your App Password periodically
6. **Monitor logs** - Check server logs regularly for suspicious activity

## Production Checklist

- [ ] Gmail App Password configured
- [ ] Environment variables set on production server
- [ ] CORS configured for your domain only
- [ ] Server is running and accessible
- [ ] Frontend configured with production API URL
- [ ] Test form submission works
- [ ] Both emails (admin and user) are received
- [ ] HTTPS enabled (if using reverse proxy)
- [ ] Server monitoring set up (optional but recommended)

## Cost Estimates

- **Heroku:** Free tier available (with limitations), then $7/month
- **Railway:** $5/month for hobby plan
- **Render:** Free tier available, then $7/month
- **DigitalOcean:** $5/month for basic droplet
- **Your own server:** Varies by provider

## Support

If you encounter issues:
1. Check server logs
2. Verify environment variables are set correctly
3. Test the `/health` endpoint: `curl http://your-server/api/health`
4. Check Gmail account settings and App Password

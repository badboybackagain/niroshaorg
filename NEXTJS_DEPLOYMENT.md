# Next.js Deployment Guide

## ✅ Migration Status

**Everything has been migrated to Next.js!**

- ✅ All components use Next.js routing (`next/link`, `usePathname`, `useRouter`)
- ✅ All pages are in `app/` directory with App Router
- ✅ API routes are in `app/api/` directory
- ✅ Contact form uses Next.js API route (`/api/contact`)
- ✅ Build script updated to use `next build`
- ✅ Deploy script updated for Next.js deployment

## 📦 What Gets Deployed

The deploy script now handles Next.js builds:

### Standalone Build (Recommended)
- Builds to `.next/standalone/` folder
- Contains everything needed to run the app
- Just upload and run `node server.js` on server

### Regular Build
- Builds to `.next/` folder
- Requires `public/`, `package.json`, `package-lock.json` to be uploaded
- Run `npm install --production && npm start` on server

## 🚀 Deployment Process

### 1. Build Locally
```bash
npm run build
```

This creates:
- `.next/` folder (or `.next/standalone/` if using standalone)
- Optimized production files

### 2. Deploy Using Script
```bash
./deploy.sh
```

Or with options:
```bash
./deploy.sh --full          # Force full deployment
./deploy.sh --with-cache    # Include image cache
```

### 3. Server Setup

#### For Standalone Build:
```bash
# On server, navigate to deployment directory
cd /path/to/deployment

# Set environment variables
export GMAIL_USER=info@nirosha.org
export GMAIL_PASSWORD=your-app-password

# Or create .env.local file
echo "GMAIL_USER=info@nirosha.org" > .env.local
echo "GMAIL_PASSWORD=your-app-password" >> .env.local

# Start the server
node server.js

# Or use PM2 for process management
pm2 start server.js --name nirosha
pm2 save
```

#### For Regular Build:
```bash
# On server, navigate to deployment directory
cd /path/to/deployment

# Install production dependencies
npm install --production

# Set environment variables
export GMAIL_USER=info@nirosha.org
export GMAIL_PASSWORD=your-app-password

# Or create .env.local file
echo "GMAIL_USER=info@nirosha.org" > .env.local
echo "GMAIL_PASSWORD=your-app-password" >> .env.local

# Start Next.js
npm start

# Or use PM2
pm2 start npm --name nirosha -- start
pm2 save
```

## 🔧 Environment Variables

Required on server:
- `GMAIL_USER` - Gmail address for sending emails
- `GMAIL_PASSWORD` - Gmail App Password (16 characters)

Set them via:
1. `.env.local` file (recommended)
2. Server environment variables
3. PM2 ecosystem file

## 📝 What Changed in Deploy Script

1. **Build Command**: Changed from `vite build` to `next build`
2. **Output Folder**: Changed from `dist/` to `.next/` (or `.next/standalone/`)
3. **Upload Files**: Now uploads `.next/`, `public/`, `package.json`, `package-lock.json`
4. **Removed**: Old logo/image separate upload logic (now in `public/` folder)
5. **Added**: Support for standalone builds

## ⚠️ Important Notes

1. **Node.js Required**: Server must have Node.js 18+ installed
2. **Environment Variables**: Must be set on server (not uploaded via FTP for security)
3. **Port Configuration**: Next.js runs on port 3000 by default (configurable via `PORT` env var)
4. **Process Manager**: Use PM2 or similar to keep the app running
5. **Reverse Proxy**: Configure nginx/Apache to proxy requests to Next.js (port 3000)

## 🔍 Verification

After deployment, verify:
1. ✅ Homepage loads
2. ✅ All routes work (`/about`, `/services`, `/contact`, `/blog`)
3. ✅ Dynamic routes work (`/services/web-development`, `/blog/[slug]`)
4. ✅ Contact form submits successfully
5. ✅ Images load correctly
6. ✅ Mobile responsiveness

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript/ESLint errors

### Server Won't Start
- Verify environment variables are set
- Check Node.js version on server
- Ensure port 3000 is available (or set `PORT` env var)

### Files Not Uploading
- Check FTP credentials
- Verify FTP_PATH is correct
- Check file permissions

### Contact Form Not Working
- Verify `GMAIL_USER` and `GMAIL_PASSWORD` are set on server
- Check server logs for errors
- Verify API route is accessible

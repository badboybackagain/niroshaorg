# Server Folder Migration Guide - React to Next.js

## 📋 What Changed

### Old React Setup:
```
project/
├── public_html/          # Frontend files (React build)
└── server/              # Separate Express server (outside public_html)
    ├── server.js        # Express server handling /api/contact
    └── config.js        # Gmail credentials
```

### New Next.js Setup:
```
project/
├── app/
│   └── api/
│       └── contact/
│           └── route.js  # Next.js API route (replaces server.js)
├── .env.local            # Environment variables (replaces config.js)
└── server/              # ⚠️ NO LONGER NEEDED (can be deleted)
```

## ✅ What's Already Migrated

1. **API Routes**: 
   - ✅ `server/server.js` → `app/api/contact/route.js`
   - ✅ All functionality migrated (webhook, emails, WhatsApp)

2. **Configuration**:
   - ✅ `server/config.js` → `config.js` (in project root) OR `.env.local` (for local development)
   - ✅ Production: Use `config.js` file OR set environment variables on server
   - ✅ **Config file approach works without environment variable support!**

## 🗑️ What to Do with the Old `server/` Folder

### Option 1: Keep for Reference (Recommended Initially)
- Keep the folder for a few weeks as backup
- Useful if you need to reference the old implementation
- Can be deleted later once you're confident everything works

### Option 2: Delete It
- Since everything is migrated, you can safely delete it
- The folder is not used by Next.js at all

**To delete:**
```bash
rm -rf server/
```

## 🚀 Production Server Setup

### For Next.js, you have TWO options:

#### Option 1: Config File (Recommended if no env var support) ✅

1. **Create `config.js` file** (like the old `server/config.js`):
   ```bash
   # Locally, copy the example:
   cp config.example.js config.js
   
   # Edit config.js and add your Gmail credentials
   # Then upload config.js to project root on server
   ```

2. **Upload `config.js` to server root** (same directory as `package.json`)

3. **Set file permissions:**
   ```bash
   chmod 600 config.js  # Owner read/write only
   ```

**See `CONFIG_FILE_SETUP.md` for detailed instructions.**

#### Option 2: Environment Variables

1. **Set environment variables** on server:
   ```bash
   # On your production server, create .env.local or set environment variables:
   export GMAIL_USER=info@nirosha.org
   export GMAIL_PASSWORD=your-app-password
   ```

2. **No Separate Server Process**:
   - Next.js runs as a single Node.js process
   - No need for separate Express server
   - API routes are built into Next.js

3. **Deployment Structure**:
   ```
   /path/to/deployment/
   ├── .next/              # Next.js build output
   ├── public/             # Static files
   ├── package.json
   ├── package-lock.json
   ├── .env.local          # Environment variables (NOT in git!)
   └── server.js           # Only if using standalone build
   ```

## 📝 Key Differences

| Old React Setup | Next.js Setup |
|----------------|---------------|
| Separate Express server | Built-in API routes |
| `server/server.js` | `app/api/contact/route.js` |
| `server/config.js` | `.env.local` or env vars |
| Two processes (frontend + backend) | Single Next.js process |
| Deploy to `public_html/` + `server/` | Deploy to single directory |

## 🔧 Production Deployment Steps

1. **Build Next.js:**
   ```bash
   npm run build
   ```

2. **Upload to Server:**
   - Upload `.next/`, `public/`, `package.json`, `package-lock.json`
   - Use `deploy.sh` script (already updated for Next.js)

3. **Set Environment Variables on Server:**
   ```bash
   # SSH into your server
   cd /path/to/deployment
   
   # Create .env.local
   echo "GMAIL_USER=info@nirosha.org" > .env.local
   echo "GMAIL_PASSWORD=your-app-password" >> .env.local
   ```

4. **Start Next.js:**
   ```bash
   # For standalone build:
   node server.js
   
   # Or for regular build:
   npm install --production
   npm start
   
   # Or with PM2:
   pm2 start npm --name nirosha -- start
   ```

## ⚠️ Important Notes

1. **No More Separate Server**: The old `server/` folder is completely replaced by Next.js API routes
2. **Environment Variables**: Must be set on production server (not uploaded via FTP for security)
3. **Single Process**: Next.js handles both frontend and API routes in one process
4. **Port**: Next.js runs on port 3000 by default (configurable via `PORT` env var)
5. **Reverse Proxy**: Configure nginx/Apache to proxy requests to Next.js

## ✅ Verification Checklist

After migration, verify:
- [ ] Contact form works (`/api/contact` endpoint)
- [ ] Emails are sent successfully
- [ ] Webhook is called
- [ ] WhatsApp messages are sent
- [ ] Environment variables are loaded correctly

## 🆘 If Something Breaks

If you need to reference the old implementation:
- Check git history for `server/server.js`
- The old code is preserved in git (if it was committed)
- You can restore it temporarily if needed

---

**Summary**: The `server/` folder is no longer needed. Everything is now in Next.js API routes and environment variables. You can safely delete it or keep it as backup.

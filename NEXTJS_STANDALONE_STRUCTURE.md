# Next.js Standalone Build Structure

## ✅ Correct Structure on Server

Since you're using `output: 'standalone'` in `next.config.js`, your server structure should look like this:

```
public_html/
├── .next/
│   └── standalone/              ← Standalone build folder
│       ├── server.js            ← Entry point (run this!)
│       ├── package.json         ← Dependencies
│       ├── node_modules/        ← Installed dependencies
│       ├── public/              ← Static files (copied from project root)
│       └── .next/
│           ├── static/         ← Static assets
│           └── server/          ← Server-side code
│               └── app/         ← Your app routes (including API routes)
│                   ├── api/
│                   │   └── contact/
│                   │       └── route.js
│                   ├── about/
│                   ├── blog/
│                   └── ...
├── config.js                    ← Your config file (if using config file approach)
└── (other files)
```

## 🔍 What You're Seeing

If you see:
- `public_html/.next/server/app/`

This is likely:
- `public_html/.next/standalone/.next/server/app/` ✅ **CORRECT!**

The full path breakdown:
1. `.next/` - Next.js build output folder
2. `standalone/` - Standalone build (self-contained)
3. `.next/server/` - Server-side compiled code
4. `app/` - Your app directory (routes, API routes, etc.)

## ✅ Verification Checklist

Check if your structure is correct:

1. **Entry point exists:**
   ```bash
   ls -la public_html/.next/standalone/server.js
   ```
   Should exist and be executable.

2. **Public folder exists:**
   ```bash
   ls -la public_html/.next/standalone/public/
   ```
   Should contain your static files (images, etc.).

3. **Static assets exist:**
   ```bash
   ls -la public_html/.next/standalone/.next/static/
   ```
   Should contain CSS, JS bundles, etc.

4. **App routes exist:**
   ```bash
   ls -la public_html/.next/standalone/.next/server/app/
   ```
   Should contain your routes including `api/contact/route.js`.

## 🚀 How to Run

From your server, navigate to the standalone folder and run:

```bash
cd public_html/.next/standalone
node server.js
```

Or if you're in `public_html`:
```bash
cd public_html
node .next/standalone/server.js
```

## 📝 Important Notes

1. **Don't run from `.next/server/`** - Run from `.next/standalone/`
2. **Entry point is `server.js`** - Not `app.js` or anything else
3. **Config file location** - Put `config.js` in `public_html/` (project root), not inside `.next/`

## 🐛 Common Issues

### "Cannot find module"
- Make sure you're in the `standalone` folder
- Run `npm install` in the standalone folder if needed
- Check that `node_modules/` exists in standalone folder

### "config.js not found"
- Put `config.js` in `public_html/` (same level as `.next/`)
- Not inside `.next/standalone/`
- The config loader looks for it in the project root

### "Port already in use"
- Next.js runs on port 3000 by default
- Set `PORT` environment variable: `PORT=3001 node server.js`
- Or configure your reverse proxy (nginx/Apache) to point to port 3000

## 🔄 If Structure is Wrong

If your structure doesn't match, the deploy script might not have uploaded correctly. Check:

1. **Deploy script uploaded standalone folder:**
   ```bash
   # Check deploy.sh - should upload .next/standalone/
   ```

2. **Build created standalone:**
   ```bash
   # Locally, check:
   ls -la .next/standalone/
   ```

3. **Uploaded to correct location:**
   - Should be: `public_html/.next/standalone/`
   - Not: `public_html/.next/` (missing standalone)

## 📦 What Should Be Uploaded

The deploy script should upload:
- `.next/standalone/` (entire folder)
- `config.js` (if using config file approach)
- Any other files needed

## ✅ Summary

**Yes, `.next/server/app/` is correct!** It's part of the standalone build structure:
- Full path: `.next/standalone/.next/server/app/`
- This contains your API routes and pages
- Entry point is `server.js` in the `standalone` folder


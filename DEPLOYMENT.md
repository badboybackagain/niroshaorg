# Production Deployment Guide

## Building for Production

1. **Build the production files:**
   ```bash
   npm run build
   ```

2. **Output location:**
   - All production files will be in the `/dist` folder
   - This folder contains only static files (HTML, CSS, JS, images)
   - No source code is included

3. **Verify the build:**
   ```bash
   npm run preview
   ```
   This will start a local server to preview the production build at `http://localhost:4173`

## Deployment Options

### Option 1: Firebase Hosting (Recommended - Free & Easy)

Firebase Hosting is Google's free hosting service, perfect for static sites.

#### Setup:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**
   ```bash
   firebase init hosting
   ```
   
   When prompted:
   - **What do you want to use as your public directory?** → `dist`
   - **Configure as a single-page app?** → `Yes` (important for React Router)
   - **Set up automatic builds and deploys with GitHub?** → `No` (unless you want CI/CD)
   - **File dist/index.html already exists. Overwrite?** → `No`

4. **Deploy:**
   ```bash
   firebase deploy --only hosting
   ```

5. **Your site will be live at:**
   - `https://your-project-id.web.app`
   - `https://your-project-id.firebaseapp.com`

#### Update firebase.json (if needed):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### Option 2: Google Cloud Storage + Cloud CDN

For more control and enterprise features.

#### Setup:

1. **Install Google Cloud SDK:**
   - Download from: https://cloud.google.com/sdk/docs/install

2. **Create a bucket:**
   ```bash
   gsutil mb gs://your-bucket-name
   ```

3. **Enable static website hosting:**
   ```bash
   gsutil web set -m index.html -e index.html gs://your-bucket-name
   ```

4. **Upload files:**
   ```bash
   gsutil -m rsync -r dist/ gs://your-bucket-name/
   ```

5. **Make files publicly readable:**
   ```bash
   gsutil iam ch allUsers:objectViewer gs://your-bucket-name
   ```

6. **Set up Cloud CDN (optional but recommended):**
   - Go to Google Cloud Console
   - Create a Load Balancer with Cloud CDN
   - Point it to your bucket

---

### Option 3: Google Cloud Run (Container-based)

For more advanced deployments with custom server configuration.

#### Setup:

1. **Create Dockerfile:**
   ```dockerfile
   FROM nginx:alpine
   COPY dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf:**
   ```nginx
   server {
       listen 80;
       server_name _;
       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Build and deploy:**
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT-ID/nirosha-site
   gcloud run deploy nirosha-site --image gcr.io/PROJECT-ID/nirosha-site --platform managed
   ```

---

## Important Notes

### React Router Configuration

Since this is a Single Page Application (SPA), you need to configure your server to:
- Serve `index.html` for all routes
- This is already configured in Firebase Hosting
- For other hosts, ensure all routes redirect to `index.html`

### Environment Variables

If you need environment variables:
1. Create `.env.production` file
2. Prefix variables with `VITE_`
3. Access via `import.meta.env.VITE_VARIABLE_NAME`

### Build Optimization

The build is already optimized:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Gzip compression ready

### Post-Deployment Checklist

- [ ] Test all pages work correctly
- [ ] Verify all images load
- [ ] Check mobile responsiveness
- [ ] Test form submissions
- [ ] Verify external links (Calendly, etc.)
- [ ] Check SEO meta tags
- [ ] Test page load speed
- [ ] Verify SSL certificate (HTTPS)

---

## Quick Deploy Script

Create a `deploy.sh` file:

```bash
#!/bin/bash
echo "Building for production..."
npm run build

echo "Deploying to Firebase..."
firebase deploy --only hosting

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run:
```bash
./deploy.sh
```

---

## Troubleshooting

### 404 Errors on Routes
- Ensure your hosting provider is configured to serve `index.html` for all routes
- Firebase Hosting handles this automatically with the `rewrites` configuration

### Images Not Loading
- Check that all images in `/public` are copied to `/dist`
- Verify image paths are correct (should start with `/` not `./`)

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

---

## Recommended: Firebase Hosting

**Why Firebase Hosting?**
- ✅ Free tier (10GB storage, 360MB/day transfer)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Easy deployment
- ✅ Perfect for React Router
- ✅ Google-owned (matches your requirement)

**Cost:** Free for most small-medium sites



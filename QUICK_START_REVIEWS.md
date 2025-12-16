# Quick Start: Google Reviews

## Fast Setup (5 minutes)

### Option 1: Using Puppeteer (Elfsight-like)

1. **Install Puppeteer:**
   ```bash
   npm install puppeteer
   ```

2. **Set your Google Business URL:**
   ```bash
   export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business+Name"
   ```

3. **Fetch reviews:**
   ```bash
   npm run fetch-reviews
   ```

4. **Done!** Your reviews will appear automatically on the website.

### Option 2: Using SerpAPI (More Reliable)

1. **Sign up at [serpapi.com](https://serpapi.com/)** (free tier available)

2. **Set environment variables:**
   ```bash
   export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business"
   export SERPAPI_KEY="your-api-key-here"
   ```

3. **Fetch reviews:**
   ```bash
   npm run fetch-reviews-basic
   ```

### Option 3: Manual Entry

1. **Edit `public/reviews.json`:**
   ```json
   {
     "reviews": [
       {
         "name": "John Doe",
         "text": "Great service!",
         "rating": 5,
         "date": "2024-01-15"
       }
     ],
     "lastUpdated": "2024-01-15T00:00:00.000Z",
     "totalReviews": 1
   }
   ```

## Automation

To keep reviews updated automatically, add to your deployment script or set up a cron job:

```bash
# Add to deploy.sh or run before build
npm run fetch-reviews
```

Or add to `package.json`:
```json
{
  "scripts": {
    "prebuild": "npm run process-logo && npm run fetch-reviews"
  }
}
```

## Troubleshooting

- **No reviews found?** Check your Google Business URL is correct
- **Puppeteer errors?** Make sure Chrome/Chromium is installed
- **Still not working?** Try SerpAPI (more reliable)

See `GOOGLE_REVIEWS_SETUP.md` for detailed documentation.


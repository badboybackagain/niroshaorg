# Google Reviews Integration Setup

This guide explains how to fetch and display Google reviews on your website, similar to how Elfsight does it.

## Overview

There are several approaches to fetch Google reviews:

1. **Puppeteer Scraping** (Similar to Elfsight) - Uses headless browser
2. **SerpAPI** - Third-party API service (recommended for production)
3. **Google My Business API** - Official method (requires API setup)
4. **Manual Entry** - Simple but requires manual updates

## Method 1: Puppeteer Scraping (Recommended for Elfsight-like behavior)

This method uses a headless browser to scrape reviews, similar to how Elfsight works.

### Installation

```bash
npm install puppeteer
```

### Setup

1. Get your Google Business Profile URL:
   - Go to your Google Business Profile
   - Copy the URL (e.g., `https://www.google.com/maps/place/Your+Business`)

2. Set environment variable:
   ```bash
   export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business"
   ```

3. Run the script:
   ```bash
   node scripts/fetch-google-reviews-puppeteer.js
   ```

4. The reviews will be saved to `public/reviews.json`

5. Your React app will automatically load and display them!

### Automation

To keep reviews updated, set up a cron job or scheduled task:

**Linux/Mac (cron):**
```bash
# Run daily at 2 AM
0 2 * * * cd /path/to/your/project && export GOOGLE_BUSINESS_URL="your-url" && node scripts/fetch-google-reviews-puppeteer.js
```

**Or add to package.json:**
```json
{
  "scripts": {
    "fetch-reviews": "node scripts/fetch-google-reviews-puppeteer.js",
    "prebuild": "npm run fetch-reviews && npm run process-logo"
  }
}
```

## Method 2: SerpAPI (Recommended for Production)

SerpAPI is a paid service that handles Google scraping for you. More reliable than direct scraping.

### Setup

1. Sign up at [serpapi.com](https://serpapi.com/)
2. Get your API key
3. Set environment variables:
   ```bash
   export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business"
   export SERPAPI_KEY="your-api-key"
   ```
4. Run the script:
   ```bash
   node scripts/fetch-google-reviews.js
   ```

## Method 3: Google My Business API (Official)

This is the official method but requires more setup:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project
3. Enable "Google My Business API"
4. Create credentials (OAuth 2.0)
5. Follow Google's documentation for API setup

## Method 4: Manual Entry

If you prefer to manually add reviews:

1. Create `public/reviews.json`:
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

2. The React component will automatically use this file.

## Configuration Options

### Environment Variables

- `GOOGLE_BUSINESS_URL` - Your Google Business Profile URL (required)
- `REVIEWS_OUTPUT_FILE` - Where to save reviews (default: `public/reviews.json`)
- `MAX_REVIEWS` - Maximum number of reviews to fetch (default: 10)
- `SERPAPI_KEY` - Your SerpAPI key (for Method 2)

### Customizing the Component

The `Testimonials` component automatically:
- Fetches reviews from `/reviews.json`
- Falls back to placeholder testimonials if no reviews found
- Shows loading state while fetching
- Handles errors gracefully

## Troubleshooting

### No reviews found

1. **Check the URL format**: Make sure it's a valid Google Maps place URL
2. **Wait time**: Google may load reviews dynamically - try increasing wait time in the script
3. **Page structure**: Google may have changed their HTML structure - check the debug screenshot
4. **Use SerpAPI**: More reliable than direct scraping

### Puppeteer errors

1. **Install dependencies**: `npm install puppeteer`
2. **Check system requirements**: Puppeteer needs Chrome/Chromium
3. **Try headless mode**: Already enabled by default

### CORS errors

If fetching from a different domain, you may need:
- A backend API endpoint
- CORS configuration
- Or use the static JSON file approach (recommended)

## Best Practices

1. **Cache reviews**: Don't fetch on every page load - use a static JSON file
2. **Update periodically**: Set up a cron job to refresh reviews daily/weekly
3. **Handle errors**: The component gracefully falls back to placeholder content
4. **Respect rate limits**: Don't scrape too frequently to avoid IP blocking
5. **Consider SerpAPI**: For production, a paid service is more reliable

## Legal Considerations

⚠️ **Important**: Web scraping may violate Google's Terms of Service. Consider:
- Using official Google APIs when possible
- Using third-party services (SerpAPI, etc.)
- Getting explicit permission
- Reviewing Google's Terms of Service

## Support

For issues or questions:
1. Check the debug screenshot in `public/debug-screenshot.png`
2. Review browser console for errors
3. Try the SerpAPI method for more reliability
4. Consider using Google My Business API for official access


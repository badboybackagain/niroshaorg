# Dynamic Sitemap.xml Setup

This project includes a dynamic sitemap generator that automatically creates a `sitemap.xml` file with all your website URLs.

## How It Works

The sitemap generator (`scripts/generate-sitemap.js`) automatically:
- Extracts all static routes (home, about, services, contact, blog)
- Discovers all service pages from `src/data/servicesData.jsx`
- Discovers all blog posts from `src/data/blogData.js`
- Generates a properly formatted XML sitemap

## Usage

### Generate Sitemap Manually

```bash
npm run generate-sitemap
```

### Automatic Generation During Build

The sitemap is automatically generated before each build:

```bash
npm run build
```

This runs `generate-sitemap` as part of the `prebuild` script.

## Configuration

### Setting Your Website URL

The sitemap uses your website's base URL. Set it using one of these methods:

1. **Environment Variable (Recommended for Production):**
   ```bash
   export SITE_URL=https://yourdomain.com
   npm run generate-sitemap
   ```

2. **Vite Environment Variable:**
   Create a `.env.production` file:
   ```
   VITE_SITE_URL=https://yourdomain.com
   ```
   Then run:
   ```bash
   SITE_URL=$VITE_SITE_URL npm run generate-sitemap
   ```

3. **Default:** If no URL is set, it defaults to `https://yourdomain.com` (you should update this in the script or use environment variables)

### Customizing Priorities and Change Frequencies

Edit `scripts/generate-sitemap.js` to customize:
- **Priority**: How important a page is (0.0 to 1.0)
- **Change Frequency**: How often the page is updated (always, hourly, daily, weekly, monthly, yearly, never)

Current defaults:
- Homepage: Priority 1.0, Daily
- About/Contact: Priority 0.9, Monthly
- Services/Blog listing: Priority 0.9, Weekly/Daily
- Service pages: Priority 0.8, Monthly
- Blog posts: Priority 0.7, Weekly

## Output

The sitemap is generated at:
```
public/sitemap.xml
```

This file is automatically included in your build output and will be available at:
```
https://yourdomain.com/sitemap.xml
```

## Submitting to Google

### Option 1: Google Search Console (Recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website)
3. Navigate to **Sitemaps** in the left menu
4. Enter `sitemap.xml` in the "Add a new sitemap" field
5. Click **Submit**

### Option 2: robots.txt Reference

The sitemap is automatically referenced in `robots.txt`:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### Option 3: Manual Submission

You can also submit your sitemap URL directly:
```
https://yourdomain.com/sitemap.xml
```

## Updating the Sitemap

The sitemap is automatically regenerated:
- Before each build (`npm run build`)
- When you manually run `npm run generate-sitemap`

After adding new:
- **Services**: Add them to `src/data/servicesData.jsx` - they'll be automatically included
- **Blog Posts**: Add them to `src/data/blogData.js` - they'll be automatically included
- **Static Pages**: Add them to the `staticRoutes` array in `scripts/generate-sitemap.js`

## Troubleshooting

### Sitemap not updating
- Make sure you run `npm run generate-sitemap` or `npm run build`
- Check that the script has read access to your data files

### Wrong URLs in sitemap
- Verify your `SITE_URL` environment variable is set correctly
- Check that the base URL doesn't have a trailing slash

### Missing pages
- Verify the pages exist in your data files
- Check the extraction logic in `scripts/generate-sitemap.js`
- Run the script and check the console output for counts

## File Structure

```
scripts/
  └── generate-sitemap.js    # Sitemap generator script
public/
  └── sitemap.xml            # Generated sitemap (auto-generated)
src/data/
  ├── servicesData.jsx       # Service pages data
  └── blogData.js            # Blog posts data
```

## Best Practices

1. **Keep it updated**: Run the sitemap generator after adding new content
2. **Set correct URL**: Always set `SITE_URL` to your production domain
3. **Submit to Google**: Submit your sitemap to Google Search Console
4. **Monitor**: Check Google Search Console regularly for sitemap errors
5. **Validate**: Use [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) to verify your sitemap

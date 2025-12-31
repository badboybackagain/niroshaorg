# Blog Images Directory

This directory contains optimized blog images for the website.

## Image Processing

Blog images are automatically processed using the `process-blog-images.js` script.

### How to Process a New Blog Image

1. Place your source image (PNG, JPG, or WebP) in this directory with a descriptive name (e.g., `logonumerology.png`)
2. Run the processing script:
   ```bash
   npm run process-blog-images
   ```
3. The script will generate optimized versions in multiple sizes and formats

### Generated Image Sizes

The script generates the following optimized versions:

- **Thumbnail**: 400x300px (1x) and 800x600px (2x) - For blog listing cards
- **Featured**: 1200x630px (1x) and 2400x1260px (2x) - For blog detail pages and social media sharing
- **Large**: 1600x900px (1x) and 3200x1800px (2x) - For high-resolution displays

Each size is generated in both:
- **PNG format** (for compatibility)
- **WebP format** (for optimal performance)

### File Naming Convention

After processing `logonumerology.png`, the following files are generated:
- `logo-numerology-astrology-thumbnail.webp` / `.png`
- `logo-numerology-astrology-thumbnail@2x.webp` / `.png`
- `logo-numerology-astrology-featured.webp` / `.png`
- `logo-numerology-astrology-featured@2x.webp` / `.png`
- `logo-numerology-astrology-large.webp` / `.png`
- `logo-numerology-astrology-large@2x.webp` / `.png`

### Usage in Blog Data

When adding a blog post, use the `imageSlug` property:
```javascript
{
  imageSlug: 'logo-numerology-astrology', // Base name without size/format
  // ... other blog properties
}
```

The `BlogImage` component will automatically use the correct size based on context:
- Blog listing: `thumbnail` size
- Blog detail: `featured` size
- Related posts: `thumbnail` size

### Image Optimization Benefits

- **WebP format**: 50-70% smaller file sizes than PNG
- **Responsive images**: Different sizes for different screen densities
- **Lazy loading**: Images load only when needed
- **Better SEO**: Optimized images improve PageSpeed scores


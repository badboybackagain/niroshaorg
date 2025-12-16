# Logo Setup Instructions

## Required Logo Files

To optimize for Google PageSpeed, please add the following logo files:

### Location: `/public/` directory

1. **logo.png** - Standard resolution (300x100px recommended)
   - Format: PNG with transparency
   - Size: ~150x50px display size
   - Optimize: Use tools like TinyPNG or ImageOptim

2. **logo@2x.png** - Retina/HiDPI version (600x200px recommended)
   - Format: PNG with transparency
   - Size: ~300x100px (2x the standard)
   - Optimize: Use tools like TinyPNG or ImageOptim

3. **logo.webp** - WebP format for better compression
   - Format: WebP
   - Size: Same as logo.png
   - Convert from PNG using: https://cloudconvert.com/png-to-webp

4. **logo@2x.webp** - WebP retina version
   - Format: WebP
   - Size: Same as logo@2x.png
   - Convert from PNG using: https://cloudconvert.com/png-to-webp

## Recommended Sizes

- **Navbar/Header**: 150x50px (1x) / 300x100px (2x)
- **Footer**: 120x40px (1x) / 240x80px (2x)
- **Hero Section**: 200x67px (1x) / 400x134px (2x)
- **Large Display**: 250x83px (1x) / 500x166px (2x)

## Optimization Tips

1. **Compress images**: Use TinyPNG, ImageOptim, or Squoosh
2. **Use WebP**: Provides 25-35% better compression than PNG
3. **Maintain aspect ratio**: Keep the logo proportions consistent
4. **Transparent background**: Use PNG/WebP with alpha channel
5. **File size target**: Keep each file under 20KB for best PageSpeed score

## Quick Setup

1. Place your logo image in `/public/` directory
2. Name them exactly as listed above
3. The Logo component will automatically use the optimized versions



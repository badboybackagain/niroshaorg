# Logo Setup for Team Nirosha

## Quick Setup

1. **Place your logo files in the `/public/` directory:**

   - `logo.png` - Standard resolution (150x50px recommended)
   - `logo@2x.png` - Retina version (300x100px)
   - `logo.webp` - WebP format (150x50px)
   - `logo@2x.webp` - WebP retina (300x100px)

2. **The logo will automatically appear in:**
   - Navbar/Header (default size: 150x50px)
   - Footer (small size: 120x40px)

## Image Optimization for PageSpeed

### Recommended Tools:
- **TinyPNG**: https://tinypng.com (for PNG compression)
- **Squoosh**: https://squoosh.app (for WebP conversion and optimization)
- **ImageOptim**: https://imageoptim.com (Mac app for batch optimization)

### Target File Sizes:
- `logo.png`: < 15KB
- `logo@2x.png`: < 30KB
- `logo.webp`: < 10KB
- `logo@2x.webp`: < 20KB

### Steps:
1. Start with your original logo (high resolution)
2. Resize to required dimensions
3. Optimize with TinyPNG or similar
4. Convert to WebP format using Squoosh
5. Place all 4 files in `/public/` directory

## Logo Sizes Used

- **Navbar**: 150x50px (1x) / 300x100px (2x)
- **Footer**: 120x40px (1x) / 240x80px (2x)
- **Large Display**: 200x67px (1x) / 400x134px (2x)

The Logo component automatically handles:
- Responsive sizing
- Retina display support
- WebP format with PNG fallback
- Proper loading priorities for PageSpeed




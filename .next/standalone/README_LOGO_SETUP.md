# 🎨 Logo Setup - Automatic Image Processing

## Quick Start

1. **Place your logo** in `/src/assets/logo-source/` folder
   - Any format: PNG, JPG, SVG, or WebP
   - Any filename (e.g., `my-logo.png`, `logo.svg`)

2. **Run the processing script:**
   ```bash
   npm run process-logo
   ```

3. **Done!** All optimized images are automatically generated in `/public/`

## ✨ Automatic Processing

The script automatically:
- ✅ Resizes to all required sizes (small, default, large, xlarge)
- ✅ Generates retina/2x versions for high-DPI displays
- ✅ Converts to WebP format (25-35% smaller file size)
- ✅ Optimizes PNG compression
- ✅ Preserves transparency
- ✅ Maintains aspect ratio

## 📦 Generated Files

All files are created in `/public/` directory:

### Main Logo (used in Navbar):
- `logo.png` / `logo@2x.png` (150x50px / 300x100px)
- `logo.webp` / `logo@2x.webp` (optimized versions)

### Small Logo (used in Footer):
- `logo-small.png` / `logo-small@2x.png` (120x40px / 240x80px)
- `logo-small.webp` / `logo-small@2x.webp`

### Large & XLarge (for future use):
- `logo-large.png` / `logo-large@2x.png` (200x67px / 400x134px)
- `logo-xlarge.png` / `logo-xlarge@2x.png` (250x83px / 500x166px)

## 🔄 Workflow

The logo processing runs automatically:
- **Before `npm run dev`** - Processes logo when starting dev server
- **Before `npm run build`** - Processes logo before production build
- **Manual**: Run `npm run process-logo` anytime

## 📝 Best Practices

1. **Source Image**: Use high resolution (at least 500x167px or higher)
2. **Format**: PNG with transparency works best
3. **Update**: Just replace the file in `logo-source/` and run the script again
4. **Git**: Logo source is tracked, generated files are ignored (see `.gitignore`)

## 🎯 PageSpeed Optimization

All generated images are optimized for Google PageSpeed:
- WebP format for modern browsers (smaller file size)
- PNG fallback for older browsers
- Proper dimensions to prevent layout shift
- Retina support for high-DPI displays
- Optimized compression settings




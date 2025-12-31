# Client Logos Directory

This directory contains client logos for the showcase component.

## Folder Structure

```
public/
├── images/
│   └── client-logos/     # Place your original logo files here
│       ├── README.md (this file)
│       ├── client-1.png
│       ├── client-2.jpg
│       └── ...
└── cache/
    └── client-logos/     # Optimized images (auto-generated, don't edit manually)
        ├── manifest.json
        ├── client-1.webp
        ├── client-1@2x.webp
        ├── client-1.png
        ├── client-1@2x.png
        └── ...
```

## How to Add Client Logos

1. **Place your logo files** in this directory (`public/images/client-logos/`)
   - Supported formats: PNG, JPG, JPEG, WebP
   - Any filename (e.g., `acme-corp.png`, `tech-startup.jpg`)
   - Recommended: Use descriptive filenames

2. **Run the optimization script:**
   ```bash
   npm run process-client-logos
   ```

3. **The script will:**
   - Process all images in this directory (excluding `README.md`)
   - Generate optimized versions in `public/cache/client-logos/` folder:
     - WebP format (1x and 2x) - for modern browsers
     - PNG format (1x and 2x) - as fallback
   - Resize to 200px width (maintains aspect ratio)
   - Retina versions at 400px width (2x)

4. **Use in the component:**
   The `ClientLogos` component automatically uses optimized images from the `cache/client-logos/` folder.

## Image Optimization Details

### Generated Sizes:
- **Standard**: 200px width (1x) - for normal displays
- **Retina**: 400px width (2x) - for high-DPI displays

### Formats:
- **WebP**: Primary format (85% quality) - 50-70% smaller than PNG
- **PNG**: Fallback format (90% quality) - for older browsers

### Optimization Benefits:
- ✅ Proper dimensions prevent layout shift (PageSpeed)
- ✅ WebP format reduces file size significantly
- ✅ Retina support for high-DPI displays
- ✅ Maintains aspect ratio (no cropping)
- ✅ Optimized compression settings

## Best Practices

1. **Source Images:**
   - Use high resolution (at least 400px width recommended)
   - PNG with transparency works best for logos
   - Keep file sizes reasonable (< 2MB per logo)

2. **Naming:**
   - Use descriptive filenames (e.g., `acme-corporation.png`)
   - Avoid spaces, use hyphens or underscores
   - The script will use the filename (without extension) as the identifier

3. **Updates:**
   - Replace the source image file
   - Run `npm run process-client-logos` again
   - The cache will be updated automatically

4. **Git:**
   - Source images should be committed
   - Cache folder is auto-generated (can be gitignored if preferred)

## PageSpeed Optimization

All optimized images are designed to pass Google PageSpeed Insights:
- ✅ Proper dimensions (no oversized images)
- ✅ Modern formats (WebP with PNG fallback)
- ✅ Optimized compression
- ✅ Retina support
- ✅ Lazy loading (handled by component)


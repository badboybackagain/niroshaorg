# Image Processing Scripts

## Unified Image Processing

All images are processed using a single unified script: `process-images.js`

### Usage

```bash
# Process all image categories (team, client-logos)
npm run process-images:all

# Process specific category
npm run process-images:team
npm run process-images:client-logos

# Process blog images (requires filename and base name)
npm run process-images:blog <inputFile> <outputBaseName>
# Example: npm run process-images:blog logonumerology.png logo-numerology-astrology
```

### Folder Structure

```
public/
├── images/              # Source images (original files)
│   ├── blog/
│   ├── team/
│   └── client-logos/
└── cache/               # Optimized images (auto-generated)
    ├── blog/
    ├── team/
    └── client-logos/
```

### Image Categories

#### 1. Blog Images
- **Source**: `public/images/blog/`
- **Cache**: `public/cache/blog/`
- **Sizes**: thumbnail (400x300), featured (1200x630), large (1600x900)
- **Format**: Cover fit (cropped to size)
- **Usage**: Process individually with filename and base name

#### 2. Team Images
- **Source**: `public/images/team/`
- **Cache**: `public/cache/team/`
- **Size**: 300x300px (square profile images)
- **Format**: Cover fit (cropped to square)
- **Usage**: Processes all images in the folder automatically

#### 3. Client Logos
- **Source**: `public/images/client-logos/`
- **Cache**: `public/cache/client-logos/`
- **Size**: 200px width (maintains aspect ratio)
- **Format**: Contain fit (no cropping)
- **Usage**: Processes all images in the folder automatically
- **Manifest**: Generates `manifest.json` for component usage

### Output Formats

All processed images are generated in:
- **WebP** format (1x and 2x) - Primary format for modern browsers
- **PNG** format (1x and 2x) - Fallback for older browsers

### Optimization Settings

- **WebP Quality**: 85%
- **PNG Quality**: 90%, Compression Level 9
- **Retina Support**: 2x versions for high-DPI displays
- **Lazy Loading**: Handled by components

### Component Usage

- **Blog Images**: Use `<BlogImage slug="logo-name" size="featured" />`
- **Team Images**: Use `imageSlug` in team member data
- **Client Logos**: Automatically loaded from manifest.json

### Best Practices

1. **Source Images**: Keep original high-resolution files in `public/images/`
2. **Cache**: Never edit files in `public/cache/` - they are auto-generated
3. **Git**: Commit source images, cache can be gitignored
4. **Updates**: Replace source image and re-run processing script
5. **Naming**: Use descriptive, lowercase filenames with hyphens


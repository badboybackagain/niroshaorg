# Logo Source Folder

## 📸 How to Use

1. **Place your logo image here** (any format: PNG, JPG, SVG, or WebP)
   - Name it anything you want (e.g., `logo.png`, `my-logo.svg`, `brand-logo.jpg`)
   - The script will automatically find and process it

2. **Run the processing script:**
   ```bash
   npm run process-logo
   ```

3. **Or it runs automatically:**
   - Before `npm run dev` (development)
   - Before `npm run build` (production)

## ✨ What Gets Generated

The script automatically creates all required sizes and formats in `/public/`:

### Main Logo Files:
- `logo.png` (150x50px)
- `logo@2x.png` (300x100px - retina)
- `logo.webp` (150x50px - optimized)
- `logo@2x.webp` (300x100px - retina optimized)

### Additional Sizes:
- `logo-small.png` / `logo-small@2x.png` / `logo-small.webp` / `logo-small@2x.webp` (120x40px)
- `logo-large.png` / `logo-large@2x.png` / `logo-large.webp` / `logo-large@2x.webp` (200x67px)
- `logo-xlarge.png` / `logo-xlarge@2x.png` / `logo-xlarge.webp` / `logo-xlarge@2x.webp` (250x83px)

## 🎯 Tips

- **Best format**: PNG with transparent background
- **Recommended size**: Start with at least 500x167px (or higher) for best quality
- **Aspect ratio**: Your logo's aspect ratio will be preserved
- **Background**: Transparent backgrounds are supported

## 🔄 Updating Your Logo

Just replace the file in this folder and run `npm run process-logo` again!




import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, '../public/images/blog')
const outputDir = sourceDir

// Blog image sizes for different use cases
const blogImageSizes = {
  thumbnail: { width: 400, height: 300 }, // Blog listing cards
  featured: { width: 1200, height: 630 }, // Blog detail page & social sharing
  large: { width: 1600, height: 900 } // High-res displays
}

async function processBlogImage(inputFile, outputBaseName) {
  const inputPath = path.join(sourceDir, inputFile)
  
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Source file ${inputFile} not found in ${sourceDir}`)
    return
  }

  console.log(`\nProcessing ${inputFile}...\n`)

  for (const [sizeName, dimensions] of Object.entries(blogImageSizes)) {
    const { width, height } = dimensions
    
    // Generate PNG versions (1x and 2x)
    for (const scale of [1, 2]) {
      const outputWidth = width * scale
      const outputHeight = height * scale
      const outputName = `${outputBaseName}-${sizeName}${scale === 2 ? '@2x' : ''}.png`
      const outputPath = path.join(outputDir, outputName)

      await sharp(inputPath)
        .resize(outputWidth, outputHeight, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`  ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
    }

    // Generate WebP versions (1x and 2x)
    for (const scale of [1, 2]) {
      const outputWidth = width * scale
      const outputHeight = height * scale
      const outputName = `${outputBaseName}-${sizeName}${scale === 2 ? '@2x' : ''}.webp`
      const outputPath = path.join(outputDir, outputName)

      await sharp(inputPath)
        .resize(outputWidth, outputHeight, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`  ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
    }
  }

  console.log(`\n✓ Successfully processed ${inputFile}`)
  console.log(`\nGenerated files for ${outputBaseName}:`)
  console.log(`  - Thumbnail: 400x300, 800x600 (for blog listing)`)
  console.log(`  - Featured: 1200x630, 2400x1260 (for blog detail & social sharing)`)
  console.log(`  - Large: 1600x900, 3200x1800 (for high-res displays)`)
  console.log(`\nAll images generated in both PNG and WebP formats.`)
}

// Main execution
const inputFile = 'logonumerology.png'
const outputBaseName = 'logo-numerology-astrology'

processBlogImage(inputFile, outputBaseName)
  .then(() => {
    console.log('\n✅ Blog image processing complete!')
  })
  .catch((error) => {
    console.error('❌ Error processing blog image:', error)
    process.exit(1)
  })

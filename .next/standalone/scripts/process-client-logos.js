import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, '../public/images/client-logos')
const cacheDir = path.join(__dirname, '../public/cache/client-logos')

// Client logo sizes - optimized for PageSpeed
const logoSize = {
  width: 200,  // Standard size (1x)
  height: null // Maintain aspect ratio
}

// Ensure cache directory exists
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true })
}

/**
 * Get all image files from source directory (excluding cache and README)
 */
function getSourceImages() {
  const files = fs.readdirSync(sourceDir)
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg']
  
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext) && file !== 'README.md'
  })
}

/**
 * Process a single client logo
 */
async function processClientLogo(inputFile) {
  const inputPath = path.join(sourceDir, inputFile)
  const baseName = path.parse(inputFile).name
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Source file ${inputFile} not found`)
    return false
  }

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata()
    const aspectRatio = metadata.width / metadata.height
    const outputHeight = Math.round(logoSize.width / aspectRatio)

    console.log(`\n📸 Processing: ${inputFile}`)
    console.log(`   Original: ${metadata.width}x${metadata.height}px (${(metadata.size / 1024).toFixed(2)} KB)`)
    console.log(`   Aspect ratio: ${aspectRatio.toFixed(2)}`)

    // Generate PNG versions (1x and 2x)
    for (const scale of [1, 2]) {
      const outputWidth = logoSize.width * scale
      const outputHeightScaled = outputHeight * scale
      
      const outputName = `${baseName}${scale === 2 ? '@2x' : ''}.png`
      const outputPath = path.join(cacheDir, outputName)

      await sharp(inputPath)
        .resize(outputWidth, outputHeightScaled, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .png({ 
          quality: 90, 
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeightScaled}) - ${fileSizeKB} KB`)
    }

    // Generate WebP versions (1x and 2x)
    for (const scale of [1, 2]) {
      const outputWidth = logoSize.width * scale
      const outputHeightScaled = outputHeight * scale
      
      const outputName = `${baseName}${scale === 2 ? '@2x' : ''}.webp`
      const outputPath = path.join(cacheDir, outputName)

      await sharp(inputPath)
        .resize(outputWidth, outputHeightScaled, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeightScaled}) - ${fileSizeKB} KB`)
    }

    console.log(`✅ Successfully processed ${inputFile}`)
    return true
  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error.message)
    return false
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting client logo optimization...\n')
  console.log(`📁 Source directory: ${sourceDir}`)
  console.log(`💾 Cache directory: ${cacheDir}\n`)

  const sourceImages = getSourceImages()

  if (sourceImages.length === 0) {
    console.log('⚠️  No source images found in client-logos directory')
    console.log('   Place your logo files (PNG, JPG, WebP) in: public/images/client-logos/')
    return
  }

  console.log(`📋 Found ${sourceImages.length} image(s) to process:\n`)
  sourceImages.forEach((file, index) => {
    console.log(`   ${index + 1}. ${file}`)
  })

  let successCount = 0
  let failCount = 0
  const processedLogos = []

  for (const imageFile of sourceImages) {
    const baseName = path.parse(imageFile).name
    const success = await processClientLogo(imageFile)
    if (success) {
      successCount++
      processedLogos.push(baseName)
    } else {
      failCount++
    }
  }

  // Generate manifest JSON file for the component
  const manifestPath = path.join(cacheDir, 'manifest.json')
  const manifest = {
    generated: new Date().toISOString(),
    count: processedLogos.length,
    logos: processedLogos.sort()
  }
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`\n📄 Generated manifest: ${manifestPath}`)

  console.log('\n' + '='.repeat(60))
  console.log('📊 Processing Summary:')
  console.log(`   ✅ Success: ${successCount}`)
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`)
  }
  console.log('='.repeat(60))
  console.log('\n✨ All optimized logos are saved in: public/cache/client-logos/')
  console.log('💡 The ClientLogos component will automatically use these optimized images.\n')
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})


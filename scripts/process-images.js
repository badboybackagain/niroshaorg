import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, '../public')
const imagesDir = path.join(publicDir, 'images')
const cacheDir = path.join(publicDir, 'cache')

// Image processing configurations
const imageConfigs = {
  blog: {
    sourceDir: path.join(imagesDir, 'blog'),
    cacheDir: path.join(cacheDir, 'blog'),
    sizes: {
      thumbnail: { width: 400, height: 300 },
      featured: { width: 1200, height: 630 },
      large: { width: 1600, height: 900 }
    },
    fit: 'cover',
    processAll: false // Blog images are processed individually
  },
  team: {
    sourceDir: path.join(imagesDir, 'team'),
    cacheDir: path.join(cacheDir, 'team'),
    sizes: {
      default: { width: 300, height: 300 } // Square profile images
    },
    fit: 'cover',
    processAll: true
  },
  'client-logos': {
    sourceDir: path.join(imagesDir, 'client-logos'),
    cacheDir: path.join(cacheDir, 'client-logos'),
    sizes: {
      // Generate smaller sizes that match actual display dimensions
      // Desktop: max 80px display = 160px @2x, so 120px @1x (auto-generates 240px @2x) is optimal
      default: { width: 120, height: null } // 1x: 120px width, script auto-generates 240px @2x
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-logos': {
    sourceDir: path.join(imagesDir, 'portfolio', 'logos'),
    cacheDir: path.join(cacheDir, 'portfolio', 'logos'),
    sizes: {
      thumbnail: { width: 400, height: 400 },
      medium: { width: 800, height: 800 },
      large: { width: 1600, height: 1600 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-business-card': {
    sourceDir: path.join(imagesDir, 'portfolio', 'business-card'),
    cacheDir: path.join(cacheDir, 'portfolio', 'business-card'),
    sizes: {
      thumbnail: { width: 400, height: 250 },
      medium: { width: 800, height: 500 },
      large: { width: 1600, height: 1000 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-id-cards': {
    sourceDir: path.join(imagesDir, 'portfolio', 'Id-cards'),
    cacheDir: path.join(cacheDir, 'portfolio', 'id-cards'),
    sizes: {
      thumbnail: { width: 400, height: 250 },
      medium: { width: 800, height: 500 },
      large: { width: 1600, height: 1000 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-brochure-cover': {
    sourceDir: path.join(imagesDir, 'portfolio', 'Brochure cover'),
    cacheDir: path.join(cacheDir, 'portfolio', 'brochure-cover'),
    sizes: {
      thumbnail: { width: 400, height: 500 },
      medium: { width: 800, height: 1000 },
      large: { width: 1600, height: 2000 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-posters': {
    sourceDir: path.join(imagesDir, 'portfolio', 'Posters'),
    cacheDir: path.join(cacheDir, 'portfolio', 'posters'),
    sizes: {
      thumbnail: { width: 400, height: 500 },
      medium: { width: 800, height: 1000 },
      large: { width: 1600, height: 2000 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-packaging': {
    sourceDir: path.join(imagesDir, 'portfolio', 'Packaging'),
    cacheDir: path.join(cacheDir, 'portfolio', 'packaging'),
    sizes: {
      thumbnail: { width: 400, height: 400 },
      medium: { width: 800, height: 800 },
      large: { width: 1600, height: 1600 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-social-media-posts': {
    sourceDir: path.join(imagesDir, 'portfolio', 'social-media-posts'),
    cacheDir: path.join(cacheDir, 'portfolio', 'social-media-posts'),
    sizes: {
      thumbnail: { width: 400, height: 400 },
      medium: { width: 800, height: 800 },
      large: { width: 1600, height: 1600 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-backdrop': {
    sourceDir: path.join(imagesDir, 'portfolio', 'backdrop'),
    cacheDir: path.join(cacheDir, 'portfolio', 'backdrop'),
    sizes: {
      thumbnail: { width: 400, height: 300 },
      medium: { width: 800, height: 600 },
      large: { width: 1600, height: 1200 }
    },
    fit: 'contain',
    processAll: true
  },
  'portfolio-magazine-ad': {
    sourceDir: path.join(imagesDir, 'portfolio', 'mazazine-ad'),
    cacheDir: path.join(cacheDir, 'portfolio', 'magazine-ad'),
    sizes: {
      thumbnail: { width: 400, height: 500 },
      medium: { width: 800, height: 1000 },
      large: { width: 1600, height: 2000 }
    },
    fit: 'contain',
    processAll: true
  }
}

/**
 * Get all image files from source directory
 */
function getSourceImages(sourceDir, excludeDirs = ['cache']) {
  if (!fs.existsSync(sourceDir)) {
    return []
  }

  const files = fs.readdirSync(sourceDir)
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp']
  
  return files.filter(file => {
    const filePath = path.join(sourceDir, file)
    // Skip directories (especially cache)
    if (fs.statSync(filePath).isDirectory()) {
      return false
    }
    // Skip README files
    if (file.toLowerCase() === 'readme.md') {
      return false
    }
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext)
  })
}

/**
 * Process a single image for blog
 */
async function processBlogImage(inputFile, outputBaseName, config) {
  const inputPath = path.join(config.sourceDir, inputFile)
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Source file ${inputFile} not found`)
    return false
  }

  try {
    console.log(`\n📸 Processing blog image: ${inputFile}`)

    for (const [sizeName, dimensions] of Object.entries(config.sizes)) {
      const { width, height } = dimensions
      
      // Generate PNG versions (1x and 2x)
      for (const scale of [1, 2]) {
        const outputWidth = width * scale
        const outputHeight = height * scale
        const outputName = `${outputBaseName}-${sizeName}${scale === 2 ? '@2x' : ''}.png`
        const outputPath = path.join(config.cacheDir, outputName)

        await sharp(inputPath)
          .resize(outputWidth, outputHeight, {
            fit: config.fit,
            position: 'center'
          })
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(outputPath)

        const stats = fs.statSync(outputPath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
      }

      // Generate WebP versions (1x and 2x)
      for (const scale of [1, 2]) {
        const outputWidth = width * scale
        const outputHeight = height * scale
        const outputName = `${outputBaseName}-${sizeName}${scale === 2 ? '@2x' : ''}.webp`
        const outputPath = path.join(config.cacheDir, outputName)

        await sharp(inputPath)
          .resize(outputWidth, outputHeight, {
            fit: config.fit,
            position: 'center'
          })
          .webp({ quality: 85 })
          .toFile(outputPath)

        const stats = fs.statSync(outputPath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
      }
    }

    console.log(`✅ Successfully processed ${inputFile}`)
    return true
  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error.message)
    return false
  }
}

/**
 * Process portfolio logo with multiple sizes
 */
async function processPortfolioLogo(inputFile, config) {
  const inputPath = path.join(config.sourceDir, inputFile)
  const baseName = path.parse(inputFile).name
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Source file ${inputFile} not found`)
    return false
  }

  try {
    console.log(`\n📸 Processing portfolio logo: ${inputFile}`)

    for (const [sizeName, dimensions] of Object.entries(config.sizes)) {
      const { width, height } = dimensions
      
      // Generate PNG versions (1x and 2x)
      for (const scale of [1, 2]) {
        const outputWidth = width * scale
        const outputHeight = height * scale
        const outputName = `${baseName}-${sizeName}${scale === 2 ? '@2x' : ''}.png`
        const outputPath = path.join(config.cacheDir, outputName)

        await sharp(inputPath)
          .resize(outputWidth, outputHeight, {
            fit: config.fit,
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
          })
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(outputPath)

        const stats = fs.statSync(outputPath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
      }

      // Generate WebP versions (1x and 2x)
      for (const scale of [1, 2]) {
        const outputWidth = width * scale
        const outputHeight = height * scale
        const outputName = `${baseName}-${sizeName}${scale === 2 ? '@2x' : ''}.webp`
        const outputPath = path.join(config.cacheDir, outputName)

        await sharp(inputPath)
          .resize(outputWidth, outputHeight, {
            fit: config.fit,
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
          })
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath)

        const stats = fs.statSync(outputPath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
      }
    }

    console.log(`✅ Successfully processed ${inputFile}`)
    return baseName
  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error.message)
    return null
  }
}

/**
 * Process images for team or client-logos
 */
async function processImage(inputFile, config) {
  const inputPath = path.join(config.sourceDir, inputFile)
  const baseName = path.parse(inputFile).name
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Error: Source file ${inputFile} not found`)
    return false
  }

  try {
    const metadata = await sharp(inputPath).metadata()
    const sizeConfig = config.sizes.default
    const { width: targetWidth, height: targetHeight } = sizeConfig

    // Calculate output dimensions
    let outputWidth, outputHeight
    if (targetHeight === null) {
      // Maintain aspect ratio (for client-logos)
      const aspectRatio = metadata.width / metadata.height
      outputHeight = Math.round(targetWidth / aspectRatio)
      outputWidth = targetWidth
    } else {
      // Fixed dimensions (for team)
      outputWidth = targetWidth
      outputHeight = targetHeight
    }

    console.log(`\n📸 Processing: ${inputFile}`)
    console.log(`   Original: ${metadata.width}x${metadata.height}px (${(metadata.size / 1024).toFixed(2)} KB)`)

    // Generate PNG versions (1x and 2x)
    for (const scale of [1, 2]) {
      const scaledWidth = outputWidth * scale
      const scaledHeight = outputHeight * scale
      
      const outputName = `${baseName}${scale === 2 ? '@2x' : ''}.png`
      const outputPath = path.join(config.cacheDir, outputName)

      await sharp(inputPath)
        .resize(scaledWidth, scaledHeight, {
          fit: config.fit,
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .png({ 
          quality: 85, 
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true // Use palette for better compression on logos
        })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`   ✓ Created ${outputName} (${scaledWidth}x${scaledHeight}) - ${fileSizeKB} KB`)
    }

    // Generate WebP versions (1x and 2x)
    for (const scale of [1, 2]) {
      const scaledWidth = outputWidth * scale
      const scaledHeight = outputHeight * scale
      
      const outputName = `${baseName}${scale === 2 ? '@2x' : ''}.webp`
      const outputPath = path.join(config.cacheDir, outputName)

      await sharp(inputPath)
        .resize(scaledWidth, scaledHeight, {
          fit: config.fit,
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .webp({ 
          quality: 80, // Slightly lower quality for better compression
          effort: 6, // Higher effort for better compression
          nearLossless: false // Allow some loss for better file size
        })
        .toFile(outputPath)

      const stats = fs.statSync(outputPath)
      const fileSizeKB = (stats.size / 1024).toFixed(2)
      console.log(`   ✓ Created ${outputName} (${scaledWidth}x${scaledHeight}) - ${fileSizeKB} KB`)
    }

    console.log(`✅ Successfully processed ${inputFile}`)
    return baseName
  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error.message)
    return null
  }
}

/**
 * Process all images for a category
 */
async function processCategory(categoryName, config) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`🚀 Processing ${categoryName} images...`)
  console.log(`${'='.repeat(60)}`)
  console.log(`📁 Source: ${config.sourceDir}`)
  console.log(`💾 Cache: ${config.cacheDir}\n`)

  // Ensure cache directory exists
  if (!fs.existsSync(config.cacheDir)) {
    fs.mkdirSync(config.cacheDir, { recursive: true })
  }

  if (!fs.existsSync(config.sourceDir)) {
    console.log(`⚠️  Source directory not found: ${config.sourceDir}`)
    return { success: 0, failed: 0, items: [] }
  }

  const sourceImages = getSourceImages(config.sourceDir)
  
  if (sourceImages.length === 0) {
    console.log(`⚠️  No source images found in ${categoryName} directory`)
    return { success: 0, failed: 0, items: [] }
  }

  console.log(`📋 Found ${sourceImages.length} image(s) to process:\n`)
  sourceImages.forEach((file, index) => {
    console.log(`   ${index + 1}. ${file}`)
  })

  let successCount = 0
  let failCount = 0
  const processedItems = []

  for (const imageFile of sourceImages) {
    let result
    // All portfolio categories need special handling with multiple sizes
    if (categoryName.startsWith('portfolio-')) {
      result = await processPortfolioLogo(imageFile, config)
    } else {
      result = await processImage(imageFile, config)
    }
    if (result) {
      successCount++
      processedItems.push(result)
    } else {
      failCount++
    }
  }

  // Generate manifest for client-logos and all portfolio categories
  if ((categoryName === 'client-logos' || categoryName.startsWith('portfolio-')) && processedItems.length > 0) {
    const manifestPath = path.join(config.cacheDir, 'manifest.json')
    const manifest = {
      generated: new Date().toISOString(),
      count: processedItems.length,
      images: processedItems.sort() // Use 'images' for portfolio, 'logos' for client-logos
    }
    // For backward compatibility with client-logos
    if (categoryName === 'client-logos') {
      manifest.logos = processedItems.sort()
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    console.log(`\n📄 Generated manifest: ${manifestPath}`)
  }

  return { success: successCount, failed: failCount, items: processedItems }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2)
  const category = args[0] // 'blog', 'team', 'client-logos', or 'all'

  console.log('🖼️  Image Processing Script')
  console.log('='.repeat(60))

  if (!category || category === 'all') {
    // Process all categories
    const results = {}
    
    for (const [categoryName, config] of Object.entries(imageConfigs)) {
      if (categoryName === 'blog') {
        console.log('\n⚠️  Blog images are processed individually. Use: npm run process-images blog <filename>')
        continue
      }
      results[categoryName] = await processCategory(categoryName, config)
    }

    // Summary
    console.log('\n' + '='.repeat(60))
    console.log('📊 Processing Summary')
    console.log('='.repeat(60))
    for (const [categoryName, result] of Object.entries(results)) {
      console.log(`\n${categoryName}:`)
      console.log(`   ✅ Success: ${result.success}`)
      if (result.failed > 0) {
        console.log(`   ❌ Failed: ${result.failed}`)
      }
    }
  } else if (category === 'blog') {
    // Blog images need filename and base name
    const inputFile = args[1]
    const outputBaseName = args[2]
    
    if (!inputFile || !outputBaseName) {
      console.error('❌ Blog images require filename and output base name')
      console.log('Usage: npm run process-images blog <inputFile> <outputBaseName>')
      console.log('Example: npm run process-images blog logonumerology.png logo-numerology-astrology')
      process.exit(1)
    }

    const config = imageConfigs.blog
    if (!fs.existsSync(config.cacheDir)) {
      fs.mkdirSync(config.cacheDir, { recursive: true })
    }
    await processBlogImage(inputFile, outputBaseName, config)
  } else if (imageConfigs[category]) {
    // Process specific category
    const config = imageConfigs[category]
    const result = await processCategory(category, config)
    
    console.log('\n' + '='.repeat(60))
    console.log('📊 Processing Summary:')
    console.log(`   ✅ Success: ${result.success}`)
    if (result.failed > 0) {
      console.log(`   ❌ Failed: ${result.failed}`)
    }
    console.log('='.repeat(60))
  } else {
    console.error(`❌ Unknown category: ${category}`)
    console.log('Available categories: blog, team, client-logos, portfolio-logos, portfolio-business-card, portfolio-id-cards, portfolio-brochure-cover, portfolio-posters, portfolio-packaging, portfolio-social-media-posts, portfolio-backdrop, portfolio-magazine-ad, all')
    process.exit(1)
  }

  console.log('\n✨ Image processing complete!\n')
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})


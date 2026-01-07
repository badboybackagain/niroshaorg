import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { blogPosts } from '../src/data/blogData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, '../public')
const imagesDir = path.join(publicDir, 'images/blog')
const cacheDir = path.join(publicDir, 'cache/blog')

// Blog image config
const blogConfig = {
  sourceDir: imagesDir,
  cacheDir: cacheDir,
  sizes: {
    thumbnail: { width: 400, height: 300 },
    featured: { width: 1200, height: 630 },
    large: { width: 1600, height: 900 }
  },
  fit: 'cover'
}

/**
 * Process a single blog image
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
          .webp({ 
            quality: 85,
            effort: 6
          })
          .toFile(outputPath)

        const stats = fs.statSync(outputPath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`   ✓ Created ${outputName} (${outputWidth}x${outputHeight}) - ${fileSizeKB} KB`)
      }
    }

    console.log(`✅ Successfully processed ${inputFile}`)
    return outputBaseName
  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error.message)
    return null
  }
}

/**
 * Find source image file for a given imageSlug
 */
function findSourceImage(imageSlug) {
  if (!fs.existsSync(imagesDir)) {
    return null
  }

  const files = fs.readdirSync(imagesDir)
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp']
  
  // Try to find matching file
  // First, try exact match with common patterns
  const patterns = [
    `${imageSlug}.png`,
    `${imageSlug}.jpg`,
    `${imageSlug}.jpeg`,
    `${imageSlug}.webp`,
    `${imageSlug}-featured.png`,
    `${imageSlug}-featured.jpg`,
    `${imageSlug}-featured.jpeg`,
    `${imageSlug}-featured.webp`,
  ]

  for (const pattern of patterns) {
    if (files.includes(pattern)) {
      return pattern
    }
  }

  // Try to find by slug parts (e.g., "logo-numerology-astrology" -> "logonumerology")
  const slugParts = imageSlug.split('-')
  const searchTerms = [
    slugParts.join(''),
    slugParts.slice(0, 2).join(''),
    slugParts[0] + slugParts[1]?.charAt(0) + slugParts[2]?.charAt(0)
  ]

  for (const term of searchTerms) {
    for (const file of files) {
      const nameWithoutExt = path.parse(file).name.toLowerCase()
      const ext = path.extname(file).toLowerCase()
      if (imageExtensions.includes(ext) && nameWithoutExt.includes(term.toLowerCase())) {
        return file
      }
    }
  }

  return null
}

/**
 * Main execution
 */
async function main() {
  console.log('🖼️  Regenerating Blog Image Cache')
  console.log('='.repeat(60))
  console.log(`📁 Source: ${imagesDir}`)
  console.log(`💾 Cache: ${cacheDir}\n`)

  // Ensure cache directory exists
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }

  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Source directory not found: ${imagesDir}`)
    process.exit(1)
  }

  // Get all unique imageSlugs from blog posts
  const imageSlugs = [...new Set(blogPosts
    .filter(post => post.imageSlug)
    .map(post => post.imageSlug)
  )]

  console.log(`📋 Found ${imageSlugs.length} blog post(s) with images to process:\n`)

  let successCount = 0
  let failCount = 0
  const results = []

  for (const imageSlug of imageSlugs) {
    const sourceFile = findSourceImage(imageSlug)
    
    if (!sourceFile) {
      console.log(`⚠️  Skipping ${imageSlug}: Source image not found`)
      failCount++
      continue
    }

    console.log(`\n📸 Processing: ${imageSlug}`)
    console.log(`   Source: ${sourceFile}`)
    
    try {
      const result = await processBlogImage(sourceFile, imageSlug, blogConfig)
      
      if (result) {
        successCount++
        results.push({ imageSlug, sourceFile, status: 'success' })
        console.log(`   ✅ Success`)
      } else {
        failCount++
        results.push({ imageSlug, sourceFile, status: 'failed' })
        console.log(`   ❌ Failed`)
      }
    } catch (error) {
      failCount++
      results.push({ imageSlug, sourceFile, status: 'error', error: error.message })
      console.log(`   ❌ Error: ${error.message}`)
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('📊 Processing Summary')
  console.log('='.repeat(60))
  console.log(`   ✅ Success: ${successCount}`)
  if (failCount > 0) {
    console.log(`   ❌ Failed: ${failCount}`)
  }
  console.log('='.repeat(60))

  if (failCount > 0) {
    console.log('\n⚠️  Failed items:')
    results.filter(r => r.status !== 'success').forEach(r => {
      console.log(`   - ${r.imageSlug} (${r.sourceFile || 'not found'})`)
    })
  }

  console.log('\n✨ Blog image cache regeneration complete!\n')
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})




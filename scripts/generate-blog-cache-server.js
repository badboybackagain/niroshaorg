#!/usr/bin/env node

/**
 * Server-side blog cache generation script
 * This script runs on the production server after deployment to generate
 * blog image cache from source images in public/images/blog
 * 
 * Usage: node scripts/generate-blog-cache-server.js
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Determine paths based on where script is running
// If running from standalone build, paths are relative to where server.js is
// If running from project root, use standard paths
let publicDir, imagesDir, cacheDir

// Check if we're in a standalone build (check for server.js in current or parent dir)
const currentDir = process.cwd()
const hasServerJs = fs.existsSync(path.join(currentDir, 'server.js')) || 
                    fs.existsSync(path.join(currentDir, '..', 'server.js'))

if (hasServerJs) {
  // Running from standalone build - public is in current directory or parent
  if (fs.existsSync(path.join(currentDir, 'public'))) {
    publicDir = path.join(currentDir, 'public')
  } else if (fs.existsSync(path.join(currentDir, '..', 'public'))) {
    publicDir = path.join(currentDir, '..', 'public')
  } else {
    // Fallback: assume we're in project root
    publicDir = path.join(__dirname, '../public')
  }
} else {
  // Running from project root
  publicDir = path.join(__dirname, '../public')
}

imagesDir = path.join(publicDir, 'images/blog')
cacheDir = path.join(publicDir, 'cache/blog')

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
 * Extract image slug from filename
 * Examples:
 *   "digital-marketing-strategy-featured.png" -> "digital-marketing-strategy"
 *   "logo-numerology-astrology.png" -> "logo-numerology-astrology"
 */
function extractImageSlug(filename) {
  // Remove extension
  const nameWithoutExt = path.parse(filename).name
  
  // Remove common suffixes like "-featured"
  const slug = nameWithoutExt.replace(/-featured$/, '').replace(/-large$/, '').replace(/-thumbnail$/, '')
  
  return slug
}

/**
 * Main execution
 */
async function main() {
  console.log('🖼️  Generating Blog Image Cache on Server')
  console.log('='.repeat(60))
  console.log(`📁 Source: ${imagesDir}`)
  console.log(`💾 Cache: ${cacheDir}\n`)

  // Ensure cache directory exists
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
    console.log(`✓ Created cache directory: ${cacheDir}`)
  }

  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Source directory not found: ${imagesDir}`)
    process.exit(1)
  }

  // Get all image files from the blog images directory
  const files = fs.readdirSync(imagesDir)
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp']
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext)
  })

  if (imageFiles.length === 0) {
    console.log(`⚠️  No image files found in ${imagesDir}`)
    process.exit(0)
  }

  console.log(`📋 Found ${imageFiles.length} image file(s) to process:\n`)

  let successCount = 0
  let failCount = 0
  const results = []

  for (const imageFile of imageFiles) {
    const imageSlug = extractImageSlug(imageFile)
    
    console.log(`\n📸 Processing: ${imageFile}`)
    console.log(`   Slug: ${imageSlug}`)
    
    try {
      const result = await processBlogImage(imageFile, imageSlug, blogConfig)
      
      if (result) {
        successCount++
        results.push({ imageFile, imageSlug, status: 'success' })
        console.log(`   ✅ Success`)
      } else {
        failCount++
        results.push({ imageFile, imageSlug, status: 'failed' })
        console.log(`   ❌ Failed`)
      }
    } catch (error) {
      failCount++
      results.push({ imageFile, imageSlug, status: 'error', error: error.message })
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
      console.log(`   - ${r.imageFile} (${r.imageSlug})`)
      if (r.error) {
        console.log(`     Error: ${r.error}`)
      }
    })
  }

  // Count generated cache files
  const cacheFiles = fs.readdirSync(cacheDir).filter(f => 
    fs.statSync(path.join(cacheDir, f)).isFile()
  )
  console.log(`\n✨ Blog image cache generation complete!`)
  console.log(`   Generated ${cacheFiles.length} cache files in ${cacheDir}\n`)
}

main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})

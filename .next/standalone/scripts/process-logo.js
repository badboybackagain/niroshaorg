import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = path.join(__dirname, '../src/assets/logo-source')
const outputDir = path.join(__dirname, '../public')

// Logo size configurations - Square logos
const sizes = {
  default: { width: 60, height: 60, name: 'logo' },
  small: { width: 50, height: 50, name: 'logo-small' },
  large: { width: 80, height: 80, name: 'logo-large' },
  xlarge: { width: 100, height: 100, name: 'logo-xlarge' }
}

async function processLogo() {
  // Find logo file in source directory
  const files = fs.readdirSync(sourceDir)
  const logoFile = files.find(file => 
    /\.(png|jpg|jpeg|svg|webp)$/i.test(file)
  )

  if (!logoFile) {
    console.log('⚠️  No logo file found in src/assets/logo-source/')
    console.log('   Please place your logo image (PNG, JPG, SVG, or WebP) in that folder')
    return
  }

  const sourcePath = path.join(sourceDir, logoFile)
  console.log(`📸 Processing logo: ${logoFile}`)

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  try {
    // Process each size
    for (const [key, config] of Object.entries(sizes)) {
      const { width, height, name } = config
      
      // Generate PNG versions (1x and 2x) - Square format
      await sharp(sourcePath)
        .resize(width, height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(path.join(outputDir, `${name}.png`))
      
      await sharp(sourcePath)
        .resize(width * 2, height * 2, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(path.join(outputDir, `${name}@2x.png`))

      // Generate WebP versions (1x and 2x) - Square format
      await sharp(sourcePath)
        .resize(width, height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${name}.webp`))
      
      await sharp(sourcePath)
        .resize(width * 2, height * 2, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, `${name}@2x.webp`))

      console.log(`✅ Generated ${name} (${width}x${height}px) - PNG & WebP (1x & 2x)`)
    }

    // Also create the main logo.png and logo@2x.png for backward compatibility (Square format)
    await sharp(sourcePath)
      .resize(60, 60, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(outputDir, 'logo.png'))
    
    await sharp(sourcePath)
      .resize(120, 120, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(outputDir, 'logo@2x.png'))

    await sharp(sourcePath)
      .resize(60, 60, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, 'logo.webp'))
    
    await sharp(sourcePath)
      .resize(120, 120, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, 'logo@2x.webp'))

    console.log('\n✨ Logo processing complete!')
    console.log(`📁 Output directory: ${outputDir}`)
    console.log('\nGenerated files:')
    console.log('  - logo.png / logo@2x.png (main logo)')
    console.log('  - logo.webp / logo@2x.webp (WebP versions)')
    console.log('  - logo-small.png / logo-small@2x.png')
    console.log('  - logo-large.png / logo-large@2x.png')
    console.log('  - logo-xlarge.png / logo-xlarge@2x.png')
    console.log('  - Plus WebP versions of all sizes\n')

  } catch (error) {
    console.error('❌ Error processing logo:', error.message)
    process.exit(1)
  }
}

processLogo()


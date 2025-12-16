import { writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Get base URL from environment variable or use default
// Priority: SITE_URL > VITE_SITE_URL > default from robots.txt > fallback
let baseUrl = process.env.SITE_URL || process.env.VITE_SITE_URL

// Try to read from robots.txt if not set
if (!baseUrl) {
  try {
    const robotsPath = join(__dirname, '..', 'public', 'robots.txt')
    const robotsContent = readFileSync(robotsPath, 'utf8')
    const sitemapMatch = robotsContent.match(/Sitemap:\s*(https?:\/\/[^\s]+)/i)
    if (sitemapMatch) {
      // Extract domain from sitemap URL
      const sitemapUrl = sitemapMatch[1]
      baseUrl = sitemapUrl.replace(/\/sitemap\.xml.*$/, '')
    }
  } catch (e) {
    // robots.txt not found or couldn't read it
  }
}

// Final fallback
baseUrl = baseUrl || 'https://yourdomain.com'

// Priority and change frequency settings
const defaultPriority = '0.8'
const defaultChangeFreq = 'weekly'

// Get current date in ISO format
const currentDate = new Date().toISOString().split('T')[0]

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' }, // Homepage
  { path: 'about', priority: '0.9', changefreq: 'monthly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.9', changefreq: 'daily' },
]

// Extract service slugs from servicesData.jsx
function extractServiceSlugs() {
  const servicesFilePath = join(__dirname, '..', 'src', 'data', 'servicesData.jsx')
  const fileContent = readFileSync(servicesFilePath, 'utf8')
  
  // Extract all service slugs using regex
  // Look for patterns like 'web-development': { or "web-development": {
  const slugMatches = fileContent.matchAll(/(?:['"])([^'"]+)(?:['"])\s*:\s*\{/g)
  const slugs = []
  
  for (const match of slugMatches) {
    const slug = match[1]
    // Filter out non-service keys (like React imports, etc.)
    if (slug && !slug.includes('import') && !slug.includes('export') && !slug.includes('React') && !slug.includes('Fi')) {
      slugs.push(slug)
    }
  }
  
  // Remove duplicates and filter valid service slugs
  const uniqueSlugs = [...new Set(slugs)].filter(slug => 
    slug.includes('-') && slug.length > 3 // Service slugs typically have hyphens
  )
  
  return uniqueSlugs
}

// Extract blog slugs and dates from blogData.js
function extractBlogPosts() {
  const blogFilePath = join(__dirname, '..', 'src', 'data', 'blogData.js')
  const fileContent = readFileSync(blogFilePath, 'utf8')
  
  const blogPosts = []
  
  // Extract blog posts using regex
  // Look for slug and publishDate patterns
  const slugPattern = /slug:\s*['"]([^'"]+)['"]/g
  const datePattern = /publishDate:\s*['"]([^'"]+)['"]/g
  
  let slugMatch
  const slugs = []
  while ((slugMatch = slugPattern.exec(fileContent)) !== null) {
    slugs.push(slugMatch[1])
  }
  
  let dateMatch
  const dates = []
  while ((dateMatch = datePattern.exec(fileContent)) !== null) {
    dates.push(dateMatch[1])
  }
  
  // Match slugs with dates (assuming they're in order)
  slugs.forEach((slug, index) => {
    blogPosts.push({
      slug,
      publishDate: dates[index] || currentDate
    })
  })
  
  return blogPosts
}

// Generate service URLs
const serviceSlugs = extractServiceSlugs()
const serviceRoutes = serviceSlugs.map(slug => ({
  path: `services/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
  lastmod: currentDate
}))

// Generate blog URLs
const blogPosts = extractBlogPosts()
const blogRoutes = blogPosts.map(post => ({
  path: `blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'weekly',
  lastmod: post.publishDate || currentDate
}))

// Combine all routes
const allRoutes = [
  ...staticRoutes.map(route => ({
    ...route,
    lastmod: currentDate
  })),
  ...serviceRoutes,
  ...blogRoutes
]

// Generate XML sitemap
function generateSitemap(routes, baseUrl) {
  // Ensure baseUrl doesn't end with a slash
  const cleanBaseUrl = baseUrl.replace(/\/$/, '')
  
  const urls = routes.map(route => {
    // Build URL properly
    let url
    if (route.path === '') {
      url = cleanBaseUrl
    } else {
      // Ensure we have proper URL structure
      url = `${cleanBaseUrl}/${route.path}`.replace(/([^:]\/)\/+/g, '$1')
    }
    
    const lastmod = route.lastmod || currentDate
    const priority = route.priority || defaultPriority
    const changefreq = route.changefreq || defaultChangeFreq

    return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`
}

// Escape XML special characters
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

// Generate the sitemap
const sitemapXml = generateSitemap(allRoutes, baseUrl)

// Determine output directory (public folder for Vite)
const outputDir = join(__dirname, '..', 'public')
const outputPath = join(outputDir, 'sitemap.xml')

// Write sitemap to file
writeFileSync(outputPath, sitemapXml, 'utf8')

console.log(`✅ Sitemap generated successfully!`)
console.log(`📍 Location: ${outputPath}`)
console.log(`🌐 Base URL: ${baseUrl}`)
console.log(`📊 Total URLs: ${allRoutes.length}`)
console.log(`   - Static routes: ${staticRoutes.length}`)
console.log(`   - Service routes: ${serviceRoutes.length}`)
console.log(`   - Blog routes: ${blogRoutes.length}`)

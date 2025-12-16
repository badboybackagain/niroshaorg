#!/usr/bin/env node

/**
 * Google Reviews Fetcher
 * 
 * This script fetches Google reviews from a public Google Business Profile URL
 * and saves them to a JSON file that can be consumed by the React app.
 * 
 * Usage:
 *   node scripts/fetch-google-reviews.js
 * 
 * Environment Variables:
 *   GOOGLE_BUSINESS_URL - Your Google Business Profile URL (e.g., https://www.google.com/maps/place/...)
 *   REVIEWS_OUTPUT_FILE - Output file path (default: public/reviews.json)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const GOOGLE_BUSINESS_URL = process.env.GOOGLE_BUSINESS_URL || ''
const OUTPUT_FILE = process.env.REVIEWS_OUTPUT_FILE || path.join(__dirname, '../public/reviews.json')

if (!GOOGLE_BUSINESS_URL) {
  console.error('❌ Error: GOOGLE_BUSINESS_URL environment variable is required')
  console.error('   Example: export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business"')
  process.exit(1)
}

/**
 * Fetches reviews using a proxy service or direct scraping
 * Note: This is a simplified version. For production, consider using:
 * - A dedicated scraping service
 * - Puppeteer with proper headless browser
 * - A third-party API
 */
async function fetchGoogleReviews() {
  try {
    console.log('🔄 Fetching Google reviews...')
    console.log(`📍 Business URL: ${GOOGLE_BUSINESS_URL}`)
    
    // Extract place ID from URL if present
    const placeIdMatch = GOOGLE_BUSINESS_URL.match(/place\/([^/]+)/)
    const placeId = placeIdMatch ? placeIdMatch[1] : null
    
    if (!placeId) {
      console.warn('⚠️  Could not extract place ID from URL. Using alternative method...')
    }
    
    // Method 1: Use Google Maps Place Details API (requires API key)
    // This is the official way but requires API setup
    
    // Method 2: Scrape from public page (not recommended, but works)
    // For now, we'll use a simple fetch approach
    // Note: Google may block this, so you might need a proxy or different approach
    
    const reviews = await scrapeReviewsFromURL(GOOGLE_BUSINESS_URL)
    
    if (!reviews || reviews.length === 0) {
      console.warn('⚠️  No reviews found. This might be due to:')
      console.warn('   1. Google blocking the request')
      console.warn('   2. No reviews available')
      console.warn('   3. URL format issue')
      console.warn('')
      console.warn('💡 Consider using a service like:')
      console.warn('   - SerpAPI (serpapi.com)')
      console.warn('   - ScraperAPI (scraperapi.com)')
      console.warn('   - Or deploy a Puppeteer-based scraper')
      
      // Return empty array so the app doesn't break
      return []
    }
    
    // Format reviews for the React component
    const formattedReviews = reviews.map(review => ({
      name: review.author || 'Anonymous',
      text: review.text || '',
      rating: review.rating || 5,
      date: review.date || new Date().toISOString(),
      photo: review.photo || null,
      verified: review.verified || false
    }))
    
    // Save to JSON file
    const outputDir = path.dirname(OUTPUT_FILE)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify({
        reviews: formattedReviews,
        lastUpdated: new Date().toISOString(),
        totalReviews: formattedReviews.length
      }, null, 2)
    )
    
    console.log(`✅ Successfully fetched ${formattedReviews.length} reviews`)
    console.log(`📁 Saved to: ${OUTPUT_FILE}`)
    
    return formattedReviews
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message)
    console.error('')
    console.error('💡 Alternative solutions:')
    console.error('   1. Use Google My Business API (official, requires setup)')
    console.error('   2. Use a third-party service (SerpAPI, ScraperAPI)')
    console.error('   3. Manually add reviews to src/data/reviews.json')
    console.error('   4. Use Google Reviews embed widget')
    
    // Return empty array on error
    return []
  }
}

/**
 * Scrapes reviews from Google Business Profile URL
 * This is a simplified version. For production, you'll need:
 * - Puppeteer or Playwright for JavaScript rendering
 * - Proxy rotation to avoid IP blocking
 * - Proper error handling and retries
 */
async function scrapeReviewsFromURL(url) {
  try {
    // Option 1: Use a third-party API service (recommended)
    // Example with SerpAPI (you'll need to sign up and get an API key)
    if (process.env.SERPAPI_KEY) {
      return await fetchFromSerpAPI(url)
    }
    
    // Option 2: Simple fetch (will likely be blocked by Google)
    // This is just a placeholder - Google will block direct requests
    console.warn('⚠️  Direct scraping may be blocked by Google')
    console.warn('💡 Consider using SerpAPI or similar service')
    
    // For now, return empty array
    // You'll need to implement proper scraping with Puppeteer
    return []
  } catch (error) {
    console.error('Error in scrapeReviewsFromURL:', error)
    return []
  }
}

/**
 * Fetch reviews using SerpAPI (third-party service)
 * Sign up at: https://serpapi.com/
 */
async function fetchFromSerpAPI(url) {
  const SERPAPI_KEY = process.env.SERPAPI_KEY
  if (!SERPAPI_KEY) {
    throw new Error('SERPAPI_KEY not set')
  }
  
  // Extract place ID from URL
  const placeIdMatch = url.match(/place\/([^/]+)/)
  if (!placeIdMatch) {
    throw new Error('Could not extract place ID from URL')
  }
  
  const placeId = placeIdMatch[1]
  const apiUrl = `https://serpapi.com/search.json?engine=google_maps&place_id=${placeId}&api_key=${SERPAPI_KEY}`
  
  const response = await fetch(apiUrl)
  const data = await response.json()
  
  if (data.error) {
    throw new Error(data.error)
  }
  
  // Extract reviews from SerpAPI response
  const reviews = data.reviews || []
  return reviews.map(review => ({
    author: review.user?.name || 'Anonymous',
    text: review.snippet || '',
    rating: review.rating || 5,
    date: review.date || null,
    photo: review.user?.thumbnail || null,
    verified: review.user?.link ? true : false
  }))
}

// Run the script
fetchGoogleReviews()
  .then(() => {
    console.log('✨ Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })

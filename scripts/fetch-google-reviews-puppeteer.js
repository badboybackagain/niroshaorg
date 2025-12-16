#!/usr/bin/env node

/**
 * Google Reviews Fetcher using Puppeteer
 * 
 * This script uses Puppeteer (headless browser) to fetch Google reviews
 * from a public Google Business Profile URL, similar to how Elfsight does it.
 * 
 * Installation:
 *   npm install puppeteer
 * 
 * Usage:
 *   node scripts/fetch-google-reviews-puppeteer.js
 * 
 * Environment Variables:
 *   GOOGLE_BUSINESS_URL - Your Google Business Profile URL
 *   REVIEWS_OUTPUT_FILE - Output file path (default: public/reviews.json)
 *   MAX_REVIEWS - Maximum number of reviews to fetch (default: 20)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Check if puppeteer is available
let puppeteer
try {
  puppeteer = await import('puppeteer')
} catch (error) {
  console.error('❌ Error: Puppeteer is not installed')
  console.error('   Install it with: npm install puppeteer')
  console.error('   Or use the basic version: node scripts/fetch-google-reviews.js')
  process.exit(1)
}

// Configuration
const GOOGLE_BUSINESS_URL = process.env.GOOGLE_BUSINESS_URL || ''
const OUTPUT_FILE = process.env.REVIEWS_OUTPUT_FILE || path.join(__dirname, '../public/reviews.json')
const MAX_REVIEWS = parseInt(process.env.MAX_REVIEWS || '20', 10)

if (!GOOGLE_BUSINESS_URL) {
  console.error('❌ Error: GOOGLE_BUSINESS_URL environment variable is required')
  console.error('   Example: export GOOGLE_BUSINESS_URL="https://www.google.com/maps/place/Your+Business"')
  process.exit(1)
}

// Helper function to wait (replacement for deprecated waitForTimeout)
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Fetches reviews using Puppeteer (headless browser)
 * This approach is similar to how Elfsight works
 */
async function fetchGoogleReviewsWithPuppeteer() {
  let browser
  
  try {
    console.log('🔄 Starting browser...')
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    })
    
    const page = await browser.newPage()
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    
    console.log('🌐 Navigating to Google Business Profile...')
    console.log(`📍 URL: ${GOOGLE_BUSINESS_URL}`)
    
    // Handle shortened Google Maps URLs (maps.app.goo.gl)
    // These URLs redirect, so we'll let Puppeteer follow the redirect
    await page.goto(GOOGLE_BUSINESS_URL, {
      waitUntil: 'networkidle2',
      timeout: 30000
    })
    
    // Get the final URL after redirects
    const finalUrl = page.url()
    if (finalUrl !== GOOGLE_BUSINESS_URL) {
      console.log(`📍 Redirected to: ${finalUrl}`)
    }
    
    // Wait for reviews to load - try multiple selectors
    console.log('⏳ Waiting for reviews to load...')
    
    // Wait for page to be fully loaded
    await wait(8000)
    
    // Scroll down multiple times to load more reviews (Google loads them dynamically)
    console.log('📜 Scrolling to load more reviews...')
    for (let i = 0; i < 15; i++) {
      await page.evaluate(() => {
        window.scrollBy(0, 500)
      })
      await wait(2000)
      
      // Try to click "More" buttons to expand review text
      try {
        // Use evaluate to find and click "More" buttons (since :has-text() doesn't work)
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'))
          const moreButtons = buttons.filter(btn => {
            const text = btn.textContent || btn.getAttribute('aria-label') || ''
            return text.toLowerCase().includes('more') && 
                   !text.toLowerCase().includes('reviews') // Exclude "More reviews" button
          })
          
          moreButtons.slice(0, 10).forEach(button => {
            const rect = button.getBoundingClientRect()
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              button.click()
            }
          })
        })
        await wait(800)
      } catch (e) {
        // Continue if clicking fails
      }
    }
    
    // Scroll to reviews section (already handled above, but keep this as backup)
    await wait(2000)
    
    // Try to click "Show more reviews" or similar buttons
    try {
      const showMoreButton = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        return buttons.find(btn => {
          const text = (btn.textContent || btn.getAttribute('aria-label') || '').toLowerCase()
          return text.includes('show more') || 
                 text.includes('more reviews') ||
                 text.includes('view all reviews')
        })
      })
      
      if (showMoreButton) {
        console.log('🔽 Clicking "Show more reviews" button...')
        await page.evaluate((button) => {
          if (button) button.click()
        }, showMoreButton)
        await wait(5000)
        
        // Scroll again after clicking
        for (let i = 0; i < 5; i++) {
          await page.evaluate(() => {
            window.scrollBy(0, 500)
          })
          await wait(1500)
        }
      }
    } catch (e) {
      console.log('No "Show more" button found or already clicked')
    }
    
    // Scroll to reviews section specifically
    console.log('🔍 Locating reviews section...')
    await page.evaluate(() => {
      // Scroll to any element that might be the reviews section
      const scrollToReviews = () => {
        // Try to find reviews section by various methods
        const reviewSectionSelectors = [
          '[data-section-id="reviews"]',
          '.review-section',
          'h2[data-value="Reviews"]'
        ]
        
        // Try standard selectors first
        for (const selector of reviewSectionSelectors) {
          const element = document.querySelector(selector)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            return true
          }
        }
        
        // Then try finding h2 elements with "review" in text
        const h2Elements = Array.from(document.querySelectorAll('h2'))
        const reviewsH2 = h2Elements.find(el => 
          el.textContent.toLowerCase().includes('review')
        )
        if (reviewsH2) {
          reviewsH2.scrollIntoView({ behavior: 'smooth', block: 'center' })
          return true
        }
        return false
      }
      
      scrollToReviews()
    })
    await wait(3000)
    
    // Final wait for all content to load
    await wait(5000)
    
    // Wait for review elements to appear with multiple strategies
    console.log('🔍 Waiting for review elements to load...')
    let reviewsFound = false
    const reviewSelectors = [
      '[data-review-id]',
      '.MyEned',
      '.jftiEf',
      '[jsaction*="review"]',
      '.fontBodyMedium'
    ]
    
    for (const selector of reviewSelectors) {
      try {
        await page.waitForSelector(selector, { timeout: 5000 })
        const count = await page.$$eval(selector, els => els.length)
        if (count > 0) {
          console.log(`✅ Found ${count} elements with selector: ${selector}`)
          reviewsFound = true
          break
        }
      } catch (e) {
        // Try next selector
      }
    }
    
    if (!reviewsFound) {
      console.log('⚠️  Standard selectors not found, will try broader search...')
    }
    
    // Take a screenshot for debugging
    const screenshotPath = path.join(__dirname, '../public/debug-screenshot.png')
    await page.screenshot({ path: screenshotPath, fullPage: true })
    console.log(`📸 Debug screenshot saved to: ${screenshotPath}`)
    
    // Extract reviews from the page
    console.log('📖 Extracting reviews...')
    
    const reviews = await page.evaluate((maxReviews) => {
      // Try multiple selectors for review containers (Google Maps uses various class names)
      const selectors = [
        '[data-review-id]',
        '.MyEned',
        '.jftiEf',
        '.jftiEf[data-review-id]',
        '[jsaction*="review"]',
        '.review-item',
        'div[data-review-id]',
        '[data-review-id][jsaction]',
        '.fontBodyMedium', // Sometimes reviews are in this
        '[aria-label*="review"]',
        'div[role="listitem"]', // Reviews might be in list items
        '.m6QErb', // Another Google Maps class
        '.m6QErb .MyEned' // Nested structure
      ]
      
      let reviewElements = []
      let usedSelector = ''
      
      for (const selector of selectors) {
        try {
          const elements = document.querySelectorAll(selector)
          if (elements.length > 0) {
            reviewElements = Array.from(elements)
            usedSelector = selector
            console.log(`Found ${reviewElements.length} potential review elements using selector: ${selector}`)
            // Don't break immediately - try to get more elements
            if (reviewElements.length >= 5) break
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      // If still no elements, try a more aggressive search
      if (reviewElements.length === 0) {
        console.log('Trying broader search for review elements...')
        // Look for any divs that might contain reviews
        const allDivs = document.querySelectorAll('div')
        reviewElements = Array.from(allDivs).filter(div => {
          const text = div.textContent || ''
          const hasRating = div.querySelector('[aria-label*="star"], [aria-label*="Star"]')
          const hasReviewText = text.length > 50 && text.length < 2000
          const hasAuthor = text.match(/[A-Z][a-z]+\s+[A-Z][a-z]+/) // Name pattern
          return hasRating && hasReviewText && hasAuthor
        })
        console.log(`Found ${reviewElements.length} potential reviews using broader search`)
      }
      
      const extractedReviews = []
      const seenTexts = new Set() // To avoid duplicates
      
      console.log(`Processing ${reviewElements.length} review elements...`)
      
      reviewElements.forEach((element, index) => {
        if (extractedReviews.length >= maxReviews * 2) return // Get more to filter later
        
        try {
          // Try multiple selectors for review text - get FULL text
          // First, try to find the main review text element
          const textSelectors = [
            '.wiI7pd',
            '.MyEned span',
            '.MyEned',
            '.review-text',
            '[data-review-text]',
            'span[style*="font"]',
            '.fontBodyMedium',
            '.review-full-text',
            'span[jsaction]',
            'span.fontBodyMedium',
            'div.fontBodyMedium',
            '.m6QErb span'
          ]
          let text = ''
          let textElement = null
          
          for (const selector of textSelectors) {
            textElement = element.querySelector(selector)
            if (textElement) {
              const candidateText = textElement.textContent.trim()
              // Make sure it's actual review text (not too short, not metadata)
              if (candidateText.length > 20 && 
                  !candidateText.match(/^\d+\s*(review|photo)/i) &&
                  !candidateText.match(/^[A-Z][a-z]+\s+[A-Z][a-z]+\s+\d+\s*review/i)) {
                text = candidateText
                break
              }
            }
          }
          
          // If still no text, try getting text from the element itself
          if (!text) {
            const allText = element.textContent || element.innerText || ''
            // Try to extract just the review part (usually the longest paragraph)
            const paragraphs = allText.split('\n').filter(p => p.trim().length > 20)
            if (paragraphs.length > 0) {
              // Find the longest paragraph that looks like a review
              const reviewParagraph = paragraphs
                .filter(p => !p.match(/^\d+\s*(review|photo)/i))
                .sort((a, b) => b.length - a.length)[0]
              if (reviewParagraph) {
                text = reviewParagraph.trim()
              }
            }
          }
          
          // If text is truncated (ends with …), try to get full text
          if (text && (text.endsWith('…') || text.includes('…'))) {
            // Look for expanded text - sometimes it's in a hidden span or after clicking "More"
            const expandedSelectors = [
              '[data-expanded-text]',
              '.expanded-text',
              '.wiI7pd[aria-expanded="true"]',
              '.wiI7pd:not([style*="display: none"])'
            ]
            
            for (const selector of expandedSelectors) {
              const expandedElement = element.querySelector(selector)
              if (expandedElement && expandedElement.textContent.trim()) {
                const expandedText = expandedElement.textContent.trim()
                if (expandedText.length > text.length) {
                  text = expandedText
                  break
                }
              }
            }
            
            // If still truncated, try to get all text from the review container
            // but exclude author name, date, etc.
            if (text.endsWith('…')) {
              const allText = element.textContent || element.innerText || ''
              // Try to extract just the review text part
              const lines = allText.split('\n').filter(line => line.trim().length > 10)
              // Usually the longest line is the review text
              const longestLine = lines.reduce((a, b) => a.length > b.length ? a : b, '')
              if (longestLine.length > text.length) {
                text = longestLine.trim()
              }
            }
          }
          
          // If no text found, try getting all text content (full text, not truncated)
          if (!text) {
            const allText = element.textContent || element.innerText || ''
            // Skip if it's too short (likely not a review)
            if (allText.trim().length < 10) return
            text = allText.trim()
          }
          
          // Clean up text - remove extra whitespace but keep full content
          text = text.replace(/\s+/g, ' ').trim()
          
          // Remove common prefixes/suffixes that might be metadata
          text = text.replace(/^(Show more|More|Read more)\s*/i, '')
          text = text.replace(/\s*(Show more|More|Read more)$/i, '')
          
          if (!text || text.length < 20) return // Skip if no meaningful text found
          
          // Check for duplicates using text hash
          const textHash = text.substring(0, 100).toLowerCase().replace(/\s+/g, '')
          if (seenTexts.has(textHash)) {
            return // Skip duplicate
          }
          seenTexts.add(textHash)
          
          // Filter out malformed reviews (metadata patterns)
          const metadataPatterns = [
            /\d+\s*review(s)?\s*·?\s*\d+\s*photo(s)?/i,  // "5 reviews · 10 photos"
            /^\w+\s+\d+\s*review(s)?$/i,  // "Name1 review"
            /^\w+\s+\w+\s+\d+\s*review(s)?/i,  // "Name Name1 review"
            /^\d+\s*review(s)?$/i,  // "1 review"
            /^\d+\s*photo(s)?$/i,  // "10 photos"
            /^[A-Z][a-z]+\s+[A-Z][a-z]+\s+\d+\s*review/i  // "First Last1 review"
          ]
          
          const isMetadata = metadataPatterns.some(pattern => pattern.test(text))
          if (isMetadata) {
            return // Skip this review - it's metadata, not actual review text
          }
          
          // Try multiple selectors for author name
          const authorSelectors = [
            '.d4r55',
            '.X43Kjb',
            '.review-author',
            '[data-review-author]',
            'button[data-value]',
            'a[data-value]',
            '.fontBodyMedium',
            'span.fontBodyMedium'
          ]
          let author = 'Anonymous'
          for (const selector of authorSelectors) {
            const authorElement = element.querySelector(selector)
            if (authorElement) {
              const authorText = authorElement.textContent.trim()
              // Skip if it looks like a button text or is too long
              if (authorText && 
                  !authorText.includes('More') && 
                  !authorText.includes('Show') &&
                  authorText.length < 50 &&
                  authorText.length > 2) {
                // Check if it looks like a name (has capital letters)
                if (/[A-Z]/.test(authorText)) {
                  author = authorText
                  break
                }
              }
            }
          }
          
          // If no author found, try to extract from the beginning of the element text
          if (author === 'Anonymous') {
            const allText = element.textContent || ''
            const lines = allText.split('\n').filter(l => l.trim())
            // Usually the first line or a line with a name pattern is the author
            for (const line of lines.slice(0, 3)) {
              const trimmed = line.trim()
              if (trimmed.length > 2 && trimmed.length < 50 && /^[A-Z]/.test(trimmed)) {
                // Check if it's not the review text itself
                if (trimmed.length < text.length * 0.5) {
                  author = trimmed
                  break
                }
              }
            }
          }
          
          // Try to find rating - multiple methods
          let rating = 5
          const ratingSelectors = [
            '[aria-label*="star"]',
            '[aria-label*="Star"]',
            '.kvMYJc',
            '.review-rating',
            '[data-rating]'
          ]
          
          for (const selector of ratingSelectors) {
            const ratingElement = element.querySelector(selector)
            if (ratingElement) {
              const ratingText = ratingElement.getAttribute('aria-label') || 
                                ratingElement.getAttribute('data-rating') ||
                                ratingElement.textContent
              const ratingMatch = ratingText.match(/(\d+)/)
              if (ratingMatch) {
                rating = parseInt(ratingMatch[1], 10)
                if (rating >= 1 && rating <= 5) break
              }
            }
          }
          
          // Try to find date
          const dateSelectors = [
            '.rsqaWe',
            '.review-date',
            '[data-review-date]',
            'span[style*="color"]'
          ]
          let date = null
          for (const selector of dateSelectors) {
            const dateElement = element.querySelector(selector)
            if (dateElement && dateElement.textContent.trim()) {
              const dateText = dateElement.textContent.trim()
              // Check if it looks like a date
              if (dateText.match(/\d+/) && (dateText.includes('month') || dateText.includes('day') || dateText.includes('year') || dateText.includes('ago'))) {
                date = dateText
                break
              }
            }
          }
          
          // Try to find profile image
          let profileImage = null
          const imageSelectors = [
            'img[data-photo-url]',
            'img[src*="googleusercontent"]',
            'img[src*="googleapis"]',
            '.review-author img',
            '.d4r55 img',
            'img[alt*="profile"]',
            'img[alt*="avatar"]',
            'img[style*="border-radius"]',
            'img[style*="width"]', // Profile images usually have width/height styles
            'button img', // Sometimes profile image is in a button
            'a img' // Sometimes in a link
          ]
          
          // Also try to find image in parent elements
          let searchElement = element
          for (let depth = 0; depth < 3; depth++) {
            for (const selector of imageSelectors) {
              const imgElement = searchElement.querySelector(selector)
              if (imgElement) {
                // Try multiple attributes
                profileImage = imgElement.getAttribute('data-photo-url') || 
                             imgElement.getAttribute('data-src') ||
                             imgElement.getAttribute('src') ||
                             imgElement.getAttribute('srcset')?.split(' ')[0]
                
                // Clean up the URL
                if (profileImage) {
                  // Remove query parameters that might limit size
                  const urlObj = new URL(profileImage.startsWith('//') ? 'https:' + profileImage : profileImage)
                  // Try to get a larger size (s128-c is 128px, we want bigger)
                  urlObj.searchParams.delete('sz') // Remove size parameter
                  urlObj.searchParams.set('sz', '128') // Set to 128px (good quality)
                  profileImage = urlObj.toString()
                  
                  // Make sure it's a valid URL
                  if (profileImage.startsWith('http') || profileImage.startsWith('//')) {
                    if (!profileImage.startsWith('http')) {
                      profileImage = 'https:' + profileImage
                    }
                    // Verify it's a Google profile image
                    if (profileImage.includes('googleusercontent') || profileImage.includes('googleapis')) {
                      break
                    } else {
                      profileImage = null
                    }
                  } else {
                    profileImage = null
                  }
                }
              }
              if (profileImage) break
            }
            if (profileImage) break
            // Move up to parent element
            searchElement = searchElement.parentElement
            if (!searchElement) break
          }
          
          extractedReviews.push({
            name: author,
            text: text,
            rating: rating,
            date: date,
            verified: false,
            photo: profileImage
          })
        } catch (error) {
          console.error('Error extracting review:', error)
        }
      })
      
      console.log(`Extracted ${extractedReviews.length} reviews from ${reviewElements.length} elements`)
      return extractedReviews
    }, MAX_REVIEWS * 2) // Get more to account for duplicates
    
    console.log(`📊 Found ${reviews.length} raw reviews before deduplication`)
    
    // Deduplicate reviews (same name + same text start)
    const seenReviews = new Set()
    const uniqueReviews = []
    
    for (const review of reviews) {
      // Create a unique key from name and first 50 chars of text
      const reviewKey = `${review.name.toLowerCase()}_${review.text.substring(0, 50).toLowerCase().replace(/\s+/g, ' ')}`
      
      if (!seenReviews.has(reviewKey)) {
        seenReviews.add(reviewKey)
        uniqueReviews.push(review)
        
        // Stop when we have enough unique reviews
        if (uniqueReviews.length >= MAX_REVIEWS) break
      }
    }
    
    const finalReviews = uniqueReviews.slice(0, MAX_REVIEWS)
    
    if (reviews.length === 0) {
      console.warn('⚠️  No reviews found. This might be because:')
      console.warn('   1. The page structure has changed')
      console.warn('   2. Reviews are loaded dynamically and need more time')
      console.warn('   3. The URL format is incorrect')
      console.warn('   4. Google is blocking automated access')
      console.warn('')
      console.warn('💡 Try:')
      console.warn('   - Check the debug screenshot in public/debug-screenshot.png')
      console.warn('   - Manually verify the URL has reviews visible')
      console.warn('   - Try using SerpAPI instead (see fetch-google-reviews.js)')
      console.warn('   - Consider using Google My Business API (official method)')
      
      // Log page content for debugging
      const pageContent = await page.evaluate(() => {
        return {
          title: document.title,
          url: window.location.href,
          hasReviewElements: document.querySelectorAll('[data-review-id], .MyEned, .jftiEf').length,
          bodyText: document.body.textContent.substring(0, 500)
        }
      })
      console.log('📄 Page info:', pageContent)
    }
    
    // Format and save reviews
    const outputData = {
      reviews: finalReviews,
      lastUpdated: new Date().toISOString(),
      totalReviews: finalReviews.length,
      source: 'google-business-profile'
    }
    
    const outputDir = path.dirname(OUTPUT_FILE)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputData, null, 2))
    
    console.log(`✅ Successfully fetched ${finalReviews.length} unique reviews (filtered from ${reviews.length} total)`)
    console.log(`📁 Saved to: ${OUTPUT_FILE}`)
    
    return finalReviews
    
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message)
    console.error('')
    console.error('💡 Troubleshooting:')
    console.error('   1. Make sure Puppeteer is installed: npm install puppeteer')
    console.error('   2. Check your Google Business URL is correct')
    console.error('   3. Try using SerpAPI (see fetch-google-reviews.js)')
    console.error('   4. Consider using Google My Business API (official method)')
    
    return []
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

// Run the script
fetchGoogleReviewsWithPuppeteer()
  .then(() => {
    console.log('✨ Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Fatal error:', error)
    process.exit(1)
  })


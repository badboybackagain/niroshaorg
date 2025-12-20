'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { portfolioCategories } from '../data/portfolioData'

const PortfolioPage = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const [categoryImages, setCategoryImages] = useState({})

  // Safety check for portfolioCategories
  if (!portfolioCategories || !Array.isArray(portfolioCategories) || portfolioCategories.length === 0) {
    console.error('portfolioCategories is not available or empty')
    return (
      <div className="portfolio-main-page">
        <section className="portfolio-main-hero">
          <div className="container">
            <div className="portfolio-main-hero-content">
              <h1 className="portfolio-main-title">Portfolio</h1>
              <p className="portfolio-main-subtitle">Portfolio data is not available.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Load images for each category
  useEffect(() => {
    const loadCategoryImages = async () => {
      const imagesMap = {}
      
      for (const category of portfolioCategories) {
        try {
          const res = await fetch(`/cache/portfolio/${category.slug}/manifest.json`)
          if (res.ok) {
            const data = await res.json()
            const images = data.images || data.logos || []
            // Sort numerically if possible
            const sorted = images.sort((a, b) => {
              const numA = parseInt(a.match(/\d+/)?.[0] || '0')
              const numB = parseInt(b.match(/\d+/)?.[0] || '0')
              if (numA && numB) return numA - numB
              return a.localeCompare(b)
            })
            // Get first 6 images for slideshow
            imagesMap[category.slug] = sorted.slice(0, 6)
          } else {
            console.warn(`Manifest not found for category: ${category.slug}`)
            imagesMap[category.slug] = []
          }
        } catch (err) {
          console.error(`Error loading images for ${category.slug}:`, err)
          imagesMap[category.slug] = []
        }
      }
      
      setCategoryImages(imagesMap)
    }

    loadCategoryImages()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Ensure content is visible initially (fallback if GSAP fails)
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.portfolio-category-card')
      items.forEach(item => {
        item.style.opacity = '1'
        item.style.visibility = 'visible'
      })
    }

    // Dynamically import GSAP to avoid SSR issues
    let ctx = null
    const initAnimations = async () => {
      try {
        const { gsap, ScrollTrigger } = await import('@/utils/gsapConfig')
        
        ctx = gsap.context(() => {
          // Title animation
          if (titleRef.current) {
            gsap.from(titleRef.current, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: 'power2.out',
              immediateRender: false
            })
          }

          // Grid items animation - wait for images to load
          if (gridRef.current) {
            const items = gridRef.current.querySelectorAll('.portfolio-category-card')
            if (items.length > 0) {
              // Set initial state
              gsap.set(items, { opacity: 0, y: 40 })
              
              // Animate in
              gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: gridRef.current,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true // Only animate once
                }
              })
            }
          }
        }, sectionRef)
      } catch (error) {
        console.warn('GSAP animation failed:', error)
        // Ensure content is visible even if GSAP fails
        if (gridRef.current) {
          const items = gridRef.current.querySelectorAll('.portfolio-category-card')
          items.forEach(item => {
            item.style.opacity = '1'
            item.style.visibility = 'visible'
            item.style.transform = 'none'
          })
        }
      }
    }

    initAnimations()

    return () => {
      if (ctx) ctx.revert()
    }
  }, [categoryImages]) // Re-run when images load

  return (
    <div className="portfolio-main-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="portfolio-main-hero">
        <div className="container">
          <div className="portfolio-main-hero-content">
            <h1 ref={titleRef} className="portfolio-main-title">
              We Make Shape<br />
              <span className="portfolio-main-title-accent">Digital Beautiful</span>
            </h1>
            <p className="portfolio-main-subtitle">
              Explore our portfolio of creative designs across various categories
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="portfolio-categories-section">
        <div className="container">
          {portfolioCategories && portfolioCategories.length > 0 ? (
            <div className="portfolio-categories-grid" ref={gridRef}>
              {portfolioCategories.map((category) => {
                const images = categoryImages[category.slug] || []
                const hasImages = images.length > 0
                
                return (
                  <Link
                    key={category.slug}
                    href={`/portfolio/${category.slug}`}
                    className="portfolio-category-card"
                    suppressHydrationWarning
                  >
                    <div className="portfolio-category-image">
                      {hasImages ? (
                        <div className="portfolio-category-slideshow">
                          {images.map((imageName, index) => (
                            <picture key={imageName} className={`portfolio-category-slide ${index === 0 ? 'active' : ''}`}>
                              <source
                                srcSet={`/cache/portfolio/${category.slug}/${imageName}-thumbnail.webp 1x, /cache/portfolio/${category.slug}/${imageName}-thumbnail@2x.webp 2x`}
                                type="image/webp"
                              />
                              <img
                                src={`/cache/portfolio/${category.slug}/${imageName}-thumbnail.png`}
                                srcSet={`/cache/portfolio/${category.slug}/${imageName}-thumbnail.png 1x, /cache/portfolio/${category.slug}/${imageName}-thumbnail@2x.png 2x`}
                                alt={`${category.title} - ${imageName}`}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                decoding="async"
                              />
                            </picture>
                          ))}
                        </div>
                      ) : (
                        <div className="portfolio-category-placeholder">
                          <span className="portfolio-category-icon">{category.icon}</span>
                        </div>
                      )}
                    </div>
                    <div className="portfolio-category-content">
                      <h3 className="portfolio-category-title">{category.title}</h3>
                      <p className="portfolio-category-description">{category.description}</p>
                    </div>
                    <div className="portfolio-category-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <p>No portfolio categories available.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { portfolioCategories } from '../data/portfolioData'
import { gsap, ScrollTrigger } from '@/utils/gsapConfig'

const PortfolioCategoryPage = ({ categorySlug, categoryTitle }) => {
  const router = useRouter()
  const [imageList, setImageList] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  // Prevent body scroll when lightbox is open (proper modal approach)
  useEffect(() => {
    if (lightboxOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      // Add classes to body and html
      document.body.classList.add('lightbox-open')
      document.documentElement.classList.add('lightbox-open')
      // Preserve scroll position
      document.body.style.top = `-${scrollY}px`
    } else {
      // Remove classes
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      // Cleanup on unmount
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      document.body.style.top = ''
    }
  }, [lightboxOpen])

  // Load images for this category
  useEffect(() => {
    fetch(`/cache/portfolio/${categorySlug}/manifest.json`)
      .then(res => {
        if (!res.ok) {
          // Manifest not found - images haven't been processed yet
          // This is expected if images haven't been processed
          return null
        }
        return res.json()
      })
      .then(data => {
        if (!data) {
          // No manifest found - set empty list
          setImageList([])
          return
        }
        // Handle both 'images' and 'logos' keys for backward compatibility
        const images = data.images || data.logos || []
        // Sort numerically if possible, otherwise alphabetically
        const sorted = images.sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || '0')
          const numB = parseInt(b.match(/\d+/)?.[0] || '0')
          if (numA && numB) return numA - numB
          return a.localeCompare(b)
        })
        setImageList(sorted)
      })
      .catch(() => {
        // Silently handle errors - manifest might not exist yet
        setImageList([])
      })
  }, [categorySlug])

  // GSAP animations
  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.portfolio-item')
        gsap.from(items, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [imageList])

  const openLightbox = (imageName) => {
    setSelectedImage(imageName)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = ''
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = imageList.findIndex(img => img === selectedImage)
    const newIndex = (currentIndex + direction + imageList.length) % imageList.length
    setSelectedImage(imageList[newIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowLeft' && lightboxOpen) {
      navigateImage(-1)
    } else if (e.key === 'ArrowRight' && lightboxOpen) {
      navigateImage(1)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, selectedImage])

  const handleContactClick = () => {
    router.push('/contact?service=Branding%20%26%20Design')
  }

  return (
    <div className="portfolio-category-page" ref={sectionRef}>
      {/* Header */}
      <section className="portfolio-category-header">
        <div className="container">
          <Link href="/portfolio" className="portfolio-back-link" suppressHydrationWarning>
            <FiChevronLeft />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="portfolio-category-title">{categoryTitle}</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="portfolio-category-gallery">
        <div className="container">
          {imageList.length > 0 ? (
            <div className="portfolio-grid" ref={gridRef}>
              {imageList.map((imageName, index) => (
              <div
                key={imageName}
                className="portfolio-item"
                onClick={() => openLightbox(imageName)}
              >
                <div className="portfolio-item-image">
                  <picture>
                    <source
                      srcSet={`/cache/portfolio/${categorySlug}/${imageName}-thumbnail.webp 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.webp 2x`}
                      type="image/webp"
                    />
                    <img
                      src={`/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png`}
                      srcSet={`/cache/portfolio/${categorySlug}/${imageName}-thumbnail.png 1x, /cache/portfolio/${categorySlug}/${imageName}-thumbnail@2x.png 2x`}
                      alt={`${categoryTitle} - ${imageName.replace(/[-_]/g, ' ')}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="portfolio-item-overlay">
                    <span className="portfolio-item-view">View</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="portfolio-empty-state">
              <p>Images are being processed. Please run:</p>
              <code>npm run process-images:portfolio-{categorySlug}</code>
            </div>
          )}
        </div>
      </section>

      {/* CTA Bar */}
      <div className="portfolio-category-cta">
        <div className="container">
          <div className="portfolio-category-cta-content">
            <div className="portfolio-category-cta-text">
              <h3>Ready to Get Your Design?</h3>
              <p>Let's create something amazing together</p>
            </div>
            <button 
              className="portfolio-category-cta-button"
              onClick={handleContactClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div className="portfolio-lightbox" onClick={closeLightbox}>
          <button className="portfolio-lightbox-close" onClick={closeLightbox}>
            <FiX />
          </button>
          {imageList.length > 1 && (
            <button 
              className="portfolio-lightbox-nav portfolio-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(-1)
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
          )}
          <div className="portfolio-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <picture>
              <source
                srcSet={`/cache/portfolio/${categorySlug}/${selectedImage}-large.webp 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.webp 2x`}
                type="image/webp"
              />
              <img
                src={`/cache/portfolio/${categorySlug}/${selectedImage}-large.png`}
                srcSet={`/cache/portfolio/${categorySlug}/${selectedImage}-large.png 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.png 2x`}
                alt={`${categoryTitle} - ${selectedImage.replace(/[-_]/g, ' ')}`}
              />
            </picture>
            {imageList.length > 1 && (
              <div className="portfolio-lightbox-info">
                <span className="portfolio-lightbox-counter">
                  {imageList.findIndex(img => img === selectedImage) + 1} / {imageList.length}
                </span>
              </div>
            )}
          </div>
          {imageList.length > 1 && (
            <button 
              className="portfolio-lightbox-nav portfolio-lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default PortfolioCategoryPage

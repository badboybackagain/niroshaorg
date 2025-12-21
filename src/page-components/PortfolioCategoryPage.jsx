'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiDownload } from 'react-icons/fi'

const PortfolioCategoryPage = ({ categorySlug, categoryTitle }) => {
  const router = useRouter()
  const [imageList, setImageList] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const lightboxContentRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Load images for this category
  useEffect(() => {
    setIsLoading(true)
    fetch(`/cache/portfolio/${categorySlug}/manifest.json`)
      .then(res => {
        if (!res.ok) return null
        return res.json()
      })
      .then(data => {
        if (!data) {
          setImageList([])
          return
        }
        const images = data.images || data.logos || []
        const sorted = images.sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || '0')
          const numB = parseInt(b.match(/\d+/)?.[0] || '0')
          if (numA && numB) return numA - numB
          return a.localeCompare(b)
        })
        setImageList(sorted)
        setIsLoading(false)
      })
      .catch(() => {
        setImageList([])
        setIsLoading(false)
      })
  }, [categorySlug])

  // Lazy loading with Intersection Observer - loads images when they're about to enter viewport
  useEffect(() => {
    if (typeof window === 'undefined' || !gridRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const item = entry.target.closest('.portfolio-item-modern')
            if (item) {
              const imageName = item.dataset.imageName
              if (imageName && !loadedImages.has(imageName)) {
                setLoadedImages(prev => new Set([...prev, imageName]))
              }
            }
          }
        })
      },
      {
        rootMargin: '100px',
        threshold: 0.01
      }
    )

    const items = gridRef.current.querySelectorAll('.portfolio-item-modern')
    const imageWrappers = Array.from(items).map(item => 
      item.querySelector('.portfolio-item-image-modern')
    ).filter(Boolean)

    imageWrappers.forEach(wrapper => observer.observe(wrapper))

    return () => {
      imageWrappers.forEach(wrapper => observer.unobserve(wrapper))
    }
  }, [imageList, loadedImages])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      const scrollY = window.scrollY
      document.body.classList.add('lightbox-open')
      document.documentElement.classList.add('lightbox-open')
      document.body.style.top = `-${scrollY}px`
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      document.body.style.top = ''
      document.body.style.position = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      document.body.style.top = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [lightboxOpen])

  // Preload next/previous images in lightbox
  const preloadAdjacentImages = useCallback((currentIndex) => {
    if (!imageList.length) return
    const preloadIndexes = [
      (currentIndex - 1 + imageList.length) % imageList.length,
      (currentIndex + 1) % imageList.length
    ]
    
    preloadIndexes.forEach(index => {
      const imageName = imageList[index]
      const img = new Image()
      img.src = `/cache/portfolio/${categorySlug}/${imageName}-large.webp`
    })
  }, [imageList, categorySlug])

  const openLightbox = useCallback((imageName) => {
    setSelectedImage(imageName)
    setLightboxOpen(true)
    const index = imageList.findIndex(img => img === imageName)
    preloadAdjacentImages(index)
  }, [imageList, preloadAdjacentImages])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }, [])

  const navigateImage = useCallback((direction) => {
    if (!selectedImage || !imageList.length) return
    const currentIndex = imageList.findIndex(img => img === selectedImage)
    const newIndex = (currentIndex + direction + imageList.length) % imageList.length
    setSelectedImage(imageList[newIndex])
    preloadAdjacentImages(newIndex)
  }, [selectedImage, imageList, preloadAdjacentImages])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1)
      } else if (e.key === 'ArrowRight') {
        navigateImage(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, navigateImage])

  // Touch gestures for mobile lightbox
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        navigateImage(1) // Swipe left - next
      } else {
        navigateImage(-1) // Swipe right - previous
      }
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  const handleContactClick = () => {
    router.push('/contact?service=Branding%20%26%20Design')
  }

  const currentIndex = useMemo(() => {
    if (!selectedImage) return -1
    return imageList.findIndex(img => img === selectedImage)
  }, [selectedImage, imageList])

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
          <p className="portfolio-category-description">
            Browse through our collection of professional {categoryTitle.toLowerCase()} designs
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="portfolio-category-gallery">
        <div className="container">
          {isLoading ? (
            <div className="portfolio-loading">
              <div className="portfolio-loading-spinner"></div>
              <p>Loading portfolio...</p>
            </div>
          ) : imageList.length > 0 ? (
            <div className="portfolio-grid-modern" ref={gridRef}>
              {imageList.map((imageName, index) => {
                const isLoaded = loadedImages.has(imageName)
                return (
                  <div
                    key={imageName}
                    className="portfolio-item-modern"
                    data-image-name={imageName}
                    onClick={() => openLightbox(imageName)}
                    style={{ animationDelay: `${Math.min(index * 30, 500)}ms` }}
                  >
                    <div className="portfolio-item-image-modern">
                      {isLoaded ? (
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
                            fetchPriority={index < 12 ? 'high' : 'low'}
                          />
                        </picture>
                      ) : (
                        <div className="portfolio-item-placeholder">
                          <FiZoomIn />
                        </div>
                      )}
                      <div className="portfolio-item-overlay-modern">
                        <div className="portfolio-item-overlay-content">
                          <FiZoomIn className="portfolio-item-icon" />
                          <span className="portfolio-item-view-text">View Full Size</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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

      {/* Enhanced Lightbox - Render via Portal to ensure it's above everything */}
      {lightboxOpen && selectedImage && typeof window !== 'undefined' && createPortal(
        <div 
          className="portfolio-lightbox-modern" 
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            className="portfolio-lightbox-close-modern" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FiX />
          </button>
          
          {imageList.length > 1 && (
            <>
              <button 
                className="portfolio-lightbox-nav-modern portfolio-lightbox-prev-modern"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(-1)
                }}
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button 
                className="portfolio-lightbox-nav-modern portfolio-lightbox-next-modern"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage(1)
                }}
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </>
          )}

          <div 
            className="portfolio-lightbox-content-modern" 
            onClick={(e) => e.stopPropagation()}
            ref={lightboxContentRef}
          >
            <div className="portfolio-lightbox-image-wrapper">
              <picture>
                <source
                  srcSet={`/cache/portfolio/${categorySlug}/${selectedImage}-large.webp 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.webp 2x`}
                  type="image/webp"
                />
                <img
                  src={`/cache/portfolio/${categorySlug}/${selectedImage}-large.png`}
                  srcSet={`/cache/portfolio/${categorySlug}/${selectedImage}-large.png 1x, /cache/portfolio/${categorySlug}/${selectedImage}-large@2x.png 2x`}
                  alt={`${categoryTitle} - ${selectedImage.replace(/[-_]/g, ' ')}`}
                  loading="eager"
                  decoding="sync"
                />
              </picture>
            </div>

            {imageList.length > 1 && (
              <div className="portfolio-lightbox-footer-modern">
                <div className="portfolio-lightbox-counter-modern">
                  <span>{currentIndex + 1}</span>
                  <span className="portfolio-lightbox-counter-separator">/</span>
                  <span>{imageList.length}</span>
                </div>
                <div className="portfolio-lightbox-title-modern">
                  {selectedImage.replace(/[-_]/g, ' ')}
                </div>
                <a
                  href={`/cache/portfolio/${categorySlug}/${selectedImage}-large.webp`}
                  download={`${selectedImage}.webp`}
                  className="portfolio-lightbox-download"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Download image"
                >
                  <FiDownload />
                </a>
              </div>
            )}
          </div>

          {/* Thumbnail strip - show for all galleries with more than 1 image */}
          {imageList.length > 1 && (
            <div className="portfolio-lightbox-thumbnails">
              {imageList.map((img, idx) => (
                <button
                  key={img}
                  className={`portfolio-lightbox-thumbnail ${selectedImage === img ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(img)
                    preloadAdjacentImages(idx)
                  }}
                >
                  <picture>
                    <source
                      srcSet={`/cache/portfolio/${categorySlug}/${img}-thumbnail.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/cache/portfolio/${categorySlug}/${img}-thumbnail.png`}
                      alt={`Thumbnail ${idx + 1}`}
                      loading="lazy"
                    />
                  </picture>
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  )
}

export default PortfolioCategoryPage

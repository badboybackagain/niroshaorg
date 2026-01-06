'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { FiChevronLeft, FiX, FiChevronRight } from 'react-icons/fi'
import LaptopMockup from '@/components/LaptopMockup'

const ITEMS_PER_PAGE = 9

const WebsitesPage = ({ websites }) => {
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // Animation for elements appearing
    const container = containerRef.current
    if (container) {
      container.style.opacity = '0'
      container.style.transform = 'translateY(20px)'

      // Reset animation
      requestAnimationFrame(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        container.style.opacity = '1'
        container.style.transform = 'translateY(0)'
      })
    }
  }, [currentPage]) // Re-run animation on page change

  // Prevent body scroll when lightbox is open - Robust implementation matching PortfolioCategoryPage
  useEffect(() => {
    if (selectedImage) {
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
  }, [selectedImage])

  // Pagination Logic
  const totalItems = websites?.length || 0
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const visibleWebsites = websites ? websites.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ) : []

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      // Scroll to top of grid
      const gridSection = document.querySelector('.portfolio-grid-section')
      if (gridSection) {
        const yOffset = -100 // Offset for header/nav
        const y = gridSection.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="portfolio-websites-page">
      {/* Header */}
      <section className="portfolio-category-header">
        <div className="container">
          <Link href="/portfolio" className="portfolio-back-link" suppressHydrationWarning>
            <FiChevronLeft />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="portfolio-category-title">Website Designs</h1>
          <p className="portfolio-category-description">
            Browse through our collection of professional website designs
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="portfolio-grid-section">
        <div className="container" ref={containerRef}>
          {visibleWebsites.length > 0 ? (
            <>
              <div className="websites-grid">
                {visibleWebsites.map((site) => (
                  <div
                    key={site.id}
                    className="website-item"
                    onClick={() => setSelectedImage(site.full || site.image)}
                    style={{ cursor: 'pointer' }}
                  >
                    <LaptopMockup
                      imageSrc={site.thumbnail || site.image}
                      alt="Website Design Mockup"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="website-hover-hint">Click to view full screen</div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pagination-container">
                  <button
                    className="pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-label="Previous page"
                  >
                    <FiChevronLeft />
                  </button>

                  <div className="pagination-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`Page ${pageNum}`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    className="pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-label="Next page"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <p>No website designs found in the portfolio directory.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox via Portal with Global Styles */}
      {selectedImage && typeof window !== 'undefined' && createPortal(
        <div
          className="portfolio-lightbox-modern"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="portfolio-lightbox-close-modern"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <FiX />
          </button>

          <div
            className="portfolio-lightbox-content-modern"
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '1400px', background: 'transparent', boxShadow: 'none' }}
          >
            <div style={{ width: '100%', padding: '2rem' }}>
              <LaptopMockup
                imageSrc={selectedImage}
                alt="Full Screen Design"
                sizes="90vw"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx>{`
        .websites-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding: 4rem 0 2rem 0;
        }
        .website-item {
          transition: transform 0.3s ease;
          position: relative;
        }
        .website-item:hover {
          transform: translateY(-10px);
        }
        .website-hover-hint {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .website-item:hover .website-hover-hint {
          opacity: 1;
        }

        /* Pagination Styles */
        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin: 3rem 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .pagination-btn, .pagination-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e5e5e5;
          background: white;
          color: var(--text-dark);
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1rem;
        }
        .pagination-btn:hover:not(:disabled), .pagination-number:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
        }
        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          border-color: #eee;
        }
        .pagination-number.active {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
        }
        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
        }

        @media (max-width: 1024px) {
          .websites-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .websites-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .pagination-container {
            gap: 0.5rem;
          }
          .pagination-btn, .pagination-number {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}

export default WebsitesPage

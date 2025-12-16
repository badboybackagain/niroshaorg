import React, { useState, useEffect, useRef } from 'react'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useGoogleReviews } from '../hooks/useGoogleReviews'

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const textRef = useRef(null)

  // Handle both Google reviews format and legacy format
  const authorName = testimonial.name || testimonial.author || 'Anonymous'
  const reviewText = testimonial.text || testimonial.snippet || ''
  const rating = testimonial.rating || 5
  const role = testimonial.role || ''
  const company = testimonial.company || ''
  const profileImage = testimonial.photo || testimonial.profileImage || null
  const date = testimonial.date || null

  // Character limit for truncated text (adjust based on your design)
  const MAX_LENGTH = 200

  // Check if text needs truncation
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current
      // Check if text overflows (is longer than max length)
      if (reviewText.length > MAX_LENGTH) {
        setShowReadMore(true)
      } else {
        setShowReadMore(false)
      }
    }
  }, [reviewText])

  // Get truncated text
  const getDisplayText = () => {
    if (isExpanded || !showReadMore) {
      return reviewText
    }
    // Truncate at word boundary near MAX_LENGTH
    if (reviewText.length > MAX_LENGTH) {
      const truncated = reviewText.substring(0, MAX_LENGTH)
      const lastSpace = truncated.lastIndexOf(' ')
      return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated
    }
    return reviewText
  }

  const toggleExpand = (e) => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <div 
      ref={ref}
      key={index}
      className={`testimonial-card ${isVisible ? 'animate-fadeInUp' : ''} ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Stars at the top */}
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`star ${i < rating ? 'filled' : ''}`} 
          />
        ))}
      </div>
      
      {/* Review text in the middle */}
      <div className="testimonial-text-wrapper">
        <p ref={textRef} className={`testimonial-text ${!isExpanded && showReadMore ? 'truncated' : ''}`}>
          "{getDisplayText()}{!isExpanded && showReadMore && '...'}"
        </p>
        {showReadMore && (
          <button 
            className="read-more-link"
            onClick={toggleExpand}
            aria-label={isExpanded ? 'Read less' : 'Read more'}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Reviewer info at the bottom */}
      <div className="testimonial-author-info">
        {profileImage ? (
          <img 
            src={profileImage} 
            alt={authorName}
            className="testimonial-profile-image"
            onError={(e) => {
              // Hide image if it fails to load
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="testimonial-profile-placeholder">
            {authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="testimonial-author-details">
          <div className="author-name">{authorName}</div>
          {(role || company) && (
            <div className="author-role">
              {role && company ? `${role}, ${company}` : (role || company)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const { reviews, loading, error } = useGoogleReviews()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reviewsPerView, setReviewsPerView] = useState(3)
  const [isPaused, setIsPaused] = useState(false)

  // Fallback testimonials if reviews aren't loaded or available
  const fallbackTestimonials = [
    {
      name: 'Client Name',
      role: 'Business Owner',
      company: 'Company Name',
      text: 'Team Nirosha transformed our digital presence. Their support is exceptional and the results speak for themselves.',
      rating: 5
    },
    {
      name: 'Client Name',
      role: 'School Principal',
      company: 'Educational Institution',
      text: 'The online admission system they built has streamlined our entire process. Highly professional and reliable.',
      rating: 5
    },
    {
      name: 'Client Name',
      role: 'CEO',
      company: 'Startup Company',
      text: 'They understand business needs and deliver solutions that actually work. Best technology partner we\'ve worked with.',
      rating: 5
    }
  ]

  // Filter out malformed reviews and use Google reviews if available
  const allTestimonials = (reviews && reviews.length > 0) ? reviews : fallbackTestimonials
  
  // Filter out malformed reviews (metadata patterns)
  const validTestimonials = allTestimonials.filter(testimonial => {
    const text = testimonial.text || ''
    // Filter out metadata patterns
    const metadataPatterns = [
      /\d+\s*review(s)?\s*·?\s*\d+\s*photo(s)?/i,
      /^\w+\s+\d+\s*review(s)?$/i,
      /^\w+\s+\w+\s+\d+\s*review(s)?/i,
      /^\d+\s*review(s)?$/i,
      /^\d+\s*photo(s)?$/i
    ]
    return !metadataPatterns.some(pattern => pattern.test(text)) && text.length > 20
  })

  // Deduplicate reviews
  const seenReviews = new Set()
  const uniqueTestimonials = validTestimonials.filter(testimonial => {
    const key = `${testimonial.name?.toLowerCase()}_${testimonial.text?.substring(0, 50).toLowerCase().replace(/\s+/g, ' ')}`
    if (seenReviews.has(key)) return false
    seenReviews.add(key)
    return true
  })

  const testimonials = uniqueTestimonials.length > 0 ? uniqueTestimonials : fallbackTestimonials
  const totalSlides = Math.ceil(testimonials.length / reviewsPerView)

  // Handle responsive reviews per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerView(1)
      } else if (window.innerWidth < 1024) {
        setReviewsPerView(2)
      } else {
        setReviewsPerView(3)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play carousel (pauses on hover)
  useEffect(() => {
    if (testimonials.length <= reviewsPerView || isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, reviewsPerView, totalSlides, isPaused])

  // Handle mouse hover to pause/resume carousel
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getVisibleReviews = () => {
    const start = currentIndex * reviewsPerView
    return testimonials.slice(start, start + reviewsPerView)
  }

  const totalReviewsCount = testimonials.length

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <p className="testimonials-count-text">
            {totalReviewsCount} {totalReviewsCount === 1 ? 'person has' : 'people have'} said how good Team Nirosha
          </p>
          <h2 
            ref={titleRef}
            className={`testimonials-main-title ${titleVisible ? 'animate-fadeInUp' : ''}`}
          >
            Our happy clients say about us
          </h2>
        </div>
        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
            <p>Loading reviews...</p>
          </div>
        )}
        {error && !loading && (
          <div style={{ textAlign: 'center', padding: '1rem', color: '#6b7280' }}>
            <p>Showing sample testimonials</p>
          </div>
        )}
        
        {testimonials.length > 0 && (
          <div 
            className="testimonials-carousel-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="testimonials-carousel">
              <div 
                className="testimonials-carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="testimonials-carousel-slide">
                    <div className="testimonials-grid">
                      {testimonials
                        .slice(slideIndex * reviewsPerView, (slideIndex + 1) * reviewsPerView)
                        .map((testimonial, index) => (
                          <TestimonialCard 
                            key={`${slideIndex}-${index}`} 
                            testimonial={testimonial} 
                            index={index} 
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {totalSlides > 1 && (
              <>
                <button 
                  className="carousel-button carousel-button-prev"
                  onClick={prevSlide}
                  aria-label="Previous reviews"
                >
                  <FiChevronLeft />
                </button>
                <button 
                  className="carousel-button carousel-button-next"
                  onClick={nextSlide}
                  aria-label="Next reviews"
                >
                  <FiChevronRight />
                </button>
                
                <div className="carousel-dots">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        {/* View all reviews link */}
        {testimonials.length > 0 && (
          <div className="testimonials-footer">
            <a href="#reviews" className="view-all-reviews-link">
              Check all {totalReviewsCount} {totalReviewsCount === 1 ? 'review' : 'reviews'}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials


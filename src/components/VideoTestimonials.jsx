'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'

const VideoTestimonials = () => {
  const playlistId = 'PLLF_YchGgxwbM5YAkkk2F9fPWM0NtqJID'
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const videoRefs = useRef({})
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Fetch playlist videos from API route
  useEffect(() => {
    if (typeof window === 'undefined') return

    const fetchVideos = async () => {
      try {
        const response = await fetch(`/api/youtube-playlist?playlistId=${playlistId}`)
        const data = await response.json()
        
        if (data.error) {
          setErrorMessage(`API Error: ${data.error}`)
          // Still try fallback
          loadVideosWithIframeAPI()
        } else if (data.videos && data.videos.length > 0) {
          setVideos(data.videos)
          setLoading(false)
          setErrorMessage(null)
        } else {
          setErrorMessage('No videos found. Trying fallback method...')
          // Fallback: Try using YouTube iframe API
          loadVideosWithIframeAPI()
        }
      } catch (error) {
        setErrorMessage(`Error: ${error.message}. Trying fallback...`)
        // Fallback: Try using YouTube iframe API
        loadVideosWithIframeAPI()
      }
    }

    const loadVideosWithIframeAPI = () => {
      // Load YouTube iframe API
      if (!window.YT) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        window.onYouTubeIframeAPIReady = () => {
          loadPlaylistVideos()
        }
      } else {
        loadPlaylistVideos()
      }

      function loadPlaylistVideos() {
        // Create a temporary player to get playlist items
        const tempPlayer = new window.YT.Player('temp-player', {
          height: '0',
          width: '0',
          playerVars: {
            listType: 'playlist',
            list: playlistId,
          },
          events: {
            onReady: (event) => {
              try {
                const playlist = event.target.getPlaylist()
                if (playlist && playlist.length > 0) {
                  const videoData = playlist.map((videoId) => ({
                    id: videoId,
                    title: `Video ${videoId}`,
                    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                    embedUrl: `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`,
                  }))
                  setVideos(videoData)
                  setLoading(false)
                } else {
                  setLoading(false)
                }
                // Clean up temp player
                setTimeout(() => {
                  const tempEl = document.getElementById('temp-player')
                  if (tempEl) tempEl.remove()
                }, 1000)
              } catch (e) {
                setLoading(false)
              }
            },
            onError: () => {
              setLoading(false)
            },
          },
        })
      }
    }

    fetchVideos()
  }, [playlistId])

  // Carousel navigation
  const scrollCarousel = useCallback((direction) => {
    if (!carouselRef.current) return
    const scrollAmount = carouselRef.current.offsetWidth * 0.8
    const newScrollLeft = carouselRef.current.scrollLeft + (direction * scrollAmount)
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    })
  }, [])

  // Open lightbox
  const openLightbox = useCallback((video, index) => {
    setSelectedVideo(video)
    setCurrentIndex(index)
    setLightboxOpen(true)
    
    // Prevent body scroll
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.classList.add('lightbox-open')
    document.documentElement.classList.add('lightbox-open')
  }, [])

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    
    // Restore body scroll
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.classList.remove('lightbox-open')
    document.documentElement.classList.remove('lightbox-open')
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    
    setTimeout(() => setSelectedVideo(null), 300)
  }, [])

  // Navigate videos in lightbox
  const navigateVideo = useCallback((direction) => {
    if (videos.length === 0) return
    const newIndex = (currentIndex + direction + videos.length) % videos.length
    setCurrentIndex(newIndex)
    setSelectedVideo(videos[newIndex])
  }, [currentIndex, videos])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateVideo(-1)
      } else if (e.key === 'ArrowRight') {
        navigateVideo(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, navigateVideo])

  // Touch gestures for carousel
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
        scrollCarousel(1) // Swipe left - scroll right
      } else {
        scrollCarousel(-1) // Swipe right - scroll left
      }
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Handle video hover - show preview thumbnail
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  if (loading) {
    return (
      <section className="section video-testimonials">
        <div className="container">
          <div className="video-testimonials-header">
            <h2 className="video-testimonials-title animate-fadeInUp">
              Success Stories in Motion: Watch Our Client Video Testimonials
            </h2>
            <p className="video-testimonials-subtitle animate-fadeInUp">
              Hear directly from businesses that have transformed their digital presence with Team Nirosha. Real clients, real results, real success stories.
            </p>
          </div>
          <div className="video-testimonials-loading">
            <div className="video-testimonials-spinner"></div>
            <p>Loading videos...</p>
            {errorMessage && (
              <p style={{ marginTop: '1rem', color: '#ef4444', fontSize: '0.9rem' }}>
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (videos.length === 0) {
    return (
      <section className="section video-testimonials">
        <div className="container">
          <div className="video-testimonials-header">
            <h2 className="video-testimonials-title animate-fadeInUp">
              Success Stories in Motion: Watch Our Client Video Testimonials
            </h2>
            <p className="video-testimonials-subtitle animate-fadeInUp">
              Hear directly from businesses that have transformed their digital presence with Team Nirosha. Real clients, real results, real success stories.
            </p>
          </div>
          <div className="video-testimonials-error">
            <p>Unable to load videos at this time.</p>
            {errorMessage && (
              <p style={{ marginTop: '0.5rem', color: '#ef4444', fontSize: '0.9rem' }}>
                {errorMessage}
              </p>
            )}
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Please make sure:
              <br />1. The dev server has been restarted after adding the API key
              <br />2. The YouTube API key is valid and has the YouTube Data API v3 enabled
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="section video-testimonials">
        <div className="container">
          <div className="video-testimonials-header">
            <h2 className="video-testimonials-title animate-fadeInUp">
              Success Stories in Motion: Watch Our Client Video Testimonials
            </h2>
            <p className="video-testimonials-subtitle animate-fadeInUp">
              Hear directly from businesses that have transformed their digital presence with Team Nirosha. Real clients, real results, real success stories.
            </p>
          </div>
          
          <div className="video-testimonials-carousel-wrapper">
            <button
              className="video-carousel-nav video-carousel-nav-prev"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous videos"
            >
              <FiChevronLeft />
            </button>
            
            <div
              className="video-testimonials-carousel"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="video-testimonial-item"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="video-testimonial-thumbnail">
                    {hoveredVideo === video.id ? (
                      <iframe
                        ref={(el) => {
                          if (el) videoRefs.current[video.id] = el
                        }}
                        src={`${video.embedUrl}&autoplay=1&controls=0&mute=1&loop=1&playlist=${video.id}&start=0`}
                        title={`Video Testimonial ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={video.thumbnail}
                        alt={`Video Testimonial ${index + 1}`}
                        loading="lazy"
                      />
                    )}
                    <div className="video-testimonial-overlay">
                      <button
                        className="video-testimonial-play-btn"
                        onClick={() => openLightbox(video, index)}
                        aria-label="Play video"
                      >
                        <FiPlay />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="video-carousel-nav video-carousel-nav-next"
              onClick={() => scrollCarousel(1)}
              aria-label="Next videos"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedVideo && typeof window !== 'undefined' && createPortal(
        <div className="video-lightbox" onClick={closeLightbox}>
          <button
            className="video-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close video"
          >
            <FiX />
          </button>
          
          <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {videos.length > 1 && (
              <>
                <button
                  className="video-lightbox-nav video-lightbox-nav-prev"
                  onClick={() => navigateVideo(-1)}
                  aria-label="Previous video"
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="video-lightbox-nav video-lightbox-nav-next"
                  onClick={() => navigateVideo(1)}
                  aria-label="Next video"
                >
                  <FiChevronRight />
                </button>
              </>
            )}
            
            <div className="video-lightbox-player">
              <iframe
                src={`${selectedVideo.embedUrl}&autoplay=1&controls=1&rel=0`}
                title={selectedVideo.id}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            {videos.length > 1 && (
              <div className="video-lightbox-counter">
                {currentIndex + 1} / {videos.length}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Hidden temp player for API */}
      <div id="temp-player" style={{ display: 'none' }}></div>
    </>
  )
}

export default VideoTestimonials

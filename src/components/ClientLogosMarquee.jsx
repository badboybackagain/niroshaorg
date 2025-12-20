'use client'

import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ClientLogosMarquee = () => {
  const [logos, setLogos] = useState([])
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // Fetch the list of available logos from manifest
    const loadLogos = async () => {
      try {
        const response = await fetch('/cache/client-logos/manifest.json')
        if (response.ok) {
          const manifest = await response.json()
          const logosList = manifest.logos || []
          
          // Shuffle logos in random order
          const shuffledLogos = [...logosList].sort(() => Math.random() - 0.5)
          setLogos(shuffledLogos)
        } else {
          console.warn('Client logos manifest not found. Run: npm run process-images:client-logos')
        }
      } catch (error) {
        console.error('Error loading client logos:', error)
      }
    }

    loadLogos()
  }, [])

  useEffect(() => {
    if (logos.length === 0 || !trackRef.current) return

    const track = trackRef.current
    const container = containerRef.current

    // Wait for layout to stabilize
    const startAnimation = () => {
      // Get the actual width of one set of logos (1/3 of total since we duplicate 3 times)
      const firstSetWidth = track.scrollWidth / 3
      const duration = 50 // seconds for one full cycle (slower speed)

      // Start from negative position (one set width to the left)
      // This allows seamless loop when animating to 0
      gsap.set(track, { x: -firstSetWidth })

      // Create seamless infinite loop using GSAP
      // Animate from left (-firstSetWidth) to right (0)
      // When it reaches 0, it seamlessly loops because we have 3 identical sets
      animationRef.current = gsap.to(track, {
        x: 0,
        duration: duration,
        ease: 'none',
        repeat: -1,
        // Use immediateRender to prevent initial jump
        immediateRender: false
      })
    }

    // Preload images to prevent layout shifts and jerky animation
    const preloadImages = () => {
      const images = track.querySelectorAll('img')
      const imagePromises = Array.from(images).map(img => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve()
            return
          }
          const tempImg = new Image()
          tempImg.onload = resolve
          tempImg.onerror = resolve // Resolve even on error to not block
          tempImg.src = img.src
          if (img.srcset) {
            tempImg.srcset = img.srcset
          }
        })
      })
      return Promise.all(imagePromises)
    }

    // Initialize animation after images are loaded
    const initAnimation = async () => {
      await preloadImages()
      
      // Use double requestAnimationFrame to ensure layout is stable
      // This batches layout reads and avoids forced reflows
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          startAnimation()
        })
      })
    }

    initAnimation()

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause()
      }
    }

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.resume()
      }
    }

    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
        animationRef.current = null
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [logos])

  // If no logos, return null (component won't render)
  if (logos.length === 0) {
    return null
  }

  // Duplicate logos for seamless loop (3 sets for smooth transition)
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="client-logos-marquee-section">
      <div className="client-logos-marquee-header">
        <div className="container">
          <h2 className="client-logos-marquee-title">Trusted by Leading Companies</h2>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="client-logos-marquee-container"
      >
        <div 
          ref={trackRef}
          className="client-logos-marquee-track"
        >
          {duplicatedLogos.map((logoName, index) => (
            <div key={`${logoName}-${index}`} className="client-logo-marquee-item">
              <div className="client-logo-marquee-wrapper">
                <picture>
                  <source
                    srcSet={`/cache/client-logos/${logoName}.webp 1x, /cache/client-logos/${logoName}@2x.webp 2x`}
                    type="image/webp"
                  />
                  <img
                    src={`/cache/client-logos/${logoName}.webp`}
                    srcSet={`/cache/client-logos/${logoName}.webp 1x, /cache/client-logos/${logoName}@2x.webp 2x`}
                    alt={`${logoName.replace(/-/g, ' ')} logo`}
                    className="client-logo-marquee-image"
                    loading="eager"
                    width="120"
                    height="60"
                    sizes="(max-width: 480px) 120px, (max-width: 768px) 150px, 180px"
                    decoding="async"
                    fetchPriority="low"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogosMarquee


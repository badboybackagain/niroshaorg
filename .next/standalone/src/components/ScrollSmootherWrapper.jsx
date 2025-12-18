'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollSmootherWrapper component
 * Initializes GSAP ScrollSmoother for smooth scrolling effects
 * This component doesn't render anything, it just initializes the smoother
 * 
 * Note: ScrollSmoother is a premium GSAP plugin (Club GreenSock membership required)
 * If you don't have access, you'll need to:
 * 1. Sign up for Club GreenSock at https://greensock.com/club/
 * 2. Download ScrollSmoother plugin
 * 3. Place it in your project and import it
 */
const ScrollSmootherWrapper = () => {
  const pathname = usePathname()
  const smootherRef = useRef(null)

  useEffect(() => {
    // Kill existing smoother if it exists
    if (smootherRef.current) {
      smootherRef.current.kill()
      smootherRef.current = null
    }
    if (typeof window !== 'undefined') {
      window.__scrollSmoother = null
    }

    // Dynamically import ScrollSmoother (premium plugin)
    const initSmoother = async () => {
      try {
        // Try to import ScrollSmoother
        const { ScrollSmoother } = await import('gsap/ScrollSmoother')
        
        if (!ScrollSmoother) {
          console.warn('ScrollSmoother plugin not found. Using standard scrolling.')
          return
        }

        // Register the plugin
        gsap.registerPlugin(ScrollSmoother)

        // Check if wrapper and content elements exist
        const wrapper = document.getElementById('smooth-wrapper')
        const content = document.getElementById('smooth-content')

        if (!wrapper || !content) {
          console.warn('ScrollSmoother: smooth-wrapper or smooth-content not found')
          return
        }

        // Create ScrollSmoother instance
        const smoother = ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
          smooth: 1, // Time in seconds to "catch up" to native scroll position
          effects: true, // Enable data-speed and data-lag effects
          smoothTouch: 0.1, // Smooth scrolling on touch devices (optional, shorter duration)
          normalizeScroll: true, // Prevent mobile address bar from hiding/showing
          ignoreMobileResize: true // Prevent jumps on mobile resize
        })

        smootherRef.current = smoother
        
        // Store smoother instance globally for utility functions
        if (typeof window !== 'undefined') {
          window.__scrollSmoother = smoother
        }

        // Refresh ScrollTrigger after smoother is created
        ScrollTrigger.refresh()
        
        console.log('ScrollSmoother initialized successfully')
      } catch (error) {
        console.warn('ScrollSmoother plugin not available:', error.message)
        console.warn('To use ScrollSmoother, you need a GSAP Club GreenSock membership.')
        console.warn('Visit https://greensock.com/club/ to sign up.')
      }
    }

    // Small delay to ensure DOM is ready, then initialize
    const timeoutId = setTimeout(initSmoother, 100)

    return () => {
      clearTimeout(timeoutId)
      if (smootherRef.current) {
        smootherRef.current.kill()
        smootherRef.current = null
      }
      if (typeof window !== 'undefined') {
        window.__scrollSmoother = null
      }
    }
  }, [pathname]) // Re-initialize on route change

  return null
}

export default ScrollSmootherWrapper

/**
 * Smooth scroll utility functions
 * Provides smooth scrolling functionality for anchor links and programmatic scrolling
 * Works with GSAP ScrollSmoother when available
 */

/**
 * Get ScrollSmoother instance if available
 */
const getScrollSmoother = () => {
  if (typeof window !== 'undefined' && window.__scrollSmoother) {
    return window.__scrollSmoother
  }
  return null
}

/**
 * Smoothly scroll to a target element or selector
 * @param {string|HTMLElement} target - CSS selector or DOM element
 * @param {number} offset - Offset from top in pixels (default: 80 for navbar)
 * @param {number} duration - Animation duration in ms (default: 500)
 */
export const smoothScrollTo = (target, offset = 80, duration = 500) => {
  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target
  
  if (!element) {
    console.warn('Smooth scroll target not found:', target)
    return
  }

  // Check if ScrollSmoother is active
  const smoother = getScrollSmoother()
  if (smoother) {
    // Use ScrollSmoother's scrollTo method
    smoother.scrollTo(element, true, `top top-=${offset}`)
    return
  }

  // Fallback to native smooth scroll
  const startPosition = window.pageYOffset
  const elementPosition = element.getBoundingClientRect().top
  const targetPosition = elementPosition + startPosition - offset
  const distance = targetPosition - startPosition
  let startTime = null

  // Use native smooth scroll if available and user prefers motion
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
    return
  }

  // Fallback: Manual animation for browsers that don't support smooth scroll
  const easeInOutCubic = (t) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animateScroll = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    
    window.scrollTo(0, startPosition + distance * ease)
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

/**
 * Smoothly scroll to top of page
 * @param {number} duration - Animation duration in ms (default: 500)
 */
export const scrollToTop = (duration = 500) => {
  // Check if ScrollSmoother is active
  const smoother = getScrollSmoother()
  if (smoother) {
    // Use ScrollSmoother's scrollTo method
    smoother.scrollTo(0, true)
    return
  }
  
  // Fallback to native scroll
  smoothScrollTo(document.body, 0, duration)
}

/**
 * Smoothly scroll to a section by ID
 * @param {string} sectionId - ID of the section to scroll to
 * @param {number} offset - Offset from top in pixels (default: 80)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    smoothScrollTo(element, offset)
  } else {
    console.warn(`Section with ID "${sectionId}" not found`)
  }
}

/**
 * Handle anchor link clicks with smooth scroll
 * @param {Event} e - Click event
 * @param {number} offset - Offset from top in pixels (default: 80)
 */
export const handleAnchorClick = (e, offset = 80) => {
  const href = e.currentTarget.getAttribute('href')
  
  // Check if it's an anchor link (starts with #)
  if (href && href.startsWith('#') && href.length > 1) {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      smoothScrollTo(targetElement, offset)
      
      // Update URL without triggering navigation
      window.history.pushState(null, '', href)
    }
  }
}



import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Smooth scroll utility function
const smoothScrollTo = (target, offset = 0) => {
  const element = typeof target === 'string' 
    ? document.querySelector(target) 
    : target
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        smoothScrollTo(hash, 80) // 80px offset for navbar
      }, 100)
    } else {
      // Otherwise, scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname, hash])

  // Handle anchor link clicks
  useEffect(() => {
    const handleAnchorClick = (e) => {
      // Check if clicked element or its parent is an anchor link
      let anchor = e.target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        
        // Check if it's an anchor link (starts with # and has content)
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault()
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            smoothScrollTo(targetElement, 80) // 80px offset for navbar
            
            // Update URL without triggering navigation
            window.history.pushState(null, '', href)
          }
        }
      }
    }

    // Add click listener to document for event delegation
    document.addEventListener('click', handleAnchorClick)
    
    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}

export default ScrollToTop




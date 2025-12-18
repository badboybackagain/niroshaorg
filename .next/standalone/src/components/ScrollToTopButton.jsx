'use client'

import React, { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { scrollToTop } from '../utils/smoothScroll'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    scrollToTop(500)
  }

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}

export default ScrollToTopButton



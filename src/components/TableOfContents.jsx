'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FiList, FiX } from 'react-icons/fi'

const TableOfContents = ({ content }) => {
  const [tocItems, setTocItems] = useState([])
  const [activeId, setActiveId] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [position, setPosition] = useState({ top: 80, right: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [longPressTimer, setLongPressTimer] = useState(null)
  const bubbleRef = useRef(null)
  const dragStartPos = useRef({ x: 0, y: 0 })
  const bubbleStartPos = useRef({ top: 0, right: 0 })

  useEffect(() => {
    if (!content) return

    // Parse HTML content to extract headings
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const headings = doc.querySelectorAll('h2, h3, h4')
    
    const items = []
    headings.forEach((heading, index) => {
      const id = `heading-${index}-${heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
      
      items.push({
        id,
        text: heading.textContent.trim(),
        level: parseInt(heading.tagName.charAt(1)) // h2 = 2, h3 = 3, h4 = 4
      })
    })

    setTocItems(items)
  }, [content])

  // Load saved position from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem('toc-bubble-position')
    if (savedPosition) {
      try {
        const pos = JSON.parse(savedPosition)
        setPosition(pos)
      } catch (e) {
        console.error('Failed to parse saved TOC position:', e)
      }
    }
  }, [])

  // Save position to localStorage
  useEffect(() => {
    if (position.top !== 80 || position.right !== 20) {
      localStorage.setItem('toc-bubble-position', JSON.stringify(position))
    }
  }, [position])

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer)
      }
    }
  }, [longPressTimer])

  useEffect(() => {
    if (tocItems.length === 0) return

    // Wait for content to be rendered, then set up intersection observer
    const timeoutId = setTimeout(() => {
      // Set up intersection observer for active heading tracking
      const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      }, observerOptions)

      const headingElements = document.querySelectorAll('.blog-detail-content h2, .blog-detail-content h3, .blog-detail-content h4')
      headingElements.forEach((el) => observer.observe(el))

      return () => {
        headingElements.forEach((el) => observer.unobserve(el))
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [tocItems])

  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (element) {
      // Batch layout read in requestAnimationFrame to avoid forced reflows
      requestAnimationFrame(() => {
        const offset = 100 // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        setActiveId(id)
      })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  const handleLinkClick = (id) => {
    scrollToHeading(id)
    setIsMobileMenuOpen(false)
  }

  // Long press handler
  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    dragStartPos.current = { x: touch.clientX, y: touch.clientY }
    bubbleStartPos.current = { ...position }

    const timer = setTimeout(() => {
      setIsDragging(true)
      if (bubbleRef.current) {
        bubbleRef.current.style.transition = 'none'
      }
      // Haptic feedback if available
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    }, 500) // 500ms for long press

    setLongPressTimer(timer)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) {
      // Cancel long press if user moves significantly before long press completes
      const touch = e.touches[0]
      const moveX = Math.abs(touch.clientX - dragStartPos.current.x)
      const moveY = Math.abs(touch.clientY - dragStartPos.current.y)
      
      if (moveX > 5 || moveY > 5) {
        if (longPressTimer) {
          clearTimeout(longPressTimer)
          setLongPressTimer(null)
        }
      }
      return
    }

    e.preventDefault()
    const touch = e.touches[0]
    const deltaX = touch.clientX - dragStartPos.current.x
    const deltaY = touch.clientY - dragStartPos.current.y

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const bubbleSize = 28 // width/height of bubble

    // Calculate new position (right decreases when moving right, increases when moving left)
    let newRight = bubbleStartPos.current.right - deltaX
    let newTop = bubbleStartPos.current.top + deltaY

    // Constrain to viewport bounds
    newRight = Math.max(10, Math.min(windowWidth - bubbleSize - 10, newRight))
    newTop = Math.max(80, Math.min(windowHeight - bubbleSize - 100, newTop))

    setPosition({ top: newTop, right: newRight })
  }

  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer)
      setLongPressTimer(null)
    }

    if (isDragging) {
      setIsDragging(false)
      if (bubbleRef.current) {
        bubbleRef.current.style.transition = 'all 0.3s ease'
      }
    }
  }

  const handleClick = (e) => {
    // Only open menu if not dragging and no long press timer was active
    if (!isDragging && !longPressTimer) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  return (
    <>
      {/* Mobile Bubble Button */}
      <button 
        ref={bubbleRef}
        className={`toc-mobile-bubble ${isDragging ? 'toc-dragging' : ''}`}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          top: `${position.top}px`,
          right: `${position.right}px`,
          opacity: isDragging ? 0.9 : 1,
          ...(isDragging && { transform: 'scale(1.2)' }),
        }}
        aria-label="Table of Contents"
      >
        {isMobileMenuOpen ? <FiX /> : <FiList />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="toc-mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop/Tablet Sidebar & Mobile Menu */}
      <div className={`table-of-contents ${isMobileMenuOpen ? 'toc-mobile-open' : ''}`}>
        <div className="toc-header">
          <FiList className="toc-icon" />
          <h3 className="toc-title">Table of Contents</h3>
          <button 
            className="toc-mobile-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
        <nav className="toc-nav">
          <ul className="toc-list">
            {tocItems.map((item) => (
              <li
                key={item.id}
                className={`toc-item toc-level-${item.level} ${activeId === item.id ? 'active' : ''}`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(item.id)
                  }}
                  className="toc-link"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default TableOfContents

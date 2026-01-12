'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const RightClickContactCursor = () => {
  const [isActive, setIsActive] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const router = useRouter()
  const timeoutRef = useRef(null)

  // Handle right-click to activate
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault() // Prevent default right-click menu
      setIsActive(true)
      setCursorPosition({ x: e.clientX, y: e.clientY })
      document.body.classList.add('contact-cursor-active')
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Auto-deactivate after 5 seconds if no click
      timeoutRef.current = setTimeout(() => {
        setIsActive(false)
        document.body.classList.remove('contact-cursor-active')
      }, 5000)
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle mouse movement and click when active
  useEffect(() => {
    if (!isActive) return

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setIsActive(false)
      document.body.classList.remove('contact-cursor-active')
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      router.push('/contact/')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick, true) // Use capture phase

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick, true)
    }
  }, [isActive, router])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      document.body.classList.remove('contact-cursor-active')
    }
  }, [])

  if (!isActive) return null

  return (
    <div 
      className="contact-cursor"
      style={{
        position: 'fixed',
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
    >
      <span className="contact-cursor-icon">📧</span>
      <span className="contact-cursor-text">Contact Us</span>
    </div>
  )
}

export default RightClickContactCursor

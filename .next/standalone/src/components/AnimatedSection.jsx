'use client'

import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`animated-section ${className} ${isVisible ? `animate-${animation}` : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedSection


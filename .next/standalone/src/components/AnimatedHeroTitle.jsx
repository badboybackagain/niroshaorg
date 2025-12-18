'use client'

import React, { useState, useEffect } from 'react'

const AnimatedHeroTitle = () => {
  const words = ['Build', 'Secure', 'Scale']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayWord, setDisplayWord] = useState(words[0])

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    let animationFrameId
    let timeoutId
    let intervalId
    
    const startAnimation = () => {
      intervalId = setInterval(() => {
        // Use requestAnimationFrame to batch state updates
        animationFrameId = requestAnimationFrame(() => {
          setIsAnimating(true)
          
          // Wait for fade out animation, then change word
          timeoutId = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % words.length
              setDisplayWord(words[nextIndex])
              return nextIndex
            })
            setIsAnimating(false)
          }, 800) // Half of fade-out animation duration
        })
      }, 4000) // Change word every 4 seconds
    }
    
    // Start animation after initial delay
    const startTimeout = setTimeout(startAnimation, 1000)

    return () => {
      clearTimeout(startTimeout)
      clearInterval(intervalId)
      clearTimeout(timeoutId)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <h1 className="hero-title">
      <span className="hero-title-static">We</span>
      <span className={`hero-title-animated ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {displayWord}
      </span>
      <span className="hero-title-static">.</span>
    </h1>
  )
}

export default AnimatedHeroTitle


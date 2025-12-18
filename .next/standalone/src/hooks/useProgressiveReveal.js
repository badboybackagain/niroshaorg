import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for progressive reveal based on scroll position
 * Reveals items one by one as the user scrolls through the section
 */
export const useProgressiveReveal = ({ totalItems, threshold = 0.3 }) => {
  const [visibleCount, setVisibleCount] = useState(1) // Start with first item visible
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calculate how far into the section we've scrolled
      const scrollProgress = (scrollY + windowHeight - sectionTop) / sectionHeight

      // Calculate which items should be visible based on scroll progress
      // Each item becomes visible at 20% intervals (0%, 20%, 40%, 60%, 80%)
      const progressPerItem = 1 / (totalItems + 1) // +1 to account for initial state
      const shouldBeVisible = Math.min(
        Math.floor(scrollProgress / progressPerItem) + 1,
        totalItems
      )

      if (shouldBeVisible > visibleCount && shouldBeVisible <= totalItems) {
        setVisibleCount(shouldBeVisible)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [totalItems, visibleCount])

  return { sectionRef, itemRefs, visibleCount }
}




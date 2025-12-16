import { useEffect, useState } from 'react'

export const useCountUp = ({ end, duration = 2000, start = 0, enabled = true }) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) {
      setCount(end)
      return
    }

    let startTime = null
    let animationFrame = null

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start, enabled])

  return count
}




import React, { useEffect, useRef } from 'react'
import './RippleGridBackground.css'

const RippleGridBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const gridSize = 50
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize
          
          // Calculate distance from center
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Create ripple effect
          const ripple = Math.sin((distance / 30) - (time * 0.05)) * 0.5 + 0.5
          const size = gridSize * (0.3 + ripple * 0.4)
          
          // Opacity based on ripple - increased for better visibility on dark background
          const opacity = 0.2 + ripple * 0.3
          
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          // Use a slightly blue-tinted white for better visibility on dark background
          ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`
          ctx.fill()
        }
      }

      time += 1
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="ripple-grid-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default RippleGridBackground

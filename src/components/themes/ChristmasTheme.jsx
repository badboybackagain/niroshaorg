'use client'

import React, { useEffect, useRef } from 'react'
import styles from './ChristmasTheme.module.css'

const ChristmasTheme = () => {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const snowflakesRef = useRef([])
  const santaRef = useRef({
    x: 0,
    y: 0,
    width: 150,
    height: 80,
    image: null,
    time: 0,
    speed: 0.5
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    // Resize canvas
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize Santa image
    const santaImage = new Image()
    santaImage.crossOrigin = 'anonymous'
    santaImage.src = 'https://i.ibb.co/rbHJDQB/DALL-E-2024-12-02-23-37-removebg-preview.png'
    santaImage.onload = () => {
      santaRef.current.image = santaImage
      santaRef.current.x = width // Start off-screen
      santaRef.current.y = height * 0.1
    }
    santaImage.onerror = () => {
      // If image fails to load, Santa won't be drawn but snowflakes will still work
      console.warn('Santa image failed to load, continuing without Santa animation')
    }

    // Create snowflakes
    const createSnowflakes = () => {
      snowflakesRef.current = []
      const count = Math.floor((width * height) / 15000) // Adaptive count based on screen size
      for (let i = 0; i < count; i++) {
        snowflakesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          sway: Math.random() * 0.5 + 0.25
        })
      }
    }
    createSnowflakes()

    // Draw snowflake
    const drawSnowflake = (snowflake) => {
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()
      
      // Add simple cross pattern
      ctx.strokeStyle = `rgba(255, 255, 255, ${snowflake.opacity * 0.5})`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(snowflake.x - snowflake.radius, snowflake.y)
      ctx.lineTo(snowflake.x + snowflake.radius, snowflake.y)
      ctx.moveTo(snowflake.x, snowflake.y - snowflake.radius)
      ctx.lineTo(snowflake.x, snowflake.y + snowflake.radius)
      ctx.stroke()
    }

    // Draw Santa
    const drawSanta = () => {
      const santa = santaRef.current
      if (!santa.image || !santa.image.complete) return

      // Sinusoidal movement for Santa
      santa.y = height * 0.1 + Math.sin(santa.time) * 20
      santa.x -= santa.speed

      // Reset when off-screen
      if (santa.x + santa.width < 0) {
        santa.x = width
        santa.time = 0
      }

      ctx.drawImage(santa.image, santa.x, santa.y, santa.width, santa.height)
      santa.time += 0.02
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw snowflakes
      snowflakesRef.current.forEach((snowflake) => {
        snowflake.y += snowflake.speed
        snowflake.x += Math.sin(snowflake.y * 0.01) * snowflake.sway

        // Reset when off-screen
        if (snowflake.y > height) {
          snowflake.y = -10
          snowflake.x = Math.random() * width
        }
        if (snowflake.x < 0) snowflake.x = width
        if (snowflake.x > width) snowflake.x = 0

        drawSnowflake(snowflake)
      })

      // Draw Santa
      drawSanta()

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.christmasTheme}>
      <canvas ref={canvasRef} className={styles.skyCanvas} />
      <div className={styles.cityBanner} />
    </div>
  )
}

export default ChristmasTheme

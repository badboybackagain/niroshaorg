'use client'

import React, { useState, useEffect } from 'react'

const ClientLogosMarquee = () => {
  const [logos, setLogos] = useState([])

  useEffect(() => {
    // Fetch the list of available logos from manifest
    const loadLogos = async () => {
      try {
        const response = await fetch('/cache/client-logos/manifest.json')
        if (response.ok) {
          const manifest = await response.json()
          const logosList = manifest.logos || []
          
          // Shuffle logos in random order
          const shuffledLogos = [...logosList].sort(() => Math.random() - 0.5)
          setLogos(shuffledLogos)
        } else {
          console.warn('Client logos manifest not found. Run: npm run process-images:client-logos')
        }
      } catch (error) {
        console.error('Error loading client logos:', error)
      }
    }

    loadLogos()
  }, [])

  // If no logos, return null (component won't render)
  if (logos.length === 0) {
    return null
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="client-logos-marquee-section">
      <div className="client-logos-marquee-header">
        <div className="container">
          <h2 className="client-logos-marquee-title">Trusted by Leading Companies</h2>
        </div>
      </div>

      <div className="client-logos-marquee-container">
        <div className="client-logos-marquee-track">
          {duplicatedLogos.map((logoName, index) => (
            <div key={`${logoName}-${index}`} className="client-logo-marquee-item">
              <div className="client-logo-marquee-wrapper">
                <picture>
                  <source
                    srcSet={`/cache/client-logos/${logoName}.webp 1x, /cache/client-logos/${logoName}@2x.webp 2x`}
                    type="image/webp"
                  />
                  <img
                    src={`/cache/client-logos/${logoName}.png`}
                    srcSet={`/cache/client-logos/${logoName}.png 1x, /cache/client-logos/${logoName}@2x.png 2x`}
                    alt={`${logoName.replace(/-/g, ' ')} logo`}
                    className="client-logo-marquee-image"
                    loading="lazy"
                    width="200"
                    height="auto"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogosMarquee


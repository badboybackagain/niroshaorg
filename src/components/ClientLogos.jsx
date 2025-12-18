'use client'

import React, { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ClientLogos = () => {
  const [logos, setLogos] = useState([])
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  useEffect(() => {
    // Fetch the list of available logos from manifest
    const loadLogos = async () => {
      try {
        const response = await fetch('/cache/client-logos/manifest.json')
        if (response.ok) {
          const manifest = await response.json()
          setLogos(manifest.logos || [])
        } else {
          console.warn('Client logos manifest not found. Run: npm run process-client-logos')
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

  return (
    <section className="client-logos-section">
      <div className="container">
        <div 
          ref={ref}
          className={`client-logos-wrapper ${isVisible ? 'animate-fadeInUp' : ''}`}
        >
          <div className="client-logos-header">
            <h2 className="client-logos-title">Trusted by Leading Companies</h2>
            <p className="client-logos-subtitle">
              We're proud to partner with innovative businesses across industries
            </p>
          </div>

          <div className="client-logos-grid">
            {logos.map((logoName, index) => (
              <div key={logoName} className="client-logo-item">
                <picture>
                  <source
                    srcSet={`/cache/client-logos/${logoName}.webp 1x, /cache/client-logos/${logoName}@2x.webp 2x`}
                    type="image/webp"
                  />
                  <img
                    src={`/cache/client-logos/${logoName}.png`}
                    srcSet={`/cache/client-logos/${logoName}.png 1x, /cache/client-logos/${logoName}@2x.png 2x`}
                    alt={`${logoName.replace(/-/g, ' ')} logo`}
                    loading="lazy"
                    className="client-logo-image"
                    width="200"
                    height="auto"
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos


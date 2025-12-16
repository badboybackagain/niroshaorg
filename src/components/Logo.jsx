import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ size = 'default', className = '' }) => {
  const [imageError, setImageError] = useState(false)

  // Size presets for different use cases
  const sizes = {
    small: {
      width: 50,
      height: 50,
      logoName: 'logo-small'
    },
    default: {
      width: 60,
      height: 60,
      logoName: 'logo'
    },
    large: {
      width: 80,
      height: 80,
      logoName: 'logo-large'
    },
    xlarge: {
      width: 100,
      height: 100,
      logoName: 'logo-xlarge'
    }
  }

  const config = sizes[size] || sizes.default
  const logoName = config.logoName

  // If image fails to load, show text fallback
  if (imageError) {
    return (
      <Link 
        to="/" 
        className={`logo-link logo-text-fallback ${className}`}
        aria-label="Team Nirosha Home"
      >
        <span className="logo-text">Nirosha</span>
      </Link>
    )
  }

  // Determine CSS class based on size
  const sizeClass = size === 'small' ? 'logo-small' : 
                    size === 'large' ? 'logo-large' : 
                    size === 'xlarge' ? 'logo-xlarge' : 'logo'

  return (
    <Link 
      to="/" 
      className={`logo-link logo-with-text ${className}`}
      aria-label="Team Nirosha Home"
    >
      <picture>
        {/* WebP sources with srcset */}
        <source
          srcSet={`/${logoName}.webp 1x, /${logoName}@2x.webp 2x`}
          type="image/webp"
          onError={() => setImageError(true)}
        />
        {/* PNG fallback with srcset */}
        <source
          srcSet={`/${logoName}.png 1x, /${logoName}@2x.png 2x`}
          type="image/png"
          onError={() => setImageError(true)}
        />
        {/* Fallback img */}
        <img
          src={`/${logoName}.png`}
          srcSet={`/${logoName}.png 1x, /${logoName}@2x.png 2x`}
          alt="Team Nirosha Logo"
          width={config.width}
          height={config.height}
          loading="eager"
          fetchpriority="high"
          className="logo-img"
          onError={() => setImageError(true)}
          style={{
            width: `${config.width}px`,
            height: `${config.height}px`,
            maxWidth: '100%',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </picture>
    </Link>
  )
}

export default Logo

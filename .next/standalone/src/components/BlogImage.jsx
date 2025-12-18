'use client'

import React, { useState } from 'react'

const BlogImage = ({ slug, size = 'featured', alt, className = '' }) => {
  const [imageError, setImageError] = useState(false)
  
  // Size presets for different use cases
  const sizes = {
    thumbnail: {
      width: 400,
      height: 300,
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    },
    featured: {
      width: 1200,
      height: 630,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
    },
    large: {
      width: 1600,
      height: 900,
      sizes: '100vw'
    }
  }

  const config = sizes[size] || sizes.featured
  const baseName = slug || 'logo-numerology-astrology'

  if (imageError) {
    return (
      <div className={`blog-image-placeholder ${className}`}>
        <span>Image not available</span>
      </div>
    )
  }

  return (
    <picture className={className}>
      {/* WebP sources with srcset */}
      <source
        srcSet={`
          /cache/blog/${baseName}-${size}.webp 1x,
          /cache/blog/${baseName}-${size}@2x.webp 2x
        `}
        type="image/webp"
        onError={() => setImageError(true)}
      />
      {/* PNG fallback with srcset */}
      <source
        srcSet={`
          /cache/blog/${baseName}-${size}.png 1x,
          /cache/blog/${baseName}-${size}@2x.png 2x
        `}
        type="image/png"
        onError={() => setImageError(true)}
      />
      {/* Fallback img */}
      <img
        src={`/cache/blog/${baseName}-${size}.webp`}
        alt={alt || 'Blog image'}
        width={config.width}
        height={config.height}
        sizes={config.sizes}
        loading="lazy"
        onError={() => setImageError(true)}
        className="blog-image"
      />
    </picture>
  )
}

export default BlogImage




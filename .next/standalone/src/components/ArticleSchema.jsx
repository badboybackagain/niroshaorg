'use client'

import React, { useEffect } from 'react'

/**
 * Article Schema component for Google SEO
 * Generates JSON-LD structured data for blog articles using BlogPosting schema
 */
const ArticleSchema = ({ blog }) => {
  useEffect(() => {
    if (!blog) {
      return
    }

    const currentUrl = typeof window !== 'undefined' 
      ? window.location.href 
      : `https://nirosha.org/blog/${blog.slug}`

    const imageUrl = blog.imageSlug 
      ? `https://nirosha.org/cache/blog/${blog.imageSlug}-featured.webp`
      : blog.featuredImage 
        ? `https://nirosha.org${blog.featuredImage}`
        : ''

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${currentUrl}#BlogPosting`,
      headline: blog.seoTitle || blog.title,
      name: blog.title,
      description: blog.seoDescription || blog.excerpt,
      image: imageUrl ? {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630
      } : undefined,
      datePublished: blog.publishDate,
      dateModified: blog.publishDate,
      author: {
        '@type': 'Organization',
        name: blog.author || 'Team Nirosha',
        url: 'https://nirosha.org'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        url: 'https://nirosha.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nirosha.org/logo.png',
          width: 600,
          height: 60
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl
      },
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://nirosha.org/blog/#Blog',
        name: 'Team Nirosha Blog',
        url: 'https://nirosha.org/blog',
        publisher: {
          '@type': 'Organization',
          name: 'Team Nirosha',
          url: 'https://nirosha.org'
        }
      },
      articleSection: blog.category,
      keywords: blog.seoKeywords || blog.category,
      inLanguage: 'en-US',
      url: currentUrl
    }

    // Remove undefined properties
    Object.keys(schema).forEach(key => {
      if (schema[key] === undefined) {
        delete schema[key]
      }
    })

    // Remove existing article schema if any
    const existingScript = document.querySelector('script[data-article-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-article-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-article-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [blog])

  return null
}

export default ArticleSchema




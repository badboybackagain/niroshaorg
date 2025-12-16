import React, { useEffect } from 'react'

/**
 * Article Schema component for Google SEO
 * Generates JSON-LD structured data for blog articles
 */
const ArticleSchema = ({ blog }) => {
  useEffect(() => {
    if (!blog) {
      return
    }

    const currentUrl = typeof window !== 'undefined' 
      ? window.location.href 
      : `https://nirosha.org/blog/${blog.slug}`

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: blog.title,
      description: blog.seoDescription || blog.excerpt,
      image: blog.imageSlug 
        ? `https://nirosha.org/images/blog/${blog.imageSlug}-featured.webp`
        : blog.featuredImage 
          ? `https://nirosha.org${blog.featuredImage}`
          : '',
      datePublished: blog.publishDate,
      dateModified: blog.publishDate,
      author: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        url: 'https://nirosha.org'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        url: 'https://nirosha.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nirosha.org/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl
      }
    }

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



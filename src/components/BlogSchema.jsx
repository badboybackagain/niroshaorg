'use client'

import React, { useEffect } from 'react'
import { blogPosts } from '../data/blogData'

/**
 * Blog Schema component for Google SEO
 * Generates JSON-LD structured data for the blog using Schema.org Blog type
 * Should be used on the blog listing page
 */
const BlogSchema = () => {
  useEffect(() => {
    const blogUrl = 'https://nirosha.org/blog'
    
    // Get recent blog posts for the blogPost property (limit to latest 10)
    const recentPosts = blogPosts
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 10)
      .map(blog => {
        const postUrl = `https://nirosha.org/blog/${blog.slug}`
        const imageUrl = blog.imageSlug 
          ? `https://nirosha.org/cache/blog/${blog.imageSlug}-featured.webp`
          : blog.featuredImage 
            ? `https://nirosha.org${blog.featuredImage}`
            : ''

        const post = {
          '@type': 'BlogPosting',
          '@id': `${postUrl}#BlogPosting`,
          headline: blog.seoTitle || blog.title,
          name: blog.title,
          description: blog.seoDescription || blog.excerpt,
          datePublished: blog.publishDate,
          dateModified: blog.publishDate,
          author: {
            '@type': 'Organization',
            name: blog.author || 'Team Nirosha',
            url: 'https://nirosha.org'
          },
          url: postUrl,
          articleSection: blog.category,
          keywords: blog.seoKeywords || blog.category
        }

        // Add image if available
        if (imageUrl) {
          post.image = {
            '@type': 'ImageObject',
            url: imageUrl
          }
        }

        return post
      })

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${blogUrl}#Blog`,
      name: 'Team Nirosha Blog',
      description: 'Expert insights, tips, and strategies for growing your digital presence. Learn about web development, SEO, digital marketing, branding, e-commerce solutions, and more.',
      url: blogUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': blogUrl
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://nirosha.org#Organization',
        name: 'Team Nirosha',
        url: 'https://nirosha.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nirosha.org/logo.png',
          width: 600,
          height: 60
        }
      },
      blogPost: recentPosts.length > 0 ? recentPosts : undefined,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '145',
        bestRating: '5',
        worstRating: '1'
      },
      inLanguage: 'en-US',
      about: [
        {
          '@type': 'Thing',
          name: 'Web Development'
        },
        {
          '@type': 'Thing',
          name: 'SEO Services'
        },
        {
          '@type': 'Thing',
          name: 'Digital Marketing'
        },
        {
          '@type': 'Thing',
          name: 'Branding & Design'
        },
        {
          '@type': 'Thing',
          name: 'E-commerce Solutions'
        }
      ]
    }

    // Remove undefined properties
    Object.keys(schema).forEach(key => {
      if (schema[key] === undefined) {
        delete schema[key]
      }
    })

    // Remove existing blog schema if any
    const existingScript = document.querySelector('script[data-blog-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-blog-schema', 'true')
    script.text = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-blog-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return null
}

export default BlogSchema

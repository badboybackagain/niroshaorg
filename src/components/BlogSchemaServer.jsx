/**
 * Server-side Blog Schema component for Google SEO
 * Generates JSON-LD structured data for the blog using Schema.org Blog type
 * Should be used on the blog listing page
 */

import { blogPosts } from '../data/blogData'

const SITE_URL = 'https://nirosha.org'

export default function BlogSchemaServer() {
  const blogUrl = `${SITE_URL}/blog`
  
  // Get recent blog posts for the blogPost property (limit to latest 10)
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 10)
    .map(blog => {
      const postUrl = `${SITE_URL}/blog/${blog.slug}`
      const imageUrl = blog.imageSlug 
        ? `${SITE_URL}/cache/blog/${blog.imageSlug}-featured.webp`
        : blog.featuredImage 
          ? `${SITE_URL}${blog.featuredImage}`
          : ''

      const post = {
        '@type': 'BlogPosting',
        '@id': `${postUrl}#BlogPosting`,
        headline: blog.seoTitle || blog.title,
        name: blog.title,
        description: blog.seoDescription || blog.excerpt,
        datePublished: new Date(blog.publishDate).toISOString(),
        dateModified: blog.modifiedDate 
          ? new Date(blog.modifiedDate).toISOString()
          : new Date(blog.publishDate).toISOString(),
        author: {
          '@type': 'Organization',
          name: blog.author || 'Team Nirosha',
          url: SITE_URL
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
      '@id': `${SITE_URL}#Organization`,
      name: 'Team Nirosha',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60
      }
    },
    ...(recentPosts.length > 0 && { blogPost: recentPosts }),
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

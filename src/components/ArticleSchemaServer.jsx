/**
 * Server-side Article Schema component for Google SEO
 * Generates JSON-LD structured data for blog articles using BlogPosting schema
 * This is a server component that should be used in Next.js App Router pages
 */

const SITE_URL = 'https://nirosha.org'

export default function ArticleSchemaServer({ blog }) {
  if (!blog) {
    return null
  }

  const currentUrl = `${SITE_URL}/blog/${blog.slug}`

  const imageUrl = blog.imageSlug 
    ? `${SITE_URL}/cache/blog/${blog.imageSlug}-featured.webp`
    : blog.featuredImage 
      ? `${SITE_URL}${blog.featuredImage}`
      : ''

  const publishedTime = new Date(blog.publishDate).toISOString()
  const modifiedTime = blog.modifiedDate 
    ? new Date(blog.modifiedDate).toISOString()
    : publishedTime

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${currentUrl}#BlogPosting`,
    headline: blog.seoTitle || blog.title,
    name: blog.title,
    description: blog.seoDescription || blog.excerpt,
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
        ...(blog.imageAlt && { caption: blog.imageAlt })
      }
    }),
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Organization',
      name: blog.author || 'Team Nirosha',
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'Team Nirosha',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
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
      '@id': `${SITE_URL}/blog/#Blog`,
      name: 'Team Nirosha Blog',
      url: `${SITE_URL}/blog`,
      publisher: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        url: SITE_URL
      }
    },
    articleSection: blog.category,
    keywords: blog.seoKeywords || blog.category,
    inLanguage: 'en-US',
    url: currentUrl,
    ...(blog.readTime && {
      timeRequired: blog.readTime
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

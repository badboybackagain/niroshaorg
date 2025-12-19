import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogData'
import { extractServiceSlugs } from '@/lib/sitemapUtils'

const SITE_URL = 'https://nirosha.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Service routes
  const serviceSlugs = extractServiceSlugs()
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map(slug => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => {
    const lastModified = post.modifiedDate 
      ? new Date(post.modifiedDate)
      : post.publishDate 
        ? new Date(post.publishDate)
        : currentDate
    
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    }
  })

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}

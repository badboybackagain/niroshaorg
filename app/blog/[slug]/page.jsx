import BlogDetailPage from '@/page-components/BlogDetailPage'
import { getBlogBySlug } from '@/data/blogData'
import { Metadata } from 'next'
import ArticleSchemaServer from '@/components/ArticleSchemaServer'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'

const SITE_URL = 'https://nirosha.org'

export async function generateMetadata({ params }): Promise<Metadata> {
  // In Next.js 15+, params might be a Promise, so we await it
  const resolvedParams = await params
  const blog = getBlogBySlug(resolvedParams.slug)

  if (!blog) {
    return {
      title: 'Blog Post Not Found | Team Nirosha',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  const title = blog.seoTitle || blog.title
  const description = blog.seoDescription || blog.excerpt
  const keywords = blog.seoKeywords || blog.category
  const url = `${SITE_URL}/blog/${blog.slug}`
  
  // Get image URL
  const imageUrl = blog.imageSlug 
    ? `${SITE_URL}/cache/blog/${blog.imageSlug}-featured.webp`
    : blog.featuredImage 
      ? `${SITE_URL}${blog.featuredImage}`
      : `${SITE_URL}/logo.png`

  const publishedTime = new Date(blog.publishDate).toISOString()
  const modifiedTime = blog.modifiedDate 
    ? new Date(blog.modifiedDate).toISOString()
    : publishedTime

  return {
    title: `${title} | Team Nirosha`,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    authors: [{ name: blog.author || 'Team Nirosha' }],
    creator: blog.author || 'Team Nirosha',
    publisher: 'Team Nirosha',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Team Nirosha',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.imageAlt || blog.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [blog.author || 'Team Nirosha'],
      section: blog.category,
      tags: keywords ? keywords.split(',').map(k => k.trim()) : [blog.category],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@niroshaorg',
      site: '@niroshaorg',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
      'article:author': blog.author || 'Team Nirosha',
      'article:section': blog.category,
      'article:tag': keywords || blog.category,
    },
  }
}

export default async function BlogDetail({ params }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  const resolvedParams = await params
  const blog = getBlogBySlug(resolvedParams.slug)
  
  const breadcrumbItems = blog ? [
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: blog.title, url: `${SITE_URL}/blog/${blog.slug}` }
  ] : []

  return (
    <>
      {blog && <ArticleSchemaServer blog={blog} />}
      {breadcrumbItems.length > 0 && <BreadcrumbSchemaServer items={breadcrumbItems} />}
      <BlogDetailPage params={resolvedParams} />
    </>
  )
}

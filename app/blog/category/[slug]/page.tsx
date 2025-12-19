import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import BlogListingPage from '@/page-components/BlogListingPage'
import { blogCategories } from '@/data/blogData'
import { slugToCategory, categoryToSlug } from '@/utils/categorySlug'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export async function generateStaticParams() {
  return blogCategories.map(category => ({
    slug: categoryToSlug(category)
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params
  const category = slugToCategory(slug)
  
  // Verify category exists
  if (!blogCategories.includes(category)) {
    return {
      title: 'Category Not Found - Team Nirosha',
    }
  }

  return {
    title: `${category} Blog Posts - Team Nirosha | Digital Marketing Insights`,
    description: `Explore our ${category} blog posts. Expert insights, tips, and strategies for ${category.toLowerCase()} to help grow your digital presence.`,
    keywords: [`${category.toLowerCase()}`, 'blog', 'digital marketing', 'SEO', 'web development'],
    authors: [{ name: 'Team Nirosha' }],
    alternates: {
      canonical: `${SITE_URL}/blog/category/${slug}`,
    },
    openGraph: {
      title: `${category} Blog Posts - Team Nirosha`,
      description: `Expert insights and strategies for ${category.toLowerCase()}.`,
      url: `${SITE_URL}/blog/category/${slug}`,
      siteName: 'Team Nirosha',
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 600,
          height: 60,
          alt: `${category} Blog Posts`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${category} Blog Posts - Team Nirosha`,
      description: `Expert insights and strategies for ${category.toLowerCase()}.`,
      images: [`${SITE_URL}/logo.png`],
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
  }
}

export default async function CategoryBlogPage({ params }) {
  const { slug } = await params
  const category = slugToCategory(slug)
  
  // Verify category exists
  if (!blogCategories.includes(category)) {
    notFound()
  }

  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading blog posts...</div>}>
      <BlogListingPage initialCategory={category} />
    </Suspense>
  )
}

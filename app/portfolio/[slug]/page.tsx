import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import PortfolioCategoryPage from '@/page-components/PortfolioCategoryPage'
import { portfolioCategories } from '@/data/portfolioData'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export async function generateStaticParams() {
  return portfolioCategories.map(category => ({
    slug: category.slug
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params
  const category = portfolioCategories.find(cat => cat.slug === slug)
  
  if (!category) {
    return {
      title: 'Portfolio Category Not Found - Team Nirosha',
    }
  }

  return {
    title: `${category.title} Portfolio - Team Nirosha | Our Work`,
    description: `${category.description}. Explore our ${category.title.toLowerCase()} portfolio showcasing professional designs.`,
    keywords: [
      `${category.title.toLowerCase()}`,
      'portfolio',
      'design portfolio',
      'creative designs',
      'professional design',
      'branding design',
      'Team Nirosha'
    ],
    authors: [{ name: 'Team Nirosha' }],
    alternates: {
      canonical: `${SITE_URL}/portfolio/${slug}`,
    },
    openGraph: {
      title: `${category.title} Portfolio - Team Nirosha`,
      description: category.description,
      url: `${SITE_URL}/portfolio/${slug}`,
      siteName: 'Team Nirosha',
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 600,
          height: 60,
          alt: `${category.title} Portfolio`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PortfolioCategory({ params }) {
  const { slug } = await params
  const category = portfolioCategories.find(cat => cat.slug === slug)
  
  if (!category) {
    notFound()
  }

  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading portfolio...</div>}>
      <PortfolioCategoryPage categorySlug={slug} categoryTitle={category.title} />
    </Suspense>
  )
}

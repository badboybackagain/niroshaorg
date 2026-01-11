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

// Comprehensive descriptions for each portfolio category
const categoryDescriptions: Record<string, string> = {
  'websites': 'Explore our website design portfolio featuring custom web development projects. Modern, responsive websites built with cutting-edge technology for businesses across industries. View our successful web design case studies.',
  'logos': 'Browse our professional logo design portfolio showcasing unique brand identities. Creative and memorable logo designs that help businesses stand out. Expert logo design services for startups and established brands.',
  'business-card': 'Discover creative business card designs from our portfolio. Professional, innovative business card designs that make a lasting impression. Elevate your brand with custom business card design services.',
  'id-cards': 'View our professional ID card design portfolio. Secure, modern employee ID cards and access cards designed for organizations. Custom ID card design solutions for businesses and institutions.',
  'brochure-cover': 'Explore our brochure and leaflet design portfolio. Eye-catching print marketing materials that effectively communicate your message. Professional brochure design services for businesses.',
  'posters': 'Browse our creative poster design portfolio. Striking poster designs for events, promotions, and marketing campaigns. Custom poster design services that capture attention and drive engagement.',
  'packaging': 'Discover our product packaging design portfolio. Innovative packaging solutions that enhance brand visibility and product appeal. Professional packaging design for retail and e-commerce businesses.',
  'social-media-posts': 'View our engaging social media design portfolio. Creative social media graphics, posts, and campaigns that drive engagement. Expert social media design services for digital marketing success.',
  'backdrop': 'Explore our event backdrop design portfolio. Custom backdrop designs for conferences, exhibitions, and special events. Professional backdrop design services that create memorable brand experiences.',
  'magazine-ad': 'Browse our magazine advertisement design portfolio. Compelling print ads that effectively communicate brand messages and drive conversions. Professional magazine ad design services for marketing campaigns.'
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params
  const category = portfolioCategories.find(cat => cat.slug === slug)
  
  if (!category) {
    return {
      title: 'Portfolio Category Not Found - Team Nirosha',
    }
  }

  const metaDescription = categoryDescriptions[slug] || `${category.description}. Explore our ${category.title.toLowerCase()} portfolio showcasing professional designs by Team Nirosha.`

  return {
    title: `${category.title} Portfolio - Team Nirosha | Professional Design Services`,
    description: metaDescription,
    keywords: [
      `${category.title.toLowerCase()}`,
      `${category.title.toLowerCase()} design`,
      `${category.title.toLowerCase()} portfolio`,
      'design portfolio',
      'creative designs',
      'professional design',
      'branding design',
      'graphic design',
      'Team Nirosha',
      'design services',
      'custom design'
    ],
    authors: [{ name: 'Team Nirosha' }],
    alternates: {
      canonical: `${SITE_URL}/portfolio/${slug}/`,
    },
    openGraph: {
      title: `${category.title} Portfolio - Team Nirosha`,
      description: metaDescription,
      url: `${SITE_URL}/portfolio/${slug}/`,
      siteName: 'Team Nirosha',
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 600,
          height: 60,
          alt: `${category.title} Portfolio - Team Nirosha`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} Portfolio - Team Nirosha`,
      description: metaDescription.substring(0, 200),
      images: [`${SITE_URL}/logo.png`],
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





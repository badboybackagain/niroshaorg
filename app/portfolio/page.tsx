import { Suspense } from 'react'
import PortfolioPage from '@/page-components/PortfolioPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Our Work - Portfolio | Team Nirosha | Design & Branding Services',
  description: 'Explore our impressive portfolio of creative designs including logos, business cards, ID cards, brochures, posters, packaging, and social media designs. Professional designs crafted by expert designers.',
  keywords: [
    'logo design portfolio',
    'branding portfolio',
    'professional logo design',
    'custom logo design',
    'logo design services',
    'brand identity design',
    'corporate logo design',
    'business logo design',
    'logo designer portfolio',
    'creative logo design',
    'logo design examples',
    'best logo designs',
    'affordable logo design',
    'premium logo design',
    'logo design agency'
  ],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: 'Our Work - Portfolio | Team Nirosha | Logo Design & Branding',
    description: 'Explore our impressive portfolio of professional designs. Get your custom design created by expert designers.',
    url: `${SITE_URL}/portfolio`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
        alt: 'Team Nirosha Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work - Portfolio | Team Nirosha',
    description: 'Explore our impressive portfolio of professional logo designs.',
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

export default function Portfolio() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading portfolio...</div>}>
      <PortfolioPage />
    </Suspense>
  )
}

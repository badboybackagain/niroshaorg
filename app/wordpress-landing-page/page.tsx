import WordPressLandingPage from '@/page-components/WordPressLandingPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Professional WordPress Landing Page Design | Starting ₹6,999 | Team Nirosha',
  description: 'Get a high-converting WordPress landing page designed in 48 hours! Starting at just ₹6,999. Timely delivery guaranteed or we cut the project fee. High performance, CRM integration, and mobile-responsive design included.',
  keywords: [
    'WordPress landing page',
    'WordPress landing page design',
    'WordPress landing page cost',
    'affordable WordPress landing page',
    'WordPress landing page development',
    'conversion optimized landing page',
    'WordPress lead magnet',
    'WordPress landing page price'
  ],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: `${SITE_URL}/wordpress-landing-page/`,
  },
  openGraph: {
    title: 'Professional WordPress Landing Page Design | Starting ₹6,999 | Team Nirosha',
    description: 'Get a high-converting WordPress landing page designed in 48 hours! Starting at just ₹6,999. Timely delivery guaranteed or we cut the project fee.',
    url: `${SITE_URL}/wordpress-landing-page/`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
        alt: 'WordPress Landing Page Design Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional WordPress Landing Page Design | Starting ₹6,999',
    description: 'High-converting WordPress landing pages with guaranteed timely delivery. CRM integration included.',
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

export default function WordPressLandingPageRoute() {
  return <WordPressLandingPage />
}



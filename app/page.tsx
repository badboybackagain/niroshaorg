import HomePage from '@/page-components/HomePage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Web Development, SEO & Automation Agency | Team Nirosha',
  description: 'Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions to help businesses grow securely.',
  keywords: ['Nirosha Enterprises', 'Team Nirosha', 'web development company', 'digital agency', 'SEO services', 'local SEO services', 'website maintenance AMC', 'business automation', 'SaaS solutions', 'CRM automation', 'cloud hosting services', 'IT solutions provider'],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Web Development, SEO & Automation Agency | Team Nirosha',
    description: 'Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions to help businesses grow securely.',
    url: SITE_URL,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
        alt: 'Team Nirosha Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development, SEO & Automation Agency | Team Nirosha',
    description: 'Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions.',
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

export default function Home() {
  return <HomePage />
}

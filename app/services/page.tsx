import { Suspense } from 'react'
import ServicesPage from '@/page-components/ServicesPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Our Services - Team Nirosha | Digital Agency',
  description: 'Comprehensive digital services including web development, SEO, digital marketing, branding, e-commerce solutions, automation, and cloud infrastructure.',
  keywords: ['web development services', 'SEO services', 'digital marketing', 'branding services', 'e-commerce solutions', 'automation services', 'cloud infrastructure'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Our Services - Team Nirosha | Digital Agency',
    description: 'Comprehensive digital services including web development, SEO, digital marketing, branding, e-commerce solutions, automation, and cloud infrastructure.',
    url: `${SITE_URL}/services`,
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
    card: 'summary',
    title: 'Our Services - Team Nirosha',
    description: 'Comprehensive digital services for your business.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPage />
    </Suspense>
  )
}

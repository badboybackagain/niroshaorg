import TermsPage from '@/page-components/TermsPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Team Nirosha | Service Terms',
  description: 'Read Team Nirosha\'s Terms and Conditions to understand the rules and regulations for using our website and services. Learn about your rights and obligations.',
  keywords: ['terms and conditions', 'service terms', 'user agreement', 'terms of service', 'legal terms', 'Team Nirosha terms'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms and Conditions - Team Nirosha',
    description: 'Read the terms and conditions for using Team Nirosha\'s services.',
    url: `${SITE_URL}/terms`,
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
    title: 'Terms and Conditions - Team Nirosha',
    description: 'Read the terms and conditions for using our services.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Terms() {
  return <TermsPage />
}

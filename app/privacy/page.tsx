import PrivacyPage from '@/page-components/PrivacyPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Privacy Policy - Team Nirosha | Data Protection & Privacy',
  description: 'Read Team Nirosha\'s Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights.',
  keywords: ['privacy policy', 'data protection', 'privacy rights', 'cookie policy', 'data security', 'Team Nirosha privacy'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy - Team Nirosha',
    description: 'Learn how Team Nirosha protects your privacy and handles your personal information.',
    url: `${SITE_URL}/privacy`,
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
    title: 'Privacy Policy - Team Nirosha',
    description: 'Learn how Team Nirosha protects your privacy.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Privacy() {
  return <PrivacyPage />
}

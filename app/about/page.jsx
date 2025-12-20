import AboutPage from '@/page-components/AboutPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'About Us - Team Nirosha | Digital Agency',
  description: 'Learn about Team Nirosha, a professional digital agency with expertise in web development, SEO, digital marketing, and automation solutions.',
  keywords: ['Team Nirosha', 'digital agency', 'web development', 'SEO services', 'digital marketing', 'about us'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Us - Team Nirosha | Digital Agency',
    description: 'Learn about Team Nirosha, a professional digital agency with expertise in web development, SEO, digital marketing, and automation solutions.',
    url: `${SITE_URL}/about`,
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
    title: 'About Us - Team Nirosha',
    description: 'Learn about Team Nirosha, a professional digital agency.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function About() {
  return <AboutPage />
}

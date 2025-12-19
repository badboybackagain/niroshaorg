import { Suspense } from 'react'
import ContactPage from '@/page-components/ContactPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Contact Us - Team Nirosha | Get In Touch',
  description: 'Contact Team Nirosha for web development, SEO, digital marketing, and automation services. We\'re here to help transform your digital presence.',
  keywords: ['contact Team Nirosha', 'get in touch', 'digital agency contact', 'web development contact', 'SEO services contact'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us - Team Nirosha | Get In Touch',
    description: 'Contact Team Nirosha for web development, SEO, digital marketing, and automation services.',
    url: `${SITE_URL}/contact`,
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
    title: 'Contact Us - Team Nirosha',
    description: 'Contact Team Nirosha for digital services.',
    images: [`${SITE_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPage />
    </Suspense>
  )
}

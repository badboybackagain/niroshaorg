import BlogListingPage from '@/page-components/BlogListingPage'
import BlogSchemaServer from '@/components/BlogSchemaServer'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Blog - Team Nirosha | Digital Marketing Insights',
  description: 'Expert insights, tips, and strategies for growing your digital presence. Learn about web development, SEO, digital marketing, branding, and more.',
  keywords: ['digital marketing blog', 'SEO tips', 'web development insights', 'digital marketing strategies', 'business growth tips'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog - Team Nirosha | Digital Marketing Insights',
    description: 'Expert insights, tips, and strategies for growing your digital presence.',
    url: `${SITE_URL}/blog`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
        alt: 'Team Nirosha Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blog - Team Nirosha',
    description: 'Expert insights and strategies for digital growth.',
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

export default function Blog() {
  return (
    <>
      <BlogSchemaServer />
      <BlogListingPage />
    </>
  )
}

import WordPressDevelopmentPage from '@/page-components/WordPressDevelopmentPage'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'
import ServiceSchemaServer from '@/components/ServiceSchemaServer'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'WordPress Website Development Services | Expert WordPress Developers | Team Nirosha',
  description: 'Transform your online presence with our expert WordPress development services. From Figma design conversion to custom development, performance optimization (PageSpeed scores near 90), plugin development, and third-party integrations - we deliver high-quality, timely WordPress solutions.',
  keywords: [
    'WordPress development',
    'WordPress website development',
    'Custom WordPress development',
    'WordPress website design',
    'Figma to WordPress conversion',
    'WordPress performance optimization',
    'WordPress plugin development',
    'WordPress third-party integration',
    'WordPress website revamp',
    'WordPress maintenance',
    'WordPress customization',
    'High PageSpeed WordPress',
    'Fast WordPress development',
    'WordPress developers',
    'WordPress agency',
    'WordPress e-commerce development',
    'WooCommerce development'
  ],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: `${SITE_URL}/services/wordpress-website-development`,
  },
  openGraph: {
    title: 'WordPress Website Development Services | Expert WordPress Developers | Team Nirosha',
    description: 'Transform your online presence with our expert WordPress development services. From Figma design conversion to custom development, performance optimization (PageSpeed scores near 90), plugin development, and third-party integrations.',
    url: `${SITE_URL}/services/wordpress-website-development`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
        alt: 'WordPress Website Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Website Development Services | Team Nirosha',
    description: 'Expert WordPress development with PageSpeed scores near 90. Figma to WordPress conversion, custom development, and more.',
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

// Service data for schema
const wordPressService = {
  title: 'WordPress Website Development',
  heroDescription: 'Transform your online presence with our expert WordPress development services. From custom website design to performance optimization, plugin development, and third-party integrations - we deliver scalable WordPress solutions that drive results.',
  description: 'Professional WordPress development services',
  slug: 'wordpress-website-development',
}

const breadcrumbItems = [
  { name: 'Home', url: SITE_URL },
  { name: 'Services', url: `${SITE_URL}/services` },
  { name: 'WordPress Website Development', url: `${SITE_URL}/services/wordpress-website-development` }
]

export default function WordPressDevelopment() {
  return (
    <>
      <ServiceSchemaServer service={wordPressService} slug="wordpress-website-development" />
      <BreadcrumbSchemaServer items={breadcrumbItems} />
      <WordPressDevelopmentPage />
    </>
  )
}


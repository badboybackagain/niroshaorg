import PinnacleAssistPage from '@/page-components/PinnacleAssistPage'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'
import ProductSchemaServer from '@/components/ProductSchemaServer'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Pinnacle Assist - AI-Powered Google Review Generation for Local SEO | Team Nirosha',
  description: 'Get quality, keyword-rich Google Reviews that boost your local SEO. AI-powered Google Review generation tool that creates unique, detailed reviews for your Google Business Profile. No credit card needed. Only Rs. 249/- per month. Start free today!',
  keywords: [
    'Pinnacle Assist',
    'Review Generation Tool',
    'AI Review Generator',
    'Google Reviews',
    'Local SEO Reviews',
    'Customer Review Tool',
    'Review Management',
    'SEO Optimized Reviews',
    'Business Reviews',
    'Review Generation Software',
    'Online Reputation Management',
    'Review Marketing Tool',
    'Google Business Profile Reviews',
    'Review Automation',
    'Quality Reviews',
    'Review Generation Service',
    'Local SEO Tool'
  ],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: `${SITE_URL}/products/pinnacle-assist/`,
  },
  openGraph: {
    title: 'Pinnacle Assist - AI-Powered Google Review Generation for Local SEO',
    description: 'Get quality, keyword-rich Google Reviews that boost your local SEO. Generate unique, detailed Google Reviews with AI. No credit card needed. Only Rs. 249/- per month. Start free today!',
    url: `${SITE_URL}/products/pinnacle-assist/`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/ogimage-pinnacle-assist.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Pinnacle Assist - AI-Powered Google Review Generation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Assist - AI-Powered Google Review Generation',
    description: 'Get quality, keyword-rich Google Reviews that boost your local SEO. Generate unique, detailed Google Reviews with AI. Only Rs. 249/- per month.',
    images: [`${SITE_URL}/ogimage-pinnacle-assist.jpeg`],
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

const breadcrumbItems = [
  { name: 'Home', url: `${SITE_URL}/` },
  { name: 'Products', url: `${SITE_URL}/products/` },
  { name: 'Pinnacle Assist', url: `${SITE_URL}/products/pinnacle-assist/` }
]

export default function PinnacleAssist() {
  return (
    <>
      <BreadcrumbSchemaServer items={breadcrumbItems} />
      <ProductSchemaServer
        name="Pinnacle Assist"
        description="AI-powered Google Review generation tool that creates unique, keyword-rich reviews for your Google Business Profile. Boost local SEO rankings with quality, detailed reviews. No credit card needed. Only Rs. 249/- per month."
        url={`${SITE_URL}/products/pinnacle-assist/`}
        image={`${SITE_URL}/ogimage-pinnacle-assist.jpeg`}
        price="249"
        priceCurrency="INR"
        availability="https://schema.org/InStock"
        category="Software Application"
        productId="pinnacle-assist"
        sku="PA-001"
      />
      <PinnacleAssistPage />
    </>
  )
}


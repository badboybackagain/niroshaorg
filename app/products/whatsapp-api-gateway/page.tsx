import WhatsAppAPIGatewayPage from '@/page-components/WhatsAppAPIGatewayPage'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'WhatsApp API Gateway - Unlimited Messages, No Fees | Team Nirosha',
  description: 'Send unlimited WhatsApp messages from your existing number. No per-message fees, no template approvals, no verification needed. Start for FREE. Integrate with any application - contact forms, e-commerce, CRM, and more.',
  keywords: [
    'WhatsApp API Gateway',
    'WhatsApp API',
    'WhatsApp Business API',
    'WhatsApp messaging API',
    'WhatsApp automation',
    'WhatsApp integration',
    'WhatsApp API alternative',
    'WhatsApp API without fees',
    'WhatsApp API India',
    'WhatsApp API gateway service',
    'WhatsApp API for websites',
    'WhatsApp API for e-commerce',
    'WhatsApp API for contact forms',
    'WhatsApp API pricing',
    'free WhatsApp API',
    'WhatsApp API gateway',
    'WhatsApp messaging service',
    'WhatsApp business messaging',
    'WhatsApp API integration',
    'WhatsApp API documentation'
  ],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: `${SITE_URL}/products/whatsapp-api-gateway/`,
  },
  openGraph: {
    title: 'WhatsApp API Gateway - Unlimited Messages, No Fees | Team Nirosha',
    description: 'Send unlimited WhatsApp messages from your existing number. No per-message fees, no template approvals. Start for FREE.',
    url: `${SITE_URL}/products/whatsapp-api-gateway/`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/ogimage.png`,
        width: 1200,
        height: 630,
        alt: 'WhatsApp API Gateway - Team Nirosha',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp API Gateway - Unlimited Messages, No Fees',
    description: 'Send unlimited WhatsApp messages from your existing number. No per-message fees, no template approvals. Start for FREE.',
    images: [`${SITE_URL}/ogimage.png`],
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
  { name: 'WhatsApp API Gateway', url: `${SITE_URL}/products/whatsapp-api-gateway/` }
]

export default function WhatsAppAPIGateway() {
  return (
    <>
      <BreadcrumbSchemaServer items={breadcrumbItems} />
      <WhatsAppAPIGatewayPage />
    </>
  )
}


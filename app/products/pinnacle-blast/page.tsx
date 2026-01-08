import PinnacleBlastPage from '@/page-components/PinnacleBlastPage'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'
import ProductSchemaServer from '@/components/ProductSchemaServer'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Pinnacle Blast - Email Campaign Solution | Team Nirosha',
  description: 'Professional email newsletter solution that lets you send bulk emails via Amazon SES. Pay only when you send, with incredibly low rates. Unlimited subscribers and high deliverability rates.',
  keywords: [
    'Pinnacle Blast',
    'Email Campaign Solution',
    'Email Marketing Software',
    'Newsletter Software',
    'Email Newsletter Platform',
    'Bulk Email Sending',
    'Amazon SES Email',
    'Email Marketing Tool',
    'Email Campaign Management',
    'Email Automation',
    'Email Marketing Platform',
    'Newsletter Management',
    'Email Marketing Service',
    'Email Campaign Software',
    'Email Marketing Solution',
    'Email Marketing Automation',
    'Email Segmentation',
    'Email Analytics',
    'Email Marketing India'
  ],
  authors: [{ name: 'Team Nirosha' }],
  creator: 'Team Nirosha',
  publisher: 'Team Nirosha',
  alternates: {
    canonical: `${SITE_URL}/products/pinnacle-blast/`,
  },
  openGraph: {
    title: 'Pinnacle Blast - Email Campaign Solution | Team Nirosha',
    description: 'Professional email newsletter solution. Pay only when you send, with incredibly low rates. Unlimited subscribers.',
    url: `${SITE_URL}/products/pinnacle-blast/`,
    siteName: 'Team Nirosha',
    images: [
      {
        url: `${SITE_URL}/ogimage.png`,
        width: 1200,
        height: 630,
        alt: 'Pinnacle Blast - Team Nirosha',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pinnacle Blast - Email Campaign Solution',
    description: 'Professional email newsletter solution. Pay only when you send, with incredibly low rates. Unlimited subscribers.',
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
  { name: 'Pinnacle Blast', url: `${SITE_URL}/products/pinnacle-blast/` }
]

export default function PinnacleBlast() {
  return (
    <>
      <BreadcrumbSchemaServer items={breadcrumbItems} />
      <ProductSchemaServer
        name="Pinnacle Blast"
        description="Professional email newsletter solution that lets you send bulk emails via Amazon SES. Pay only when you send, with incredibly low rates. Unlimited subscribers and high deliverability rates."
        url={`${SITE_URL}/products/pinnacle-blast/`}
        image={`${SITE_URL}/ogimage.png`}
        priceCurrency="INR"
        availability="https://schema.org/InStock"
        category="Software Application"
        productId="pinnacle-blast"
        sku="PB-001"
      />
      <PinnacleBlastPage />
    </>
  )
}


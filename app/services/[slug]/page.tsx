import ServiceDetailPage from '@/page-components/ServiceDetailPage'
import { servicesData } from '@/data/servicesData'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'
import ServiceSchemaServer from '@/components/ServiceSchemaServer'

const SITE_URL = 'https://nirosha.org'

export async function generateMetadata({ params }): Promise<Metadata> {
  // In Next.js 15+, params might be a Promise, so we await it
  const resolvedParams = await params
  const service = servicesData[resolvedParams.slug]

  if (!service) {
    return {
      title: 'Service Not Found | Team Nirosha',
      description: 'The service you are looking for does not exist.',
    }
  }

  const title = `${service.title} Services | Team Nirosha`
  const description = service.heroDescription || 
    (Array.isArray(service.description) ? service.description[0] : service.description) ||
    `Professional ${service.title} services by Team Nirosha`
  const keywords = service.seoKeywords || service.title
  const url = `${SITE_URL}/services/${resolvedParams.slug}`

  return {
    title,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    authors: [{ name: 'Team Nirosha' }],
    creator: 'Team Nirosha',
    publisher: 'Team Nirosha',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Team Nirosha',
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 600,
          height: 60,
          alt: `${service.title} Services`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
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
}

export default async function ServiceDetail({ params }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  // In Next.js 16, params should be synchronous but we await for compatibility
  const resolvedParams = params instanceof Promise ? await params : params
  const service = servicesData[resolvedParams.slug]
  
  const breadcrumbItems = service ? [
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${resolvedParams.slug}` }
  ] : []

  return (
    <>
      {service && <ServiceSchemaServer service={service} slug={resolvedParams.slug} />}
      {breadcrumbItems.length > 0 && <BreadcrumbSchemaServer items={breadcrumbItems} />}
      <ServiceDetailPage params={resolvedParams} />
    </>
  )
}

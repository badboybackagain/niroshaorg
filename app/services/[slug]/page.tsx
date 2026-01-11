import ServiceDetailPage from '@/page-components/ServiceDetailPage'
import { servicesData } from '@/data/servicesData'
import { Metadata } from 'next'
import BreadcrumbSchemaServer from '@/components/BreadcrumbSchemaServer'
import ServiceSchemaServer from '@/components/ServiceSchemaServer'
import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://nirosha.org'

// Function to get random websites for showcase
function getRandomWebsites(count = 6) {
  const websitesDir = path.join(process.cwd(), 'public/images/portfolio/websites')
  let websites: { id: string; image: string; thumbnail: string; full: string }[] = []

  try {
    if (fs.existsSync(websitesDir)) {
      const files = fs.readdirSync(websitesDir)
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp']

      websites = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => {
          const basename = path.parse(file).name
          return {
            id: file,
            image: `/images/portfolio/websites/${file}`,
            thumbnail: `/cache/portfolio/websites/${basename}-thumbnail.webp`,
            full: `/cache/portfolio/websites/${basename}-large.webp`
          }
        })
      
      // Fisher-Yates shuffle algorithm for better random distribution
      for (let i = websites.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [websites[i], websites[j]] = [websites[j], websites[i]]
      }
      
      return websites.slice(0, Math.min(count, websites.length))
    }
  } catch (error) {
    console.error('Error reading website images:', error)
  }

  return websites.slice(0, Math.min(count, websites.length))
}

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
  const url = `${SITE_URL}/services/${resolvedParams.slug}/`

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
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Services', url: `${SITE_URL}/services/` },
    { name: service.title, url: `${SITE_URL}/services/${resolvedParams.slug}/` }
  ] : []

  // Get random websites for web-development page showcase
  const showcaseWebsites = resolvedParams.slug === 'web-development' 
    ? getRandomWebsites(6) 
    : []

  return (
    <>
      {service && <ServiceSchemaServer service={service} slug={resolvedParams.slug} />}
      {breadcrumbItems.length > 0 && <BreadcrumbSchemaServer items={breadcrumbItems} />}
      <ServiceDetailPage params={resolvedParams} showcaseWebsites={showcaseWebsites} />
    </>
  )
}

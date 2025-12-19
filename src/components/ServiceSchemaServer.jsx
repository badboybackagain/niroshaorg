/**
 * Server-side Service Schema component for Google SEO
 * Generates JSON-LD structured data for service pages
 * This is a server component that should be used in Next.js App Router pages
 */

const SITE_URL = 'https://nirosha.org'

export default function ServiceSchemaServer({ service, slug }) {
  if (!service) {
    return null
  }

  const currentUrl = `${SITE_URL}/services/${slug || service.slug}`

  const description = service.heroDescription || 
    (Array.isArray(service.description) ? service.description[0] : service.description) ||
    `Professional ${service.title} services by Team Nirosha`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} Services`,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Team Nirosha',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hadapsar',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      },
      telephone: '+919403891938',
      email: 'info@nirosha.org'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    serviceType: service.title,
    url: currentUrl,
    offers: {
      '@type': 'Offer',
      url: currentUrl,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString()
    }
  }

  // Add service features if available
  if (service.features && service.features.length > 0) {
    schema.hasFeature = service.features.map(feature => ({
      '@type': 'ServiceFeature',
      name: feature.title,
      description: feature.description
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

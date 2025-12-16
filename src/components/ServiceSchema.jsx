import React, { useEffect } from 'react'

/**
 * Service Schema component for Google SEO
 * Generates JSON-LD structured data for service pages
 */
const ServiceSchema = ({ service }) => {
  useEffect(() => {
    if (!service) {
      return
    }

    const currentUrl = typeof window !== 'undefined' 
      ? window.location.href 
      : `https://nirosha.org/services/${service.slug}`

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} Services`,
      description: service.heroDescription || service.description?.[0] || `Professional ${service.title} services by Team Nirosha`,
      provider: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        url: 'https://nirosha.org',
        logo: 'https://nirosha.org/logo.png',
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

    // Remove existing service schema if any
    const existingScript = document.querySelector('script[data-service-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-service-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-service-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [service])

  return null
}

export default ServiceSchema

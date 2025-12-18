'use client'

import React, { useEffect } from 'react'

/**
 * Organization Schema component for Google SEO
 * Generates JSON-LD structured data for the organization/business
 * Includes LocalBusiness properties for local SEO
 */
const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Team Nirosha',
      alternateName: 'Nirosha Enterprises',
      url: 'https://nirosha.org',
      logo: 'https://nirosha.org/logo.png',
      image: 'https://nirosha.org/logo.png',
      description: 'Professional digital agency offering web development, SEO, digital marketing, branding, e-commerce solutions, automation, SaaS, and cloud infrastructure services. Expert team delivering results-driven solutions for businesses.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hadapsar',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '18.47906567043733',
        longitude: '73.9306516769688'
      },
      telephone: '+919403891938',
      email: 'info@nirosha.org',
      priceRange: '$$',
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '18.47906567043733',
          longitude: '73.9306516769688'
        },
        geoRadius: {
          '@type': 'Distance',
          name: 'Worldwide'
        }
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom websites and web applications that drive results',
              url: 'https://nirosha.org/services/web-development'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Services',
              description: 'Comprehensive SEO strategies to improve search rankings and drive organic traffic',
              url: 'https://nirosha.org/services/seo-services'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing',
              description: 'End-to-end digital marketing services including PPC, email marketing, and content marketing',
              url: 'https://nirosha.org/services/digital-marketing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Branding & Design',
              description: 'Logo design, brand identity, UI/UX design, and graphic design services',
              url: 'https://nirosha.org/services/branding-design'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO',
              description: 'Local search optimization to dominate Google Maps and near me searches',
              url: 'https://nirosha.org/services/local-seo'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Marketing',
              description: 'Social media strategy, content creation, and management services',
              url: 'https://nirosha.org/services/social-media-marketing'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-commerce Solutions',
              description: 'Complete e-commerce development and optimization services',
              url: 'https://nirosha.org/services/ecommerce-solutions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Maintenance',
              description: 'Website maintenance, security updates, and ongoing support services',
              url: 'https://nirosha.org/services/web-maintenance'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design',
              description: 'User interface and user experience design services',
              url: 'https://nirosha.org/services/ui-ux-design'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automation & SaaS',
              description: 'Business automation, SaaS development, and workflow optimization',
              url: 'https://nirosha.org/services/automation-saas'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud Infrastructure',
              description: 'Cloud hosting, migration, and infrastructure management services',
              url: 'https://nirosha.org/services/cloud-infrastructure'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Services',
              description: 'Content writing, copywriting, video production, and content strategy',
              url: 'https://nirosha.org/services/content-services'
            }
          }
        ]
      },
      sameAs: [
        'https://www.facebook.com/niroshaorg',
        'https://www.linkedin.com/company/niroshaorg',
        'https://twitter.com/niroshaorg',
        'https://www.instagram.com/niroshaorg'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+919403891938',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi']
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '145',
        bestRating: '5',
        worstRating: '1'
      }
    }

    // Remove existing organization schema if any
    const existingScript = document.querySelector('script[data-organization-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-organization-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-organization-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return null
}

export default OrganizationSchema

'use client'

import React, { useEffect } from 'react'

/**
 * Website Schema component for Google SEO
 * Generates JSON-LD structured data for the website
 */
const WebsiteSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Team Nirosha',
      alternateName: 'Nirosha Enterprises',
      url: 'https://nirosha.org',
      description: 'Professional digital agency offering web development, SEO, digital marketing, branding, e-commerce solutions, automation, SaaS, and cloud infrastructure services.',
      publisher: {
        '@type': 'Organization',
        name: 'Team Nirosha',
        logo: {
          '@type': 'ImageObject',
          url: 'https://nirosha.org/logo.png'
        }
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://nirosha.org/services?search={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      },
      inLanguage: 'en-US',
      copyrightHolder: {
        '@type': 'Organization',
        name: 'Team Nirosha'
      },
      copyrightYear: new Date().getFullYear()
    }

    // Remove existing website schema if any
    const existingScript = document.querySelector('script[data-website-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-website-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-website-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return null
}

export default WebsiteSchema

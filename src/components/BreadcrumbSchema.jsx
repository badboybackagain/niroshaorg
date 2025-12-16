import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Breadcrumb Schema component for Google SEO
 * Generates JSON-LD structured data for breadcrumb navigation
 */
const BreadcrumbSchema = ({ items }) => {
  const location = useLocation()

  useEffect(() => {
    // If custom items are provided, use them; otherwise generate from pathname
    let breadcrumbItems = items

    if (!breadcrumbItems) {
      const pathSegments = location.pathname.split('/').filter(Boolean)
      breadcrumbItems = [
        {
          name: 'Home',
          url: 'https://nirosha.org'
        }
      ]

      let currentPath = ''
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`
        const name = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        breadcrumbItems.push({
          name: name,
          url: `https://nirosha.org${currentPath}`
        })
      })
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }

    // Remove existing breadcrumb schema if any
    const existingScript = document.querySelector('script[data-breadcrumb-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [location.pathname, items])

  return null
}

export default BreadcrumbSchema

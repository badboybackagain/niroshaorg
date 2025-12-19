/**
 * Server-side Breadcrumb Schema component for Google SEO
 * Generates JSON-LD structured data for breadcrumb navigation
 * This is a server component that should be used in Next.js App Router pages
 */

const SITE_URL = 'https://nirosha.org'

export default function BreadcrumbSchemaServer({ items }) {
  if (!items || items.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

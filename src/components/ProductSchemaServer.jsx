/**
 * Server-side Product Schema component for Google SEO
 * Generates JSON-LD structured data for product pages
 * Based on Schema.org Product specification: https://schema.org/Product
 * This is a server component that should be used in Next.js App Router pages
 */

const SITE_URL = 'https://nirosha.org'

export default function ProductSchemaServer({ 
  name, 
  description, 
  url, 
  image,
  price = undefined,
  priceCurrency = 'INR',
  availability = 'https://schema.org/InStock',
  category = undefined,
  productId = undefined,
  sku = undefined,
  mpn = undefined,
  brand = 'Nirosha Enterprises'
}) {
  if (!name || !description || !url) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    brand: {
      '@type': 'Organization',
      name: brand,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`
    },
    manufacturer: {
      '@type': 'Organization',
      name: brand,
      url: SITE_URL
    },
    image: image || `${SITE_URL}/logo.png`,
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency,
      availability,
      seller: {
        '@type': 'Organization',
        name: brand,
        url: SITE_URL
      },
      validFrom: new Date().toISOString()
    }
  }

  // Add price if provided
  if (price !== undefined && price !== null) {
    // Handle different price formats (string with currency symbols, numbers, etc.)
    let numericPrice = price
    if (typeof price === 'string') {
      // Extract numeric value from strings like "Rs. 249/-", "₹249", "$99.99", etc.
      numericPrice = parseFloat(price.replace(/[^\d.]/g, ''))
    }
    if (!isNaN(numericPrice) && numericPrice > 0) {
      schema.offers.price = numericPrice.toString()
    }
  }

  // Add category if provided
  if (category) {
    schema.category = category
  }

  // Add product identifiers if provided
  if (productId) {
    schema.productID = productId
  }

  if (sku) {
    schema.sku = sku
  }

  if (mpn) {
    schema.mpn = mpn
  }

  // Add aggregateRating if applicable (can be added later)
  // schema.aggregateRating = {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.5',
  //   reviewCount: '100'
  // }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}


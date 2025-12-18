// Map blog categories to service names for contact page pre-selection
export const categoryToServiceMap = {
  'Web Development': 'Web Development',
  'Branding & Design': 'Branding & Design',
  'SEO Services': 'SEO Services',
  'Local SEO': 'Local SEO',
  'Social Media Marketing': 'Social Media Marketing',
  'Digital Marketing': 'Digital Marketing',
  'Content Services': 'Content Services',
  'E-commerce Solutions': 'E-commerce Solutions',
  'Web Maintenance': 'Web Maintenance',
  'UI/UX Design': 'UI/UX Design',
  'Automation & SaaS': 'Automation & SaaS',
  'Cloud & Infrastructure': 'Cloud & Infrastructure'
}

/**
 * Get service name from blog category
 */
export const getServiceFromCategory = (category) => {
  return categoryToServiceMap[category] || category
}

/**
 * Process blog content HTML to update contact links with service parameter
 * and add IDs to headings for table of contents
 */
export const processBlogContent = (content, category) => {
  if (!content) return content
  
  let processedContent = content
  
  // Add IDs to headings (h2, h3, h4) for table of contents
  let headingIndex = 0
  processedContent = processedContent.replace(
    /<(h[2-4])>([^<]+)<\/h[2-4]>/gi,
    (match, tag, text) => {
      const id = `heading-${headingIndex}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
      headingIndex++
      return `<${tag} id="${id}">${text}</${tag}>`
    }
  )
  
  // Update contact links with service parameter
  if (category) {
    const serviceName = getServiceFromCategory(category)
    const encodedService = encodeURIComponent(serviceName)
    
    processedContent = processedContent.replace(
      /href=["']\/contact["']/gi,
      `href="/contact?service=${encodedService}"`
    )
  }
  
  return processedContent
}




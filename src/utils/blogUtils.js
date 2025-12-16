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
 */
export const processBlogContent = (content, category) => {
  if (!content || !category) return content
  
  const serviceName = getServiceFromCategory(category)
  const encodedService = encodeURIComponent(serviceName)
  
  // Replace /contact links with /contact?service=ServiceName
  return content.replace(
    /href=["']\/contact["']/gi,
    `href="/contact?service=${encodedService}"`
  )
}



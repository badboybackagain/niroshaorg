/**
 * Convert category name to SEO-friendly slug
 * Example: "Web Development" -> "web-development"
 */
export function categoryToSlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, 'and') // Replace & with 'and'
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
}

/**
 * Convert slug back to category name
 * Example: "web-development" -> "Web Development"
 */
export function slugToCategory(slug) {
  const categoryMap = {
    'web-development': 'Web Development',
    'branding-and-design': 'Branding & Design',
    'seo-services': 'SEO Services',
    'local-seo': 'Local SEO',
    'social-media-marketing': 'Social Media Marketing',
    'digital-marketing': 'Digital Marketing',
    'content-services': 'Content Services',
    'e-commerce-solutions': 'E-commerce Solutions',
    'web-maintenance': 'Web Maintenance',
    'ui-ux-design': 'UI/UX Design',
    'automation-and-saas': 'Automation & SaaS',
    'cloud-and-infrastructure': 'Cloud & Infrastructure'
  }
  
  return categoryMap[slug] || slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}


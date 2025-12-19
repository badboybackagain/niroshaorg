import { servicesData } from '@/data/servicesData'

/**
 * Extract service slugs from servicesData
 * Returns an array of service slugs
 */
export function extractServiceSlugs(): string[] {
  return Object.keys(servicesData)
}

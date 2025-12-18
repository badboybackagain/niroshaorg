import { Suspense } from 'react'
import ServicesPage from '@/page-components/ServicesPage'

export const metadata = {
  title: 'Our Services - Team Nirosha | Digital Agency',
  description: 'Comprehensive digital services including web development, SEO, digital marketing, branding, e-commerce solutions, automation, and cloud infrastructure.',
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPage />
    </Suspense>
  )
}

import { Suspense } from 'react'
import SearchPage from '@/page-components/SearchPage'
import { Metadata } from 'next'

const SITE_URL = 'https://nirosha.org'

export const metadata: Metadata = {
  title: 'Search - Team Nirosha | Find Services, Products & Blog Posts',
  description: 'Search across our services, products, and blog posts to find exactly what you need.',
  keywords: ['search', 'find services', 'find products', 'blog search'],
  authors: [{ name: 'Team Nirosha' }],
  alternates: {
    canonical: `${SITE_URL}/search/`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  )
}


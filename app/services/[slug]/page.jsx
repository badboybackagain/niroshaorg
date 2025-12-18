import ServiceDetailPage from '@/page-components/ServiceDetailPage'

export async function generateMetadata({ params }) {
  // In Next.js 15+, params might be a Promise, so we await it
  const resolvedParams = await params
  // You can fetch service data here for dynamic metadata
  return {
    title: `Service Details - Team Nirosha`,
    description: 'Professional digital services by Team Nirosha',
  }
}

export default async function ServiceDetail({ params }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  // In Next.js 16, params should be synchronous but we await for compatibility
  const resolvedParams = params instanceof Promise ? await params : params
  console.log('ServiceDetail page - resolvedParams:', resolvedParams)
  return <ServiceDetailPage params={resolvedParams} />
}

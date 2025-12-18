import BlogDetailPage from '@/page-components/BlogDetailPage'

export async function generateMetadata({ params }) {
  // In Next.js 15+, params might be a Promise, so we await it
  const resolvedParams = await params
  // You can fetch blog data here for dynamic metadata
  return {
    title: `Blog Post - Team Nirosha`,
    description: 'Expert insights and strategies for digital growth',
  }
}

export default async function BlogDetail({ params }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  const resolvedParams = await params
  return <BlogDetailPage params={resolvedParams} />
}

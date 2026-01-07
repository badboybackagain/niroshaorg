'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { FiSearch, FiX, FiArrowRight, FiTag, FiFileText, FiPackage } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { servicesData } from '../data/servicesData.jsx'
import { blogPosts } from '../data/blogData.js'
import BlogImage from '../components/BlogImage'

// Products data
const productsData = [
  {
    slug: 'whatsapp-api-gateway',
    title: 'WhatsApp API Gateway',
    description: 'Send unlimited WhatsApp messages from your existing number. No per-message fees, no template approvals, no verification needed. Start for FREE.',
    keywords: ['WhatsApp API', 'WhatsApp Business API', 'WhatsApp messaging', 'WhatsApp automation', 'WhatsApp integration'],
    type: 'product',
    url: '/products/whatsapp-api-gateway/'
  },
  {
    slug: 'pinnacle-blast',
    title: 'Pinnacle Blast',
    description: 'Professional email newsletter solution that lets you send bulk emails via Amazon SES. Pay only when you send, with incredibly low rates. Unlimited subscribers and high deliverability rates.',
    keywords: ['Email Campaign', 'Email Marketing', 'Newsletter Software', 'Bulk Email', 'Email Automation'],
    type: 'product',
    url: '/products/pinnacle-blast/'
  }
]

const SearchPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchQuery = searchParams.get('q') || ''

  // Get all services
  const allServices = useMemo(() => {
    return Object.entries(servicesData).map(([slug, data]) => ({
      ...data,
      slug,
      type: 'service',
      url: `/services/${slug}/`
    }))
  }, [])

  // Search function
  const searchInContent = (content, query) => {
    if (!query.trim()) return false
    const lowerQuery = query.toLowerCase().trim()
    
    // Search in title
    if (content.title?.toLowerCase().includes(lowerQuery)) return true
    
    // Search in description (handle both string and array)
    if (Array.isArray(content.description)) {
      if (content.description.some(desc => 
        typeof desc === 'string' && desc.toLowerCase().includes(lowerQuery)
      )) return true
    } else if (typeof content.description === 'string') {
      if (content.description.toLowerCase().includes(lowerQuery)) return true
    }
    
    if (content.heroDescription?.toLowerCase().includes(lowerQuery)) return true
    if (content.excerpt?.toLowerCase().includes(lowerQuery)) return true
    
    // Search in tagline
    if (content.tagline?.toLowerCase().includes(lowerQuery)) return true
    
    // Search in overview
    if (content.overview?.toLowerCase().includes(lowerQuery)) return true
    
    // Search in detailed items
    if (content.detailedItems?.some(item => 
      typeof item === 'string' && item.toLowerCase().includes(lowerQuery)
    )) return true
    
    // Search in benefits
    if (content.benefits?.some(benefit => 
      typeof benefit === 'string' && benefit.toLowerCase().includes(lowerQuery)
    )) return true
    
    // Search in SEO keywords
    if (typeof content.seoKeywords === 'string' && content.seoKeywords.toLowerCase().includes(lowerQuery)) return true
    if (content.keywords?.some(keyword => 
      typeof keyword === 'string' && keyword.toLowerCase().includes(lowerQuery)
    )) return true
    
    // Search in category
    if (content.category?.toLowerCase().includes(lowerQuery)) return true
    
    // Search in content (for blogs)
    if (typeof content.content === 'string' && content.content.toLowerCase().includes(lowerQuery)) return true
    
    return false
  }

  // Filter results
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return {
        services: [],
        products: [],
        blogs: [],
        total: 0
      }
    }

    const query = searchQuery.toLowerCase().trim()
    
    const services = allServices.filter(service => searchInContent(service, query))
    const products = productsData.filter(product => searchInContent(product, query))
    const blogs = blogPosts.filter(blog => searchInContent(blog, query))

    return {
      services,
      products,
      blogs,
      total: services.length + products.length + blogs.length
    }
  }, [searchQuery, allServices])

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <section className="section search-page">
      <div className="container">
        <div 
          ref={titleRef}
          className={`search-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          {searchQuery ? (
            <>
              <h1 className="page-title">
                Search Results for "{searchQuery}"
              </h1>
              <p className="page-subtitle">
                Found {filteredResults.total} result{filteredResults.total !== 1 ? 's' : ''} 
                {filteredResults.total > 0 && (
                  <>
                    {' '}({filteredResults.services.length} service{filteredResults.services.length !== 1 ? 's' : ''}, 
                    {' '}{filteredResults.products.length} product{filteredResults.products.length !== 1 ? 's' : ''}, 
                    {' '}{filteredResults.blogs.length} blog{filteredResults.blogs.length !== 1 ? 's' : ''})
                  </>
                )}
              </p>
            </>
          ) : (
            <>
              <h1 className="page-title">Search</h1>
              <p className="page-subtitle">Search across our services, products, and blog posts</p>
            </>
          )}
        </div>

        {searchQuery && (
          <div className="search-results">
            {/* Services Results */}
            {filteredResults.services.length > 0 && (
              <div className="search-results-section">
                <div className="search-results-section-header">
                  <FiFileText className="section-icon" />
                  <h2>Services ({filteredResults.services.length})</h2>
                </div>
                <div className="search-results-grid">
                  {filteredResults.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.url}
                      className="search-result-card"
                    >
                      <div className="search-result-card-icon">
                        <FiFileText />
                      </div>
                      <div className="search-result-card-content">
                        <h3 className="search-result-card-title">{service.title}</h3>
                        <p className="search-result-card-description">
                          {service.heroDescription || service.description?.[0] || service.tagline || ''}
                        </p>
                        <div className="search-result-card-footer">
                          <span className="search-result-card-type">Service</span>
                          <FiArrowRight className="search-result-card-arrow" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Products Results */}
            {filteredResults.products.length > 0 && (
              <div className="search-results-section">
                <div className="search-results-section-header">
                  <FiPackage className="section-icon" />
                  <h2>Products ({filteredResults.products.length})</h2>
                </div>
                <div className="search-results-grid">
                  {filteredResults.products.map((product) => (
                    <Link
                      key={product.slug}
                      href={product.url}
                      className="search-result-card"
                    >
                      <div className="search-result-card-icon">
                        <FiPackage />
                      </div>
                      <div className="search-result-card-content">
                        <h3 className="search-result-card-title">{product.title}</h3>
                        <p className="search-result-card-description">
                          {product.description}
                        </p>
                        <div className="search-result-card-footer">
                          <span className="search-result-card-type">Product</span>
                          <FiArrowRight className="search-result-card-arrow" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Results */}
            {filteredResults.blogs.length > 0 && (
              <div className="search-results-section">
                <div className="search-results-section-header">
                  <FiTag className="section-icon" />
                  <h2>Blog Posts ({filteredResults.blogs.length})</h2>
                </div>
                <div className="search-results-grid">
                  {filteredResults.blogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/blog/${blog.slug}`}
                      className="search-result-card search-result-card-blog"
                    >
                      <div className="search-result-card-image">
                        {blog.imageSlug ? (
                          <BlogImage 
                            slug={blog.imageSlug} 
                            size="thumbnail" 
                            alt={blog.imageAlt || blog.title}
                          />
                        ) : (
                          <img 
                            src={blog.featuredImage || '/cache/blog/placeholder.jpg'} 
                            alt={blog.imageAlt || blog.title}
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="search-result-card-content">
                        <div className="search-result-card-meta">
                          <span className="search-result-card-category">{blog.category}</span>
                          <span className="search-result-card-date">{formatDate(blog.publishDate)}</span>
                        </div>
                        <h3 className="search-result-card-title">{blog.title}</h3>
                        <p className="search-result-card-description">
                          {blog.excerpt || blog.seoDescription || ''}
                        </p>
                        <div className="search-result-card-footer">
                          <span className="search-result-card-type">Blog Post</span>
                          <FiArrowRight className="search-result-card-arrow" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredResults.total === 0 && (
              <div className="no-results">
                <FiSearch className="no-results-icon" />
                <h2>No results found</h2>
                <p>We couldn't find anything matching "{searchQuery}"</p>
                <p className="no-results-suggestion">
                  Try different keywords or check your spelling
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchPage


'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { blogPosts, blogCategories, getFeaturedBlogs, getRecentBlogs } from '../data/blogData'
import BlogImage from '../components/BlogImage'
import BlogSchema from '../components/BlogSchema'
import { categoryToSlug } from '../utils/categorySlug'

// Category color mapping
const getCategoryColor = (category) => {
  const colorMap = {
    'Web Development': '#e74c3c',
    'Branding & Design': '#e74c3c',
    'SEO Services': '#f39c12',
    'Local SEO': '#f39c12',
    'Social Media Marketing': '#9b59b6',
    'Digital Marketing': '#9b59b6',
    'Content Services': '#e67e22',
    'E-commerce Solutions': '#3498db',
    'Web Maintenance': '#3498db',
    'UI/UX Design': '#e74c3c',
    'Automation & SaaS': '#16a085',
    'Cloud & Infrastructure': '#16a085'
  }
  return colorMap[category] || '#e74c3c'
}

const BlogCard = ({ blog, index, layout = 'vertical' }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const isHorizontal = layout === 'horizontal'

  return (
    <Link
      href={`/blog/${blog.slug}`}
      ref={ref}
      className={`blog-card ${isHorizontal ? 'blog-card-horizontal' : ''} ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ '--animation-delay': `${index * 100}` }}
      suppressHydrationWarning
    >
      <div className="blog-card-image">
        {blog.imageSlug ? (
          <BlogImage 
            slug={blog.imageSlug} 
            size="thumbnail" 
            alt={blog.imageAlt || blog.title}
            className="blog-card-img"
          />
        ) : (
          <img 
            src={blog.featuredImage || '/cache/blog/placeholder.jpg'} 
            alt={blog.imageAlt || blog.title}
            loading="lazy"
          />
        )}
        <div className="blog-card-category" style={{ background: getCategoryColor(blog.category) }}>
          <span>{blog.category}</span>
        </div>
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        <div className="blog-card-meta">
          <div className="blog-author-info">
            <div className="blog-author-avatar">
              {blog.author.charAt(0)}
            </div>
            <span className="blog-author-name">{blog.author}</span>
          </div>
          <span className="blog-meta-separator">•</span>
          <span className="blog-meta-date">{formatDate(blog.publishDate)}</span>
          <span className="blog-meta-separator">•</span>
          <span className="blog-meta-readtime">{blog.readTime}</span>
        </div>
      </div>
    </Link>
  )
}

const HeroFeaturedCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <Link href={`/blog/${blog.slug}`} className="hero-featured-main" suppressHydrationWarning>
      <div className="hero-featured-image">
        {blog.imageSlug ? (
          <BlogImage 
            slug={blog.imageSlug} 
            size="featured" 
            alt={blog.imageAlt || blog.title}
            className="hero-featured-img"
          />
        ) : (
          <img 
            src={blog.featuredImage || '/cache/blog/placeholder.jpg'} 
            alt={blog.imageAlt || blog.title}
            loading="lazy"
          />
        )}
        <div className="hero-featured-category" style={{ background: getCategoryColor(blog.category) }}>
          <span>{blog.category}</span>
        </div>
        <div className="hero-featured-content">
          <h2 className="hero-featured-title">{blog.title}</h2>
        </div>
      </div>
    </Link>
  )
}

const HeroSideCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <Link href={`/blog/${blog.slug}`} className="hero-side-card" suppressHydrationWarning>
      <div className="hero-side-image">
        {blog.imageSlug ? (
          <BlogImage 
            slug={blog.imageSlug} 
            size="thumbnail" 
            alt={blog.imageAlt || blog.title}
            className="hero-side-img"
          />
        ) : (
          <img 
            src={blog.featuredImage || '/cache/blog/placeholder.jpg'} 
            alt={blog.imageAlt || blog.title}
            loading="lazy"
          />
        )}
      </div>
      <div className="hero-side-content">
        <h3 className="hero-side-title">{blog.title}</h3>
        <div className="hero-side-meta">
          <span className="hero-side-author">{blog.author}</span>
          <span className="blog-meta-separator">•</span>
          <span className="hero-side-date">{formatDate(blog.publishDate)}</span>
          <span className="blog-meta-separator">•</span>
          <span className="hero-side-readtime">{blog.readTime}</span>
        </div>
      </div>
    </Link>
  )
}

// Component that uses useSearchParams - must be wrapped in Suspense
const BlogListingContent = ({ initialCategory = null }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All')
  const [currentPage, setCurrentPage] = useState(1)
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [titleMounted, setTitleMounted] = useState(false)

  // Get page from URL (for pagination on category pages)
  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10)
    setCurrentPage(page)
    
    // Only read category from URL if not provided as prop (for backward compatibility)
    if (!initialCategory) {
      const category = searchParams.get('category') || 'All'
      setSelectedCategory(category)
    }
  }, [searchParams, initialCategory])

  // Make title visible immediately when category is selected
  useEffect(() => {
    if (selectedCategory !== 'All') {
      // Small delay to ensure DOM is ready, then make visible
      const timer = setTimeout(() => {
        setTitleMounted(true)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setTitleMounted(false)
    }
  }, [selectedCategory])

  const featuredBlogs = getFeaturedBlogs(4)
  const mainFeatured = featuredBlogs[0]
  const sideFeatured = featuredBlogs.slice(1, 4)
  
  // Get all posts - include ALL 13 posts in main listing
  // Featured blogs can appear in both hero section and main listing
  // Sort by publish date (newest first)
  const allPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
  
  const filteredBlogs = selectedCategory === 'All' 
    ? allPosts
    : [...blogPosts]
        .filter(blog => blog.category === selectedCategory)
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))

  // Pagination settings - show 6 blogs per page
  const postsPerPage = 6
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex)

  // Update URL when page or category changes - use SEO-friendly URLs
  const updateURL = (page, category) => {
    if (category !== 'All') {
      // Use SEO-friendly URL: /blog/category/web-development?page=2
      const categorySlug = categoryToSlug(category)
      const params = new URLSearchParams()
      if (page > 1) params.set('page', page.toString())
      const queryString = params.toString()
      router.push(`/blog/category/${categorySlug}${queryString ? `?${queryString}` : ''}`, { scroll: false })
    } else {
      // For "All" category, use /blog?page=2
      const params = new URLSearchParams()
      if (page > 1) params.set('page', page.toString())
      const queryString = params.toString()
      router.push(`/blog${queryString ? `?${queryString}` : ''}`, { scroll: false })
    }
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      updateURL(newPage, selectedCategory)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    updateURL(1, category)
  }

  // Reset to page 1 when category changes or if current page is invalid
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1)
      updateURL(1, selectedCategory)
    }
  }, [selectedCategory, totalPages])

  return (
    <>
      <BlogSchema />
      
      {/* Hero Section with Featured Blogs */}
      {mainFeatured && (
        <section className="blog-hero-section">
          <div className="container">
            <div className="hero-featured-layout">
              <HeroFeaturedCard blog={mainFeatured} />
              {sideFeatured.length > 0 && (
                <div className="hero-side-cards">
                  {sideFeatured.map((blog) => (
                    <HeroSideCard key={blog.id} blog={blog} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="section blog-listing-page">
        <div className="container">
          {selectedCategory === 'All' && (
            <div className="blog-page-header">
              <h1 className="blog-page-main-title">Digital Marketing & Web Development Blog | Team Nirosha</h1>
              <p className="blog-page-subtitle">Expert insights, tips, and strategies for growing your digital presence</p>
            </div>
          )}
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main-content">
              {selectedCategory === 'All' && (
                <>
                  {/* All Posts Grid - 3 columns, 6 per page */}
                  {paginatedBlogs.length > 0 && (
                    <div className="blog-section">
                      <div className="blog-grid">
                        {paginatedBlogs.map((blog, index) => (
                          <BlogCard key={blog.id} blog={blog} index={index} layout="vertical" />
                        ))}
                      </div>
                      
                      {/* Pagination */}
                      {filteredBlogs.length > postsPerPage && (
                        <div className="blog-pagination">
                          <div className="pagination-info">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} posts
                          </div>
                          
                          <div className="pagination-controls">
                            <button
                              className="pagination-button pagination-prev"
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                              aria-label="Previous page"
                            >
                              <FiChevronLeft />
                              <span>Previous</span>
                            </button>
                            
                            <div className="pagination-numbers">
                              {(() => {
                                const pages = []
                                const maxVisible = 7
                                let startPage = 1
                                let endPage = totalPages

                                if (totalPages > maxVisible) {
                                  if (currentPage <= 4) {
                                    endPage = maxVisible
                                  } else if (currentPage >= totalPages - 3) {
                                    startPage = totalPages - maxVisible + 1
                                  } else {
                                    startPage = currentPage - 3
                                    endPage = currentPage + 3
                                  }
                                }

                                if (startPage > 1) {
                                  pages.push(
                                    <button
                                      key={1}
                                      className="pagination-number"
                                      onClick={() => handlePageChange(1)}
                                    >
                                      1
                                    </button>
                                  )
                                  if (startPage > 2) {
                                    pages.push(
                                      <span key="ellipsis-start" className="pagination-ellipsis">...</span>
                                    )
                                  }
                                }

                                for (let i = startPage; i <= endPage; i++) {
                                  pages.push(
                                    <button
                                      key={i}
                                      className={`pagination-number ${currentPage === i ? 'active' : ''}`}
                                      onClick={() => handlePageChange(i)}
                                    >
                                      {i}
                                    </button>
                                  )
                                }

                                if (endPage < totalPages) {
                                  if (endPage < totalPages - 1) {
                                    pages.push(
                                      <span key="ellipsis-end" className="pagination-ellipsis">...</span>
                                    )
                                  }
                                  pages.push(
                                    <button
                                      key={totalPages}
                                      className="pagination-number"
                                      onClick={() => handlePageChange(totalPages)}
                                    >
                                      {totalPages}
                                    </button>
                                  )
                                }

                                return pages
                              })()}
                            </div>
                            
                            <button
                              className="pagination-button pagination-next"
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              aria-label="Next page"
                            >
                              <span>Next</span>
                              <FiChevronRight />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Filtered Results */}
              {selectedCategory !== 'All' && (
                <div className="blog-section">
                  <div 
                    ref={titleRef}
                    className={`blog-header ${titleVisible || titleMounted ? 'animate-fadeInUp' : ''}`}
                  >
                    <h1 className="page-title">{selectedCategory} Blog Posts | Team Nirosha</h1>
                    <p className="page-subtitle">
                      {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'} in this category
                    </p>
                  </div>

                  {paginatedBlogs.length > 0 ? (
                    <>
                      <div className="blog-grid">
                        {paginatedBlogs.map((blog, index) => (
                          <BlogCard key={blog.id} blog={blog} index={index} layout="vertical" />
                        ))}
                      </div>
                      
                      {/* Pagination */}
                      {filteredBlogs.length > postsPerPage && (
                        <div className="blog-pagination">
                          <div className="pagination-info">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} posts
                          </div>
                          
                          <div className="pagination-controls">
                            <button
                              className="pagination-button pagination-prev"
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage === 1}
                              aria-label="Previous page"
                            >
                              <FiChevronLeft />
                              <span>Previous</span>
                            </button>
                            
                            <div className="pagination-numbers">
                              {(() => {
                                const pages = []
                                const maxVisible = 7
                                let startPage = 1
                                let endPage = totalPages

                                if (totalPages > maxVisible) {
                                  if (currentPage <= 4) {
                                    endPage = maxVisible
                                  } else if (currentPage >= totalPages - 3) {
                                    startPage = totalPages - maxVisible + 1
                                  } else {
                                    startPage = currentPage - 3
                                    endPage = currentPage + 3
                                  }
                                }

                                if (startPage > 1) {
                                  pages.push(
                                    <button
                                      key={1}
                                      className="pagination-number"
                                      onClick={() => handlePageChange(1)}
                                    >
                                      1
                                    </button>
                                  )
                                  if (startPage > 2) {
                                    pages.push(
                                      <span key="ellipsis-start" className="pagination-ellipsis">...</span>
                                    )
                                  }
                                }

                                for (let i = startPage; i <= endPage; i++) {
                                  pages.push(
                                    <button
                                      key={i}
                                      className={`pagination-number ${currentPage === i ? 'active' : ''}`}
                                      onClick={() => handlePageChange(i)}
                                    >
                                      {i}
                                    </button>
                                  )
                                }

                                if (endPage < totalPages) {
                                  if (endPage < totalPages - 1) {
                                    pages.push(
                                      <span key="ellipsis-end" className="pagination-ellipsis">...</span>
                                    )
                                  }
                                  pages.push(
                                    <button
                                      key={totalPages}
                                      className="pagination-number"
                                      onClick={() => handlePageChange(totalPages)}
                                    >
                                      {totalPages}
                                    </button>
                                  )
                                }

                                return pages
                              })()}
                            </div>
                            
                            <button
                              className="pagination-button pagination-next"
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage === totalPages}
                              aria-label="Next page"
                            >
                              <span>Next</span>
                              <FiChevronRight />
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="no-blogs">
                      <p>No blog posts found in this category.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Category Filters */}
              <div className="blog-sidebar-section">
                <h3 className="blog-sidebar-title">Topics</h3>
                <div className="blog-filters-sidebar">
                  <button
                    className={`filter-button-sidebar ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('All')}
                    style={selectedCategory === 'All' ? { background: '#2563eb', color: '#fff' } : {}}
                  >
                    All Posts
                  </button>
                  {blogCategories.map(category => {
                    const categoryColor = getCategoryColor(category)
                    const isActive = selectedCategory === category
                    return (
                      <button
                        key={category}
                        className={`filter-button-sidebar ${isActive ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                        style={isActive ? { 
                          background: categoryColor, 
                          color: '#fff',
                          borderLeft: `4px solid ${categoryColor}`
                        } : {
                          borderLeft: `4px solid ${categoryColor}`
                        }}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

// Main component that wraps the content in Suspense
const BlogListingPage = ({ initialCategory = null }) => {
  return (
    <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading blog posts...</div>}>
      <BlogListingContent initialCategory={initialCategory} />
    </Suspense>
  )
}

export default BlogListingPage

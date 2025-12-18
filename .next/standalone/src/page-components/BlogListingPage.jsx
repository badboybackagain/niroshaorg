'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiUser } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { blogPosts, blogCategories, getFeaturedBlogs, getRecentBlogs } from '../data/blogData'
import BlogImage from '../components/BlogImage'
import BlogSchema from '../components/BlogSchema'

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
      style={{ animationDelay: `${index * 100}ms` }}
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
    <Link href={`/blog/${blog.slug}`} className="hero-featured-main">
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
    <Link href={`/blog/${blog.slug}`} className="hero-side-card">
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

const BlogListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  const featuredBlogs = getFeaturedBlogs(4)
  const mainFeatured = featuredBlogs[0]
  const sideFeatured = featuredBlogs.slice(1, 4)
  const featuredBlogIds = new Set(featuredBlogs.map(b => b.id))
  
  // Get all posts (excluding featured from main listing)
  const allPosts = blogPosts.filter(blog => !featuredBlogIds.has(blog.id))
  
  const filteredBlogs = selectedCategory === 'All' 
    ? allPosts
    : blogPosts.filter(blog => blog.category === selectedCategory)

  // Pagination settings
  const postsPerPage = 9
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  return (
    <>
      {/* Metadata is handled in app/blog/page.jsx */}
      {/* <Helmet>
        <title>Blog | Team Nirosha - Digital Agency Insights & Tips</title>
        <meta name="description" content="Read our latest blog posts on web development, SEO, digital marketing, branding, and more. Expert insights from Team Nirosha digital agency." />
        <meta name="keywords" content="digital marketing blog, web development blog, SEO tips, branding blog, digital agency blog" />
      </Helmet> */}
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
                  {/* All Posts Grid - 3 columns, 9 per page */}
                  {paginatedBlogs.length > 0 && (
                    <div className="blog-section">
                      <div className="blog-grid">
                        {paginatedBlogs.map((blog, index) => (
                          <BlogCard key={blog.id} blog={blog} index={index} layout="vertical" />
                        ))}
                      </div>
                      
                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="blog-pagination">
                          <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                          
                          <div className="pagination-numbers">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                              <button
                                key={page}
                                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </button>
                            ))}
                          </div>
                          
                          <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </button>
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
                    className={`blog-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
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
                      {totalPages > 1 && (
                        <div className="blog-pagination">
                          <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                          
                          <div className="pagination-numbers">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                              <button
                                key={page}
                                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                              >
                                {page}
                              </button>
                            ))}
                          </div>
                          
                          <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </button>
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
                    onClick={() => setSelectedCategory('All')}
                  >
                    All Posts
                  </button>
                  {blogCategories.map(category => (
                    <button
                      key={category}
                      className={`filter-button-sidebar ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogListingPage

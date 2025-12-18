'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiCalendar, FiClock, FiTag, FiArrowLeft, FiUser } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getBlogBySlug, getBlogsByCategory } from '../data/blogData'
import ShareButtons from '../components/ShareButtons'
import BlogImage from '../components/BlogImage'
import TableOfContents from '../components/TableOfContents'
import { processBlogContent } from '../utils/blogUtils'
import ArticleSchema from '../components/ArticleSchema'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

const BlogDetailPage = ({ params }) => {
  const slug = params?.slug
  const router = useRouter()
  const blog = getBlogBySlug(slug)
  // Use lower threshold and rootMargin for better mobile detection
  const [contentRef, contentVisible] = useScrollAnimation({ 
    threshold: 0.05,
    rootMargin: '50px 0px'
  })
  
  // Get latest 5 blogs from the same category, excluding current blog
  const categoryBlogs = getBlogsByCategory(blog?.category || '')
    .filter(b => b.slug !== slug)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 5)

  if (!blog) {
    return (
      <section className="section blog-detail-page">
        <div className="container">
          <div className="blog-not-found">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://nirosha.org/blog/${slug}`

  return (
    <>
      {/* Metadata is handled in app/blog/[slug]/page.jsx */}
      {/* <Helmet>
        <title>{blog.seoTitle || blog.title} | Team Nirosha</title>
        <meta name="description" content={blog.seoDescription || blog.excerpt} />
        <meta name="keywords" content={blog.seoKeywords} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.imageSlug ? `/cache/blog/${blog.imageSlug}-featured.webp` : blog.featuredImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.imageSlug ? `/cache/blog/${blog.imageSlug}-featured.webp` : blog.featuredImage} />
      </Helmet> */}
      <ArticleSchema blog={blog} />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://nirosha.org' },
          { name: 'Blog', url: 'https://nirosha.org/blog' },
          { name: blog.title, url: currentUrl }
        ]} 
      />
      <div className="blog-detail-page">
        {/* Hero Section with Image Background */}
        <div className="blog-detail-hero">
          <div className="blog-hero-background">
            {blog.imageSlug ? (
              <BlogImage 
                slug={blog.imageSlug} 
                size="featured" 
                alt={blog.imageAlt || blog.title}
                className="blog-hero-bg-image"
              />
            ) : (
              <img 
                src={blog.featuredImage || '/cache/blog/placeholder.jpg'} 
                alt={blog.imageAlt || blog.title}
                className="blog-hero-bg-image"
              />
            )}
            <div className="blog-hero-overlay"></div>
          </div>
          <div className="blog-hero-content">
            <div className="container">
              <button onClick={() => router.push('/blog')} className="blog-back-button">
                <FiArrowLeft />
                Back to Blog
              </button>
              <h1 className="blog-detail-title">{blog.seoTitle || blog.title}</h1>
              <p className="blog-detail-excerpt">{blog.excerpt}</p>
            </div>
          </div>
        </div>

        {/* Metadata Section Below Hero */}
        <div className="container">
          <div className="blog-detail-meta-section">
            <div className="blog-detail-meta">
              <span className="blog-meta-item">
                <FiTag />
                {blog.category}
              </span>
              <span className="blog-meta-item">
                <FiCalendar />
                {formatDate(blog.publishDate)}
              </span>
              <span className="blog-meta-item">
                <FiClock />
                {blog.readTime}
              </span>
              <span className="blog-meta-item">
                <FiUser />
                {blog.author}
              </span>
            </div>
          </div>

          <div className="blog-detail-layout">
            <div className="blog-detail-main">
              <div 
                ref={contentRef}
                className={`blog-detail-content ${contentVisible ? 'animate-fadeInUp' : ''}`}
                dangerouslySetInnerHTML={{ __html: processBlogContent(blog.content, blog.category) }}
              />

              <ShareButtons 
                url={currentUrl}
                title={blog.title}
                description={blog.excerpt}
              />
            </div>

            <aside className="blog-sidebar">
              <TableOfContents content={blog.content} />
              
              <div className="blog-sidebar-section">
                <h3 className="blog-sidebar-title">
                  {categoryBlogs.length > 0 ? `Latest in ${blog.category}` : `More from ${blog.category}`}
                </h3>
                {categoryBlogs.length > 0 ? (
                  <div className="blog-sidebar-list">
                    {categoryBlogs.map((relatedBlog) => (
                      <Link
                        key={relatedBlog.id}
                        href={`/blog/${relatedBlog.slug}`}
                        className="blog-sidebar-item"
                      >
                        <div className="blog-sidebar-image">
                          {relatedBlog.imageSlug ? (
                            <BlogImage 
                              slug={relatedBlog.imageSlug} 
                              size="thumbnail" 
                              alt={relatedBlog.imageAlt || relatedBlog.title}
                              className="blog-sidebar-img"
                            />
                          ) : (
                            <img 
                              src={relatedBlog.featuredImage || '/cache/blog/placeholder.jpg'} 
                              alt={relatedBlog.imageAlt || relatedBlog.title}
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div className="blog-sidebar-content">
                          <h4 className="blog-sidebar-item-title">{relatedBlog.title}</h4>
                          <div className="blog-sidebar-meta">
                            <span className="blog-meta-item">
                              <FiCalendar />
                              {formatDate(relatedBlog.publishDate)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="blog-sidebar-empty">No other articles in this category yet.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailPage


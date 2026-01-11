'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { FiCheck, FiArrowRight, FiCalendar, FiPhone, FiX } from 'react-icons/fi'
import { servicesData } from '../data/servicesData.jsx'
import FAQ from '../components/FAQ'
import FAQSchema from '../components/FAQSchema'
import ServiceSchema from '../components/ServiceSchema'
import BreadcrumbSchema from '../components/BreadcrumbSchema'
import { useCTA } from '../components/CTAContext'
import LaptopMockup from '../components/LaptopMockup'

const ServiceDetailPage = ({ params, showcaseWebsites = [] }) => {
  const router = useRouter()
  const { setCTAContent, resetCTA } = useCTA()
  const [selectedImage, setSelectedImage] = useState(null)

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      const scrollY = window.scrollY
      document.body.classList.add('lightbox-open')
      document.documentElement.classList.add('lightbox-open')
      document.body.style.top = `-${scrollY}px`
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      document.body.style.top = ''
      document.body.style.position = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      const scrollY = document.body.style.top
      document.body.classList.remove('lightbox-open')
      document.documentElement.classList.remove('lightbox-open')
      document.body.style.top = ''
      document.body.style.position = ''
      document.body.style.width = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [selectedImage])

  // Extract slug from params - handle both direct object and potential Promise
  const slug = React.useMemo(() => {
    if (!params) return null
    // If params is a Promise (Next.js 15+), we can't await it in client component
    // But the page wrapper should have already awaited it
    return params.slug || null
  }, [params])

  // Debug: Log the slug and available services
  React.useEffect(() => {
    console.log('ServiceDetailPage - Full params object:', JSON.stringify(params, null, 2))
    console.log('ServiceDetailPage - Extracted slug:', slug)
    console.log('ServiceDetailPage - Type of params:', typeof params)
    console.log('ServiceDetailPage - Available service keys:', Object.keys(servicesData))
    if (slug) {
      console.log('ServiceDetailPage - Looking for slug:', slug)
      console.log('ServiceDetailPage - Service data exists?', !!servicesData[slug])
      console.log('ServiceDetailPage - Service data:', servicesData[slug])
    }
  }, [slug, params])

  const serviceData = slug ? servicesData[slug] : null

  // Update global CTA content when on this page
  React.useEffect(() => {
    if (serviceData) {
      setCTAContent({
        title: `Ready to Get Started with ${serviceData.title}?`,
        subtext: `Let's discuss how we can help your business grow with our expert ${serviceData.title.toLowerCase()} services.`,
        buttonText: "Schedule Free Consultation",
        buttonLink: "https://calendly.com/nirosha-info/30min",
        visible: true
      })
    }

    return () => {
      resetCTA()
    }
  }, [serviceData, setCTAContent, resetCTA])

  if (!serviceData) {
    return (
      <section className="section service-detail">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>Slug: {slug}</p>
          <p>Available services: {Object.keys(servicesData || {}).join(', ')}</p>
          <Link href="/services/" suppressHydrationWarning>Back to Services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <ServiceSchema service={serviceData} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nirosha.org/' },
          { name: 'Services', url: 'https://nirosha.org/services/' },
          { name: serviceData.title, url: `https://nirosha.org/services/${slug}/` }
        ]}
      />

      <section className="section service-detail-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-breadcrumb">
              <Link href="/" suppressHydrationWarning>Home</Link>
              <span>/</span>
              <Link href="/services/" suppressHydrationWarning>Services</Link>
              <span>/</span>
              <span>{serviceData.title}</span>
            </div>
            <h1 className="service-hero-title">{serviceData.title} Services | Team Nirosha</h1>
            <p className="service-hero-subtitle">{serviceData.heroDescription}</p>
            <div className="service-hero-cta">
              <a
                href="https://calendly.com/nirosha-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FiCalendar style={{ marginRight: '8px' }} />
                Get Free Consultation
              </a>
              <a href="tel:+919403891938" className="btn btn-white">
                <FiPhone style={{ marginRight: '8px' }} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="service-overview-content">
            <div className="service-overview-text">
              <h2>Why {serviceData.title} Matters for Your Business</h2>
              <div className="service-description">
                {serviceData.description.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
            <div className="service-benefits">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index}>
                    <FiCheck className="check-icon" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section - Only for web-development */}
      {slug === 'web-development' && showcaseWebsites && showcaseWebsites.length > 0 && (
        <section className="section service-portfolio-showcase">
          {/* Animated background elements */}
          <div className="showcase-bg-animation">
            <div className="showcase-animated-shape showcase-shape-1"></div>
            <div className="showcase-animated-shape showcase-shape-2"></div>
            <div className="showcase-animated-shape showcase-shape-3"></div>
          </div>
          <div className="container">
            <h2 className="section-title">
              Our Work Speaks for Itself
            </h2>
            <p className="service-showcase-subtitle">
              Explore some of our recent website development projects and see the quality we deliver
            </p>
            <div className="service-showcase-grid">
              {showcaseWebsites.map((site, index) => (
                <div
                  key={site.id}
                  className="service-showcase-item"
                  onClick={() => setSelectedImage(site.full || site.image)}
                  style={{ cursor: 'pointer' }}
                >
                    <LaptopMockup
                      imageSrc={site.thumbnail || site.image}
                      alt="Website Design Mockup"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="service-showcase-hover-hint">Click to view full screen</div>
                  </div>
              ))}
            </div>
            <div className="service-showcase-cta">
              <Link 
                href="/portfolio/websites/" 
                className="btn btn-primary"
                suppressHydrationWarning
              >
                See More Projects
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">
            What's Included
          </h2>
          <div className="service-features-grid">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="service-feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-process">
        <div className="container">
          <h2 className="section-title animate-fadeInUp">
            Our {serviceData.title} Process
          </h2>
          <div className="service-process-steps">
            {serviceData.process.map((step, index) => (
              <div
                key={index}
                className="process-step-card"
              >
                <div className="step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={serviceData.faqs} serviceTitle={serviceData.title} />
      <FAQSchema faqs={serviceData.faqs} serviceTitle={serviceData.title} />

      {/* Lightbox for showcase images */}
      {selectedImage && typeof window !== 'undefined' && createPortal(
        <div
          className="portfolio-lightbox-modern"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="portfolio-lightbox-close-modern"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <FiX />
          </button>
          <div
            className="portfolio-lightbox-content-modern"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ width: '100%', padding: '2rem' }}>
              <LaptopMockup
                imageSrc={selectedImage}
                alt="Full Screen Design"
                sizes="90vw"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Local CTA section removed - using global CTA via context */}
    </>
  )
}

export default ServiceDetailPage


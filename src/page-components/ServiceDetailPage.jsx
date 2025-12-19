'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiCheck, FiArrowRight, FiCalendar, FiPhone } from 'react-icons/fi'
import { servicesData } from '../data/servicesData.jsx'
import FAQ from '../components/FAQ'
import FAQSchema from '../components/FAQSchema'
import ServiceSchema from '../components/ServiceSchema'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

const ServiceDetailPage = ({ params }) => {
  const router = useRouter()
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  
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

  if (!serviceData) {
    return (
      <section className="section service-detail">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>Slug: {slug}</p>
          <p>Available services: {Object.keys(servicesData || {}).join(', ')}</p>
          <Link href="/services">Back to Services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <ServiceSchema service={serviceData} />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://nirosha.org' },
          { name: 'Services', url: 'https://nirosha.org/services' },
          { name: serviceData.title, url: `https://nirosha.org/services/${slug}` }
        ]} 
      />
      
      <section className="section service-detail-hero">
        <div className="container">
          <div 
            ref={titleRef}
            className={`service-hero-content ${titleVisible ? 'animate-fadeInUp' : ''}`}
          >
            <div className="service-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
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

      <section className="section service-features">
        <div className="container">
          <h2 className="section-title">What's Included</h2>
          <div className="service-features-grid">
            {serviceData.features.map((feature, index) => {
              const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`service-feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section service-process">
        <div className="container">
          <h2 className="section-title">Our {serviceData.title} Process</h2>
          <div className="service-process-steps">
            {serviceData.process.map((step, index) => {
              const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`process-step-card ${isVisible ? 'animate-fadeInLeft' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ faqs={serviceData.faqs} serviceTitle={serviceData.title} />
      <FAQSchema faqs={serviceData.faqs} serviceTitle={serviceData.title} />

      <section className="section service-cta">
        <div className="container">
          <div className="service-cta-content">
            <h2>Ready to Get Started with {serviceData.title}?</h2>
            <p>Let's discuss how we can help your business grow with our expert {serviceData.title.toLowerCase()} services.</p>
            <div className="service-cta-buttons">
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Schedule Free Consultation
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </a>
              <Link href={`/contact?service=${encodeURIComponent(serviceData.title)}`} className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage


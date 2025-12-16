import React, { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Helmet } from 'react-helmet-async'
import { 
  FiGlobe, 
  FiImage,
  FiSearch,
  FiMapPin,
  FiShare2,
  FiTarget,
  FiFileText,
  FiSettings,
  FiShoppingCart,
  FiMonitor,
  FiZap,
  FiCloud,
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'
import { servicesData } from '../data/servicesData.jsx'

const ServiceCard = ({ service, index, slug }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  const serviceSlugMap = {
    'web-development': <FiGlobe />,
    'branding-design': <FiImage />,
    'seo-services': <FiSearch />,
    'local-seo': <FiMapPin />,
    'social-media-marketing': <FiShare2 />,
    'digital-marketing': <FiTarget />,
    'content-services': <FiFileText />,
    'ecommerce-solutions': <FiShoppingCart />,
    'web-maintenance': <FiSettings />,
    'ui-ux-design': <FiMonitor />,
    'automation-saas': <FiZap />,
    'cloud-infrastructure': <FiCloud />
  }

  const serviceItemsMap = {
    'web-development': ['Custom Website Development', 'WordPress Development', 'E-commerce Development', 'Web Application Development', 'Responsive & Mobile-First Design', 'Progressive Web Apps (PWA)'],
    'branding-design': ['Logo Design', 'Brand Identity Design', 'UI/UX Design', 'Graphic Design', 'Print Design', 'Brand Guidelines & Style Guides'],
    'seo-services': ['Technical SEO', 'On-Page SEO Optimization', 'Off-Page SEO & Link Building', 'SEO Audits & Analysis', 'Keyword Research & Strategy', 'Content Optimization'],
    'local-seo': ['Google My Business Optimization', 'Local Citations & Directory Listings', 'Local Link Building', 'NAP (Name, Address, Phone) Consistency', 'Local Reviews Management', 'Local Content Strategy'],
    'social-media-marketing': ['Social Media Strategy', 'Content Creation & Curation', 'Social Media Management', 'Paid Social Advertising', 'Community Management', 'Influencer Marketing'],
    'digital-marketing': ['PPC Advertising (Google Ads, Facebook Ads)', 'Email Marketing Campaigns', 'Content Marketing', 'Marketing Automation', 'Conversion Rate Optimization (CRO)', 'Analytics & Performance Reporting'],
    'content-services': ['Content Writing & Copywriting', 'Blog Writing & Management', 'Video Production & Editing', 'Photography Services', 'Infographic Design', 'Content Strategy & Planning'],
    'ecommerce-solutions': ['E-commerce Website Development', 'Shopping Cart Integration', 'Payment Gateway Setup', 'Inventory Management Systems', 'Order Management Systems', 'E-commerce SEO & Marketing'],
    'web-maintenance': ['Website Maintenance & AMC', 'Security Updates & Monitoring', 'Performance Optimization', 'Backup & Recovery Services', 'Technical Support & Troubleshooting', 'Website Updates & Content Management'],
    'ui-ux-design': ['User Interface Design', 'User Experience Design', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Design Audit & Redesign'],
    'automation-saas': ['CRM & Workflow Automation', 'SaaS Setup & Whitelabel Solutions', 'Client Portals & Dashboards', 'Payment & Subscription Systems', 'API Integration', 'Third-party Integrations'],
    'cloud-infrastructure': ['Cloud Hosting & Migration', 'Server Management', 'CI/CD Pipelines', 'Monitoring & Backup Systems', 'SSL Certificates', 'Domain & DNS Management']
  }

  return (
    <Link 
      to={`/services/${slug}`}
      ref={ref}
      className={`service-card service-card-link ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="service-icon">{serviceSlugMap[slug] || <FiGlobe />}</div>
      <h3 className="service-title">{service.title}</h3>
      <ul className="service-items">
        {(serviceItemsMap[slug] || []).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="service-card-cta">
        Learn More <FiArrowRight />
      </div>
    </Link>
  )
}

const ServicesPage = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''

  const allServices = useMemo(() => {
    return Object.entries(servicesData).map(([slug, data]) => ({
      ...data,
      slug
    }))
  }, [])

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return allServices
    }

    const query = searchQuery.toLowerCase().trim()
    return allServices.filter(service => {
      // Search in title
      if (service.title.toLowerCase().includes(query)) return true
      
      // Search in tagline
      if (service.tagline?.toLowerCase().includes(query)) return true
      
      // Search in overview
      if (service.overview?.toLowerCase().includes(query)) return true
      
      // Search in detailed items
      if (service.detailedItems?.some(item => 
        typeof item === 'string' && item.toLowerCase().includes(query)
      )) return true
      
      // Search in benefits
      if (service.benefits?.some(benefit => 
        typeof benefit === 'string' && benefit.toLowerCase().includes(query)
      )) return true
      
      // Search in SEO keywords
      if (service.seoKeywords?.toLowerCase().includes(query)) return true
      
      return false
    })
  }, [allServices, searchQuery])

  const clearSearch = () => {
    setSearchParams({})
  }

  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 })

  const serviceCount = allServices.length

  return (
    <>
      <Helmet>
        <title>Professional Web Development & Digital Marketing Services | Team Nirosha</title>
        <meta 
          name="description" 
          content="Comprehensive digital services including web development, SEO, social media marketing, branding, e-commerce solutions, automation, and cloud infrastructure. Expert team delivering results-driven solutions for businesses." 
        />
        <meta 
          name="keywords" 
          content="web development services, SEO services, digital marketing, social media marketing, branding design, e-commerce development, website maintenance, UI UX design, automation services, cloud hosting, local SEO, content marketing" 
        />
        <meta property="og:title" content="Professional Web Development & Digital Marketing Services | Team Nirosha" />
        <meta property="og:description" content="Complete digital agency services from design to development, SEO to social media. Expert solutions for growing businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <section className="section services services-page">
        {/* Hero Section */}
        {!searchQuery && (
          <div className="services-hero">
            <div className="services-hero-background"></div>
            <div className="services-hero-pattern"></div>
            <div className="container">
              <div 
                ref={heroRef}
                className={`services-hero-content ${heroVisible ? 'animate-fadeInUp' : ''}`}
              >
                <div className="services-hero-badge">
                  <FiCheckCircle style={{ marginRight: '8px' }} />
                  <span>12+ Professional Services</span>
                </div>
                <h1 className="services-hero-title">
                  Digital Services India - Web Development, SEO, Marketing & Cloud Solutions
                </h1>
                <p className="services-hero-subtitle">
                  From custom web development and SEO optimization to social media marketing and cloud infrastructure, 
                  we provide end-to-end digital services that drive real results. Our expert team combines technical 
                  expertise with strategic thinking to deliver solutions that help your business scale and succeed online.
                </p>
                
                {/* Key Benefits */}
                <div 
                  ref={benefitsRef}
                  className={`services-hero-benefits ${benefitsVisible ? 'animate-fadeInUp' : ''}`}
                >
                  <div className="services-hero-benefit-item">
                    <FiTrendingUp className="benefit-icon" />
                    <span>Results-Driven Approach</span>
                  </div>
                  <div className="services-hero-benefit-item">
                    <FiUsers className="benefit-icon" />
                    <span>Expert Team</span>
                  </div>
                  <div className="services-hero-benefit-item">
                    <FiCheckCircle className="benefit-icon" />
                    <span>Proven Track Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Content */}
        <div className="services-content-section">
          <div className="container">
            {searchQuery ? (
              <div 
                ref={titleRef}
                className={`services-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
              >
                <h2 className="page-title">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="page-subtitle">
                  Found {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} matching your search
                </p>
                <div className="search-results-header">
                  <button onClick={clearSearch} className="clear-search-btn">
                    <FiX /> Clear Search
                  </button>
                </div>
              </div>
            ) : (
              <div 
                ref={titleRef}
                className={`services-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
              >
                <h2 className="services-section-title">Explore Our Services</h2>
                <p className="services-section-subtitle">
                  Choose from {serviceCount} comprehensive digital services designed to help your business thrive online
                </p>
              </div>
            )}

            {filteredServices.length > 0 ? (
              <div 
                ref={gridRef}
                className={`services-grid ${gridVisible ? 'animate-fadeInUp' : ''}`}
              >
                {filteredServices.map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} slug={service.slug} />
                ))}
              </div>
            ) : searchQuery ? (
              <div className="no-results">
                <FiSearch className="no-results-icon" />
                <h2>No services found</h2>
                <p>We couldn't find any services matching "{searchQuery}"</p>
                <button onClick={clearSearch} className="btn btn-primary">
                  View All Services
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage

'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { 
  FiCheck, 
  FiArrowRight, 
  FiCalendar, 
  FiPhone,
  FiCode,
  FiRefreshCw,
  FiZap,
  FiPackage,
  FiLink,
  FiShoppingCart,
  FiShield,
  FiDatabase,
  FiLayers,
  FiClock,
  FiStar,
  FiActivity,
  FiTrendingUp,
  FiGlobe,
  FiSmartphone,
  FiMonitor,
  FiCpu,
  FiServer
} from 'react-icons/fi'
import FAQ from '../components/FAQ'
import FAQSchema from '../components/FAQSchema'

const WordPressDevelopmentPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [overviewRef, overviewVisible] = useScrollAnimation({ threshold: 0.2 })
  const [uspRef, uspVisible] = useScrollAnimation({ threshold: 0.2 })
  const [servicesTitleRef, servicesTitleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [techTitleRef, techTitleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [processTitleRef, processTitleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [uspTitleRef, uspTitleVisible] = useScrollAnimation({ threshold: 0.2 })

  // Core Services Data
  const coreServices = [
    {
      icon: <FiCode />,
      title: 'Website Design & Development',
      description: 'Custom WordPress theme development with modern design principles, responsive layouts, and exceptional user experience.',
      features: [
        'Custom WordPress theme development',
        'Responsive design implementation',
        'User experience optimization',
        'Modern design trends',
        'Mobile-first approach',
        'Cross-browser compatibility'
      ]
    },
    {
      icon: <FiRefreshCw />,
      title: 'Website Revamp & Redesign',
      description: 'Transform your existing WordPress site with modern design, improved functionality, and enhanced user experience.',
      features: [
        'Legacy WordPress site modernization',
        'UI/UX improvements',
        'Content migration',
        'Design refresh',
        'Functionality upgrades',
        'Performance improvements'
      ]
    },
    {
      icon: <FiLayers />,
      title: 'Figma to WordPress Conversion',
      description: 'Pixel-perfect conversion of your Figma designs into fully functional, responsive WordPress websites.',
      features: [
        'Pixel-perfect conversion from Figma',
        'Responsive implementation across devices',
        'Interactive elements and animations',
        'Component-based development',
        'Design system implementation',
        'Cross-browser compatibility'
      ]
    },
    {
      icon: <FiZap />,
      title: 'Performance Optimization',
      description: 'Boost your WordPress site speed with PageSpeed scores near 90 and optimized Core Web Vitals.',
      features: [
        'Page speed optimization',
        'Database optimization',
        'Caching implementation',
        'Image optimization',
        'CDN integration',
        'Core Web Vitals improvement'
      ]
    },
    {
      icon: <FiPackage />,
      title: 'Custom Plugin Development',
      description: 'Tailored WordPress plugins designed to extend functionality and meet your specific business requirements.',
      features: [
        'Tailored functionality plugins',
        'WooCommerce extensions',
        'Custom post types',
        'Advanced features',
        'API integrations',
        'Maintenance and updates'
      ]
    },
    {
      icon: <FiLink />,
      title: 'Third-Party Integrations',
      description: 'Seamlessly connect your WordPress site with payment gateways, CRMs, email tools, and other services.',
      features: [
        'Payment gateway integration (Stripe, PayPal)',
        'CRM integration (Salesforce, HubSpot)',
        'Email marketing tools (Mailchimp, SendGrid)',
        'Analytics integration',
        'Social media integration',
        'Custom API integrations'
      ]
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-commerce Development',
      description: 'Build powerful online stores with WooCommerce, featuring optimized shopping experiences and secure payment processing.',
      features: [
        'WooCommerce setup & customization',
        'Product catalog management',
        'Shopping cart optimization',
        'Payment processing',
        'Inventory management',
        'Order management systems'
      ]
    },
    {
      icon: <FiShield />,
      title: 'Security & Maintenance',
      description: 'Keep your WordPress site secure, updated, and running smoothly with our comprehensive maintenance services.',
      features: [
        'Security hardening',
        'Regular updates',
        'Backup solutions',
        'Monitoring & support',
        'Malware removal',
        'Performance monitoring'
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Migration Services',
      description: 'Seamless migration to WordPress from any platform with zero downtime and complete data preservation.',
      features: [
        'Platform migration to WordPress',
        'Hosting migration',
        'Data migration',
        'Zero-downtime migration',
        'Content preservation',
        'SEO-friendly migration'
      ]
    }
  ]

  // USP Data
  const usps = [
    {
      icon: <FiClock />,
      title: 'Timely Delivery',
      description: 'On-time project completion guaranteed with clear timelines, regular progress updates, and deadline commitment.',
      highlights: [
        'Agile development methodology',
        'Clear project timelines',
        'Regular progress updates',
        'Deadline commitment'
      ]
    },
    {
      icon: <FiStar />,
      title: 'High Quality Standards',
      description: 'Premium code quality with clean, maintainable, and scalable code following industry best practices.',
      highlights: [
        'Clean, maintainable code',
        'Industry best practices',
        'Thorough testing & QA',
        'Code review & optimization'
      ]
    },
    {
      icon: <FiActivity />,
      title: 'High Google PageSpeed Scores',
      description: 'PageSpeed scores near 90 with Core Web Vitals optimization and fast loading times under 2 seconds.',
      highlights: [
        'PageSpeed scores near 90',
        'Core Web Vitals optimization',
        'Fast loading times (< 2s)',
        'Performance monitoring'
      ]
    }
  ]

  // Technology Stack
  const technologies = [
    { name: 'WordPress', icon: <FiGlobe /> },
    { name: 'PHP', icon: <FiCode /> },
    { name: 'MySQL', icon: <FiDatabase /> },
    { name: 'JavaScript', icon: <FiCode /> },
    { name: 'React', icon: <FiCode /> },
    { name: 'WooCommerce', icon: <FiShoppingCart /> },
    { name: 'REST API', icon: <FiLink /> },
    { name: 'Headless WordPress', icon: <FiServer /> }
  ]

  // Process Steps
  const processSteps = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, goals, and target audience to create a comprehensive development plan.'
    },
    {
      title: 'Design & Development',
      description: 'Our team builds your WordPress site with attention to detail, ensuring pixel-perfect implementation.'
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing across devices, browsers, and performance metrics to ensure flawless functionality.'
    },
    {
      title: 'Deployment',
      description: 'Smooth deployment with zero downtime, ensuring your site goes live without any disruptions.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and optimization to keep your WordPress site running at peak performance.'
    }
  ]

  // FAQ Data
  const faqs = [
    {
      question: 'How long does it take to develop a WordPress website?',
      answer: 'The timeline depends on the complexity and scope of your project. A simple website typically takes 2-4 weeks, while complex custom solutions may take 6-12 weeks. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.'
    },
    {
      question: 'Do you guarantee a high PageSpeed score?',
      answer: 'Yes! We aim for Google PageSpeed scores near 90 for all WordPress websites we develop. Our performance-first approach includes optimization techniques like code minification, image optimization, caching, CDN integration, and database optimization to ensure fast loading times.'
    },
    {
      question: 'Can you convert my Figma design to WordPress?',
      answer: 'Absolutely! We specialize in pixel-perfect Figma to WordPress conversion. We ensure your design is faithfully recreated as a fully functional, responsive WordPress website with all interactive elements and animations preserved.'
    },
    {
      question: 'What is included in WordPress maintenance?',
      answer: 'Our maintenance services include regular WordPress core and plugin updates, security monitoring, backup management, performance optimization, uptime monitoring, and technical support. We offer flexible maintenance plans tailored to your needs.'
    },
    {
      question: 'Do you provide custom plugin development?',
      answer: 'Yes, we develop custom WordPress plugins tailored to your specific business requirements. Whether you need WooCommerce extensions, custom post types, API integrations, or unique functionality, our developers can build it.'
    },
    {
      question: 'Can you migrate my existing website to WordPress?',
      answer: 'Yes, we offer seamless migration services from any platform to WordPress. We ensure zero downtime, preserve all content and SEO rankings, and handle the entire migration process professionally.'
    },
    {
      question: 'What third-party integrations do you support?',
      answer: 'We integrate WordPress with a wide range of third-party services including payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), email marketing tools (Mailchimp, SendGrid), analytics platforms, social media APIs, and custom APIs.'
    },
    {
      question: 'Do you offer e-commerce development with WooCommerce?',
      answer: 'Yes, we specialize in WooCommerce development. We can set up complete online stores with product catalogs, shopping carts, payment processing, inventory management, and order management systems.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section service-detail-hero" suppressHydrationWarning>
        <div className="container">
          <div 
            ref={heroRef}
            className={`service-hero-content ${heroVisible ? 'animate-fadeInUp' : ''}`}
          >
            <div className="service-breadcrumb" suppressHydrationWarning>
              <Link href="/" suppressHydrationWarning>Home</Link>
              <span>/</span>
              <Link href="/services" suppressHydrationWarning>Services</Link>
              <span>/</span>
              <span>WordPress Website Development</span>
            </div>
            <h1 className="service-hero-title">
              Expert WordPress Website Development Services
            </h1>
            <p className="service-hero-subtitle">
              Transform your online presence with our expert WordPress development services. 
              From custom website design to performance optimization, plugin development, and third-party integrations - 
              we deliver scalable WordPress solutions that drive results. With years of experience, we guarantee 
              high-quality, timely delivery, and PageSpeed scores near 90.
            </p>
            <div className="service-hero-cta" suppressHydrationWarning>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                suppressHydrationWarning
              >
                <FiCalendar style={{ marginRight: '8px' }} />
                Get Free Consultation
              </a>
              <a href="tel:+919403891938" className="btn btn-white" suppressHydrationWarning>
                <FiPhone style={{ marginRight: '8px' }} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section service-overview">
        <div className="container">
          <div 
            ref={overviewRef}
            className={`service-overview-content ${overviewVisible ? 'animate-fadeInUp' : ''}`}
          >
            <div className="service-overview-text">
              <h2>Why WordPress Development Matters for Your Business</h2>
              <div className="service-description">
                <p>
                  WordPress powers over 40% of all websites on the internet, and for good reason. 
                  It offers unparalleled flexibility, scalability, and a vast ecosystem of plugins and themes. 
                  At Team Nirosha, we leverage WordPress to create powerful, custom solutions that drive 
                  business growth.
                </p>
                <p>
                  Whether you need a brand new website, want to revamp an existing one, convert a Figma design, 
                  optimize performance, or integrate third-party services - we have the expertise to deliver 
                  exceptional results. Our WordPress development services are designed to meet your unique 
                  business needs while ensuring high performance, security, and scalability.
                </p>
                <p>
                  With years of experience in WordPress development, we understand the platform inside and out. 
                  We stay updated with the latest WordPress trends, best practices, and security standards to 
                  ensure your website is built on a solid foundation.
                </p>
              </div>
            </div>
            <div className="service-benefits">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                <li>
                  <FiCheck className="check-icon" />
                  <span>Flexible and scalable platform</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Vast plugin and theme ecosystem</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>SEO-friendly architecture</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Mobile-responsive by default</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Regular security updates</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Easy content management</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Cost-effective solutions</span>
                </li>
                <li>
                  <FiCheck className="check-icon" />
                  <span>Strong community support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="section service-features">
        <div className="container">
          <h2 
            ref={servicesTitleRef}
            className={`section-title ${servicesTitleVisible ? 'animate-fadeInUp' : ''}`} 
            style={{ color: '#fff' }}
          >
            Our WordPress Development Services
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: '#ffffffcc' }}>
            Comprehensive WordPress solutions tailored to your business needs
          </p>
          <div className="service-features-grid">
            {coreServices.map((service, index) => {
              const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`service-feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="feature-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="feature-list" style={{ marginTop: '1rem', textAlign: 'left' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <FiCheck style={{ marginRight: '0.5rem', marginTop: '0.2rem', flexShrink: 0, color: 'var(--primary)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section service-usp" style={{ background: 'var(--bg-light)', padding: '4rem 0' }}>
        <div className="container">
          <div 
            ref={uspRef}
            className={`${uspVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 
              ref={uspTitleRef}
              className={`section-title ${uspTitleVisible ? 'animate-fadeInUp' : ''}`} 
              style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-dark)' }}
            >
              Our Unique Selling Points
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
              What sets us apart in WordPress development
            </p>
            <div className="service-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {usps.map((usp, index) => {
                const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
                return (
                  <div 
                    key={index}
                    ref={ref}
                    className={`service-feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                      background: 'var(--bg-primary)',
                      border: '2px solid var(--border-color)',
                      padding: '2rem'
                    }}
                  >
                    <div className="feature-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                      {usp.icon}
                    </div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--text-dark)', fontWeight: '700' }}>{usp.title}</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>{usp.description}</p>
                    <ul className="feature-list" style={{ textAlign: 'left' }}>
                      {usp.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                          <FiCheck style={{ marginRight: '0.5rem', marginTop: '0.2rem', flexShrink: 0, color: 'var(--primary)' }} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section service-tech">
        <div className="container">
          <h2 
            ref={techTitleRef}
            className={`section-title ${techTitleVisible ? 'animate-fadeInUp' : ''}`} 
            style={{ color: 'var(--text-dark)' }}
          >
            Our Technology Stack
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
            We work with the latest WordPress technologies and best practices
          </p>
          <div className="service-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {technologies.map((tech, index) => {
              const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`service-feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    textAlign: 'center',
                    padding: '1.5rem'
                  }}
                >
                  <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                    {tech.icon}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{tech.name}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section service-process" style={{ background: 'var(--bg-light)', padding: '4rem 0' }}>
        <div className="container">
          <h2 
            ref={processTitleRef}
            className={`section-title ${processTitleVisible ? 'animate-fadeInUp' : ''}`} 
            style={{ color: 'var(--text-dark)' }}
          >
            Our WordPress Development Process
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
            A structured approach to delivering exceptional WordPress solutions
          </p>
          <div className="service-process-steps">
            {processSteps.map((step, index) => {
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

      {/* FAQ Section */}
      <FAQ faqs={faqs} serviceTitle="WordPress Website Development" />
      <FAQSchema faqs={faqs} serviceTitle="WordPress Website Development" />

      {/* Final CTA Section */}
      <section className="section service-cta" suppressHydrationWarning>
        <div className="container">
          <div className="service-cta-content">
            <h2>Ready to Transform Your Online Presence?</h2>
            <p>
              Let's discuss how we can help your business grow with our expert WordPress development services. 
              From custom design to performance optimization, we deliver solutions that drive results.
            </p>
            <div className="service-cta-buttons" suppressHydrationWarning>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                suppressHydrationWarning
              >
                Schedule Free Consultation
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </a>
              <Link href="/contact?service=WordPress%20Website%20Development" className="btn btn-secondary" suppressHydrationWarning>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WordPressDevelopmentPage


'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { useCTA } from '../components/CTAContext'
import { 
  FiCheck, 
  FiArrowRight, 
  FiStar,
  FiSearch,
  FiZap,
  FiShield,
  FiUsers,
  FiCopy,
  FiTrendingUp,
  FiFileText,
  FiSettings,
  FiBarChart,
  FiMessageSquare,
  FiLink,
  FiChevronRight,
  FiEdit,
  FiGlobe,
  FiX
} from 'react-icons/fi'

const PinnacleAssistPage = () => {
  const { setCTAContent } = useCTA()
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  // Hide the global CTA on this page
  React.useEffect(() => {
    setCTAContent({ visible: false })
    return () => {
      setCTAContent({ visible: true })
    }
  }, [setCTAContent])

  // Prevent body scroll when lightbox is open and save/restore scroll position
  React.useEffect(() => {
    if (lightboxImage) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.classList.add('lightbox-open')
      document.documentElement.classList.add('lightbox-open')
      document.body.style.top = `-${scrollY}px`
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      // Restore scroll position
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
      // Cleanup on unmount
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
  }, [lightboxImage])

  const openLightbox = (imageSrc, alt) => {
    setLightboxImage(imageSrc)
    setLightboxAlt(alt)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxAlt('')
  }

  const features = [
    {
      icon: <FiSearch />,
      title: 'AI-Powered Review Generation',
      description: 'Generate high-quality, unique reviews using AI that include business-specific keywords. Each review is different and optimized for local SEO rankings.'
    },
    {
      icon: <FiSettings />,
      title: 'Keyword Management Dashboard',
      description: 'Get admin credentials to manage your keywords, customize review content, and build a review bank with unlimited AI-generated reviews.'
    },
    {
      icon: <FiZap />,
      title: 'One-Click Copy & Post',
      description: 'Customers get a copy button that instantly copies the Google Reviews content to clipboard, then automatically opens your Google review page. Just paste and rate 5 stars!'
    },
    {
      icon: <FiShield />,
      title: 'Never Duplicate Reviews',
      description: 'The system intelligently ensures that same or similar reviews are never generated. Every review is unique and authentic-sounding.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'SEO-Optimized Content',
      description: 'All generated reviews include relevant business keywords that help improve your local SEO rankings and search visibility.'
    },
    {
      icon: <FiUsers />,
      title: 'Easy Customer Experience',
      description: 'Share your unique review link with customers. They simply click, get an AI-generated Google Review, copy it, and post to Google. Done in seconds!'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Register Your Account',
      description: 'Sign up for free at Pinnacle Assist. Create your account and get instant access to the dashboard.',
      action: 'Get Started Free →'
    },
    {
      number: '2',
      title: 'Fill Business Details',
      description: 'Add your business information, relevant keywords, and customize your review preferences in the admin dashboard.',
      action: 'Setup in Minutes'
    },
    {
      number: '3',
      title: 'Share Review Link',
      description: 'Get your unique review link and share it with your customers via email, SMS, WhatsApp, or in-person.',
      action: 'Share & Get Reviews'
    },
    {
      number: '4',
      title: 'Get Quality Google Reviews',
      description: 'Customers click the link, get an AI-generated Google Review, copy it, and post to Google with a 5-star rating. No more empty reviews!',
      action: 'Boost Your Ratings'
    }
  ]

  const benefits = [
    'Improve local SEO rankings with keyword-rich Google Reviews',
    'Get detailed, meaningful Google Reviews instead of just star ratings',
    'Increase conversion rates with authentic-looking review content',
    'Save time - no need to write review prompts for customers',
    'Build a review bank with unlimited AI-generated Google Reviews',
    'Track and manage all your Google Reviews from one dashboard',
    'Never worry about duplicate or generic Google Reviews again',
    'Boost your Google Business Profile with quality content'
  ]

  // Google logo colors for step numbers
  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']

  return (
    <>
      {/* Hero Section */}
      <section className="pinnacle-hero">
        <div className="container">
          <div className="pinnacle-hero-content">
            <div className="pinnacle-hero-badge">
              <FiStar style={{ marginRight: '8px' }} />
              <span>Get Quality Reviews That Actually Help</span>
            </div>
            <h1 className="pinnacle-hero-title">
              Pinnacle Assist: AI-Powered Google Review Generation for Better Local SEO
            </h1>
            <p className="pinnacle-hero-subtitle">
              Stop getting empty 5-star Google Reviews. Get detailed, keyword-rich Google Reviews that boost your local SEO rankings and help customers make informed decisions.
            </p>
            
            <div className="pinnacle-hero-cta">
              <a 
                href="https://pinnacleassist.rateusnow.in/signup.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <span>Start Free Account</span>
                <FiArrowRight />
              </a>
              <p className="pinnacle-hero-note">No credit card needed • Setup in 2 minutes • Only Rs. 249/- per month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="pinnacle-problem-solution">
        <div className="container">
          <div className="pinnacle-problem-solution-grid">
            <div className="pinnacle-problem-box">
              <h3>❌ The Problem</h3>
              <p>Have you ever requested your customer for a Google Review and they just gave you 5 stars without any comments?</p>
              <p><strong>This doesn't help your business.</strong> Empty Google Reviews don't improve your SEO rankings, don't provide value to potential customers, and don't help you stand out from competitors.</p>
            </div>
            <div className="pinnacle-solution-box">
              <h3>✅ The Solution</h3>
              <p><strong>Pinnacle Assist generates high-quality, unique Google Reviews with business-specific keywords</strong> that help you get better local SEO rankings. Every Google Review is different, authentic-sounding, and optimized for search engines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pinnacle-steps">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get quality Google Reviews in 4 simple steps</p>
          </div>
          <div className="pinnacle-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="pinnacle-step-card">
                <div 
                  className="pinnacle-step-number"
                  style={{ backgroundColor: googleColors[index] }}
                >
                  <span className="pinnacle-step-number-text">{step.number}</span>
                  <svg className="pinnacle-google-logo" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="pinnacle-step-action">{step.action}</div>
              </div>
            ))}
          </div>
          
          <div className="pinnacle-steps-cta">
            <a 
              href="https://pinnacleassist.rateusnow.in/signup.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              <span>Get Started Now - It's Free!</span>
              <FiArrowRight />
            </a>
            <p className="pinnacle-pricing-note">No credit card needed • Only Rs. 249/- per month after free trial</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pinnacle-features">
        <div className="container">
          <div className="section-header">
            <h2>Powerful Features</h2>
            <p>Everything you need to generate quality Google Reviews and boost your SEO</p>
          </div>
          <div className="pinnacle-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="pinnacle-feature-card">
                <div className="pinnacle-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots/Demo Section */}
      <section className="pinnacle-demo">
        <div className="container">
          <div className="section-header">
            <h2>See It In Action</h2>
            <p>Beautiful, intuitive interface with two design layouts</p>
          </div>
          <div className="pinnacle-demo-grid">
            <div className="pinnacle-demo-item">
              <h3>Admin Dashboard</h3>
              <p>Manage keywords, customize settings, and track your Google Reviews</p>
              <div className="pinnacle-demo-image" onClick={() => openLightbox('/cache/products/pinnacleassist/Blur_dashboard-large.webp', 'Pinnacle Assist Admin Dashboard')}>
                <img 
                  src="/cache/products/pinnacleassist/Blur_dashboard-featured.webp"
                  srcSet="/cache/products/pinnacleassist/Blur_dashboard-featured.webp 1x, /cache/products/pinnacleassist/Blur_dashboard-featured@2x.webp 2x"
                  alt="Pinnacle Assist Admin Dashboard"
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className="pinnacle-demo-item">
              <h3>AI Google Review Generation</h3>
              <p>Customers get unique, keyword-rich Google Reviews instantly</p>
              <div className="pinnacle-demo-image" onClick={() => openLightbox('/cache/products/pinnacleassist/Blur_aireviews-large.webp', 'AI Google Review Generation Interface')}>
                <img 
                  src="/cache/products/pinnacleassist/Blur_aireviews-featured.webp"
                  srcSet="/cache/products/pinnacleassist/Blur_aireviews-featured.webp 1x, /cache/products/pinnacleassist/Blur_aireviews-featured@2x.webp 2x"
                  alt="AI Google Review Generation Interface"
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className="pinnacle-demo-item">
              <h3>Google Review Posting Made Easy</h3>
              <p>One-click copy and seamless posting to Google Reviews</p>
              <div className="pinnacle-demo-image" onClick={() => openLightbox('/cache/products/pinnacleassist/Blur_reviewpost-large.webp', 'Google Review Posting Interface')}>
                <img 
                  src="/cache/products/pinnacleassist/Blur_reviewpost-featured.webp"
                  srcSet="/cache/products/pinnacleassist/Blur_reviewpost-featured.webp 1x, /cache/products/pinnacleassist/Blur_reviewpost-featured@2x.webp 2x"
                  alt="Google Review Posting Interface"
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pinnacle-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Pinnacle Assist?</h2>
            <p>Transform how you collect and manage customer reviews</p>
          </div>
          <div className="pinnacle-benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="pinnacle-benefit-item">
                <FiCheck className="pinnacle-benefit-check" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pinnacle-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Quality Reviews That Actually Help?</h2>
            <p>Join hundreds of businesses using Pinnacle Assist to boost their local SEO with keyword-rich, detailed reviews.</p>
            <div className="cta-buttons">
              <a 
                href="https://pinnacleassist.rateusnow.in/signup.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <span>Create Free Account</span>
                <FiArrowRight />
              </a>
              <p className="cta-note">
                ✓ Free to start • ✓ No credit card needed • ✓ Setup in 2 minutes
              </p>
            </div>
            <div className="pinnacle-guarantee">
              <FiShield />
              <span>Get admin access immediately. Start generating quality Google Reviews today.</span>
            </div>
            <p className="pinnacle-pricing-info">No credit card needed for signup • Only Rs. 249/- per month</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && typeof window !== 'undefined' && createPortal(
        <div
          className="portfolio-lightbox-modern"
          onClick={closeLightbox}
        >
          <button
            className="portfolio-lightbox-close-modern"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FiX />
          </button>
          <div
            className="portfolio-lightbox-content-modern"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="portfolio-lightbox-image-wrapper">
              <picture>
                <source
                  srcSet={`${lightboxImage} 1x, ${lightboxImage.replace('-large.webp', '-large@2x.webp')} 2x`}
                  type="image/webp"
                />
                <img
                  src={lightboxImage.replace('.webp', '.png')}
                  srcSet={`${lightboxImage.replace('.webp', '.png')} 1x, ${lightboxImage.replace('-large.webp', '-large@2x.png')} 2x`}
                  alt={lightboxAlt}
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default PinnacleAssistPage


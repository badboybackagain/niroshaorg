'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCTA } from '../components/CTAContext'
import { 
  FiCheck, 
  FiX, 
  FiArrowRight, 
  FiMessageCircle, 
  FiZap, 
  FiDollarSign,
  FiFileText,
  FiShoppingCart,
  FiMail,
  FiCode,
  FiShield,
  FiClock,
  FiUsers,
  FiSend,
  FiDownload,
  FiBell,
  FiTrendingUp,
  FiGlobe
} from 'react-icons/fi'

const WhatsAppAPIGatewayPage = () => {
  const { setCTAContent } = useCTA()
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [comparisonRef, comparisonVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [useCasesRef, useCasesVisible] = useScrollAnimation({ threshold: 0.2 })

  // Hide the global CTA on this page
  React.useEffect(() => {
    setCTAContent({ visible: false })
    return () => {
      // Reset CTA visibility when leaving the page
      setCTAContent({ visible: true })
    }
  }, [setCTAContent])

  const comparisonData = [
    {
      feature: 'Business Verification',
      meta: 'Complex document submission required',
      ours: 'No verification needed - start immediately',
      icon: <FiFileText />
    },
    {
      feature: 'Message Pricing',
      meta: 'Charged per message sent',
      ours: 'Unlimited messages - no per-message fees',
      icon: <FiDollarSign />
    },
    {
      feature: 'Message Templates',
      meta: 'Templates must be pre-approved',
      ours: 'Send any text instantly - no approval needed',
      icon: <FiMessageCircle />
    },
    {
      feature: 'Inbox Management',
      meta: 'No inbox - can only send messages',
      ours: 'Full inbox available - see all received messages',
      icon: <FiMail />
    },
    {
      feature: 'Setup Time',
      meta: 'Weeks of approval process',
      ours: 'Available immediately on signup',
      icon: <FiClock />
    },
    {
      feature: 'Integration',
      meta: 'Complex API setup',
      ours: 'Easy integration with any application',
      icon: <FiCode />
    }
  ]

  const benefits = [
    {
      icon: <FiZap />,
      title: 'Instant Setup',
      description: 'Get started in minutes. No waiting for approvals or complex verification processes.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Unlimited Messages',
      description: 'Send as many messages as you need without worrying about per-message costs.'
    },
    {
      icon: <FiMessageCircle />,
      title: 'Free Text Messaging',
      description: 'Send any message you want, when you want. No template approval required.'
    },
    {
      icon: <FiUsers />,
      title: 'Use Your Existing Number',
      description: 'Works with your current WhatsApp number. No need to uninstall WhatsApp.'
    },
    {
      icon: <FiShield />,
      title: 'Full Inbox Access',
      description: 'See all received messages in one place. Complete communication management.'
    },
    {
      icon: <FiCode />,
      title: 'Easy Integration',
      description: 'Simple API integration with your website, CRM, or any application.'
    }
  ]

  const useCases = [
    {
      icon: <FiMail />,
      title: 'Contact Form Automation',
      description: 'A visitor fills up a contact form on your website. Instantly, a WhatsApp message is sent to their number from your number, opening a communication channel immediately.',
      example: 'Contact Form → WhatsApp Notification'
    },
    {
      icon: <FiDownload />,
      title: 'Document Delivery',
      description: 'Someone tries to download a brochure and you show a popup form asking for their contact number. The moment the form is submitted, the brochure is sent to their WhatsApp number from your number.',
      example: 'Download Request → WhatsApp Delivery'
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-commerce Order Updates',
      description: 'When someone places an order on your e-commerce store, they get order updates directly on their WhatsApp number. Real-time notifications for order confirmation, shipping, and delivery.',
      example: 'Order Placed → WhatsApp Updates'
    },
    {
      icon: <FiBell />,
      title: 'Appointment Reminders',
      description: 'Automatically send appointment reminders, confirmations, and follow-ups to your customers via WhatsApp. Reduce no-shows and improve customer satisfaction.',
      example: 'Appointment Scheduled → WhatsApp Reminders'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Marketing Campaigns',
      description: 'Send promotional messages, offers, and updates to your customer base. Engage with your audience directly through WhatsApp.',
      example: 'Campaign Launch → WhatsApp Broadcast'
    },
    {
      icon: <FiGlobe />,
      title: 'Customer Support',
      description: 'Provide instant customer support through WhatsApp. Customers can reach you directly, and you can respond quickly with automated or manual replies.',
      example: 'Support Request → WhatsApp Response'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="whatsapp-hero">
        <div className="whatsapp-hero-background"></div>
        <div className="container">
          <div 
            ref={heroRef}
            className={`whatsapp-hero-content ${heroVisible ? 'animate-fadeInUp' : ''}`}
          >
            <div className="whatsapp-hero-badge">
              <FiMessageCircle style={{ marginRight: '8px' }} />
              <span>WhatsApp API Gateway</span>
            </div>
            <h1 className="whatsapp-hero-title">
              WhatsApp API Gateway That Works
              <span className="gradient-text"> Without Limits</span>
            </h1>
            <p className="whatsapp-hero-subtitle">
              Send unlimited WhatsApp messages from your existing number. No per-message fees, 
              no template approvals, no complex verification. Start communicating with your customers instantly.
            </p>
            <div className="whatsapp-hero-cta">
              <a 
                href="https://wasms.nirosha.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <span>Start for FREE</span>
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </a>
              <a 
                href="#how-it-works" 
                className="btn btn-white btn-large"
              >
                See How It Works
              </a>
            </div>
            <div className="whatsapp-hero-features">
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>No Per-Message Fees</span>
              </div>
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>Use Your Existing Number</span>
              </div>
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>Available Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="whatsapp-comparison section">
        <div className="container">
          <div 
            ref={comparisonRef}
            className={`comparison-header ${comparisonVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">
              Why Choose Our WhatsApp API Gateway Over Meta's Official API?
            </h2>
            <p className="section-subtitle">
              We built a better solution that removes all the limitations of Meta's WhatsApp Business API
            </p>
          </div>
          
          <div className="comparison-table">
            <div className="comparison-header-row">
              <div className="comparison-feature-col">Feature</div>
              <div className="comparison-meta-col">
                <div className="comparison-brand">
                  <span className="brand-name">Meta WhatsApp API</span>
                  <span className="brand-badge">Official</span>
                </div>
              </div>
              <div className="comparison-ours-col">
                <div className="comparison-brand">
                  <span className="brand-name">Our WhatsApp API Gateway</span>
                  <span className="brand-badge brand-badge-success">Better</span>
                </div>
              </div>
            </div>
            
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className="comparison-row"
              >
                <div className="comparison-feature-col">
                  <div className="feature-icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="feature-name">{item.feature}</span>
                </div>
                <div className="comparison-meta-col">
                  <div className="comparison-value comparison-value-negative">
                    <FiX className="x-icon" />
                    <span>{item.meta}</span>
                  </div>
                </div>
                <div className="comparison-ours-col">
                  <div className="comparison-value comparison-value-positive">
                    <FiCheck className="check-icon" />
                    <span>{item.ours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="comparison-cta">
            <a 
              href="https://wasms.nirosha.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Start for FREE - No Credit Card Required
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="whatsapp-benefits section">
        <div className="container">
          <div 
            ref={benefitsRef}
            className={`benefits-header ${benefitsVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">Everything You Need to Communicate Better</h2>
            <p className="section-subtitle">
              Powerful features that make WhatsApp communication seamless and cost-effective
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="how-it-works" className="whatsapp-use-cases section">
        <div className="container">
          <div 
            ref={useCasesRef}
            className={`use-cases-header ${useCasesVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">Limitless Possibilities</h2>
            <p className="section-subtitle">
              See how businesses are using our WhatsApp API Gateway to transform customer communication
            </p>
          </div>
          
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="use-case-card"
              >
                <div className="use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <div className="use-case-example">
                  <FiArrowRight className="arrow-icon" />
                  <span>{useCase.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="whatsapp-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Customer Communication?</h2>
            <p>
              Join thousands of businesses using our WhatsApp API Gateway to communicate better, 
              faster, and more cost-effectively.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wasms.nirosha.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                <FiSend style={{ marginRight: '8px' }} />
                Start for FREE
              </a>
              <Link href="/contact/" className="btn btn-white btn-large">
                <FiMessageCircle style={{ marginRight: '8px' }} />
                Talk to an Expert
              </Link>
            </div>
            <p className="cta-note">
              ✓ No credit card required &nbsp;•&nbsp; ✓ Setup in minutes &nbsp;•&nbsp; ✓ Unlimited messages
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatsAppAPIGatewayPage


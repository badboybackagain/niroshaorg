'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCTA } from '../components/CTAContext'
import { 
  FiCheck, 
  FiArrowRight, 
  FiMail, 
  FiZap, 
  FiDollarSign,
  FiBarChart,
  FiUsers,
  FiSettings,
  FiCode,
  FiShield,
  FiClock,
  FiSend,
  FiFilter,
  FiLink,
  FiGlobe,
  FiTrendingUp,
  FiFileText,
  FiLayers,
  FiBell
} from 'react-icons/fi'

const PinnacleBlastPage = () => {
  const { setCTAContent } = useCTA()
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [useCasesRef, useCasesVisible] = useScrollAnimation({ threshold: 0.2 })

  // Hide the global CTA on this page
  React.useEffect(() => {
    setCTAContent({ visible: false })
    return () => {
      setCTAContent({ visible: true })
    }
  }, [setCTAContent])

  const features = [
    {
      icon: <FiDollarSign />,
      title: 'Send Newsletters 100x Cheaper',
      description: 'With Pinnacle Blast, you no longer pay increasingly expensive monthly fees. Pay only when you send at incredibly low rates. Send emails quickly via Amazon SES with high deliverability rates. Best bang for your buck!'
    },
    {
      icon: <FiBarChart />,
      title: 'Beautiful Reports',
      description: 'See results of every campaign and autoresponders in beautifully formatted reports. Visualize opens, clicks, bounces, complaints and countries with charts & data. Export segments of subscribers from your report for re-targeting.'
    },
    {
      icon: <FiBell />,
      title: 'Autoresponders',
      description: 'Automate your marketing by setting up a series of emails in drip campaigns to automatically follow up with your subscribers at time intervals you set. Or send emails annually or one-off emails at a specific date. Keep your subscribers engaged.'
    },
    {
      icon: <FiFilter />,
      title: 'List Segmentation',
      description: 'Research shows sending emails to targeted segments can increase email engagement as well as revenue by more than 25%. Create segments for any list based on any conditions you define. Choose segments and/or lists to include or exclude in your email campaigns.'
    },
    {
      icon: <FiCode />,
      title: 'Rules & Webhooks',
      description: 'Decide what happens when something happens - by creating Rules. Setup a rule to get notified by email when a scheduled campaign starts sending, trigger a webhook when an autoresponder is sent, unsubscribe someone from a list when they\'re signed up to another, and so on.'
    },
    {
      icon: <FiUsers />,
      title: 'List & Subscriber Management',
      description: 'Manage and segment lists & subscribers easily. Mass import/delete subscribers, custom fields, single/double opt-in, custom subscribe/unsubscribe confirmation page, thank you/goodbye emails, subscribe form or API to add users.'
    },
    {
      icon: <FiFileText />,
      title: 'Custom Fields',
      description: 'Create custom fields to store more than just name and email. Not only can you store more information about your subscribers, you can use them for list segmentation or personalization tags in your newsletters for a more personalized experience.'
    },
    {
      icon: <FiShield />,
      title: 'Bounce & Complaint Handling',
      description: 'Keep your lists clean effortlessly as bounces, complaints and unsubscribes are automatically handled in real time once your newsletter is sent. There is no need for any manual post campaign cleanups, just sit back and watch your campaign report unfold.'
    },
    {
      icon: <FiGlobe />,
      title: 'Custom Domains',
      description: 'Setup custom domains so that unsubscribe, web version and trackable links will use the domain you prefer. Recipients will be better able to recognize who you are, resulting in lower complaint rates.'
    },
    {
      icon: <FiSettings />,
      title: 'Housekeeping',
      description: 'Having thousands of unconfirmed email addresses from double opt-in signups that serves no purpose in your lists? As well as people who had never ever read or engage in your emails? You can clean them off your list with just a click of a button.'
    },
    {
      icon: <FiLink />,
      title: 'Third Party Integrations & Zapier',
      description: 'Pinnacle Blast integrates with popular apps like WordPress, Magento, Joomla etc thanks to third party developers. Also works with Zapier, an automation service that enables you to integrate Pinnacle Blast with thousands of apps in Zapier\'s app directory!'
    }
  ]

  const benefits = [
    {
      icon: <FiTrendingUp />,
      title: 'Unlimited Subscribers',
      description: 'No limits on the number of subscribers. Grow your list as large as you want without worrying about increasing costs.'
    },
    {
      icon: <FiZap />,
      title: 'High Deliverability',
      description: 'Send emails via Amazon SES for excellent deliverability rates. Your emails reach the inbox, not the spam folder.'
    },
    {
      icon: <FiBarChart />,
      title: 'Detailed Analytics',
      description: 'Track opens, clicks, bounces, complaints, and countries with comprehensive reports and visualizations.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Pay Per Send',
      description: 'Only pay for what you send. No upfront costs or hidden fees. Cost-effective pricing that scales with your needs.'
    },
    {
      icon: <FiCode />,
      title: 'API & Integrations',
      description: 'Full API access and integrations with popular platforms. Connect Pinnacle Blast with your existing tools and workflows.'
    },
    {
      icon: <FiShield />,
      title: 'Managed Service',
      description: 'Fully managed email campaign solution. We handle the setup, maintenance, and optimization so you can focus on your business.'
    }
  ]

  const useCases = [
    {
      icon: <FiMail />,
      title: 'Newsletter Campaigns',
      description: 'Send regular newsletters to your subscribers with beautiful templates, detailed analytics, and automated scheduling. Keep your audience engaged with valuable content delivered directly to their inbox.',
      example: 'Newsletter → Automated Delivery → Analytics'
    },
    {
      icon: <FiBell />,
      title: 'Drip Campaign Automation',
      description: 'Set up automated email sequences that trigger based on subscriber actions or time intervals. Welcome new subscribers, nurture leads, and re-engage inactive users automatically.',
      example: 'Subscriber Action → Automated Sequence → Engagement'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Marketing Campaigns',
      description: 'Launch targeted marketing campaigns to specific segments of your audience. Increase engagement and revenue by sending the right message to the right people at the right time.',
      example: 'Campaign Launch → Segmented Delivery → Results'
    },
    {
      icon: <FiBarChart />,
      title: 'E-commerce Updates',
      description: 'Send order confirmations, shipping notifications, and promotional emails to your customers. Keep them informed and engaged throughout their journey.',
      example: 'Order Placed → Automated Updates → Customer Satisfaction'
    },
    {
      icon: <FiFilter />,
      title: 'Segmented Communications',
      description: 'Create highly targeted segments based on subscriber behavior, preferences, or custom fields. Send personalized content that resonates with each segment.',
      example: 'Data Collection → Segmentation → Personalized Content'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pinnacle-hero">
        <div className="pinnacle-hero-background"></div>
        <div className="container">
          <div 
            ref={heroRef}
            className={`pinnacle-hero-content ${heroVisible ? 'animate-fadeInUp' : ''}`}
          >
            <div className="pinnacle-hero-badge">
              <FiMail style={{ marginRight: '8px' }} />
              <span>Email Campaign Solution</span>
            </div>
            <h1 className="pinnacle-hero-title">
              Pinnacle Blast
              <span className="gradient-text"> - Email Campaigns 100x Cheaper</span>
            </h1>
            <p className="pinnacle-hero-subtitle">
              Professional email newsletter solution that lets you send bulk emails via Amazon SES. 
              Pay only when you send, with incredibly low rates. Unlimited subscribers 
              and high deliverability rates.
            </p>
            <div className="pinnacle-hero-cta">
              <Link 
                href="/contact/?service=Pinnacle Blast" 
                className="btn btn-primary btn-large"
              >
                <span>Get Started</span>
                <FiArrowRight style={{ marginLeft: '8px' }} />
              </Link>
              <a 
                href="#features" 
                className="btn btn-white btn-large"
              >
                Explore Features
              </a>
            </div>
            <div className="pinnacle-hero-features">
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>Unlimited Subscribers</span>
              </div>
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>High Deliverability</span>
              </div>
              <div className="hero-feature-item">
                <FiCheck className="check-icon" />
                <span>Pay Per Send</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pinnacle-features section">
        <div className="container">
          <div 
            ref={featuresRef}
            className={`features-header ${featuresVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">Powerful Features You'll Get</h2>
            <p className="section-subtitle">
              Everything you need to run successful email campaigns at a fraction of the cost
            </p>
          </div>
          
          <div className="pinnacle-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pinnacle-feature-card"
              >
                <div className="pinnacle-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pinnacle-benefits section">
        <div className="container">
          <div 
            ref={benefitsRef}
            className={`benefits-header ${benefitsVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">Why Choose Pinnacle Blast?</h2>
            <p className="section-subtitle">
              Powerful email marketing solution that grows with your business without breaking the bank
            </p>
          </div>
          
          <div className="pinnacle-benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="pinnacle-benefit-card"
              >
                <div className="pinnacle-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="pinnacle-use-cases section">
        <div className="container">
          <div 
            ref={useCasesRef}
            className={`use-cases-header ${useCasesVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="section-title">Perfect For Every Email Marketing Need</h2>
            <p className="section-subtitle">
              See how businesses use Pinnacle Blast to transform their email marketing
            </p>
          </div>
          
          <div className="pinnacle-use-cases-grid">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="pinnacle-use-case-card"
              >
                <div className="pinnacle-use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <div className="pinnacle-use-case-example">
                  <FiArrowRight className="arrow-icon" />
                  <span>{useCase.example}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pinnacle-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Email Marketing?</h2>
            <p>
              Join businesses using Pinnacle Blast to send emails at a fraction of the cost, 
              with unlimited subscribers and powerful features.
            </p>
            <div className="cta-buttons">
              <Link 
                href="/contact/?service=Pinnacle Blast" 
                className="btn btn-primary btn-large"
              >
                <FiSend style={{ marginRight: '8px' }} />
                Connect With Us
              </Link>
              <Link href="/contact/" className="btn btn-white btn-large">
                <FiMail style={{ marginRight: '8px' }} />
                Get More Information
              </Link>
            </div>
            <p className="cta-note">
              ✓ Pay per send &nbsp;•&nbsp; ✓ Unlimited subscribers &nbsp;•&nbsp; ✓ High deliverability
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PinnacleBlastPage


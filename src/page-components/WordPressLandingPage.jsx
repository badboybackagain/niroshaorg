'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CountdownTimer from '../components/CountdownTimer'
import { 
  FiCheck, 
  FiArrowRight, 
  FiCalendar, 
  FiPhone,
  FiZap,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiLink,
  FiSmartphone,
  FiMonitor,
  FiGlobe,
  FiBarChart2,
  FiUsers,
  FiAward,
  FiTarget,
  FiMessageCircle,
  FiMail
} from 'react-icons/fi'

const WordPressLandingPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [uspRef, uspVisible] = useScrollAnimation({ threshold: 0.2 })
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.2 })
  const [pricingRef, pricingVisible] = useScrollAnimation({ threshold: 0.2 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.2 })

  // Countdown target: 48 hours from now
  const countdownTarget = React.useMemo(() => {
    return new Date().getTime() + (48 * 60 * 60 * 1000)
  }, [])

  // USPs
  const usps = [
    {
      icon: <FiClock />,
      title: 'Timely Delivery Guaranteed',
      description: 'We deliver your landing page within 48 hours or we cut 50% of the project fee!',
      highlight: '50% OFF if delayed',
      color: '#2563eb'
    },
    {
      icon: <FiZap />,
      title: 'High Performance',
      description: 'PageSpeed scores near 90, optimized Core Web Vitals, and lightning-fast loading times.',
      highlight: 'Near 90 PageSpeed',
      color: '#10b981'
    },
    {
      icon: <FiShield />,
      title: 'Mobile Responsive',
      description: 'Perfect display on all devices - desktop, tablet, and mobile. Mobile-first design approach.',
      highlight: '100% Responsive',
      color: '#f59e0b'
    },
    {
      icon: <FiLink />,
      title: 'CRM Integration Ready',
      description: 'Seamless integration with HubSpot, Salesforce, Mailchimp, and other popular CRMs.',
      highlight: 'CRM Ready',
      color: '#8b5cf6'
    }
  ]

  // Features
  const features = [
    {
      icon: <FiMonitor />,
      title: 'Professional Design',
      description: 'Modern, conversion-optimized design that captures attention and drives action.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile-First',
      description: 'Responsive design that looks perfect on all devices and screen sizes.'
    },
    {
      icon: <FiZap />,
      title: 'Fast Loading',
      description: 'Optimized for speed with PageSpeed scores near 90 and fast Core Web Vitals.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Analytics Ready',
      description: 'Pre-integrated with Google Analytics, Facebook Pixel, and other tracking tools.'
    },
    {
      icon: <FiLink />,
      title: 'CRM Integration',
      description: 'Connect with HubSpot, Salesforce, Mailchimp, and other CRM platforms.'
    },
    {
      icon: <FiShield />,
      title: 'Secure & Reliable',
      description: 'SSL certificate, secure forms, and regular backups included.'
    }
  ]

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      price: '₹6,999',
      originalPrice: '₹12,999',
      features: [
        '1 Landing Page',
        'Mobile Responsive Design',
        'Basic Contact Form',
        'Google Analytics Setup',
        '48-Hour Delivery',
        '1 Round of Revisions',
        'Basic SEO Optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹14,999',
      originalPrice: '₹24,999',
      features: [
        '1 Landing Page',
        'Mobile Responsive Design',
        'Advanced Contact Form',
        'CRM Integration (HubSpot/Salesforce)',
        'Google Analytics + Facebook Pixel',
        '48-Hour Delivery',
        '3 Rounds of Revisions',
        'Advanced SEO Optimization',
        'A/B Testing Setup',
        'Email Marketing Integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹29,999',
      originalPrice: '₹49,999',
      features: [
        '2 Landing Pages',
        'Mobile Responsive Design',
        'Multi-Step Forms',
        'Multiple CRM Integrations',
        'Full Analytics Suite',
        '48-Hour Delivery',
        'Unlimited Revisions',
        'Complete SEO Package',
        'A/B Testing & Optimization',
        'Email Marketing Integration',
        'Priority Support',
        'Performance Monitoring'
      ],
      popular: false
    }
  ]

  return (
    <>
      {/* Hero Section with Countdown */}
      <section className="landing-hero" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }} suppressHydrationWarning>
        <div className="container">
          <div 
            ref={heroRef}
            className={`landing-hero-content ${heroVisible ? 'animate-fadeInUp' : ''}`}
            style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
            suppressHydrationWarning
          >
            {/* WordPress Logo/Badge */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" fill="#21759B"/>
                  <path d="M12 5.5C8.4 5.5 5.5 8.4 5.5 12c0 1.8.7 3.4 1.9 4.6L5 19.5l2.9-2.4c1.2.8 2.6 1.2 4.1 1.2 3.6 0 6.5-2.9 6.5-6.5S15.6 5.5 12 5.5zm0 11.8c-1 0-1.9-.3-2.7-.7l.6-1.4c.7.4 1.5.6 2.3.6 1.2 0 2.2-.4 2.2-1.1 0-.5-.4-.9-1-1.2l-1-.4c-1-.4-1.6-1-1.6-2 0-1.2 1-2 2.6-2 .8 0 1.5.2 2.1.4l-.5 1.2c-.5-.2-1.1-.4-1.6-.4-1 0-1.7.3-1.7.9 0 .4.3.7.9 1l1 .4c1 .4 1.6 1 1.6 2 0 1.3-1 2.1-2.7 2.1z" fill="#fff"/>
                </svg>
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>WordPress Landing Page</span>
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Get Your High-Converting<br />
              WordPress Landing Page<br />
              <span style={{ color: '#ffd700' }}>Starting at Just ₹6,999</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              opacity: 0.95,
              lineHeight: 1.8
            }}>
              Professional, mobile-responsive WordPress landing pages delivered in <strong>48 hours</strong>.<br />
              Timely delivery guaranteed or we cut 50% of the project fee!
            </p>

            {/* Countdown Timer */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ 
                fontSize: '1rem', 
                marginBottom: '1rem', 
                opacity: 0.9,
                fontWeight: '600'
              }}>
                Limited Time Offer - Order Now:
              </p>
              <CountdownTimer targetDate={countdownTarget} />
            </div>

            {/* Primary CTA */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }} suppressHydrationWarning>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{
                  background: '#fff',
                  color: '#667eea',
                  padding: '1rem 2.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
                suppressHydrationWarning
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                <FiCalendar style={{ fontSize: '1.25rem' }} />
                Get Started Now - Free Consultation
                <FiArrowRight style={{ fontSize: '1.25rem' }} />
              </a>
              <a 
                href="tel:+919403891938" 
                className="btn btn-secondary"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                suppressHydrationWarning
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <FiPhone style={{ fontSize: '1.25rem' }} />
                Call: +91 9403891938
              </a>
            </div>

            {/* Trust Indicators */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
              opacity: 0.9
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCheck style={{ fontSize: '1.25rem' }} />
                <span>48-Hour Delivery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCheck style={{ fontSize: '1.25rem' }} />
                <span>Money-Back Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCheck style={{ fontSize: '1.25rem' }} />
                <span>450+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="landing-usps" style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div 
            ref={uspRef}
            className={`${uspVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '1rem',
              color: 'var(--text-dark)'
            }}>
              Why Choose Our WordPress Landing Pages?
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              color: 'var(--text-light)',
              marginBottom: '3rem',
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              We don't just build landing pages - we build conversion machines that drive results
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {usps.map((usp, index) => {
                const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`${isVisible ? 'animate-fadeInUp' : ''}`}
                    style={{
                      background: '#fff',
                      padding: '2rem',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: `3px solid ${usp.color}`,
                      borderTop: `6px solid ${usp.color}`,
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 100}ms`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: `${usp.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{ color: usp.color, fontSize: '2rem' }}>
                        {usp.icon}
                      </div>
                    </div>
                    <div style={{
                      display: 'inline-block',
                      background: `${usp.color}15`,
                      color: usp.color,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1rem'
                    }}>
                      {usp.highlight}
                    </div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      color: 'var(--text-dark)'
                    }}>
                      {usp.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-light)',
                      lineHeight: 1.7
                    }}>
                      {usp.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div 
            ref={featuresRef}
            className={`${featuresVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text-dark)'
            }}>
              Everything You Need in One Package
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {features.map((feature, index) => {
                const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`${isVisible ? 'animate-fadeInUp' : ''}`}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      background: '#f8f9fa',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 100}ms`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fff'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8f9fa'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        color: 'var(--text-dark)'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        color: 'var(--text-light)',
                        lineHeight: 1.7
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="landing-pricing" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff' }}>
        <div className="container">
          <div 
            ref={pricingRef}
            className={`${pricingVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: '1.125rem',
              opacity: 0.95,
              marginBottom: '3rem'
            }}>
              Choose the plan that fits your needs. All plans include 48-hour delivery guarantee.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {pricingTiers.map((tier, index) => {
                const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`${isVisible ? 'animate-fadeInUp' : ''}`}
                    style={{
                      background: tier.popular ? '#fff' : 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: tier.popular ? 'none' : 'blur(10px)',
                      color: tier.popular ? 'var(--text-dark)' : '#fff',
                      padding: '2.5rem',
                      borderRadius: '20px',
                      border: tier.popular ? '4px solid #ffd700' : '2px solid rgba(255, 255, 255, 0.2)',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 150}ms`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {tier.popular && (
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#ffd700',
                        color: '#000',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Most Popular
                      </div>
                    )}
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      {tier.name}
                    </h3>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                      <div style={{
                        fontSize: '0.875rem',
                        opacity: 0.8,
                        textDecoration: 'line-through',
                        marginBottom: '0.5rem'
                      }}>
                        {tier.originalPrice}
                      </div>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        lineHeight: 1
                      }}>
                        {tier.price}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        opacity: 0.8,
                        marginTop: '0.5rem'
                      }}>
                        One-time payment
                      </div>
                    </div>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '2rem'
                    }}>
                      {tier.features.map((feature, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          marginBottom: '1rem',
                          fontSize: '0.95rem'
                        }}>
                          <FiCheck style={{
                            color: tier.popular ? '#10b981' : '#fff',
                            fontSize: '1.25rem',
                            flexShrink: 0,
                            marginTop: '0.1rem'
                          }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://calendly.com/nirosha-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '1.125rem',
                        transition: 'all 0.3s ease',
                        background: tier.popular 
                          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          : 'rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        border: tier.popular ? 'none' : '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                      suppressHydrationWarning
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)'
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      Get Started Now
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="landing-cta" style={{ padding: '100px 0', background: '#000', color: '#fff' }} suppressHydrationWarning>
        <div className="container">
          <div 
            ref={ctaRef}
            className={`${ctaVisible ? 'animate-fadeInUp' : ''}`}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            suppressHydrationWarning
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }}>
              Ready to Get Your High-Converting Landing Page?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              opacity: 0.9,
              lineHeight: 1.8
            }}>
              Join 450+ satisfied clients who trust us with their WordPress landing pages.<br />
              Get started today and see results in 48 hours!
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }} suppressHydrationWarning>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  background: '#fff',
                  color: '#000',
                  padding: '1.25rem 3rem',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.2)'
                }}
                suppressHydrationWarning
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 6px 30px rgba(255,255,255,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.2)'
                }}
              >
                <FiCalendar style={{ fontSize: '1.5rem' }} />
                Book Free Consultation
                <FiArrowRight style={{ fontSize: '1.5rem' }} />
              </a>
              <a 
                href="tel:+919403891938" 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  padding: '1.25rem 3rem',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                suppressHydrationWarning
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <FiPhone style={{ fontSize: '1.5rem' }} />
                Call: +91 9403891938
              </a>
            </div>

            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: '0.95rem',
              opacity: 0.8
            }} suppressHydrationWarning>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMessageCircle style={{ fontSize: '1.25rem' }} />
                <a href="https://wa.me/919403891938" style={{ color: '#fff', textDecoration: 'none' }} suppressHydrationWarning>
                  WhatsApp Us
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMail style={{ fontSize: '1.25rem' }} />
                <a href="mailto:info@nirosha.org" style={{ color: '#fff', textDecoration: 'none' }} suppressHydrationWarning>
                  info@nirosha.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WordPressLandingPage


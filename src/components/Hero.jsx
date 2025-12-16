import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'
import { Helmet } from 'react-helmet-async'

const StatItem = ({ number, label, suffix = '', isVisible }) => {
  // Extract numeric value and suffix
  const numericValue = parseInt(number.replace(/\D/g, '')) || 0
  const hasPlus = number.includes('+')
  const hasSlash = number.includes('/')
  
  // Only animate if it's a number (not 24/7)
  const shouldAnimate = !hasSlash && numericValue > 0
  
  const count = useCountUp({ 
    end: numericValue, 
    duration: 2000, 
    enabled: shouldAnimate && isVisible 
  })

  return (
    <div className="stat">
      <div className="stat-number">
        {hasSlash ? (
          <span className="stat-number-animated">{number}</span>
        ) : (
          <>
            <span className="stat-number-animated">{count.toLocaleString()}</span>
            {hasPlus && <span className="stat-number-suffix">+</span>}
          </>
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

const Hero = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3 })

  return (
    <section id="home" className="hero">
      <Helmet>
        <title>Web Development, SEO & Automation Agency | Team Nirosha</title>
        <meta name="description" content="Team Nirosha is a trusted digital agency offering web development, SEO, automation, SaaS and IT solutions to help businesses grow securely." />
        <meta name="keywords" content="Nirosha Enterprises, Team Nirosha, web development company, digital agency, SEO services, local SEO services, website maintenance AMC, business automation, SaaS solutions, CRM automation, cloud hosting services, IT solutions provider" />
      </Helmet>
      {/* Defer non-critical decorative elements */}
      <div className="hero-background-pattern" style={{ contentVisibility: 'auto' }}></div>
      <div className="hero-particles" style={{ contentVisibility: 'auto' }}>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      <div className="hero-glow hero-glow-1" style={{ contentVisibility: 'auto' }}></div>
      <div className="hero-glow hero-glow-2" style={{ contentVisibility: 'auto' }}></div>
      <div className="container">
        <div className="hero-content">
          {/* LCP element - render immediately without delay */}
          <div className="hero-badge">
            <span>Your Trusted Digital Partner – Team Nirosha</span>
          </div>
          <h1 
            ref={titleRef}
            className={`hero-title ${titleVisible ? 'animate-fadeInUp' : ''}`}
          >
            We Build Secure, Scalable Digital Solutions for Growing Businesses
          </h1>
          <p className="hero-subtitle-heading">
            Web, SEO, Automation & Cloud Services Under One Roof
          </p>
          <p className="hero-subtitle">
            As a leading digital agency in India, Team Nirosha provides comprehensive web development services, 
            SEO services, website maintenance AMC, business automation solutions, SaaS development, and cloud hosting 
            services. We're your trusted IT solutions provider, helping businesses scale with secure, reliable technology.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-white">
              Let's Build Your Digital Future
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </Link>
            <a href="https://calendly.com/nirosha-info/30min" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }}>
              <FiCalendar style={{ marginRight: '8px' }} />
              Book a Free Consultation
            </a>
          </div>
          <div 
            ref={statsRef}
            className={`hero-stats ${statsVisible ? 'animate-fadeInUp' : ''}`}
          >
            <StatItem number="1800+" label="Projects Delivered" isVisible={statsVisible} />
            <StatItem number="450+" label="Happy Clients" isVisible={statsVisible} />
            <StatItem number="24/7" label="Support" isVisible={statsVisible} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


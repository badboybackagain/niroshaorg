'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FiTarget, 
  FiShield, 
  FiZap, 
  FiRefreshCw, 
  FiLayers, 
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi'

const TrustCard = ({ trustPoint, index }) => {
  return (
    <div 
      key={index}
      className="trust-card"
    >
      <div className="trust-icon-wrapper">
        <div className="trust-icon">{trustPoint.icon}</div>
      </div>
      <h3 className="trust-title">{trustPoint.title}</h3>
      <p className="trust-description">{trustPoint.description}</p>
    </div>
  )
}

const WhyChoose = () => {
  const trustPoints = [
    {
      icon: <FiTarget />,
      title: 'Business-First Thinking',
      description: 'We understand your business goals first, then design technology that actually supports growth, efficiency, and ROI.'
    },
    {
      icon: <FiShield />,
      title: 'Security & Stability by Default',
      description: 'From secure hosting to regular backups and monitoring, your digital assets are protected from day one.'
    },
    {
      icon: <FiZap />,
      title: 'Fast, Reliable Support',
      description: 'Clear SLAs, quick response times, and a team that\'s always reachable when it matters most.'
    },
    {
      icon: <FiRefreshCw />,
      title: 'Long-Term Partnership Approach',
      description: 'We don\'t disappear after launch. We maintain, optimize, and evolve your digital systems continuously.'
    },
    {
      icon: <FiLayers />,
      title: 'End-to-End Expertise',
      description: 'Web, SEO, automation, SaaS, cloud, and infrastructure - everything under one trusted team.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Built to Scale',
      description: 'Our solutions are designed to grow with your business, not limit it.'
    }
  ]

  return (
    <section className="section why-choose">
      <div className="container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Businesses Trust Team Nirosha</h2>
          <p className="why-choose-subtitle">
            We don't just build websites or software - we build reliable digital systems that support your business, protect your data, and scale as you grow.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((trustPoint, index) => (
            <TrustCard key={index} trustPoint={trustPoint} index={index} />
          ))}
        </div>

        <div className="why-choose-closing">
          <p className="why-choose-closing-text">
            When you work with Team Nirosha, technology becomes your strength - not a headache.
          </p>
          <Link href="/contact" className="btn btn-primary why-choose-cta" suppressHydrationWarning>
            Talk to Team Nirosha
            <FiArrowRight style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose


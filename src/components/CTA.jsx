'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="contact" className="section cta">
      <div className="container">
        <div 
          ref={ref}
          className={`cta-content ${isVisible ? 'animate-fadeInUp' : ''}`}
        >
          <h2 className="cta-title">
            Let Team Nirosha handle your technology, so you can focus on growing your business.
          </h2>
          <p className="cta-subtitle">
            Ready to transform your digital presence? Let's talk about your project.
          </p>
          <div className="cta-buttons" suppressHydrationWarning>
            <a href="https://calendly.com/nirosha-info/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" suppressHydrationWarning>
              Get a Free Consultation
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <Link href="/contact" className="btn btn-secondary" suppressHydrationWarning>
              <FiPhone style={{ marginRight: '8px' }} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA


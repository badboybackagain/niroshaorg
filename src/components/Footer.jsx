'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { FiArrowUp, FiFacebook, FiLinkedin, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi'
import Logo from './Logo'
import { servicesData } from '../data/servicesData.jsx'

const Footer = () => {
  const footerRef = useRef(null)
  const scrollTopRef = useRef(null)

  // Get top 6 services for footer
  const topServices = Object.values(servicesData)
    .slice(0, 6)
    .map(service => ({
      title: service.title,
      slug: `/services/${service.slug}`
    }))

  useEffect(() => {
    const footer = footerRef.current
    if (!footer || !scrollTopRef.current) return

    // Animate scroll to top button
    const handleScroll = () => {
      if (!scrollTopRef.current) return
      
      if (window.scrollY > 300) {
        gsap.to(scrollTopRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        gsap.to(scrollTopRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Kill any running GSAP animations on scrollTopRef
      if (scrollTopRef.current) {
        gsap.killTweensOf(scrollTopRef.current)
      }
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <>
      <footer ref={footerRef} className="footer-new">
        <div className="footer-bg-texture"></div>
        <div className="container">
          <div className="footer-content-new">
            {/* Column 1: Company Info */}
            <div className="footer-col">
              <Logo size="small" className="footer-logo-new" />
              <p className="footer-description-new">
                Understanding client needs, defining goals, and designing tailored digital solutions that drive growth.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook" suppressHydrationWarning>
                  <FiFacebook />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn" suppressHydrationWarning>
                  <FiLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram" suppressHydrationWarning>
                  <FiInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter" suppressHydrationWarning>
                  <FiTwitter />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading-new">Quick Links</h4>
              <ul className="footer-links-new">
                <li>
                  <span className="footer-link-bullet"></span>
                  <Link href="/" suppressHydrationWarning>Home</Link>
                </li>
                <li>
                  <span className="footer-link-bullet"></span>
                  <Link href="/about" suppressHydrationWarning>About Us</Link>
                </li>
                <li>
                  <span className="footer-link-bullet"></span>
                  <Link href="/services" suppressHydrationWarning>Services</Link>
                </li>
                <li>
                  <span className="footer-link-bullet"></span>
                  <Link href="/blog" suppressHydrationWarning>Blog</Link>
                </li>
                <li>
                  <span className="footer-link-bullet"></span>
                  <Link href="/contact" suppressHydrationWarning>Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h4 className="footer-heading-new">Our Services</h4>
              <ul className="footer-links-new">
                {topServices.map((service, index) => (
                  <li key={index}>
                    <span className="footer-link-bullet"></span>
                    <Link href={service.slug} suppressHydrationWarning>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading-new">Contact Us</h4>
              <ul className="footer-contact-new">
                <li>
                  <a href="tel:+919403891938" aria-label="Call Team Nirosha at +91-9403891938" suppressHydrationWarning>
                    <FiPhone />
                    <span>+91-9403891938</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919403891938" target="_blank" rel="noopener noreferrer" aria-label="Contact Team Nirosha on WhatsApp" suppressHydrationWarning>
                    <FiMessageCircle />
                    <span>WhatsApp: +91-9403891938</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nirosha.org" aria-label="Email Team Nirosha at info@nirosha.org" suppressHydrationWarning>
                    <FiMail />
                    <span>info@nirosha.org</span>
                  </a>
                </li>
                <li>
                  <div className="footer-address-new">
                    <FiMapPin />
                    <span>Hadapsar, Pune, Maharashtra, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-new">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Team Nirosha. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/privacy" suppressHydrationWarning>Privacy Policy</Link>
              <span className="footer-link-separator">•</span>
              <Link href="/terms" suppressHydrationWarning>Terms & Condition</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        ref={scrollTopRef}
        onClick={handleScrollToTop}
        className="footer-scroll-top"
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </>
  )
}

export default Footer


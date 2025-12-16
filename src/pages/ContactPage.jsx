import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Contact from '../components/Contact'

const ContactPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <>
      <Helmet>
        <title>Contact Us - Team Nirosha | Get In Touch</title>
        <meta name="description" content="Get in touch with Team Nirosha. Contact us for web development, SEO, digital marketing, and cloud services. We're here to help transform your digital presence." />
        <meta name="keywords" content="contact Team Nirosha, web development contact, digital agency India, get in touch, contact form" />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-page-hero-section">
        <div className="contact-hero-background-pattern"></div>
        <div className="contact-hero-particles">
          <div className="contact-particle contact-particle-1"></div>
          <div className="contact-particle contact-particle-2"></div>
          <div className="contact-particle contact-particle-3"></div>
          <div className="contact-particle contact-particle-4"></div>
        </div>
        <div className="contact-hero-glow contact-hero-glow-1"></div>
        <div className="contact-hero-glow contact-hero-glow-2"></div>
        <div className="container">
          <div className="contact-hero-content">
            <div 
              ref={heroRef}
              className={`contact-hero-text ${heroVisible ? 'animate-fadeInUp' : ''}`}
            >
              <span className="contact-hero-badge">Get In Touch</span>
              <h1 className="contact-hero-headline">Contact Team Nirosha - Web Development & Digital Marketing Services</h1>
              <p className="contact-hero-subheadline">
                Ready to transform your digital presence? We're here to help you grow. Reach out and let's discuss how we can bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <Contact />
    </>
  )
}

export default ContactPage



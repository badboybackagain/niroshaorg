import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiSend, FiUser, FiMail as FiEmail } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [searchParams] = useSearchParams()
  
  const services = [
    'Web Development',
    'Branding & Design',
    'SEO Services',
    'Local SEO',
    'Social Media Marketing',
    'Digital Marketing',
    'Content Services',
    'E-commerce Solutions',
    'Web Maintenance',
    'UI/UX Design',
    'Automation & SaaS',
    'Cloud & Infrastructure',
    'Other'
  ]

  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    serviceInterested: [],
    comments: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2 })
  const [infoRef, infoVisible] = useScrollAnimation({ threshold: 0.2 })
  const [mapRef, mapVisible] = useScrollAnimation({ threshold: 0.2 })

  // Pre-select service from URL parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam)
      // Check if service exists in the services list
      if (services.includes(decodedService)) {
        setFormData(prev => ({
          ...prev,
          serviceInterested: [decodedService]
        }))
      }
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate that at least one service is selected
    if (formData.serviceInterested.length === 0) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        whatsappNumber: '',
        email: '',
        serviceInterested: [],
        comments: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section contact-page">
      <div className="contact-page-background-pattern"></div>
      <div className="contact-page-particles">
        <div className="contact-page-particle contact-page-particle-1"></div>
        <div className="contact-page-particle contact-page-particle-2"></div>
        <div className="contact-page-particle contact-page-particle-3"></div>
        <div className="contact-page-particle contact-page-particle-4"></div>
      </div>
      <div className="contact-page-glow contact-page-glow-1"></div>
      <div className="contact-page-glow contact-page-glow-2"></div>
      <div className="container">
        <div 
          ref={titleRef}
          className={`contact-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          <h2 className="contact-page-title">Get In Touch</h2>
          <p className="contact-page-subtitle">
            Ready to transform your digital presence? Let's discuss your project and see how we can help your business grow.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`contact-form-wrapper ${formVisible ? 'animate-fadeInLeft' : ''}`}
          >
            <div className="form-decoration form-decoration-1"></div>
            <div className="form-decoration form-decoration-2"></div>
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">
                  <FiUser />
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="whatsappNumber">
                  <FiMessageCircle />
                  WhatsApp Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  required
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FiEmail />
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>
                  <FiSend />
                  Services Interested In <span className="required">*</span>
                </label>
                <div className="services-chips-group">
                  {services.map((service, index) => {
                    const isSelected = formData.serviceInterested.includes(service)
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`service-chip ${isSelected ? 'service-chip-selected' : ''}`}
                        onClick={() => {
                          const newServices = isSelected
                            ? formData.serviceInterested.filter(s => s !== service)
                            : [...formData.serviceInterested, service]
                          setFormData(prev => ({
                            ...prev,
                            serviceInterested: newServices
                          }))
                        }}
                      >
                        {service}
                      </button>
                    )
                  })}
                </div>
                {formData.serviceInterested.length === 0 && (
                  <small style={{ display: 'block', marginTop: '0.5rem', color: 'rgba(255, 0, 0, 0.7)', fontSize: '0.875rem' }}>
                    Please select at least one service
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="comments">
                  <FiMessageCircle />
                  Comments / Project Details
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  <p>✓ Thank you! We'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-error">
                  <p>⚠ Please select at least one service.</p>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FiSend style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`contact-info-wrapper ${infoVisible ? 'animate-fadeInRight' : ''}`}
          >
            <div className="info-decoration info-decoration-1"></div>
            <div className="info-decoration info-decoration-2"></div>
            <h2 className="info-title">Contact Information</h2>
            <div className="contact-info-cards">
              <a href="tel:+919403891938" className="contact-info-card">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <span>+91-9403891938</span>
                </div>
              </a>

              <a href="https://wa.me/919403891938" target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="info-icon">
                  <FiMessageCircle />
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <span>+91-9403891938</span>
                </div>
              </a>

              <a href="mailto:info@nirosha.org" className="contact-info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div>
                  <h3>Email</h3>
                  <span>info@nirosha.org</span>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Hadapsar, Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Prefer to Schedule a Call?</h3>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div 
          ref={mapRef}
          className={`map-wrapper ${mapVisible ? 'animate-fadeInUp' : ''}`}
        >
          <div className="map-decoration map-decoration-1"></div>
          <div className="map-decoration map-decoration-2"></div>
          <h2 className="map-title">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1013983731755!2d73.9306516769688!3d18.47906567043733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb453d1d21f1%3A0x6e5a2f892489ed35!2sNirosha%20Enterprises%20%7C%20Web%20Designer!5e0!3m2!1sen!2sin!4v1765716819761!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nirosha Enterprises | Web Designer - Hadapsar, Pune"
            ></iframe>
            <div className="map-note">
              <p>
                <a 
                  href="https://share.google/ypdNfDOVtHYeFsUiU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  View on Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


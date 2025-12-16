import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo size="small" className="footer-logo" />
            <p className="footer-description">
              Your trusted digital growth partner. We build, secure, and scale technology solutions 
              that work while you sleep.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <a href="tel:+919403891938" aria-label="Call Team Nirosha at +91-9403891938">
                  <FiPhone />
                  <span>+91-9403891938</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919403891938" target="_blank" rel="noopener noreferrer" aria-label="Contact Team Nirosha on WhatsApp">
                  <FiMessageCircle />
                  <span>WhatsApp: +91-9403891938</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@nirosha.org" aria-label="Email Team Nirosha at info@nirosha.org">
                  <FiMail />
                  <span>info@nirosha.org</span>
                </a>
              </li>
              <li>
                <div className="footer-address">
                  <FiMapPin />
                  <span>Hadapsar, Pune, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Get Started</h4>
            <a 
              href="https://calendly.com/nirosha-info/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary footer-cta"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Team Nirosha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


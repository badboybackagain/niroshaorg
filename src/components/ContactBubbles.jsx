import React, { useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ContactBubbles = () => {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = '+919403891938'
  const whatsappNumber = '919403891938' // Without + for WhatsApp link

  return (
    <>
      {/* Desktop Floating Bubbles */}
      <div 
        className="contact-bubbles-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Bubble */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`contact-bubble whatsapp-bubble ${isHovered ? 'expanded' : ''}`}
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="bubble-icon" />
          {isHovered && <span className="bubble-label">WhatsApp</span>}
        </a>

        {/* Call Bubble */}
        <a
          href={`tel:${phoneNumber}`}
          className={`contact-bubble call-bubble ${isHovered ? 'expanded' : ''}`}
          aria-label="Call us"
        >
          <FiPhone className="bubble-icon" />
          {isHovered && <span className="bubble-label">Call</span>}
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="contact-mobile-bar">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-mobile-item whatsapp-item"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="contact-mobile-icon" />
          <span className="contact-mobile-label">WhatsApp</span>
        </a>
        <a
          href={`tel:${phoneNumber}`}
          className="contact-mobile-item call-item"
          aria-label="Call us"
        >
          <FiPhone className="contact-mobile-icon" />
          <span className="contact-mobile-label">Call</span>
        </a>
      </div>
    </>
  )
}

export default ContactBubbles


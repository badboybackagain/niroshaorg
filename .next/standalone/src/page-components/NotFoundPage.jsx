'use client'

import React from 'react'
import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import LightRaysBackground from '../components/LightRaysBackground'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <>
      {/* Metadata is handled in app/not-found.jsx */}
      <section className="not-found-section">
        <LightRaysBackground 
          raysOrigin="top-center"
          raysColor="#a8c0ff"
          raysSpeed={0.8}
          lightSpread={1.2}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.15}
        />
        <div className="not-found-container">
          <div className="not-found-content">
            {/* Glitch Text Effect for 404 */}
            <div className="glitch-wrapper">
              <div className="glitch" data-text="404">
                404
              </div>
            </div>
            
            <h1 className="not-found-title">Page Not Found</h1>
            
            <p className="not-found-description">
              Oops! The page you're looking for seems to have vanished into the digital void. 
              It might have been moved, deleted, or perhaps it never existed in the first place.
            </p>
            
            <p className="not-found-subdescription">
              Don't worry though - we're here to help you get back on track. 
              Let's take you home where you can explore our services, read our blog, or get in touch with us.
            </p>
            
            <div className="not-found-actions">
              <Link href="/" className="btn btn-primary btn-home">
                <FiHome style={{ marginRight: '8px' }} />
                Go to Homepage
              </Link>
              
              <Link href="/services" className="btn btn-secondary">
                <FiArrowLeft style={{ marginRight: '8px' }} />
                Browse Services
              </Link>
            </div>
            
            <div className="not-found-links">
              <p>Or try these popular pages:</p>
              <div className="quick-links">
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage

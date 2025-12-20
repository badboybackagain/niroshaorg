'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollSmootherWrapper from './ScrollSmootherWrapper'

// Lazy load below-the-fold components
const CTA = dynamic(() => import('./CTA'), { ssr: false })
const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false })
const ContactBubbles = dynamic(() => import('./ContactBubbles'), { ssr: false })

// Note: OrganizationSchema and WebsiteSchema are now in app/layout.jsx
// ScrollToTop is also in app/layout.jsx

const Layout = ({ children }) => {
  return (
    <div className="App" suppressHydrationWarning>
      {/* Fixed elements should be outside the smooth-wrapper */}
      <Navbar />
      
      {/* ScrollSmoother enabled on all pages - loads after initial render */}
      <ScrollSmootherWrapper />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            {children}
          </main>
          <Suspense fallback={null}>
            <CTA />
          </Suspense>
          <Footer />
        </div>
      </div>
      
      <Suspense fallback={null}>
        <ScrollToTopButton />
        <ContactBubbles />
      </Suspense>
    </div>
  )
}

export default Layout


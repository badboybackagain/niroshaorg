'use client'

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'
import ContactBubbles from './ContactBubbles'
import ScrollSmootherWrapper from './ScrollSmootherWrapper'

// Note: OrganizationSchema and WebsiteSchema are now in app/layout.jsx
// ScrollToTop is also in app/layout.jsx

const Layout = ({ children }) => {
  return (
    <div className="App" suppressHydrationWarning>
      {/* Fixed elements should be outside the smooth-wrapper */}
      <Navbar />
      
      {/* ScrollSmoother enabled on all pages */}
      <ScrollSmootherWrapper />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      
      <ScrollToTopButton />
      <ContactBubbles />
    </div>
  )
}

export default Layout


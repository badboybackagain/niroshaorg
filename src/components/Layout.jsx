import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollToTopButton from './ScrollToTopButton'
import ContactBubbles from './ContactBubbles'
import OrganizationSchema from './OrganizationSchema'
import WebsiteSchema from './WebsiteSchema'
import ScrollSmootherWrapper from './ScrollSmootherWrapper'

const Layout = () => {
  return (
    <div className="App">
      <OrganizationSchema />
      <WebsiteSchema />
      <ScrollToTop />
      {/* Fixed elements should be outside the smooth-wrapper */}
      <Navbar />
      
      {/* ScrollSmoother enabled on all pages */}
      <ScrollSmootherWrapper />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="main-content">
            <Outlet />
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


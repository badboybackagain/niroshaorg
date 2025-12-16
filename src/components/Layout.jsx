import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import ScrollToTopButton from './ScrollToTopButton'
import OrganizationSchema from './OrganizationSchema'
import WebsiteSchema from './WebsiteSchema'

const Layout = () => {
  return (
    <div className="App">
      <OrganizationSchema />
      <WebsiteSchema />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout


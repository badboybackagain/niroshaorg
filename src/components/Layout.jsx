'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollSmootherWrapper from './ScrollSmootherWrapper'
import RightClickContactCursor from './RightClickContactCursor'
import DisableDevTools from './DisableDevTools'

// Lazy load below-the-fold components
// CTA can be SSR'd since it uses useEffect for animations
const CTA = dynamic(() => import('./CTA'), { 
  ssr: true,
  loading: () => null 
})
const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false })
const ContactBubbles = dynamic(() => import('./ContactBubbles'), { ssr: false })

import { CTAProvider, useCTA } from './CTAContext'

// Note: OrganizationSchema and WebsiteSchema are now in app/layout.jsx
// ScrollToTop is also in app/layout.jsx

const LayoutContent = ({ children }) => {
  const { title, subtext, buttonText, buttonLink, visible } = useCTA()

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
            {visible && (
              <CTA
                title={title}
                subtext={subtext}
                buttonText={buttonText}
                buttonLink={buttonLink}
              />
            )}
          </Suspense>
          <Footer />
        </div>
      </div>

      <Suspense fallback={null}>
        <ScrollToTopButton />
        <ContactBubbles />
        <RightClickContactCursor />
        <DisableDevTools />
      </Suspense>
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <CTAProvider>
      <LayoutContent>{children}</LayoutContent>
    </CTAProvider>
  )
}

export default Layout


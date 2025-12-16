import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages for better code splitting and performance
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const BlogListingPage = lazy(() => import('./pages/BlogListingPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    Loading...
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="services/:slug" element={<ServiceDetailPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="blog" element={<BlogListingPage />} />
                <Route path="blog/:slug" element={<BlogDetailPage />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  )
}

export default App


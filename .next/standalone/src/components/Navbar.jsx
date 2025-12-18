'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu, FiX, FiSearch, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import Logo from './Logo'
import { servicesData } from '../data/servicesData.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const pathname = usePathname()
  const router = useRouter()
  const servicesDropdownRef = useRef(null)
  const servicesLinkRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setServicesDropdownOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Calculate dropdown position when it opens or on scroll/resize
  useEffect(() => {
    const updatePosition = () => {
      if (servicesDropdownOpen && servicesLinkRef.current) {
        const rect = servicesLinkRef.current.getBoundingClientRect()
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left
        })
      }
    }

    if (servicesDropdownOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)
    }

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [servicesDropdownOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target) &&
          servicesLinkRef.current && !servicesLinkRef.current.contains(event.target)) {
        setServicesDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  // Get all services for submenu
  const servicesList = Object.entries(servicesData).map(([slug, data]) => ({
    slug,
    title: data.title
  }))

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  // Prevent overflow when dropdown is open
  useEffect(() => {
    if (servicesDropdownOpen) {
      // Ensure navbar and body don't create scrollbars
      const navbar = document.querySelector('.navbar')
      const navContent = document.querySelector('.nav-content')
      const navLinks = document.querySelector('.nav-links-desktop')
      
      if (navbar) {
        navbar.style.overflow = 'visible'
        navbar.style.overflowY = 'visible'
        navbar.style.overflowX = 'hidden'
      }
      if (navContent) {
        navContent.style.overflow = 'visible'
      }
      if (navLinks) {
        navLinks.style.overflow = 'visible'
      }
      document.body.style.overflowX = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }
    return () => {
      const navbar = document.querySelector('.navbar')
      const navContent = document.querySelector('.nav-content')
      const navLinks = document.querySelector('.nav-links-desktop')
      
      if (navbar) {
        navbar.style.overflow = ''
        navbar.style.overflowY = ''
        navbar.style.overflowX = ''
      }
      if (navContent) {
        navContent.style.overflow = ''
      }
      if (navLinks) {
        navLinks.style.overflow = ''
      }
    }
  }, [servicesDropdownOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simple search implementation - can be enhanced later
      // For now, navigate to services page with search query
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">
              <Logo size="default" className="navbar-logo" />
            </div>
            <div className="nav-links-desktop">
              <Link 
                href="/" 
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              >
                <span>HOME</span>
              </Link>
              <Link 
                href="/about" 
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
              >
                <span>ABOUT</span>
              </Link>
              <div 
                className={`nav-link-dropdown ${pathname?.startsWith('/services') ? 'active' : ''}`}
                onMouseEnter={() => {
                  setServicesDropdownOpen(true)
                }}
                onMouseLeave={(e) => {
                  // Only close if not moving to dropdown
                  if (!servicesDropdownRef.current?.contains(e.relatedTarget)) {
                    setServicesDropdownOpen(false)
                  }
                }}
              >
                <Link 
                  href="/services" 
                  className="nav-link"
                  ref={servicesLinkRef}
                >
                  <span>SERVICES</span>
                  <FiChevronDown className="dropdown-icon" />
                </Link>
              </div>
              {servicesDropdownOpen && createPortal(
                <div 
                  className="services-dropdown"
                  ref={servicesDropdownRef}
                  style={{
                    position: 'fixed',
                    top: `${dropdownPosition.top}px`,
                    left: `${dropdownPosition.left}px`,
                    zIndex: 10000
                  }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link 
                    href="/services" 
                    className="services-dropdown-item services-dropdown-all"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <span>All Services</span>
                  </Link>
                  <div className="services-dropdown-divider"></div>
                  {servicesList.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`services-dropdown-item ${pathname === `/services/${service.slug}` ? 'active' : ''}`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>,
                document.body
              )}
              <Link 
                href="/blog" 
                className={`nav-link ${pathname?.startsWith('/blog') ? 'active' : ''}`}
              >
                <span>BLOG</span>
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
              >
                <span>CONTACT</span>
              </Link>
            </div>
            <form className="nav-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search...."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`search-input ${isSearchFocused ? 'focused' : ''}`}
              />
              <button type="submit" className="search-button" aria-label="Search">
                <FiSearch />
              </button>
            </form>
            <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              <span className="menu-icon">
                <FiMenu className="menu-open" />
                <FiX className="menu-close" />
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu - Outside container for full-screen overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`mobile-menu ${isOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link 
            href="/" 
            className={`mobile-menu-link ${pathname === '/' ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>Home</span>
          </Link>
          <Link 
            href="/about" 
            className={`mobile-menu-link ${pathname === '/about' ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>About</span>
          </Link>
          <div className="mobile-menu-services">
            <button
              className={`mobile-menu-link mobile-menu-services-toggle ${pathname?.startsWith('/services') ? 'active' : ''}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <FiChevronRight className={`mobile-menu-chevron ${mobileServicesOpen ? 'open' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mobile-menu-services-submenu">
                <Link
                  href="/services"
                  className={`mobile-menu-link mobile-menu-submenu-item ${pathname === '/services' ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false)
                    setMobileServicesOpen(false)
                  }}
                >
                  <span>All Services</span>
                </Link>
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`mobile-menu-link mobile-menu-submenu-item ${pathname === `/services/${service.slug}` ? 'active' : ''}`}
                    onClick={() => {
                      setIsOpen(false)
                      setMobileServicesOpen(false)
                    }}
                  >
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link 
            href="/blog" 
            className={`mobile-menu-link ${pathname?.startsWith('/blog') ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>BLOG</span>
          </Link>
          <Link 
            href="/contact" 
            className={`mobile-menu-link ${pathname === '/contact' ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>CONTACT</span>
          </Link>
          <form className="mobile-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mobile-search-input"
            />
            <button type="submit" className="mobile-search-button" aria-label="Search">
              <FiSearch />
            </button>
          </form>
          <a 
            href="https://calendly.com/nirosha-info/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary mobile-menu-cta" 
            onClick={() => setIsOpen(false)}
          >
            <span>Free Consultation</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar


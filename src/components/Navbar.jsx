'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu, FiX, FiSearch, FiChevronDown, FiChevronRight, FiHome } from 'react-icons/fi'
import Logo from './Logo'
import { servicesData } from '../data/servicesData.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const searchModalInputRef = useRef(null)
  const pathname = usePathname()
  const router = useRouter()
  const servicesDropdownRef = useRef(null)
  const servicesLinkRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      
      // Only track scroll direction on mobile (screen width <= 768px)
      if (window.innerWidth <= 768 && !isOpen) {
        // Don't hide navbar at the very top
        if (currentScrollY < 10) {
          setScrollDirection('down')
        } else if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide navbar
          setScrollDirection('up')
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show navbar
          setScrollDirection('down')
        }
        lastScrollY.current = currentScrollY
      } else {
        // Reset on desktop or when menu is open
        setScrollDirection('down')
      }
    }
    
    const handleResize = () => {
      // Reset scroll direction on resize
      if (window.innerWidth > 768) {
        setScrollDirection('down')
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
    setServicesDropdownOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Calculate dropdown position when it opens or on scroll/resize
  // Use requestAnimationFrame to batch layout reads and avoid forced reflows
  useEffect(() => {
    let rafId = null
    
    const updatePosition = () => {
      if (servicesDropdownOpen && servicesLinkRef.current) {
        // Batch layout reads in requestAnimationFrame to avoid forced reflows
        rafId = requestAnimationFrame(() => {
          if (servicesLinkRef.current) {
            const rect = servicesLinkRef.current.getBoundingClientRect()
            setDropdownPosition({
              top: rect.bottom + 8,
              left: rect.left
            })
          }
        })
      }
    }

    if (servicesDropdownOpen) {
      updatePosition()
      window.addEventListener('scroll', updatePosition, { passive: true, capture: true })
      window.addEventListener('resize', updatePosition, { passive: true })
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', updatePosition, { capture: true })
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

  // Prevent body scroll when search modal is open
  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      // Focus the input when modal opens
      if (searchModalInputRef.current) {
        setTimeout(() => {
          searchModalInputRef.current?.focus()
        }, 100)
      }
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isSearchModalOpen])

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
      setIsSearchModalOpen(false)
    }
  }

  const handleSearchIconClick = () => {
    setIsSearchModalOpen(true)
  }

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''} ${scrollDirection === 'up' ? 'scroll-up' : 'scroll-down'}`}>
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">
              <Logo size="default" className="navbar-logo" />
            </div>
            <div className="nav-links-desktop">
              <Link 
                href="/" 
                className={`nav-link nav-link-home ${pathname === '/' ? 'active' : ''}`}
                suppressHydrationWarning
              >
                <FiHome className="nav-link-home-icon" />
                <span className="nav-link-home-text">HOME</span>
              </Link>
              <Link 
                href="/about" 
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                suppressHydrationWarning
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
                  // Check if relatedTarget is a valid Node before using contains
                  if (e.relatedTarget && e.relatedTarget instanceof Node) {
                    if (!servicesDropdownRef.current?.contains(e.relatedTarget)) {
                      setServicesDropdownOpen(false)
                    }
                  } else {
                    // If relatedTarget is null or not a Node, close the dropdown
                    setServicesDropdownOpen(false)
                  }
                }}
              >
                <Link 
                  href="/services" 
                  className="nav-link"
                  ref={servicesLinkRef}
                  suppressHydrationWarning
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
                    suppressHydrationWarning
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
                      suppressHydrationWarning
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
                suppressHydrationWarning
              >
                <span>BLOG</span>
              </Link>
              <Link 
                href="/portfolio" 
                className={`nav-link ${pathname?.startsWith('/portfolio') ? 'active' : ''}`}
                suppressHydrationWarning
              >
                <span>OUR WORK</span>
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                suppressHydrationWarning
              >
                <span>CONTACT</span>
              </Link>
            </div>
            {/* Desktop Search - Full Form */}
            <form className="nav-search nav-search-desktop" onSubmit={handleSearch}>
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
            {/* Tablet Search - Icon Only */}
            <button 
              className="nav-search-icon-tablet" 
              onClick={handleSearchIconClick}
              aria-label="Open search"
            >
              <FiSearch />
            </button>
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
          suppressHydrationWarning
        >
          <button 
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          <div className="mobile-menu-inner">
            <Link 
              href="/" 
              className={`mobile-menu-link ${pathname === '/' ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
            >
              <span>Home</span>
            </Link>
            <Link 
              href="/about" 
              className={`mobile-menu-link ${pathname === '/about' ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
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
            <div className={`mobile-menu-services-submenu ${mobileServicesOpen ? 'open' : ''}`}>
              <Link
                href="/services"
                className={`mobile-menu-link mobile-menu-submenu-item ${pathname === '/services' ? 'active' : ''}`}
                onClick={() => {
                  setIsOpen(false)
                  setMobileServicesOpen(false)
                }}
                suppressHydrationWarning
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
                  suppressHydrationWarning
                >
                  <span>{service.title}</span>
                </Link>
              ))}
            </div>
            </div>
            <Link
              href="/blog"
              className={`mobile-menu-link ${pathname?.startsWith('/blog') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
            >
              <span>Blog</span>
            </Link>
            <Link
              href="/portfolio"
              className={`mobile-menu-link ${pathname?.startsWith('/portfolio') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
            >
              <span>Our Work</span>
            </Link>
            <Link
              href="/contact"
              className={`mobile-menu-link ${pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
            >
              <span>Contact</span>
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
            <span suppressHydrationWarning style={{ display: 'inline-block' }}>
              <a 
                href="https://calendly.com/nirosha-info/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary mobile-menu-cta" 
                onClick={() => setIsOpen(false)}
                suppressHydrationWarning
              >
                <span>Free Consultation</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* Search Modal - Full Page */}
      {isSearchModalOpen && typeof window !== 'undefined' && createPortal(
        <div 
          className="search-modal-overlay"
          onClick={handleCloseSearchModal}
        >
          <div 
            className="search-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="search-modal-close"
              onClick={handleCloseSearchModal}
              aria-label="Close search"
            >
              <FiX />
            </button>
            <form className="search-modal-form" onSubmit={handleSearch}>
              <div className="search-modal-input-wrapper">
                <FiSearch className="search-modal-icon" />
                <input
                  ref={searchModalInputRef}
                  type="text"
                  placeholder="Search...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-modal-input"
                  autoFocus
                />
              </div>
              <button type="submit" className="search-modal-submit" aria-label="Search">
                Search
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Navbar


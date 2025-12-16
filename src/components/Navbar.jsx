import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

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

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Simple search implementation - can be enhanced later
      // For now, navigate to services page with search query
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`)
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
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                <span>HOME</span>
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                <span>ABOUT</span>
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              >
                <span>SERVICES</span>
              </Link>
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
              >
                <span>BLOG</span>
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
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
            to="/" 
            className={`mobile-menu-link ${location.pathname === '/' ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`mobile-menu-link ${location.pathname === '/about' ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>About</span>
          </Link>
          <Link 
            to="/services" 
            className={`mobile-menu-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>Services</span>
          </Link>
          <Link 
            to="/blog" 
            className={`mobile-menu-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`} 
            onClick={() => setIsOpen(false)}
          >
            <span>BLOG</span>
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-menu-link ${location.pathname === '/contact' ? 'active' : ''}`} 
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


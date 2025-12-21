'use client'

import React, { useState, useEffect } from 'react'

const ConsentBanner = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Ensure we're on the client side
    setMounted(true)
    
    // Helper function to show banner
    const showBanner = () => {
      setIsVisible(true)
      // Small delay before animation for smoother UX
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    }
    
    // Check if user has already made a choice
    if (typeof window !== 'undefined') {
      try {
        // Check for force-show flag (for testing/debugging)
        const forceShow = sessionStorage.getItem('force-show-consent') === 'true'
        if (forceShow) {
          // Clear the flag after using it
          sessionStorage.removeItem('force-show-consent')
          // Show banner immediately
          setTimeout(showBanner, 500)
          return
        }
        
        const consent = localStorage.getItem('gtm-consent')
        if (!consent) {
          // Defer showing banner until after initial page load to not block rendering
          // Use requestIdleCallback if available, otherwise setTimeout
          if ('requestIdleCallback' in window) {
            requestIdleCallback(showBanner, { timeout: 2000 })
          } else {
            setTimeout(showBanner, 1000)
          }
        } else {
          // If consent already exists, notify parent immediately
          onConsentChange(consent === 'accepted')
        }
      } catch (error) {
        // If localStorage is not available, show banner anyway
        if ('requestIdleCallback' in window) {
          requestIdleCallback(showBanner, { timeout: 2000 })
        } else {
          setTimeout(showBanner, 1000)
        }
      }
    }
  }, [onConsentChange])

  // Expose force show function to window for debugging
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.forceShowConsentBanner = () => {
        sessionStorage.setItem('force-show-consent', 'true')
        location.reload()
      }
      window.clearConsentBanner = () => {
        localStorage.removeItem('gtm-consent')
        localStorage.removeItem('gtm-cookie-preferences')
        location.reload()
      }
    }
  }, [])

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gtm-consent', 'accepted')
    }
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onConsentChange(true)
    }, 300)
  }

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('gtm-consent', 'rejected')
    }
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onConsentChange(false)
    }, 300)
  }

  const handleOpenSettings = () => {
    setShowSettings(true)
  }

  const handleCloseSettings = () => {
    setShowSettings(false)
  }

  const handleTogglePreference = (category) => {
    if (category === 'essential') return // Essential cookies can't be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const handleSaveSettings = () => {
    // If any non-essential cookies are enabled, consider it as accepted
    const hasNonEssential = cookiePreferences.analytics || cookiePreferences.marketing
    if (typeof window !== 'undefined') {
      localStorage.setItem('gtm-consent', hasNonEssential ? 'accepted' : 'rejected')
      localStorage.setItem('gtm-cookie-preferences', JSON.stringify(cookiePreferences))
    }
    setIsAnimating(false)
    setShowSettings(false)
    setTimeout(() => {
      setIsVisible(false)
      onConsentChange(hasNonEssential)
    }, 300)
  }

  // Don't render until mounted (client-side only) to avoid hydration issues
  if (!mounted || !isVisible) {
    return null
  }

  return (
    <>
      {/* Backdrop/Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 99998,
          opacity: isAnimating ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: isAnimating ? 'auto' : 'none'
        }}
        onClick={handleReject}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: isAnimating ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
          opacity: isAnimating ? 1 : 0,
          zIndex: 99999,
          width: '90%',
          maxWidth: '520px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          pointerEvents: isAnimating ? 'auto' : 'none',
          padding: '32px'
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1a1a1a',
            margin: '0 0 16px 0',
            lineHeight: '1.3'
          }}
        >
          About cookies on this site
        </h2>
        
        {/* Description */}
        <p
          style={{
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#4a4a4a',
            margin: '0 0 12px 0'
          }}
        >
          We use cookies to collect and analyse information on site performance and usage, to provide social media features and to enhance and customise content and advertisements.
        </p>
        
        {/* Learn More Link */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.location.href = '/privacy'
          }}
          style={{
            fontSize: '15px',
            color: '#2563eb',
            textDecoration: 'underline',
            cursor: 'pointer',
            display: 'inline-block',
            marginBottom: '24px'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#1e40af'
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#2563eb'
          }}
        >
          Learn more
        </a>
        
        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'flex-end',
            marginTop: '24px'
          }}
        >
          <button
            onClick={handleAccept}
            style={{
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              background: '#dc2626',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#b91c1c'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#dc2626'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Allow all cookies
          </button>
          
          <button
            onClick={handleReject}
            style={{
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              background: '#dc2626',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#b91c1c'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#dc2626'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Deny all
          </button>
          
          <button
            onClick={handleOpenSettings}
            style={{
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#1a1a1a',
              background: '#ffffff',
              border: '1px solid #d1d1d1',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#9a9a9a'
              e.target.style.backgroundColor = '#f5f5f5'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#d1d1d1'
              e.target.style.backgroundColor = '#ffffff'
            }}
          >
            Cookie settings
          </button>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <>
          {/* Settings Modal Backdrop */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 100000,
            }}
            onClick={handleCloseSettings}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 100001,
              width: '90%',
              maxWidth: '600px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              padding: '32px',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 24px 0',
              lineHeight: '1.3'
            }}
          >
            Cookie Settings
          </h2>
          
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#4a4a4a',
              margin: '0 0 24px 0'
            }}
          >
            Manage your cookie preferences. You can enable or disable different types of cookies below.
          </p>

          {/* Essential Cookies */}
          <div
            style={{
              padding: '20px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              marginBottom: '16px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                  Essential Cookies
                </h3>
                <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.5' }}>
                  These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you.
                </p>
              </div>
              <div
                style={{
                  width: '48px',
                  height: '28px',
                  backgroundColor: '#2563eb',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '2px',
                  marginLeft: '16px',
                  cursor: 'not-allowed',
                  opacity: 0.6
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#999999', fontStyle: 'italic' }}>Always active</span>
          </div>

          {/* Analytics Cookies */}
          <div
            style={{
              padding: '20px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                  Analytics Cookies
                </h3>
                <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.5' }}>
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div
                onClick={() => handleTogglePreference('analytics')}
                style={{
                  width: '48px',
                  height: '28px',
                  backgroundColor: cookiePreferences.analytics ? '#2563eb' : '#d1d1d1',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: cookiePreferences.analytics ? 'flex-end' : 'flex-start',
                  padding: '2px',
                  marginLeft: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div
            style={{
              padding: '20px',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 4px 0' }}>
                  Marketing Cookies
                </h3>
                <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.5' }}>
                  These cookies are used to deliver advertisements and track campaign performance. They may be set by advertising partners.
                </p>
              </div>
              <div
                onClick={() => handleTogglePreference('marketing')}
                style={{
                  width: '48px',
                  height: '28px',
                  backgroundColor: cookiePreferences.marketing ? '#2563eb' : '#d1d1d1',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: cookiePreferences.marketing ? 'flex-end' : 'flex-start',
                  padding: '2px',
                  marginLeft: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              justifyContent: 'flex-end'
            }}
          >
            <button
              onClick={handleCloseSettings}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#1a1a1a',
                background: '#ffffff',
                border: '1px solid #d1d1d1',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#9a9a9a'
                e.target.style.backgroundColor = '#f5f5f5'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#d1d1d1'
                e.target.style.backgroundColor = '#ffffff'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              style={{
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '600',
                color: '#ffffff',
                background: '#2563eb',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#1e40af'
                e.target.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2563eb'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Save Preferences
            </button>
          </div>
        </div>
        </>
      )}
    </>
  )
}

export default ConsentBanner


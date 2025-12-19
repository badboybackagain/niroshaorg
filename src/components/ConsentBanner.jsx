'use client'

import React, { useState, useEffect } from 'react'

const ConsentBanner = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('gtm-consent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 500)
    } else {
      // If consent already exists, notify parent immediately
      onConsentChange(consent === 'accepted')
    }
  }, [onConsentChange])

  const handleAccept = () => {
    localStorage.setItem('gtm-consent', 'accepted')
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onConsentChange(true)
    }, 300)
  }

  const handleReject = () => {
    localStorage.setItem('gtm-consent', 'rejected')
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onConsentChange(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Cookie Consent
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. By clicking "Accept All", you 
                consent to our use of cookies. You can also choose to reject non-essential cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full sm:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200 whitespace-nowrap shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsentBanner

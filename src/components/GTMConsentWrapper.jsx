'use client'

import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import ConsentBanner from './ConsentBanner'
import { getConsent } from '@/lib/consent'

// Dynamically import GoogleTagManager to avoid blocking initial render
const GoogleTagManager = dynamic(() => import('./GoogleTagManager'), {
  ssr: false,
})

/**
 * GTM Consent Wrapper Component
 * 
 * This component manages Google Tag Manager integration with consent banner.
 * 
 * Setup Instructions:
 * 1. Add your GTM Container ID to your .env.local file:
 *    NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 * 
 * 2. The consent banner will appear on first visit
 * 3. User's choice is stored in localStorage
 * 4. GTM loads with consent mode v2 compliance
 */
const GTMConsentWrapper = () => {
  const [consentGranted, setConsentGranted] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Memoize GTM ID to avoid re-reading on every render
  const gtmId = useMemo(() => {
    if (typeof window === 'undefined') return null
    const id = process.env.NEXT_PUBLIC_GTM_ID
    return id && id.trim() ? id.trim() : null
  }, [])

  useEffect(() => {
    // Mark as mounted
    setMounted(true)
    
    // Check existing consent
    const existingConsent = getConsent()
    if (existingConsent === 'accepted') {
      setConsentGranted(true)
    }
  }, [])

  const handleConsentChange = (granted) => {
    setConsentGranted(granted)
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  // Only render if GTM ID is configured
  if (!gtmId) {
    return null
  }

  // Show consent banner and GTM only if GTM ID is set
  return (
    <>
      <GoogleTagManager gtmId={gtmId} consentGranted={consentGranted} />
      <ConsentBanner onConsentChange={handleConsentChange} />
    </>
  )
}

export default GTMConsentWrapper


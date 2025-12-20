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
    return process.env.NEXT_PUBLIC_GTM_ID || null
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

  // Always show consent banner, even if GTM ID is not set
  // The banner will appear on first visit or if consent hasn't been given
  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} consentGranted={consentGranted} />}
      <ConsentBanner onConsentChange={handleConsentChange} />
    </>
  )
}

export default GTMConsentWrapper


'use client'

import React, { useState, useEffect } from 'react'
import ConsentBanner from './ConsentBanner'
import GoogleTagManager from './GoogleTagManager'
import { getConsent } from '@/lib/consent'

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
  const [gtmId, setGtmId] = useState(null)

  useEffect(() => {
    // Get GTM ID from environment variable
    // Format: GTM-XXXXXXX (e.g., GTM-ABC123)
    const id = process.env.NEXT_PUBLIC_GTM_ID
    setGtmId(id || null)

    // Check existing consent
    const existingConsent = getConsent()
    if (existingConsent === 'accepted') {
      setConsentGranted(true)
    }
  }, [])

  const handleConsentChange = (granted) => {
    setConsentGranted(granted)
  }

  return (
    <>
      <GoogleTagManager gtmId={gtmId} consentGranted={consentGranted} />
      <ConsentBanner onConsentChange={handleConsentChange} />
    </>
  )
}

export default GTMConsentWrapper

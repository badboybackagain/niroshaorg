'use client'

import React, { useEffect } from 'react'

/**
 * Microsoft Clarity Component
 * 
 * This component initializes Microsoft Clarity analytics.
 * 
 * Setup Instructions:
 * 1. Get your Clarity Project ID from https://clarity.microsoft.com/
 * 2. Add it to your .env.local file:
 *    NEXT_PUBLIC_CLARITY_ID=your-project-id
 * 
 * Note: Clarity respects user privacy and doesn't collect PII by default.
 * Consider adding consent management if required by your privacy policy.
 */
const MicrosoftClarity = ({ projectId }) => {
  useEffect(() => {
    if (!projectId || typeof window === 'undefined') return

    // Dynamically import clarity to avoid SSR issues
    import('@microsoft/clarity').then(({ clarity }) => {
      clarity.init(projectId)
    }).catch((error) => {
      console.error('Failed to load Microsoft Clarity:', error)
    })
  }, [projectId])

  // Don't render anything - Clarity is initialized via useEffect
  return null
}

export default MicrosoftClarity


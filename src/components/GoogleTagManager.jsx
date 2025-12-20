'use client'

import React, { useEffect, useRef } from 'react'
import Script from 'next/script'

const GoogleTagManager = ({ gtmId, consentGranted }) => {
  const scriptLoadedRef = useRef(false)
  const consentInitializedRef = useRef(false)

  // Initialize dataLayer only once
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Initialize dataLayer before GTM loads
    window.dataLayer = window.dataLayer || []
    
    // Initialize consent mode with default 'denied' state only once
    if (!consentInitializedRef.current) {
      window.dataLayer.push({
        'consent': 'default',
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'wait_for_update': 500,
      })
      consentInitializedRef.current = true
    }
  }, [])

  // Update consent when user makes a choice
  useEffect(() => {
    if (!gtmId || typeof window === 'undefined' || !window.dataLayer) return

    // Only update if consent has changed and script is loaded
    if (scriptLoadedRef.current) {
      window.dataLayer.push({
        'event': 'consent_update',
        'analytics_storage': consentGranted ? 'granted' : 'denied',
        'ad_storage': consentGranted ? 'granted' : 'denied',
      })
    }
  }, [gtmId, consentGranted])

  // Only load GTM if consent is granted
  if (!gtmId || !consentGranted) return null

  return (
    <>
      {/* GTM Script - Load lazily only after consent is granted */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        onLoad={() => {
          scriptLoadedRef.current = true
        }}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      {/* GTM Noscript fallback - only show if consent granted */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

export default GoogleTagManager


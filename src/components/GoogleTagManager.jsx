'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'

const GoogleTagManager = ({ gtmId, consentGranted }) => {
  useEffect(() => {
    if (!gtmId || typeof window === 'undefined') return

    // Initialize dataLayer before GTM loads
    window.dataLayer = window.dataLayer || []
    
    // Initialize consent mode with default 'denied' state
    // This should be set BEFORE GTM loads
    if (!window.dataLayer.find(item => item.event === 'consent')) {
      window.dataLayer.push({
        'consent': 'default',
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'wait_for_update': 500,
      })
    }
  }, [gtmId])

  useEffect(() => {
    if (!gtmId || typeof window === 'undefined') return

    // Update consent when user makes a choice
    // This uses the gtag consent API format
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'consent_update',
        'analytics_storage': consentGranted ? 'granted' : 'denied',
        'ad_storage': consentGranted ? 'granted' : 'denied',
      })
    }
  }, [gtmId, consentGranted])

  if (!gtmId) return null

  return (
    <>
      {/* GTM Script - Load with consent mode, will respect user's choice */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'consent': 'default',
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'wait_for_update': 500
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      {/* GTM Noscript fallback */}
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

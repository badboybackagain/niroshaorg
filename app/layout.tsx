// Import CSS - Next.js will extract this, but we'll defer it with DeferredCSS component
import './globals.css'
import Layout from '@/components/Layout'
import OrganizationSchema from '@/components/OrganizationSchema'
import WebsiteSchema from '@/components/WebsiteSchema'
import ScrollToTop from '@/components/ScrollToTop'
import GTMConsentWrapper from '@/components/GTMConsentWrapper'
import CriticalCSS from '@/components/CriticalCSS'
import DeferredCSS from '@/components/DeferredCSS'
import Script from 'next/script'

// Check if GTM is configured
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GA_MEASUREMENT_ID = 'G-F4SER380S1'
const USE_GTM = !!GTM_ID

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata = {
  title: 'Team Nirosha - Web Development, SEO & Digital Marketing Agency',
  description: 'Professional digital agency offering web development, SEO, digital marketing, branding, e-commerce solutions, automation, SaaS, and cloud infrastructure services.',
  keywords: 'web development, SEO services, digital marketing, branding, e-commerce solutions, automation, SaaS, cloud infrastructure',
  authors: [{ name: 'Team Nirosha' }],
  openGraph: {
    title: 'Team Nirosha - Digital Agency',
    description: 'Professional digital agency offering web development, SEO, and digital marketing services',
    url: 'https://nirosha.org',
    siteName: 'Team Nirosha',
    images: [
      {
        url: 'https://nirosha.org/logo.png',
        width: 600,
        height: 60,
        alt: 'Team Nirosha Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Nirosha - Digital Agency',
    description: 'Professional digital agency offering web development, SEO, and digital marketing services',
    images: ['https://nirosha.org/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics (gtag.js) - Only if GTM is not configured - placed immediately after <head> */}
        {!USE_GTM && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* Defer non-critical CSS loading - must run before CSS loads */}
        <DeferredCSS />
        {/* Inline critical CSS for above-the-fold content - prevents render blocking */}
        <CriticalCSS />
        {/* Resource hints - preconnect to critical origins for faster resource loading */}
        {USE_GTM ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        ) : (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          </>
        )}
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" fetchPriority="high" />
        <OrganizationSchema />
        <WebsiteSchema />
        <ScrollToTop />
      </head>
      {/* 
        Note: suppressHydrationWarning on body/html suppresses most hydration warnings.
        Some warnings from Next.js Link components (contenteditable/style attributes) 
        may still appear but are harmless - they're added by Next.js during hydration 
        for better UX and don't affect functionality.
      */}
      <body suppressHydrationWarning>
        {USE_GTM && <GTMConsentWrapper />}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

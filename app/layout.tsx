import './globals.css'
import Layout from '@/components/Layout'
import OrganizationSchema from '@/components/OrganizationSchema'
import WebsiteSchema from '@/components/WebsiteSchema'
import ScrollToTop from '@/components/ScrollToTop'

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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

import { Suspense } from 'react'
import ContactPage from '@/page-components/ContactPage'

export const metadata = {
  title: 'Contact Us - Team Nirosha | Get In Touch',
  description: 'Contact Team Nirosha for web development, SEO, digital marketing, and automation services. We\'re here to help transform your digital presence.',
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPage />
    </Suspense>
  )
}

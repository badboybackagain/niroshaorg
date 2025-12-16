import React, { useEffect } from 'react'

/**
 * FAQ Schema component for Google SEO
 * Generates JSON-LD structured data for FAQ pages
 */
const FAQSchema = ({ faqs, serviceTitle }) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) {
      return
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: typeof faq.answer === 'string' 
            ? faq.answer 
            : faq.answer.join(' ')
        }
      }))
    }

    // Remove existing FAQ schema if any
    const existingScript = document.querySelector('script[data-faq-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and inject the schema script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-faq-schema', 'true')
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-faq-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [faqs])

  return null
}

export default FAQSchema


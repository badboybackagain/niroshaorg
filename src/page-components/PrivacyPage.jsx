'use client'

import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PrivacyPage = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="section privacy-page" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div ref={titleRef} className={`page-header ${titleVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="legal-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#333' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              At Team Nirosha ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>nirosha.org</strong> and use our services.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              By using our website and services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website or services.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d2d2d', marginBottom: '12px', marginTop: '24px' }}>
              1.1 Personal Information
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Contact us through our contact form</li>
              <li style={{ marginBottom: '8px' }}>Subscribe to our newsletter or marketing communications</li>
              <li style={{ marginBottom: '8px' }}>Request a quote or consultation</li>
              <li style={{ marginBottom: '8px' }}>Use our services</li>
              <li style={{ marginBottom: '8px' }}>Participate in surveys or promotions</li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              This information may include:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Name and contact information (email address, phone number)</li>
              <li style={{ marginBottom: '8px' }}>Company name and job title</li>
              <li style={{ marginBottom: '8px' }}>Business address</li>
              <li style={{ marginBottom: '8px' }}>Payment information (for paid services)</li>
              <li style={{ marginBottom: '8px' }}>Any other information you choose to provide</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d2d2d', marginBottom: '12px', marginTop: '24px' }}>
              1.2 Automatically Collected Information
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>IP address</li>
              <li style={{ marginBottom: '8px' }}>Browser type and version</li>
              <li style={{ marginBottom: '8px' }}>Operating system</li>
              <li style={{ marginBottom: '8px' }}>Pages visited and time spent on pages</li>
              <li style={{ marginBottom: '8px' }}>Referring website addresses</li>
              <li style={{ marginBottom: '8px' }}>Date and time of visits</li>
              <li style={{ marginBottom: '8px' }}>Clickstream data</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>To provide, maintain, and improve our services</li>
              <li style={{ marginBottom: '8px' }}>To respond to your inquiries, comments, and requests</li>
              <li style={{ marginBottom: '8px' }}>To send you marketing communications (with your consent)</li>
              <li style={{ marginBottom: '8px' }}>To process transactions and send related information</li>
              <li style={{ marginBottom: '8px' }}>To personalize your experience on our website</li>
              <li style={{ marginBottom: '8px' }}>To analyze website usage and trends</li>
              <li style={{ marginBottom: '8px' }}>To detect, prevent, and address technical issues</li>
              <li style={{ marginBottom: '8px' }}>To comply with legal obligations</li>
              <li style={{ marginBottom: '8px' }}>To protect our rights and prevent fraud</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              3. Cookies and Tracking Technologies
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Types of cookies we use:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Marketing Cookies:</strong> These are used to deliver advertisements and track campaign performance.
              </li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              You can control cookie preferences through your browser settings or our cookie consent banner. However, disabling certain cookies may affect the functionality of our website.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              4. Information Sharing and Disclosure
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, email delivery, and payment processing.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>With Your Consent:</strong> We may share information with your explicit consent.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              5. Data Security
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              6. Your Rights and Choices
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Right to access your personal information</li>
              <li style={{ marginBottom: '8px' }}>Right to rectify inaccurate or incomplete information</li>
              <li style={{ marginBottom: '8px' }}>Right to request deletion of your information</li>
              <li style={{ marginBottom: '8px' }}>Right to object to processing of your information</li>
              <li style={{ marginBottom: '8px' }}>Right to data portability</li>
              <li style={{ marginBottom: '8px' }}>Right to withdraw consent</li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              To exercise these rights, please contact us at <a href="mailto:info@nirosha.org" style={{ color: '#2563eb' }}>info@nirosha.org</a>.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              7. Data Retention
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              8. Children's Privacy
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              9. Third-Party Links
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div style={{ marginBottom: '40px', padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>
              11. Contact Us
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '12px' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '8px' }}>
                <strong>Team Nirosha</strong><br />
                Nirosha Enterprises
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Email:</strong> <a href="mailto:info@nirosha.org" style={{ color: '#2563eb' }}>info@nirosha.org</a>
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Phone:</strong> <a href="tel:+919403891938" style={{ color: '#2563eb' }}>+91-9403891938</a>
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Address:</strong> Hadapsar, Pune, Maharashtra, India
              </p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Website:</strong> <a href="https://nirosha.org" style={{ color: '#2563eb' }}>https://nirosha.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage

'use client'

import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TermsPage = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="section terms-page" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div ref={titleRef} className={`page-header ${titleVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="page-title">Terms and Conditions</h1>
          <p className="page-subtitle">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="legal-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', color: '#333' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              These Terms and Conditions ("Terms") govern your access to and use of the website <strong>nirosha.org</strong> ("Website") and the services provided by Team Nirosha ("we," "our," or "us"). By accessing or using our Website and services, you agree to be bound by these Terms.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              If you do not agree to these Terms, please do not use our Website or services. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              By accessing and using this Website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              2. Services Description
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Team Nirosha provides digital services including but not limited to:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Web development and design</li>
              <li style={{ marginBottom: '8px' }}>Search Engine Optimization (SEO) services</li>
              <li style={{ marginBottom: '8px' }}>Digital marketing and advertising</li>
              <li style={{ marginBottom: '8px' }}>Branding and graphic design</li>
              <li style={{ marginBottom: '8px' }}>E-commerce solutions</li>
              <li style={{ marginBottom: '8px' }}>Business automation and SaaS solutions</li>
              <li style={{ marginBottom: '8px' }}>Cloud infrastructure services</li>
              <li style={{ marginBottom: '8px' }}>Website maintenance and support</li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              3. User Obligations
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              You agree to:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Provide accurate, current, and complete information when using our services</li>
              <li style={{ marginBottom: '8px' }}>Maintain the security of your account credentials</li>
              <li style={{ marginBottom: '8px' }}>Use our services only for lawful purposes</li>
              <li style={{ marginBottom: '8px' }}>Not to interfere with or disrupt our services or servers</li>
              <li style={{ marginBottom: '8px' }}>Not to attempt to gain unauthorized access to any part of our services</li>
              <li style={{ marginBottom: '8px' }}>Not to use our services to transmit any harmful code or malware</li>
              <li style={{ marginBottom: '8px' }}>Respect intellectual property rights</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              4. Intellectual Property Rights
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              All content on this Website, including but not limited to text, graphics, logos, images, software, and code, is the property of Team Nirosha or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              You may not:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Reproduce, distribute, or create derivative works from our content without permission</li>
              <li style={{ marginBottom: '8px' }}>Use our trademarks or logos without written consent</li>
              <li style={{ marginBottom: '8px' }}>Remove any copyright or proprietary notices from our materials</li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Any work created by Team Nirosha for clients remains the property of the client upon full payment, unless otherwise specified in a written agreement.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              5. Payment Terms
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              For paid services:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Payment terms will be specified in individual service agreements or invoices</li>
              <li style={{ marginBottom: '8px' }}>All fees are non-refundable unless otherwise stated in writing</li>
              <li style={{ marginBottom: '8px' }}>We reserve the right to change our pricing at any time</li>
              <li style={{ marginBottom: '8px' }}>Late payments may result in suspension of services</li>
              <li style={{ marginBottom: '8px' }}>All prices are in Indian Rupees (INR) unless otherwise specified</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              6. Service Level and Warranties
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We strive to provide high-quality services, but we make no warranties, expressed or implied, regarding:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>The uninterrupted or error-free operation of our services</li>
              <li style={{ marginBottom: '8px' }}>The accuracy, completeness, or reliability of any information provided</li>
              <li style={{ marginBottom: '8px' }}>The results that may be obtained from using our services</li>
            </ul>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              7. Limitation of Liability
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              To the maximum extent permitted by law, Team Nirosha shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Your use or inability to use our services</li>
              <li style={{ marginBottom: '8px' }}>Any unauthorized access to or use of our servers</li>
              <li style={{ marginBottom: '8px' }}>Any errors or omissions in any content</li>
              <li style={{ marginBottom: '8px' }}>Any interruption or cessation of transmission to or from our services</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              8. Indemnification
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              You agree to indemnify, defend, and hold harmless Team Nirosha, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </p>
            <ul style={{ fontSize: '16px', marginBottom: '16px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '8px' }}>Your use of our services</li>
              <li style={{ marginBottom: '8px' }}>Your violation of these Terms</li>
              <li style={{ marginBottom: '8px' }}>Your violation of any rights of another party</li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              9. Termination
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the services will cease immediately.
            </p>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              You may terminate your use of our services at any time by discontinuing use and notifying us in writing.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              10. Third-Party Services
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              Our services may integrate with or link to third-party services, websites, or applications. We are not responsible for the content, privacy policies, or practices of any third-party services. Your interactions with third-party services are solely between you and the third party.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              11. Governing Law and Jurisdiction
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              12. Changes to Terms
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              13. Severability
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', marginTop: '32px' }}>
              14. Entire Agreement
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>
              These Terms, together with any service-specific agreements, constitute the entire agreement between you and Team Nirosha regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </div>

          <div style={{ marginBottom: '40px', padding: '24px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px' }}>
              15. Contact Information
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '12px' }}>
              If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsPage

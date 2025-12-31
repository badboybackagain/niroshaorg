'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/utils/gsapConfig'
import { FiArrowRight } from 'react-icons/fi'

const CTA = ({
  title = "Ready to Elevate Your Business with Digital Solutions?",
  subtext,
  buttonText = "Schedule Free Consultation",
  buttonLink = "https://calendly.com/nirosha-info/30min"
}) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtextRef = useRef(null)
  const buttonRef = useRef(null)
  const graphicRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Use gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtextRef.current, buttonRef.current], { opacity: 0, y: 30 })
      gsap.set(graphicRef.current, { opacity: 0, scale: 0.8, rotation: -10 })

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      tl.to(graphicRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.5')

      if (subtext) {
        tl.to(subtextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.4')
      }

      tl.to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4')

      // Continuous floating animation for graphic
      gsap.to(graphicRef.current, {
        y: '+=20',
        rotation: '+=5',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }, section)

    return () => ctx.revert()
  }, [subtext]) // Re-run animation if subtext changes (though usually it changes on mount)

  return (
    <section ref={sectionRef} id="contact" className="cta-banner">
      <div className="cta-banner-content">
        <div className="cta-banner-left">
          <h2 ref={titleRef} className="cta-banner-title">
            {title}
          </h2>
          {subtext && (
            <p ref={subtextRef} className="cta-banner-subtext" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginTop: '1rem',
              fontSize: '1.125rem',
              lineHeight: '1.6'
            }}>
              {subtext}
            </p>
          )}
        </div>

        <div ref={graphicRef} className="cta-banner-graphic">
          <div className="cta-graphic-element"></div>
        </div>

        <div className="cta-banner-right">
          <a
            ref={buttonRef}
            href={buttonLink}
            target={buttonLink.startsWith('http') ? "_blank" : "_self"}
            rel={buttonLink.startsWith('http') ? "noopener noreferrer" : ""}
            className="cta-banner-button"
            suppressHydrationWarning
          >
            {buttonText}
            <span className="cta-button-icon">
              <FiArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="cta-wave-bottom"></div>
    </section>
  )
}

export default CTA


'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/utils/gsapConfig'
import { FiArrowRight } from 'react-icons/fi'

const CTA = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const buttonRef = useRef(null)
  const graphicRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Use gsap.context for proper cleanup
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, buttonRef.current], { opacity: 0, y: 30 })
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
      .to(buttonRef.current, {
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
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="cta-banner">
      <div className="cta-banner-content">
        <div className="cta-banner-left">
          <h2 ref={titleRef} className="cta-banner-title">
            Ready to Elevate Your Business with Digital Solutions?
          </h2>
        </div>
        
        <div ref={graphicRef} className="cta-banner-graphic">
          <div className="cta-graphic-element"></div>
        </div>
        
        <div className="cta-banner-right">
          <a 
            ref={buttonRef}
            href="https://calendly.com/nirosha-info/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-banner-button"
            suppressHydrationWarning
          >
            Get Started Today
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


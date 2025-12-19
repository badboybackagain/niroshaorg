'use client'

import React from 'react'
import Link from 'next/link'
import { FiCheck, FiArrowRight, FiLayers, FiShield, FiTrendingUp, FiUsers, FiTarget, FiMessageCircle, FiHeart, FiClock, FiAward, FiZap, FiDollarSign, FiHeadphones, FiLock, FiGlobe, FiCode } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const HighlightItem = ({ icon, text, delay }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      className={`about-highlight-item ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="about-highlight-icon">{icon}</div>
      <span className="about-highlight-text">{text}</span>
    </div>
  )
}

const FeatureCard = ({ icon, title, description, delay }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      className={`about-feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="about-feature-icon-wrapper">
        <div className="about-feature-icon">{icon}</div>
      </div>
      <h3 className="about-feature-title">{title}</h3>
      <p className="about-feature-description">{description}</p>
    </div>
  )
}

// USP Box Component - Cards that fall randomly with random orientation
const USPBox = ({ icon, text, delay, index, randomX, randomY, randomRotate, bgColor, iconColor, textColor }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  
  // Set z-index immediately based on index - higher index = higher z-index = always on top
  // Using a very high base (10050) to ensure cards are above navbar (10003) and all other content
  const zIndex = 10050 + index

  return (
    <div 
      ref={ref}
      className={`usp-box ${isVisible ? 'animate-usp-fall' : ''}`}
      style={{ 
        animationDelay: `${delay}ms`,
        zIndex: zIndex,
        '--random-x': `${randomX}px`,
        '--random-y': `${randomY}px`,
        '--random-rotate': `${randomRotate}deg`,
        '--index': index,
        backgroundColor: bgColor,
        '--icon-color': iconColor,
        '--text-color': textColor
      }}
    >
      <div className="usp-box-icon" style={{ color: iconColor }}>{icon}</div>
      <span className="usp-box-text" style={{ color: textColor }}>{text}</span>
    </div>
  )
}

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [highlightsRef, highlightsVisible] = useScrollAnimation({ threshold: 0.2 })

  // USP data with color schemes - each card has different colors with good contrast
  const uspData = [
    { icon: <FiClock />, text: "Timely Delivery", bgColor: '#2563eb', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiAward />, text: "Quality Work", bgColor: '#10b981', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiZap />, text: "Fast Response", bgColor: '#f59e0b', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiDollarSign />, text: "Cost Effective", bgColor: '#8b5cf6', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiHeadphones />, text: "24/7 Support", bgColor: '#ec4899', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiLock />, text: "Secure & Reliable", bgColor: '#06b6d4', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiGlobe />, text: "Scalable Solutions", bgColor: '#14b8a6', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiCode />, text: "Modern Tech Stack", bgColor: '#f97316', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiTarget />, text: "Result Driven", bgColor: '#6366f1', iconColor: '#ffffff', textColor: '#ffffff' },
    { icon: <FiUsers />, text: "Expert Team", bgColor: '#dc2626', iconColor: '#ffffff', textColor: '#ffffff' }
  ]

  // Generate random positions and rotations for each card - only on client side to avoid hydration mismatch
  const [randomPositions, setRandomPositions] = React.useState(() => {
    // Return default values for SSR (will be replaced on client)
    return uspData.map(() => ({
      x: 0,
      y: 0,
      rotate: 0
    }))
  })

  // Generate random values only on client side after mount
  React.useEffect(() => {
    setRandomPositions(
      uspData.map(() => ({
        x: Math.random() * 400 - 200, // Random between -200px to 200px (wider range)
        y: Math.random() * 300 - 150,  // Random between -150px to 150px (taller range)
        rotate: (Math.random() - 0.5) * 25 // Random between -12.5deg to 12.5deg
      }))
    )
  }, [])

  return (
    <section id="about" className="section about">
      <div className="about-background-decoration"></div>
      <div className="container">
        <div className="about-content">
          <div 
            ref={titleRef}
            className={`about-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
          >
            <span className="about-badge">About Us</span>
            <h2 className="about-title">Your Trusted Digital Growth Partner</h2>
            <p className="about-subtitle">
              We don't just build websites - we build secure, scalable digital systems that support real business growth.
            </p>
          </div>

          <div className="about-main-layout">
            <div 
              ref={imageRef}
              className={`about-visual ${imageVisible ? 'animate-fadeInLeft' : ''}`}
            >
              <div className="usp-boxes-container">
                <div className="usp-boxes-grid">
                  {uspData.map((usp, index) => (
                    <USPBox 
                      key={index}
                      icon={usp.icon}
                      text={usp.text}
                      delay={index * 1000}
                      index={index}
                      randomX={randomPositions[index].x}
                      randomY={randomPositions[index].y}
                      randomRotate={randomPositions[index].rotate}
                      bgColor={usp.bgColor}
                      iconColor={usp.iconColor}
                      textColor={usp.textColor}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div 
              ref={contentRef}
              className={`about-text-section ${contentVisible ? 'animate-fadeInRight' : ''}`}
            >
              <div className="about-text-content">
                <p className="about-lead">
                  Team Nirosha is a trusted digital agency in India, providing comprehensive web development, 
                  SEO, automation, and cloud services. We focus on quality, transparency, and results - 
                  technology that works while you sleep.
                </p>
                <p className="about-description">
                  Our business-first approach means we understand your goals before we write a single line of code. 
                  We're hands-on, responsive, and accountable - trusted by businesses, startups, and educational 
                  institutions across India. We solve real problems with scalable solutions that grow with your business.
                </p>
              </div>

              <div 
                ref={highlightsRef}
                className={`about-highlights ${highlightsVisible ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: '400ms' }}
              >
                <HighlightItem 
                  icon={<FiLayers />}
                  text="End-to-end digital solutions"
                  delay={0}
                />
                <HighlightItem 
                  icon={<FiShield />}
                  text="Dedicated support & clear SLAs"
                  delay={100}
                />
                <HighlightItem 
                  icon={<FiTrendingUp />}
                  text="Scalable and future-ready builds"
                  delay={200}
                />
              </div>

              <div className="about-cta">
                <Link href="/about" className="btn btn-primary" suppressHydrationWarning>
                  Know More About Team Nirosha
                  <FiArrowRight style={{ marginLeft: '8px' }} />
                </Link>
              </div>
            </div>
          </div>

          <div className="about-features-grid">
            <FeatureCard 
              icon={<FiUsers />}
              title="Expert Team"
              description="Years of combined experience in digital solutions"
              delay={0}
            />
            <FeatureCard 
              icon={<FiTarget />}
              title="Problem Solvers"
              description="We tackle challenges with innovative solutions"
              delay={100}
            />
            <FeatureCard 
              icon={<FiMessageCircle />}
              title="Transparent Communication"
              description="Clear updates and honest conversations"
              delay={200}
            />
            <FeatureCard 
              icon={<FiHeart />}
              title="Long-term Partners"
              description="We grow with you, not just for you"
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


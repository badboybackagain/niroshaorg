import React, { useState, useEffect, useRef } from 'react'
import { FiSearch, FiLayers, FiCode, FiCheckSquare, FiSend } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ProcessStep = ({ step, index, isVisible }) => {
  return (
    <div 
      className={`process-step ${isVisible ? 'process-step-visible' : 'process-step-hidden'}`}
      data-step-index={index}
    >
      <div className="step-number">{index + 1}</div>
      <div className="step-icon">{step.icon}</div>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-description">{step.description}</p>
    </div>
  )
}

const Process = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [visibleSteps, setVisibleSteps] = useState(1) // Start with only step 1 visible
  const processSectionRef = useRef(null)
  const stepsContainerRef = useRef(null)

  const steps = [
    {
      icon: <FiSearch />,
      title: 'Discover & Understand',
      description: 'We dive deep into your business, goals, and challenges to create the perfect solution'
    },
    {
      icon: <FiLayers />,
      title: 'Plan & Architect',
      description: 'Strategic planning and architecture design for scalable, secure solutions'
    },
    {
      icon: <FiCode />,
      title: 'Build & Integrate',
      description: 'Development with best practices, clean code, and seamless integrations'
    },
    {
      icon: <FiCheckSquare />,
      title: 'Test & Secure',
      description: 'Rigorous testing, security audits, and performance optimization'
    },
    {
      icon: <FiSend />,
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to keep everything running perfectly'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const section = processSectionRef.current
      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY || window.pageYOffset

      // Calculate scroll progress within the section
      // Section starts becoming visible when scrollY + windowHeight >= sectionTop
      const scrollIntoView = scrollY + windowHeight - sectionTop
      
      if (scrollIntoView < 0) {
        // Section not yet in view, show only first step
        setVisibleSteps(1)
        return
      }

      // Calculate progress (0 to 1) as we scroll through the section
      const scrollProgress = Math.min(scrollIntoView / (sectionHeight * 0.8), 1)
      
      // Reveal steps progressively
      // Each step appears at 20% intervals (0%, 20%, 40%, 60%, 80%, 100%)
      const stepsToShow = Math.min(
        Math.max(1, Math.ceil(scrollProgress * steps.length)),
        steps.length
      )

      setVisibleSteps(stepsToShow)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [steps.length])

  return (
    <section 
      id="process" 
      className="section process"
      ref={processSectionRef}
    >
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          Our Process
        </h2>
        <p className="section-subtitle">
          A proven methodology that delivers results
        </p>
        <div className="process-steps" ref={stepsContainerRef}>
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={step} 
              index={index}
              isVisible={index < visibleSteps}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process


'use client'

import React from 'react'
import { FiSearch, FiLayers, FiCode, FiCheckSquare, FiSend, FiArrowRight } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ProcessStep = ({ step, index, isLast }) => {
  return (
    <div className="process-step" data-step-index={index}>
      <div className="step-number">{index + 1}</div>
      <div className="step-icon">{step.icon}</div>
      <h3 className="step-title">{step.title}</h3>
      <p className="step-description">{step.description}</p>
      {!isLast && (
        <div className="step-connector">
          <FiArrowRight />
        </div>
      )}
    </div>
  )
}

const Process = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

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

  return (
    <section id="process" className="section process">
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
        <div className="process-steps">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process


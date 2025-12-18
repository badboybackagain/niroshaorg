'use client'

import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div 
      ref={ref}
      className={`faq-item ${isOpen ? 'open' : ''} ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className="faq-answer"
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="faq-answer-content">
          {typeof answer === 'string' ? (
            <p>{answer}</p>
          ) : (
            answer.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

const FAQ = ({ faqs, serviceTitle }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section className="section service-faq">
      <div className="container">
        <div 
          ref={titleRef}
          className={`faq-header ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Common questions about our {serviceTitle} services
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ




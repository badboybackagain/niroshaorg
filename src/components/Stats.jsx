import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useCountUp } from '../hooks/useCountUp'

const StatItem = ({ stat, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  
  // Extract numeric value
  const numericValue = parseInt(stat.number.replace(/\D/g, '')) || 0
  const hasPlus = stat.number.includes('+')
  const hasSlash = stat.number.includes('/')
  
  // Only animate if it's a number (not 24/7)
  const shouldAnimate = !hasSlash && numericValue > 0
  
  const count = useCountUp({ 
    end: numericValue, 
    duration: 2000, 
    enabled: shouldAnimate && isVisible 
  })

  return (
    <div 
      ref={ref}
      key={index}
      className={`stat-item ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="stat-number-large">
        {hasSlash ? (
          <span className="stat-number-animated">{stat.number}</span>
        ) : (
          <>
            <span className="stat-number-animated">{count.toLocaleString()}</span>
            {hasPlus && <span className="stat-number-suffix">+</span>}
          </>
        )}
      </div>
      <div className="stat-label-large">{stat.label}</div>
    </div>
  )
}

const Stats = () => {
  const stats = [
    {
      number: '1800+',
      label: 'High-Impact Projects'
    },
    {
      number: '450+',
      label: 'Happy Clients'
    },
    {
      number: '24/7',
      label: 'Support'
    },
    {
      number: '10+',
      label: 'Years Experience'
    }
  ]

  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats


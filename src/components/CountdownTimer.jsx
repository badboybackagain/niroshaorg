'use client'

import React, { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-timer" style={{
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-item" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          minWidth: '80px',
          textAlign: 'center',
          border: '2px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div className="countdown-value" style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#fff',
            lineHeight: 1,
            marginBottom: '0.5rem'
          }}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="countdown-label" style={{
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.9)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '600'
          }}>
            {unit}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer





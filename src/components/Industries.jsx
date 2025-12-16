import React from 'react'
import { 
  FiBook, FiHome, FiHeart, FiMapPin, FiBriefcase, FiZap, FiUsers,
  FiShoppingBag, FiCoffee, FiDollarSign, FiShield, FiSettings,
  FiFilm, FiGift, FiTruck, FiCrop, FiActivity, FiScissors, FiTrendingUp, FiMonitor
} from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const IndustryCard = ({ industry, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      key={index}
      className={`industry-card ${isVisible ? 'animate-scaleIn' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="industry-icon">{industry.icon}</div>
      <h3 className="industry-name">{industry.name}</h3>
    </div>
  )
}

const Industries = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

  const industries = [
    { icon: <FiBook />, name: 'Education' },
    { icon: <FiHome />, name: 'Real Estate' },
    { icon: <FiHeart />, name: 'Healthcare' },
    { icon: <FiMapPin />, name: 'Travel & Hospitality' },
    { icon: <FiBriefcase />, name: 'Local Businesses' },
    { icon: <FiZap />, name: 'Startups & SaaS' },
    { icon: <FiUsers />, name: 'Professional Services' },
    { icon: <FiShoppingBag />, name: 'Retail & E-commerce' },
    { icon: <FiCoffee />, name: 'Food & Restaurant' },
    { icon: <FiDollarSign />, name: 'Finance & Banking' },
    { icon: <FiShield />, name: 'Legal Services' },
    { icon: <FiSettings />, name: 'Manufacturing' },
    { icon: <FiFilm />, name: 'Media & Entertainment' },
    { icon: <FiGift />, name: 'Non-profit & NGO' },
    { icon: <FiTruck />, name: 'Logistics & Transportation' },
    { icon: <FiCrop />, name: 'Agriculture' },
    { icon: <FiActivity />, name: 'Fitness & Wellness' },
    { icon: <FiScissors />, name: 'Beauty & Cosmetics' },
    { icon: <FiTrendingUp />, name: 'Consulting' },
    { icon: <FiMonitor />, name: 'Technology & IT' }
  ]

  return (
    <section id="industries" className="section industries">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          Industries We Serve
        </h2>
        <p className="section-subtitle">
          Tailored solutions for diverse business needs
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries


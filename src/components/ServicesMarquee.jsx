import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData.jsx'

const ServicesMarquee = () => {
  // Get all services from servicesData
  const services = Object.values(servicesData)
    .filter(service => service && service.title && service.slug)
    .map(service => ({
      title: service.title,
      slug: service.slug
    }))

  if (services.length === 0) {
    return null
  }

  // Duplicate services for seamless loop
  const duplicatedServices = [...services, ...services]

  return (
    <section className="services-marquee">
      <div className="services-marquee-container">
        <div className="services-marquee-track">
          {duplicatedServices.map((service, index) => (
            <div key={`${service.slug}-${index}`} className="services-marquee-item">
              <Link 
                to={`/services/${service.slug}`} 
                className="services-marquee-link"
              >
                <span className="services-marquee-text">{service.title}</span>
              </Link>
              <span className="services-marquee-separator">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesMarquee

import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TechnologyStack = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  const technologies = [
    { name: 'WordPress', slug: 'wordpress' },
    { name: 'Shopify', slug: 'shopify' },
    { name: 'Magento', slug: 'magento' },
    { name: 'OpenCart', slug: 'opencart' },
    { name: 'Joomla', slug: 'joomla' },
    { name: 'Drupal', slug: 'drupal' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Kubernetes', slug: 'kubernetes' },
    { name: 'React', slug: 'react' },
    { name: 'PHP', slug: 'php' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Python', slug: 'python' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'AWS', slug: 'amazonaws' },
    { name: 'Git', slug: 'git' },
    { name: 'Vue.js', slug: 'vuedotjs' }
  ]

  // Simple Icons CDN base URL
  const getLogoUrl = (slug) => {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`
  }

  // Duplicate the array for seamless loop
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="section technology-stack-section">
      <div className="container">
        <div 
          ref={ref}
          className={`technology-stack-header ${isVisible ? 'animate-fadeInUp' : ''}`}
        >
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>Technologies We Work With</h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            We leverage cutting-edge technologies and platforms to build robust, scalable, and high-performance digital solutions.
          </p>
        </div>

        <div className="logo-loop-container">
          <div className="logo-loop-track">
            {duplicatedTechs.map((tech, index) => (
              <div key={`${tech.slug}-${index}`} className="logo-item">
                <div className="logo-wrapper">
                  <img
                    src={getLogoUrl(tech.slug)}
                    alt={tech.name}
                    className="tech-logo"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to text if image fails
                      e.target.style.display = 'none'
                      const textFallback = e.target.nextSibling
                      if (textFallback) {
                        textFallback.style.display = 'flex'
                      }
                    }}
                  />
                  <span className="tech-logo-fallback" style={{ display: 'none' }}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack

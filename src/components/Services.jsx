'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FiGlobe, 
  FiTrendingUp, 
  FiZap, 
  FiCloud, 
  FiBook,
  FiLayers,
  FiImage,
  FiSearch,
  FiMapPin,
  FiShare2,
  FiTarget,
  FiFileText,
  FiSettings,
  FiShoppingCart,
  FiMonitor,
  FiArrowRight
} from 'react-icons/fi'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null)
  const iconRef = useRef(null)
  const titleRef = useRef(null)
  const itemsRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const icon = iconRef.current
    const title = titleRef.current
    const items = itemsRef.current
    const link = linkRef.current

    // Set initial states
    gsap.set([icon, title, items, link], { opacity: 0 })
    gsap.set(icon, { scale: 0, rotation: -180 })
    gsap.set(title, { y: 20 })
    gsap.set(items, { y: 30 })
    gsap.set(link, { x: -20, opacity: 0 })

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Staggered animation sequence
    tl.to(icon, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })
    .to(title, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.3')
    .to(items, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .to(link, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.3')

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(icon, {
        scale: 1.15,
        rotation: 5,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(link, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(link, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === card) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className="service-card"
      data-index={index}
    >
      <div ref={iconRef} className="service-icon">{service.icon}</div>
      <h3 ref={titleRef} className="service-title">{service.title}</h3>
      <ul ref={itemsRef} className="service-items">
        {service.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <Link 
        ref={linkRef}
        href={service.slug}
        className="service-card-read-more"
        suppressHydrationWarning
      >
        Read More
        <FiArrowRight style={{ marginLeft: '6px' }} />
      </Link>
    </div>
  )
}

const Services = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const gridRef = useRef(null)
  const buttonRef = useRef(null)
  const bgTextureRef = useRef(null)
  const bgOrbsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Create animated background orbs
    const orbs = []
    for (let i = 0; i < 6; i++) {
      const orb = document.createElement('div')
      orb.className = 'services-bg-orb'
      orb.style.cssText = `
        position: absolute;
        width: ${200 + i * 50}px;
        height: ${200 + i * 50}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(37, 99, 235, ${0.15 - i * 0.02}) 0%, transparent 70%);
        filter: blur(40px);
        pointer-events: none;
        z-index: 0;
      `
      section.appendChild(orb)
      orbs.push(orb)
      bgOrbsRef.current.push(orb)
    }

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 30 })
    gsap.set(buttonRef.current, { opacity: 0, scale: 0.9 })
    gsap.set(bgTextureRef.current, { opacity: 0, scale: 1.1 })
    gsap.set(orbs, { opacity: 0, scale: 0 })

    // Animate orbs positions on scroll
    orbs.forEach((orb, i) => {
      const xPos = (i % 2 === 0 ? -1 : 1) * (100 + i * 30)
      const yPos = (i < 3 ? -1 : 1) * (100 + i * 20)
      
      gsap.to(orb, {
        x: xPos,
        y: yPos,
        opacity: 0.6,
        scale: 1,
        duration: 2 + i * 0.3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Continuous floating animation
      gsap.to(orb, {
        x: `+=${(i % 2 === 0 ? 1 : -1) * 30}`,
        y: `+=${(i < 3 ? 1 : -1) * 20}`,
        duration: 3 + i * 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    })

    // Create master timeline
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Background texture animation
    masterTl.to(bgTextureRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out'
    })
    // Title animation
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    // Subtitle animation
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    // Button animation
    .to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.2')

    // Parallax effect for background texture
    gsap.to(bgTextureRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    return () => {
      orbs.forEach(orb => orb.remove())
      bgOrbsRef.current = []
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const services = [
    {
      icon: <FiGlobe />,
      title: 'Web Development',
      slug: '/services/web-development',
      items: [
        'Custom Website Development',
        'WordPress Development',
        'E-commerce Development',
        'Web Application Development',
        'Responsive & Mobile-First Design',
        'Progressive Web Apps (PWA)'
      ]
    },
    {
      icon: <FiImage />,
      title: 'Branding & Design',
      slug: '/services/branding-design',
      items: [
        'Logo Design',
        'Brand Identity Design',
        'UI/UX Design',
        'Graphic Design',
        'Print Design',
        'Brand Guidelines & Style Guides'
      ]
    },
    {
      icon: <FiSearch />,
      title: 'SEO Services',
      slug: '/services/seo-services',
      items: [
        'Technical SEO',
        'On-Page SEO Optimization',
        'Off-Page SEO & Link Building',
        'SEO Audits & Analysis',
        'Keyword Research & Strategy',
        'Content Optimization'
      ]
    },
    {
      icon: <FiMapPin />,
      title: 'Local SEO',
      slug: '/services/local-seo',
      items: [
        'Google My Business Optimization',
        'Local Citations & Directory Listings',
        'Local Link Building',
        'NAP (Name, Address, Phone) Consistency',
        'Local Reviews Management',
        'Local Content Strategy'
      ]
    },
    {
      icon: <FiShare2 />,
      title: 'Social Media Marketing (SMM)',
      slug: '/services/social-media-marketing',
      items: [
        'Social Media Strategy',
        'Content Creation & Curation',
        'Social Media Management',
        'Paid Social Advertising',
        'Community Management',
        'Influencer Marketing'
      ]
    },
    {
      icon: <FiTarget />,
      title: 'Digital Marketing',
      slug: '/services/digital-marketing',
      items: [
        'PPC Advertising (Google Ads, Facebook Ads)',
        'Email Marketing Campaigns',
        'Content Marketing',
        'Marketing Automation',
        'Conversion Rate Optimization (CRO)',
        'Analytics & Performance Reporting'
      ]
    },
    {
      icon: <FiFileText />,
      title: 'Content Services',
      slug: '/services/content-services',
      items: [
        'Content Writing & Copywriting',
        'Blog Writing & Management',
        'Video Production & Editing',
        'Photography Services',
        'Infographic Design',
        'Content Strategy & Planning'
      ]
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-commerce Solutions',
      slug: '/services/ecommerce-solutions',
      items: [
        'E-commerce Website Development',
        'Shopping Cart Integration',
        'Payment Gateway Setup',
        'Inventory Management Systems',
        'Order Management Systems',
        'E-commerce SEO & Marketing'
      ]
    },
    {
      icon: <FiSettings />,
      title: 'Web Maintenance & Support',
      slug: '/services/web-maintenance',
      items: [
        'Website Maintenance & AMC',
        'Security Updates & Monitoring',
        'Performance Optimization',
        'Backup & Recovery Services',
        'Technical Support & Troubleshooting',
        'Website Updates & Content Management'
      ]
    },
    {
      icon: <FiMonitor />,
      title: 'UI/UX Design',
      slug: '/services/ui-ux-design',
      items: [
        'User Interface Design',
        'User Experience Design',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Design Audit & Redesign'
      ]
    },
    {
      icon: <FiZap />,
      title: 'Automation & SaaS',
      slug: '/services/automation-saas',
      items: [
        'CRM & Workflow Automation',
        'SaaS Setup & Whitelabel Solutions',
        'Client Portals & Dashboards',
        'Payment & Subscription Systems',
        'API Integration',
        'Third-party Integrations'
      ]
    },
    {
      icon: <FiCloud />,
      title: 'Cloud & Infrastructure',
      slug: '/services/cloud-infrastructure',
      items: [
        'Cloud Hosting & Migration',
        'Server Management',
        'CI/CD Pipelines',
        'Monitoring & Backup Systems',
        'SSL Certificates',
        'Domain & DNS Management'
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="section services">
      {/* Animated Background Texture */}
      <div ref={bgTextureRef} className="services-bg-texture"></div>
      
      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 ref={titleRef} className="section-title">
          Our Services
        </h2>
        <p ref={subtitleRef} className="section-subtitle">
          Complete web agency services from design to development, SEO to social media, and everything in between
        </p>
        <div ref={gridRef} className="services-grid">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link 
            ref={buttonRef}
            href="/services" 
            className="btn btn-primary" 
            suppressHydrationWarning
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services


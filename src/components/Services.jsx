import React from 'react'
import { Link } from 'react-router-dom'
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
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      key={index}
      className={`service-card ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <ul className="service-items">
        {service.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <Link to={service.slug} className="service-card-read-more">
        Read More
        <FiArrowRight style={{ marginLeft: '6px' }} />
      </Link>
    </div>
  )
}

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })

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
    <section id="services" className="section services">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title ${titleVisible ? 'animate-fadeInUp' : ''}`}
        >
          Our Services
        </h2>
        <p className="section-subtitle">
          Complete web agency services from design to development, SEO to social media, and everything in between
        </p>
        <div className="services-grid">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

export default Services


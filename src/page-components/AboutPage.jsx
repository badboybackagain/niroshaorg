'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiArrowRight, FiUsers, FiTarget, FiMessageCircle, FiHeart, FiAward, FiZap, FiShield, FiTrendingUp, FiCode } from 'react-icons/fi'
import SquaresBackground from '../components/SquaresBackground'

// Team member data
const teamMembers = [
  {
    name: 'Nisha Tiwari',
    role: 'Founder',
    imageSlug: 'nisha-tiwari',
    description: 'Leading Team Nirosha with a vision to deliver exceptional digital solutions'
  },
  {
    name: 'Ajay Pankhaniya',
    role: 'Development Lead',
    imageSlug: 'ajay-pankhaniya',
    description: 'Driving innovation and strategic growth'
  },
  {
    name: 'Komal Vaviya',
    role: 'Sr. Developer',
    imageSlug: 'komal-vaviya',
    description: 'Expert in modern web technologies and cloud solutions'
  },
  {
    name: 'Chirag Patel',
    role: 'Sr. Developer',
    imageSlug: 'chirag-patel',
    description: 'Building scalable and secure digital solutions'
  },
  {
    name: 'Dev Prajapati',
    role: 'Sr. Developer',
    imageSlug: 'dev-prajapati',
    description: 'Creating beautiful and functional web experiences'
  },
  {
    name: 'Vilas Dhadse',
    role: 'Sr. Designer - UI / UX',
    imageSlug: 'vilas-dhadse',
    description: 'Crafting intuitive and engaging user experiences'
  },
  {
    name: 'Avinash Dubal',
    role: 'Sr. Designer & Developer',
    imageSlug: 'avinash-dubal',
    description: 'Transforming ideas into digital reality'
  },
  {
    name: 'Abhishek Mishra',
    role: 'SEO Specialist',
    imageSlug: 'abhishek-mishra',
    description: 'Driving digital marketing and brand growth'
  },
  {
    name: 'Kunal Gaikwad',
    role: 'Digital Marketing Manager',
    imageSlug: 'kunal-gaikwad',
    description: 'Expert in enterprise solutions and automation'
  }
]

const TeamMemberCard = ({ member, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageError, setImageError] = React.useState(false)

  return (
    <div 
      ref={ref}
      className={`about-page-team-member-card ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="about-page-team-member-image-wrapper">
        {!imageError ? (
          <picture className="about-page-team-member-picture">
            <source
              srcSet={`/cache/team/${member.imageSlug}.webp 1x, /cache/team/${member.imageSlug}@2x.webp 2x`}
              type="image/webp"
            />
            <img 
              src={`/cache/team/${member.imageSlug}.png`}
              srcSet={`/cache/team/${member.imageSlug}.png 1x, /cache/team/${member.imageSlug}@2x.png 2x`}
              alt={member.name}
              className="about-page-team-member-image"
              onError={() => setImageError(true)}
            />
          </picture>
        ) : (
          <div className="about-page-team-member-placeholder">
            <span className="about-page-team-member-initials">
              {member.name.split(' ').map(n => n.charAt(0)).join('')}
            </span>
          </div>
        )}
      </div>
      <h3 className="about-page-team-member-name">{member.name}</h3>
      <p className="about-page-team-member-designation">{member.role}</p>
    </div>
  )
}

const ValueCard = ({ icon, title, description, delay }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div 
      ref={ref}
      className={`about-page-value-card ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="about-page-value-icon">{icon}</div>
      <h3 className="about-page-value-title">{title}</h3>
      <p className="about-page-value-description">{description}</p>
    </div>
  )
}

const AboutPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2 })

  const values = [
    {
      icon: <FiTarget />,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that drive real business results and growth.'
    },
    {
      icon: <FiAward />,
      title: 'Quality First',
      description: 'Every project is built with attention to detail and commitment to excellence.'
    },
    {
      icon: <FiUsers />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships, not just projects.'
    },
    {
      icon: <FiZap />,
      title: 'Innovation',
      description: 'We stay ahead of the curve with modern technologies and best practices.'
    },
    {
      icon: <FiShield />,
      title: 'Reliability',
      description: 'Secure, scalable solutions you can trust to support your business growth.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth-Oriented',
      description: 'We build systems that scale with your business, not against it.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="about-page-hero-section">
        <div className="iridescence-background"></div>
        <div className="iridescence-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <div 
              ref={heroRef}
              className={`about-hero-text ${heroVisible ? 'animate-fadeInUp' : ''}`}
            >
              <span className="about-hero-badge">About Team Nirosha</span>
              <h1 className="about-hero-headline">About Team Nirosha - Digital Agency | Web Development & SEO Experts</h1>
              <p className="about-hero-subheadline">
                We don't just build websites - we build secure, scalable digital systems that support real business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="about-page">
        <div className="container">
          <div 
            ref={contentRef}
            className={`about-page-content ${contentVisible ? 'animate-fadeInUp' : ''}`}
          >
            <p className="about-page-lead">
              Team Nirosha is a trusted digital agency in India, providing comprehensive web development, 
              SEO, automation, and cloud services. We focus on quality, transparency, and results - 
              technology that works while you sleep.
            </p>
            <div className="about-page-body">
              <p>
                Our business-first approach means we understand your goals before we write a single line of code. 
                We're hands-on, responsive, and accountable - trusted by businesses, startups, and educational 
                institutions across India. We solve real problems with scalable solutions that grow with your business.
              </p>
              <p>
                With years of combined experience, our team brings expertise in modern web technologies, cloud infrastructure, 
                SEO optimization, and business automation. We're not just developers - we're your partners in digital transformation.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div 
            ref={valuesRef}
            className={`about-page-values ${valuesVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="about-page-section-title">Our Core Values</h2>
            <div className="about-page-values-grid">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="about-page-team animate-fadeInUp">
            <SquaresBackground 
              direction="diagonal"
              speed={0.5}
              borderColor="rgba(150, 150, 150, 0.15)"
              squareSize={60}
              hoverFillColor="rgba(100, 100, 100, 0.08)"
            />
            <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
              <h2 className="about-page-section-title" style={{ pointerEvents: 'auto' }}>Meet Our Team</h2>
              <p className="about-page-team-intro" style={{ pointerEvents: 'auto' }}>
                We're a team of passionate professionals dedicated to delivering exceptional digital solutions. 
                Each member brings unique expertise and a commitment to excellence.
              </p>
              <div className="about-page-team-members-grid" style={{ pointerEvents: 'auto' }}>
                {teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} member={member} index={index} />
                ))}
              </div>
              <p className="about-page-team-closing" style={{ pointerEvents: 'auto' }}>
                Together, we're building the future of digital solutions, one project at a time.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="about-page-cta">
            <Link href="/contact" className="btn btn-primary btn-large">
              Get in Touch
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
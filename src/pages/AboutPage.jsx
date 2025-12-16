import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FiArrowRight, FiUsers, FiTarget, FiMessageCircle, FiHeart, FiAward, FiZap, FiShield, FiTrendingUp, FiCode } from 'react-icons/fi'

// Team member data - using cache folder paths for optimized images
const teamMembers = [
  {
    name: 'Nisha Tiwari',
    role: 'Founder',
    image: '/images/team/cache/nisha-tiwari.jpg',
    description: 'Leading Team Nirosha with a vision to deliver exceptional digital solutions'
  },
  {
    name: 'Ajay Pankhaniya',
    role: 'Development Lead',
    image: '/images/team/cache/ajay-pankhaniya.jpg',
    description: 'Driving innovation and strategic growth'
  },
  {
    name: 'Komal Vaviya',
    role: 'Sr. Developer',
    image: '/images/team/cache/komal-vaviya.jpg',
    description: 'Building scalable and secure digital solutions'
  },
  {
    name: 'Chirag Patel',
    role: 'Sr. Developer',
    image: '/images/team/cache/chirag-patel.jpg',
    description: 'Creating beautiful and functional web experiences'
  },
  {
    name: 'Dev Prajapati',
    role: 'Sr. Developer',
    image: '/images/team/cache/dev-prajapati.jpg',
    description: 'Expert in modern web technologies and cloud solutions'
  },
  {
    name: 'Vilas Dhadse',
    role: 'Sr. Designer - UI / UX',
    image: '/images/team/cache/vilas-dhadse.jpg',
    description: 'Crafting intuitive and engaging user experiences'
  },
  {
    name: 'Avinash Dubal',
    role: 'Sr. Designer & Developer',
    image: '/images/team/cache/avinash-dubal.jpg',
    description: 'Expert in enterprise solutions and automation'
  },
  {
    name: 'Abhishek Mishra',
    role: 'SEO Specialist',
    image: '/images/team/cache/abhishek-mishra.jpg',
    description: 'Driving digital marketing and brand growth'
  },
  {
    name: 'Kunal Gaikwad',
    role: 'Digital Marketing Manager',
    image: '/images/team/cache/kunal-gaikwad.jpg',
    description: 'Transforming ideas into digital reality'
  }
]

const TeamMemberCard = ({ member, index }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageError, setImageError] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false)

  // Generate image paths - use cache folder with WebP support
  const getImagePaths = (baseName) => {
    return {
      webp: `/images/team/cache/${baseName}.webp`,
      webp2x: `/images/team/cache/${baseName}@2x.webp`,
      jpg: `/images/team/cache/${baseName}.jpg`,
      jpg2x: `/images/team/cache/${baseName}@2x.jpg`
    }
  }

  // Extract base name from image path
  const getBaseName = (imagePath) => {
    const filename = imagePath.split('/').pop()
    return filename.replace(/\.(png|jpg|jpeg|webp)$/i, '')
  }

  const baseName = getBaseName(member.image)
  const imagePaths = getImagePaths(baseName)
  const fallbackInitials = member.name.split(' ').map(n => n.charAt(0)).join('')

  // Debug: Log image paths
  React.useEffect(() => {
    console.log(`[TeamMemberCard] ${member.name}:`, {
      baseName,
      imagePaths,
      originalPath: member.image
    })
  }, [member.name, baseName, member.image])

  // Test with a dummy image URL for debugging
  const useDummyImage = false // Set to true to test with a placeholder image
  const dummyImage = 'https://via.placeholder.com/400x400/2563eb/ffffff?text=' + encodeURIComponent(member.name)

  return (
    <div 
      ref={ref}
      className={`about-page-team-member-card ${isVisible ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="about-page-team-member-image-wrapper">
        {imageError ? (
          <div className="about-page-team-member-placeholder">
            <span className="about-page-team-member-initials">
              {fallbackInitials}
            </span>
            {/* Debug info */}
            <div style={{ 
              position: 'absolute', 
              bottom: '10px', 
              left: '10px', 
              right: '10px',
              fontSize: '10px',
              color: '#fff',
              background: 'rgba(0,0,0,0.5)',
              padding: '4px',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              Error loading image
            </div>
          </div>
        ) : (
          <picture className="about-page-team-member-picture">
            {!useDummyImage && (
              <source
                srcSet={`${imagePaths.webp} 1x, ${imagePaths.webp2x} 2x`}
                type="image/webp"
              />
            )}
            <img 
              src={useDummyImage ? dummyImage : imagePaths.jpg}
              srcSet={useDummyImage ? undefined : `${imagePaths.jpg} 1x, ${imagePaths.jpg2x} 2x`}
              alt={member.name}
              className="about-page-team-member-image"
              loading="eager"
              decoding="async"
              onLoad={() => {
                console.log(`[TeamMemberCard] Image loaded successfully for ${member.name}`)
                setImageLoaded(true)
              }}
              onError={(e) => {
                console.error(`[TeamMemberCard] Image failed to load for ${member.name}:`, {
                  error: e,
                  attemptedPaths: imagePaths,
                  currentSrc: e.target?.currentSrc || e.target?.src,
                  member: member.name
                })
                setImageError(true)
              }}
            />
          </picture>
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
  const [teamRef, teamVisible] = useScrollAnimation({ threshold: 0.2 })

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
      <Helmet>
        <title>About Us - Team Nirosha | Your Trusted Digital Partner</title>
        <meta name="description" content="Meet Team Nirosha - a trusted digital agency in India providing web development, SEO, automation, and cloud services. Learn about our team and our mission to deliver exceptional digital solutions." />
        <meta name="keywords" content="Team Nirosha, about us, digital agency India, web development team, IT solutions provider" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-page-hero-section">
        <div className="about-hero-background-pattern"></div>
        <div className="about-hero-particles">
          <div className="about-particle about-particle-1"></div>
          <div className="about-particle about-particle-2"></div>
          <div className="about-particle about-particle-3"></div>
          <div className="about-particle about-particle-4"></div>
        </div>
        <div className="about-hero-glow about-hero-glow-1"></div>
        <div className="about-hero-glow about-hero-glow-2"></div>
        <div className="container">
          <div className="about-hero-content">
            <div 
              ref={heroRef}
              className={`about-hero-text ${heroVisible ? 'animate-fadeInUp' : ''}`}
            >
              <span className="about-hero-badge">About Team Nirosha</span>
              <h1 className="about-hero-headline">Your Trusted Digital Growth Partner</h1>
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
          <div 
            ref={teamRef}
            className={`about-page-team ${teamVisible ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="about-page-section-title">Meet Our Team</h2>
            <p className="about-page-team-intro">
              We're a team of passionate professionals dedicated to delivering exceptional digital solutions. 
              Each member brings unique expertise and a commitment to excellence.
            </p>
            <div className="about-page-team-members-grid">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} index={index} />
              ))}
            </div>
            <p className="about-page-team-closing">
              Together, we're building the future of digital solutions, one project at a time.
            </p>
          </div>

          {/* CTA Section */}
          <div className="about-page-cta">
            <Link to="/contact" className="btn btn-primary btn-large">
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

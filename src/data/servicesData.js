import React from 'react'
import { 
  FiGlobe, 
  FiImage, 
  FiSearch, 
  FiMapPin, 
  FiShare2, 
  FiTarget, 
  FiFileText, 
  FiSettings, 
  FiShoppingCart, 
  FiMonitor, 
  FiZap, 
  FiCloud,
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiBarChart,
  FiUsers,
  FiCheckCircle
} from 'react-icons/fi'

export const servicesData = {
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    heroDescription: 'Custom websites and web applications that drive results. From simple business sites to complex web platforms, we build solutions that work.',
    description: [
      'In today\'s digital-first world, your website is often the first impression customers have of your business. A well-designed, fast, and functional website can be the difference between a visitor and a customer.',
      'At Team Nirosha, we specialize in creating custom web solutions that not only look great but perform exceptionally. Whether you need a simple business website, a complex web application, or an e-commerce platform, we have the expertise to bring your vision to life.',
      'Our web development services combine cutting-edge technology with proven strategies to deliver websites that convert visitors into customers and drive business growth.'
    ],
    benefits: [
      'Increased online visibility and brand presence',
      'Improved user experience leading to higher conversions',
      'Mobile-responsive design for all devices',
      'Fast loading times for better SEO rankings',
      'Secure and scalable architecture',
      'Ongoing support and maintenance'
    ],
    features: [
      {
        icon: <FiCode />,
        title: 'Custom Development',
        description: 'Tailored solutions built specifically for your business needs and goals'
      },
      {
        icon: <FiGlobe />,
        title: 'WordPress Development',
        description: 'Powerful, flexible WordPress sites with custom themes and plugins'
      },
      {
        icon: <FiShoppingCart />,
        title: 'E-commerce Solutions',
        description: 'Full-featured online stores with payment integration and inventory management'
      },
      {
        icon: <FiMonitor />,
        title: 'Responsive Design',
        description: 'Mobile-first approach ensuring perfect display on all devices'
      },
      {
        icon: <FiZap />,
        title: 'Performance Optimization',
        description: 'Lightning-fast load times for better user experience and SEO'
      },
      {
        icon: <FiShield />,
        title: 'Security Hardening',
        description: 'Enterprise-grade security to protect your website and customer data'
      }
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We analyze your business goals, target audience, and requirements to create a comprehensive development plan'
      },
      {
        title: 'Design & Prototyping',
        description: 'Create wireframes and designs that align with your brand and user experience goals'
      },
      {
        title: 'Development & Testing',
        description: 'Build your website using best practices, with rigorous testing at every stage'
      },
      {
        title: 'Launch & Optimization',
        description: 'Deploy your site and optimize for performance, SEO, and conversions'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous maintenance, updates, and improvements to keep your site running smoothly'
      }
    ],
    seoKeywords: 'web development, custom website development, WordPress development, web application development, responsive web design, e-commerce development'
  },
  'branding-design': {
    slug: 'branding-design',
    title: 'Branding & Design',
    heroDescription: 'Create a memorable brand identity that resonates with your audience and sets you apart from competitors.',
    description: [
      'Your brand is more than just a logo - it\'s the complete visual and emotional experience your customers have with your business. A strong brand identity builds trust, creates recognition, and drives customer loyalty.',
      'Our branding and design services help you create a cohesive visual identity that tells your story and connects with your target audience. From logo design to complete brand guidelines, we ensure every touchpoint reflects your brand values.',
      'We combine creative design with strategic thinking to develop brands that not only look great but also drive business results.'
    ],
    benefits: [
      'Professional brand identity that stands out',
      'Consistent visual language across all touchpoints',
      'Increased brand recognition and recall',
      'Better customer connection and loyalty',
      'Competitive advantage in your market',
      'Complete brand guidelines for future use'
    ],
    features: [
      {
        icon: <FiImage />,
        title: 'Logo Design',
        description: 'Unique, memorable logos that capture your brand essence'
      },
      {
        icon: <FiLayers />,
        title: 'Brand Identity',
        description: 'Complete visual identity including colors, typography, and style guides'
      },
      {
        icon: <FiMonitor />,
        title: 'UI/UX Design',
        description: 'User-centered design that creates exceptional digital experiences'
      },
      {
        icon: <FiFileText />,
        title: 'Graphic Design',
        description: 'Marketing materials, social media graphics, and promotional designs'
      },
      {
        icon: <FiSettings />,
        title: 'Print Design',
        description: 'Business cards, brochures, and other print materials'
      },
      {
        icon: <FiCheckCircle />,
        title: 'Brand Guidelines',
        description: 'Comprehensive style guide to maintain brand consistency'
      }
    ],
    process: [
      {
        title: 'Brand Research',
        description: 'Understand your business, market, competitors, and target audience'
      },
      {
        title: 'Concept Development',
        description: 'Create multiple design concepts that align with your brand vision'
      },
      {
        title: 'Refinement',
        description: 'Refine selected concepts based on feedback and brand strategy'
      },
      {
        title: 'Finalization',
        description: 'Complete the final brand identity with all required assets'
      },
      {
        title: 'Brand Guidelines',
        description: 'Deliver comprehensive guidelines for consistent brand application'
      }
    ],
    seoKeywords: 'logo design, brand identity design, UI UX design, graphic design services, branding agency, visual identity design'
  },
  'seo-services': {
    slug: 'seo-services',
    title: 'SEO Services',
    heroDescription: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
    description: [
      'Search Engine Optimization (SEO) is the foundation of online visibility. When done right, SEO brings qualified visitors to your website who are actively searching for what you offer.',
      'Our SEO services combine technical expertise with content strategy to improve your search rankings, increase organic traffic, and generate more leads and sales. We don\'t just optimize your website - we build a sustainable SEO strategy that delivers long-term results.',
      'With years of experience and proven methodologies, we help businesses rank higher on Google and other search engines, driving measurable growth in organic traffic and conversions.'
    ],
    benefits: [
      'Higher search engine rankings',
      'Increased organic website traffic',
      'Better visibility to potential customers',
      'Long-term, sustainable results',
      'Improved user experience',
      'Higher conversion rates from qualified traffic'
    ],
    features: [
      {
        icon: <FiCode />,
        title: 'Technical SEO',
        description: 'Optimize site structure, speed, mobile-friendliness, and crawlability'
      },
      {
        icon: <FiFileText />,
        title: 'On-Page Optimization',
        description: 'Optimize content, meta tags, headings, and internal linking structure'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Link Building',
        description: 'Build high-quality backlinks to improve domain authority and rankings'
      },
      {
        icon: <FiSearch />,
        title: 'Keyword Research',
        description: 'Identify high-value keywords that drive qualified traffic'
      },
      {
        icon: <FiBarChart />,
        title: 'SEO Audits',
        description: 'Comprehensive analysis of your current SEO performance and opportunities'
      },
      {
        icon: <FiTarget />,
        title: 'Content Optimization',
        description: 'Optimize existing content and create SEO-friendly new content'
      }
    ],
    process: [
      {
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your current SEO performance, technical issues, and opportunities'
      },
      {
        title: 'Strategy Development',
        description: 'Create a customized SEO strategy based on your goals and competitive landscape'
      },
      {
        title: 'Implementation',
        description: 'Execute technical fixes, on-page optimizations, and content improvements'
      },
      {
        title: 'Link Building',
        description: 'Build high-quality backlinks through outreach and content marketing'
      },
      {
        title: 'Monitoring & Reporting',
        description: 'Track rankings, traffic, and conversions with regular reporting and adjustments'
      }
    ],
    seoKeywords: 'SEO services, search engine optimization, technical SEO, on-page SEO, link building, SEO audit, keyword research'
  },
  'local-seo': {
    slug: 'local-seo',
    title: 'Local SEO',
    heroDescription: 'Dominate local search results and attract customers in your area with proven local SEO strategies.',
    description: [
      'For local businesses, appearing in local search results is crucial. When someone searches for services "near me" or in your city, you want to be at the top of those results.',
      'Local SEO helps your business get found by customers in your geographic area. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content to improve your local search visibility.',
      'Our local SEO services are designed specifically for businesses that serve customers in specific locations, helping you compete effectively in local markets and drive foot traffic and phone calls.'
    ],
    benefits: [
      'Appear in "near me" searches',
      'More visibility in Google Maps',
      'Increased local website traffic',
      'More phone calls and store visits',
      'Better online reputation',
      'Competitive advantage in local market'
    ],
    features: [
      {
        icon: <FiMapPin />,
        title: 'Google Business Profile',
        description: 'Optimize and manage your GMB listing for maximum visibility'
      },
      {
        icon: <FiFileText />,
        title: 'Local Citations',
        description: 'Build consistent NAP (Name, Address, Phone) citations across directories'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Local Link Building',
        description: 'Acquire local backlinks from relevant local websites and directories'
      },
      {
        icon: <FiCheckCircle />,
        title: 'NAP Consistency',
        description: 'Ensure consistent business information across all platforms'
      },
      {
        icon: <FiUsers />,
        title: 'Review Management',
        description: 'Strategies to get more positive reviews and manage your online reputation'
      },
      {
        icon: <FiTarget />,
        title: 'Local Content Strategy',
        description: 'Create location-specific content that ranks for local keywords'
      }
    ],
    process: [
      {
        title: 'Local SEO Audit',
        description: 'Analyze your current local presence, citations, and GMB optimization'
      },
      {
        title: 'GMB Optimization',
        description: 'Optimize your Google Business Profile with complete information and photos'
      },
      {
        title: 'Citation Building',
        description: 'Build consistent citations across major local directories and platforms'
      },
      {
        title: 'Review Strategy',
        description: 'Implement strategies to generate positive reviews and manage reputation'
      },
      {
        title: 'Local Content & Links',
        description: 'Create local content and build local backlinks to improve rankings'
      }
    ],
    seoKeywords: 'local SEO, Google Business Profile optimization, local search optimization, local citations, NAP consistency, local SEO services'
  },
  'social-media-marketing': {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    heroDescription: 'Build your brand, engage your audience, and drive sales through strategic social media marketing.',
    description: [
      'Social media has become an essential channel for businesses to connect with customers, build brand awareness, and drive sales. With billions of active users across platforms, social media offers unprecedented opportunities to reach and engage your target audience.',
      'Our social media marketing services help you build a strong social presence, create engaging content, and run effective paid campaigns that deliver real results. We develop strategies tailored to your business goals and execute them with consistency and creativity.',
      'From content creation to community management, from organic growth to paid advertising, we handle all aspects of your social media marketing so you can focus on running your business.'
    ],
    benefits: [
      'Increased brand awareness and visibility',
      'Better customer engagement and relationships',
      'More website traffic and leads',
      'Higher conversion rates',
      'Improved customer service',
      'Competitive market insights'
    ],
    features: [
      {
        icon: <FiTarget />,
        title: 'Social Media Strategy',
        description: 'Comprehensive strategy aligned with your business goals and target audience'
      },
      {
        icon: <FiFileText />,
        title: 'Content Creation',
        description: 'Engaging, shareable content that resonates with your audience'
      },
      {
        icon: <FiShare2 />,
        title: 'Social Media Management',
        description: 'Daily posting, engagement, and community management across platforms'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Paid Social Advertising',
        description: 'Targeted ad campaigns on Facebook, Instagram, LinkedIn, and more'
      },
      {
        icon: <FiUsers />,
        title: 'Community Management',
        description: 'Respond to comments, messages, and build relationships with followers'
      },
      {
        icon: <FiBarChart />,
        title: 'Analytics & Reporting',
        description: 'Track performance and optimize strategies based on data insights'
      }
    ],
    process: [
      {
        title: 'Strategy Development',
        description: 'Define goals, target audience, platform selection, and content themes'
      },
      {
        title: 'Content Planning',
        description: 'Create content calendar with mix of promotional, educational, and engaging posts'
      },
      {
        title: 'Content Creation',
        description: 'Design graphics, write captions, and create videos that align with your brand'
      },
      {
        title: 'Publishing & Engagement',
        description: 'Schedule and publish content, engage with audience, and manage community'
      },
      {
        title: 'Optimization',
        description: 'Analyze performance, test different strategies, and continuously improve results'
      }
    ],
    seoKeywords: 'social media marketing, SMM services, social media management, Facebook marketing, Instagram marketing, social media advertising'
  },
  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    heroDescription: 'Comprehensive digital marketing strategies that drive traffic, leads, and revenue for your business.',
    description: [
      'Digital marketing encompasses all online marketing efforts to promote your business, attract customers, and drive growth. In today\'s competitive landscape, a well-executed digital marketing strategy is essential for business success.',
      'Our digital marketing services combine multiple channels and tactics - from PPC advertising to email marketing, from content marketing to conversion optimization - to create integrated campaigns that deliver measurable results.',
      'We focus on data-driven strategies that maximize ROI, using analytics and testing to continuously improve performance and drive sustainable business growth.'
    ],
    benefits: [
      'Increased online visibility and traffic',
      'More qualified leads and conversions',
      'Better ROI on marketing spend',
      'Data-driven decision making',
      'Scalable marketing strategies',
      'Competitive advantage in digital space'
    ],
    features: [
      {
        icon: <FiTarget />,
        title: 'PPC Advertising',
        description: 'Google Ads, Facebook Ads, and other paid campaigns that drive results'
      },
      {
        icon: <FiFileText />,
        title: 'Email Marketing',
        description: 'Automated email campaigns that nurture leads and drive sales'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Content Marketing',
        description: 'Strategic content that attracts, engages, and converts your audience'
      },
      {
        icon: <FiZap />,
        title: 'Marketing Automation',
        description: 'Automate marketing workflows to nurture leads and improve efficiency'
      },
      {
        icon: <FiBarChart />,
        title: 'Conversion Optimization',
        description: 'Improve website and campaign performance to maximize conversions'
      },
      {
        icon: <FiUsers />,
        title: 'Analytics & Reporting',
        description: 'Comprehensive tracking and reporting to measure and improve ROI'
      }
    ],
    process: [
      {
        title: 'Strategy & Planning',
        description: 'Analyze your business, goals, and market to create comprehensive digital marketing strategy'
      },
      {
        title: 'Channel Setup',
        description: 'Set up and optimize advertising accounts, email platforms, and analytics'
      },
      {
        title: 'Campaign Execution',
        description: 'Launch and manage campaigns across multiple digital channels'
      },
      {
        title: 'Optimization',
        description: 'Continuously test, analyze, and optimize campaigns for better performance'
      },
      {
        title: 'Reporting & Growth',
        description: 'Regular reporting and strategic adjustments to drive continuous growth'
      }
    ],
    seoKeywords: 'digital marketing services, PPC advertising, email marketing, content marketing, marketing automation, conversion rate optimization'
  },
  'content-services': {
    slug: 'content-services',
    title: 'Content Services',
    heroDescription: 'High-quality content that engages your audience, builds trust, and drives conversions.',
    description: [
      'Content is the foundation of modern marketing. Great content educates, entertains, and persuades - turning visitors into customers and customers into advocates.',
      'Our content services help you create compelling content that resonates with your audience, improves SEO rankings, and drives business results. From blog posts to videos, from copywriting to infographics, we create content that works.',
      'We combine creative writing with strategic thinking to produce content that not only looks great but also achieves your business objectives - whether that\'s generating leads, building brand awareness, or driving sales.'
    ],
    benefits: [
      'Improved SEO rankings',
      'Increased website traffic',
      'Better customer engagement',
      'Higher conversion rates',
      'Established thought leadership',
      'Cost-effective marketing'
    ],
    features: [
      {
        icon: <FiFileText />,
        title: 'Content Writing',
        description: 'Blog posts, articles, and web copy that engage and convert'
      },
      {
        icon: <FiCode />,
        title: 'Copywriting',
        description: 'Persuasive copy for landing pages, ads, and marketing materials'
      },
      {
        icon: <FiTrendingUp />,
        title: 'Blog Management',
        description: 'Complete blog strategy, writing, and management services'
      },
      {
        icon: <FiImage />,
        title: 'Video Production',
        description: 'Professional video content for marketing and engagement'
      },
      {
        icon: <FiUsers />,
        title: 'Photography',
        description: 'Professional photography for products, events, and brand content'
      },
      {
        icon: <FiTarget />,
        title: 'Content Strategy',
        description: 'Strategic content planning aligned with your business goals'
      }
    ],
    process: [
      {
        title: 'Content Strategy',
        description: 'Develop content strategy based on your goals, audience, and SEO opportunities'
      },
      {
        title: 'Content Planning',
        description: 'Create editorial calendar and content briefs for all content pieces'
      },
      {
        title: 'Content Creation',
        description: 'Write, design, and produce high-quality content across formats'
      },
      {
        title: 'Optimization',
        description: 'Optimize content for SEO, readability, and conversion'
      },
      {
        title: 'Distribution & Promotion',
        description: 'Publish and promote content across channels for maximum reach'
      }
    ],
    seoKeywords: 'content writing services, copywriting services, blog writing, video production, content marketing, content strategy'
  },
  'ecommerce-solutions': {
    slug: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    heroDescription: 'Complete e-commerce platforms that drive online sales and grow your business.',
    description: [
      'E-commerce has become essential for businesses of all sizes. A well-designed, user-friendly online store can significantly expand your reach and increase sales.',
      'Our e-commerce solutions include everything from store setup to payment integration, from inventory management to marketing. We build online stores that not only look great but also convert visitors into customers.',
      'Whether you\'re starting a new online store or optimizing an existing one, we provide the expertise and support you need to succeed in the competitive e-commerce landscape.'
    ],
    benefits: [
      '24/7 online sales capability',
      'Expanded market reach',
      'Reduced operational costs',
      'Better customer experience',
      'Scalable business growth',
      'Data-driven insights'
    ],
    features: [
      {
        icon: <FiShoppingCart />,
        title: 'E-commerce Development',
        description: 'Custom online stores built on WooCommerce, Shopify, or custom platforms'
      },
      {
        icon: <FiSettings />,
        title: 'Shopping Cart Integration',
        description: 'Seamless shopping cart and checkout experience'
      },
      {
        icon: <FiZap />,
        title: 'Payment Gateway Setup',
        description: 'Secure payment processing with multiple payment options'
      },
      {
        icon: <FiBarChart />,
        title: 'Inventory Management',
        description: 'Automated inventory tracking and management systems'
      },
      {
        icon: <FiTrendingUp />,
        title: 'E-commerce SEO',
        description: 'Optimize product pages and store structure for search engines'
      },
      {
        icon: <FiTarget />,
        title: 'E-commerce Marketing',
        description: 'Marketing strategies to drive traffic and increase sales'
      }
    ],
    process: [
      {
        title: 'Planning & Strategy',
        description: 'Define store structure, product catalog, and business requirements'
      },
      {
        title: 'Design & Development',
        description: 'Design user-friendly store interface and develop e-commerce platform'
      },
      {
        title: 'Integration & Setup',
        description: 'Set up payment gateways, shipping, inventory, and other integrations'
      },
      {
        title: 'Testing & Optimization',
        description: 'Test all functionality and optimize for performance and conversions'
      },
      {
        title: 'Launch & Support',
        description: 'Launch your store and provide ongoing support and optimization'
      }
    ],
    seoKeywords: 'e-commerce development, online store development, WooCommerce development, Shopify development, e-commerce solutions, online store setup'
  },
  'web-maintenance': {
    slug: 'web-maintenance',
    title: 'Web Maintenance & Support',
    heroDescription: 'Keep your website secure, fast, and up-to-date with our comprehensive maintenance services.',
    description: [
      'A website requires ongoing care to maintain performance, security, and functionality. Regular maintenance ensures your site stays fast, secure, and aligned with the latest web standards.',
      'Our web maintenance and support services take the hassle out of website management. We handle updates, backups, security monitoring, and performance optimization so you can focus on your business.',
      'With our maintenance plans, you get peace of mind knowing your website is in expert hands, with proactive monitoring and quick response times for any issues that arise.'
    ],
    benefits: [
      'Improved website security',
      'Better performance and speed',
      'Reduced downtime',
      'Regular backups and recovery',
      'Peace of mind',
      'Cost-effective maintenance'
    ],
    features: [
      {
        icon: <FiSettings />,
        title: 'Website Maintenance',
        description: 'Regular updates, content changes, and functionality improvements'
      },
      {
        icon: <FiShield />,
        title: 'Security Updates',
        description: 'Keep your site secure with regular security patches and monitoring'
      },
      {
        icon: <FiZap />,
        title: 'Performance Optimization',
        description: 'Continuous optimization for speed and performance improvements'
      },
      {
        icon: <FiCheckCircle />,
        title: 'Backup & Recovery',
        description: 'Automated backups and quick recovery in case of issues'
      },
      {
        icon: <FiUsers />,
        title: 'Technical Support',
        description: 'Quick response technical support for any website issues'
      },
      {
        icon: <FiFileText />,
        title: 'Content Updates',
        description: 'Regular content updates and website management'
      }
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'Review your current website and identify maintenance needs'
      },
      {
        title: 'Maintenance Plan',
        description: 'Create customized maintenance plan based on your requirements'
      },
      {
        title: 'Regular Maintenance',
        description: 'Execute scheduled updates, backups, and optimizations'
      },
      {
        title: 'Monitoring',
        description: 'Monitor website performance, security, and uptime'
      },
      {
        title: 'Reporting',
        description: 'Regular reports on maintenance activities and website health'
      }
    ],
    seoKeywords: 'website maintenance, web maintenance services, website support, website updates, website security, website backup'
  },
  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    heroDescription: 'User-centered design that creates exceptional digital experiences and drives conversions.',
    description: [
      'Great design is more than aesthetics - it\'s about creating experiences that users love. UI/UX design focuses on understanding user needs and creating interfaces that are intuitive, engaging, and effective.',
      'Our UI/UX design services combine user research, design thinking, and creative execution to create digital experiences that not only look beautiful but also drive business results. We design with the user in mind, ensuring every interaction is smooth and purposeful.',
      'From wireframes to prototypes, from user testing to final designs, we follow a comprehensive design process that results in interfaces users love and businesses benefit from.'
    ],
    benefits: [
      'Improved user experience',
      'Higher conversion rates',
      'Reduced bounce rates',
      'Better user satisfaction',
      'Competitive advantage',
      'Data-driven design decisions'
    ],
    features: [
      {
        icon: <FiMonitor />,
        title: 'User Interface Design',
        description: 'Beautiful, intuitive interfaces that align with your brand'
      },
      {
        icon: <FiUsers />,
        title: 'User Experience Design',
        description: 'User-centered design that creates exceptional experiences'
      },
      {
        icon: <FiLayers />,
        title: 'Wireframing & Prototyping',
        description: 'Plan and test designs before development'
      },
      {
        icon: <FiSettings />,
        title: 'Design Systems',
        description: 'Create consistent design systems for scalable growth'
      },
      {
        icon: <FiCheckCircle />,
        title: 'Usability Testing',
        description: 'Test designs with real users to ensure effectiveness'
      },
      {
        icon: <FiBarChart />,
        title: 'Design Audit',
        description: 'Analyze and improve existing designs for better performance'
      }
    ],
    process: [
      {
        title: 'User Research',
        description: 'Understand your users, their needs, and pain points'
      },
      {
        title: 'Information Architecture',
        description: 'Structure content and functionality for optimal user flow'
      },
      {
        title: 'Wireframing',
        description: 'Create low-fidelity wireframes to plan layout and structure'
      },
      {
        title: 'Design & Prototyping',
        description: 'Design high-fidelity mockups and interactive prototypes'
      },
      {
        title: 'Testing & Refinement',
        description: 'Test with users and refine designs based on feedback'
      }
    ],
    seoKeywords: 'UI design, UX design, user interface design, user experience design, wireframing, prototyping, design services'
  },
  'automation-saas': {
    slug: 'automation-saas',
    title: 'Automation & SaaS',
    heroDescription: 'Streamline operations and scale your business with custom automation and SaaS solutions.',
    description: [
      'Automation and SaaS solutions can transform how your business operates, reducing manual work, improving efficiency, and enabling scalable growth. From workflow automation to custom SaaS platforms, we help businesses leverage technology to work smarter.',
      'Our automation and SaaS services include CRM setup, workflow automation, custom SaaS development, and integration services. We build solutions that integrate seamlessly with your existing systems and processes.',
      'Whether you need to automate repetitive tasks, build a custom SaaS product, or create client portals, we have the expertise to deliver solutions that drive real business value.'
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual work and errors',
      'Scalable business processes',
      'Better data management',
      'Improved customer experience',
      'Competitive advantage through technology'
    ],
    features: [
      {
        icon: <FiZap />,
        title: 'CRM & Workflow Automation',
        description: 'Automate sales, marketing, and operational workflows'
      },
      {
        icon: <FiCloud />,
        title: 'SaaS Development',
        description: 'Custom SaaS platforms and whitelabel solutions'
      },
      {
        icon: <FiUsers />,
        title: 'Client Portals',
        description: 'Secure portals for clients to access services and information'
      },
      {
        icon: <FiSettings />,
        title: 'Payment & Subscriptions',
        description: 'Recurring payment and subscription management systems'
      },
      {
        icon: <FiCode />,
        title: 'API Integration',
        description: 'Integrate with third-party services and APIs'
      },
      {
        icon: <FiCheckCircle />,
        title: 'System Integration',
        description: 'Connect different systems for seamless data flow'
      }
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'Understand your business processes and automation needs'
      },
      {
        title: 'Solution Design',
        description: 'Design automation workflows and system architecture'
      },
      {
        title: 'Development & Integration',
        description: 'Build and integrate automation solutions with your systems'
      },
      {
        title: 'Testing & Training',
        description: 'Test thoroughly and train your team on new systems'
      },
      {
        title: 'Launch & Support',
        description: 'Deploy solutions and provide ongoing support and optimization'
      }
    ],
    seoKeywords: 'business automation, workflow automation, SaaS development, CRM automation, custom SaaS, automation services'
  },
  'cloud-infrastructure': {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    heroDescription: 'Reliable, scalable cloud infrastructure that supports your business growth.',
    description: [
      'Cloud infrastructure provides the foundation for modern digital businesses. From hosting to server management, from CI/CD pipelines to monitoring, we ensure your infrastructure is reliable, secure, and scalable.',
      'Our cloud and infrastructure services help you migrate to the cloud, optimize existing infrastructure, and maintain systems that support your business operations. We handle the technical complexity so you can focus on your business.',
      'With expertise in cloud platforms, server management, and DevOps practices, we provide infrastructure solutions that are both powerful and cost-effective.'
    ],
    benefits: [
      'Improved reliability and uptime',
      'Scalable infrastructure',
      'Better security',
      'Cost optimization',
      'Faster deployments',
      'Expert infrastructure management'
    ],
    features: [
      {
        icon: <FiCloud />,
        title: 'Cloud Hosting',
        description: 'Migrate to and manage cloud hosting on AWS, Azure, or Google Cloud'
      },
      {
        icon: <FiSettings />,
        title: 'Server Management',
        description: 'Complete server administration and management services'
      },
      {
        icon: <FiZap />,
        title: 'CI/CD Pipelines',
        description: 'Automated deployment pipelines for faster releases'
      },
      {
        icon: <FiBarChart />,
        title: 'Monitoring & Backup',
        description: '24/7 monitoring and automated backup systems'
      },
      {
        icon: <FiShield />,
        title: 'SSL & Security',
        description: 'SSL certificates and security hardening'
      },
      {
        icon: <FiGlobe />,
        title: 'Domain & DNS',
        description: 'Domain registration and DNS management'
      }
    ],
    process: [
      {
        title: 'Infrastructure Assessment',
        description: 'Evaluate current infrastructure and identify optimization opportunities'
      },
      {
        title: 'Migration Planning',
        description: 'Plan cloud migration or infrastructure improvements'
      },
      {
        title: 'Implementation',
        description: 'Set up cloud infrastructure, servers, and monitoring'
      },
      {
        title: 'Optimization',
        description: 'Optimize performance, costs, and security'
      },
      {
        title: 'Ongoing Management',
        description: 'Monitor, maintain, and optimize infrastructure continuously'
      }
    ],
    seoKeywords: 'cloud hosting, server management, cloud migration, CI/CD pipelines, infrastructure management, cloud services'
  }
}


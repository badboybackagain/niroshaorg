import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import ServicesMarquee from '../components/ServicesMarquee'
import ClientLogosMarquee from '../components/ClientLogosMarquee'
import About from '../components/About'

// Lazy load below-the-fold components for better initial load performance
const Services = dynamic(() => import('../components/Services'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const Process = dynamic(() => import('../components/Process'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const Industries = dynamic(() => import('../components/Industries'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const TechnologyStack = dynamic(() => import('../components/TechnologyStack'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})
const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <div style={{ minHeight: '400px' }} />,
})

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <ClientLogosMarquee />
      <About />
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <WhyChoose />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <TechnologyStack />
      </Suspense>
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Testimonials />
      </Suspense>
    </>
  )
}

export default HomePage

import React from 'react'
import Hero from '../components/Hero'
import ServicesMarquee from '../components/ServicesMarquee'
import About from '../components/About'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Process from '../components/Process'
import Industries from '../components/Industries'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  )
}

export default HomePage

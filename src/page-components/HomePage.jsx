import React from 'react'
import Hero from '../components/Hero'
import ServicesMarquee from '../components/ServicesMarquee'
import ClientLogosMarquee from '../components/ClientLogosMarquee'
import About from '../components/About'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Process from '../components/Process'
import Industries from '../components/Industries'
import TechnologyStack from '../components/TechnologyStack'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <ClientLogosMarquee />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Industries />
      <TechnologyStack />
      <Testimonials />
    </>
  )
}

export default HomePage

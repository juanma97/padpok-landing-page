'use client';

import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorksSimple from './components/HowItWorksSimple'
import Pricing from './components/Pricing'
import TestimonialsLanding from './components/TestimonialsLanding'
import FAQLanding from './components/FAQLanding'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <HowItWorksSimple />
      <Pricing />
      <TestimonialsLanding />
      <FAQLanding />
      <CallToAction />
      <Footer />
    </main>
  )
}

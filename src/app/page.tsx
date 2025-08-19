'use client';

import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorksSimple from './components/HowItWorksSimple'
import Pricing from './components/Pricing'
import TestimonialsLanding from './components/TestimonialsLanding'
import FAQLanding from './components/FAQLanding'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Padpok | Organize and Play Tournaments with Ease</title>
        <meta name="description" content="Create sports leagues and tournaments in minutes. No hassle, no commissions. Padel, tennis, badminton and more." />
      </Head>
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
    </>
  )
}

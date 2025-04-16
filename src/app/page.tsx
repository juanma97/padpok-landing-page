'use client';

import Hero from './components/Hero'
import VisualFlow from './components/VisualFlow'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Padpok | Juega al pádel, conecta con jugadores y organiza partidos fácilmente</title>
        <meta name="description" content="Encuentra partidos de pádel, organiza torneos y crea grupos de jugadores. Únete a la comunidad más activa de pádel." />
      </Head>
      <main className="overflow-hidden">
        <Hero />
        <VisualFlow />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LightRays from './components/LightRaysWebGL'
import Cursor from './components/Cursor'
import SEO from './seo/SEO'

function App() {
  return (
    <div className="min-h-screen bg-black text-white cursor-custom snap-y overflow-y-auto">
      <SEO />
      <Cursor />
      
      {/* WebGL Light Rays Background */}
      <div className="fixed inset-0 z-0">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.8}
          lightSpread={1.5}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          pulsating={false}
          fadeDistance={1.2}
          saturation={0.8}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemaOportunidad from './components/ProblemaOportunidad'
import SolucionConecta from './components/SolucionConecta'
import ArquitecturaSection from './components/ArquitecturaSection'
import KiroWorkflow from './components/KiroWorkflow'
import Requerimientos from './components/Requerimientos'
import ImpactoNegocio from './components/ImpactoNegocio'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen">
      <Navbar active={activeSection} onNavigate={setActiveSection} />
      <Hero />
      <ProblemaOportunidad />
      <SolucionConecta />
      <ArquitecturaSection />
      <KiroWorkflow />
      <Requerimientos />
      <ImpactoNegocio />
      <Footer />
    </div>
  )
}

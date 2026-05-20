import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Achievements />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App

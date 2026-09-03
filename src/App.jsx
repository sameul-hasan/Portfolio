import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Workflows from './components/Workflows';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Workflows />
        <Leadership />
        <Achievements />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

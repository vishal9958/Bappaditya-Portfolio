import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Experience/>
      <Contact/>
      <ScrollToTop />
      

    </>
  );
}

export default App;

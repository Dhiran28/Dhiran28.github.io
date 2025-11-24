import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div className="bg-xr-dark min-h-screen text-zinc-100 selection:bg-xr-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
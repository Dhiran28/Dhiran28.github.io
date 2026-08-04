import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, FolderGit2, Mail, Sparkles } from 'lucide-react';
import { SPECIALIZATIONS } from '../constants';

const Hero: React.FC = () => {

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-cyan-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 mb-8 text-xr-accent text-xs sm:text-xs font-semibold tracking-wider uppercase shadow-sm"
        >
          <Sparkles size={14} className="text-xr-accent" />
          <span>AI SOFTWARE ENGINEER • XR ENGINEER • INTELLIGENT SYSTEMS</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          Building intelligent systems that bridge{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-xr-primary via-indigo-300 to-xr-accent">
            AI, XR & Connected Hardware.
          </span>
        </motion.h1>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal mb-10"
        >
          I build AI-powered software, immersive XR experiences, and intelligent embedded systems that solve real-world problems. My work combines machine learning, computer vision, robotics, and IoT to create practical, scalable solutions, from research prototypes to production-ready applications.
        </motion.p>

        {/* Expertise Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mb-12 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {SPECIALIZATIONS.map((spec) => (
            <span 
              key={spec}
              className="px-4 py-2 text-xs sm:text-sm bg-zinc-900/90 text-zinc-200 border border-white/10 rounded-full font-medium transition-all hover:border-white/20"
            >
              {spec}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="px-7 py-3.5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 cursor-pointer inline-flex items-center gap-2 shadow-xl shadow-white/10"
          >
            <FolderGit2 size={18} />
            View Projects
          </a>
          <a 
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="px-7 py-3.5 bg-zinc-900 border border-white/15 text-white font-bold rounded-full hover:bg-zinc-800 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <FileText size={18} />
            About Me
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="px-7 py-3.5 bg-gradient-to-r from-xr-primary to-indigo-600 text-white font-bold rounded-full hover:opacity-95 transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg shadow-indigo-500/20"
          >
            <Mail size={18} />
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
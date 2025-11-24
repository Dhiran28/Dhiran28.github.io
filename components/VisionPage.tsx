import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Contact from './Contact';
import { Linkedin } from 'lucide-react';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-xr-dark min-h-screen text-zinc-100 selection:bg-xr-primary selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <section className="relative py-20 overflow-hidden">
          {/* Dark Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
          
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                XR isn’t just entertainment. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  It’s the next medium.
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-xr-primary to-xr-accent mx-auto rounded-full mb-10"></div>
            </motion.div>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-white mb-4">The Future of Interaction</h3>
                <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                  I believe in the power of immersive technology for education, cultural preservation, and problem-solving.
                  My long-term goal is to develop tools and experiences that make these technologies accessible and meaningful 
                  for people everywhere — especially in underrepresented regions.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  We are moving from the age of information to the age of experience. The screens are disappearing, 
                  and the world itself is becoming the canvas.
                </p>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="flex flex-col md:flex-row gap-6 items-center justify-between bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-indigo-500/20 p-8 rounded-2xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Read more on LinkedIn</h3>
                  <p className="text-zinc-400">I regularly share my thoughts on the future of XR and Spatial Computing.</p>
                </div>
                <a 
                  href="https://linkedin.com/in/dhiran-karki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Linkedin size={20} className="mr-2" />
                  View Articles
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default VisionPage;
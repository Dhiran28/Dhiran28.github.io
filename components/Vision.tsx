import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            XR isn’t just entertainment. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              It’s the next medium.
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-10">
            I believe in the power of immersive technology for education, cultural preservation, and problem-solving.
            My long-term goal is to develop tools and experiences that make these technologies accessible and meaningful 
            for people everywhere — especially in underrepresented regions.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-xr-primary to-xr-accent mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
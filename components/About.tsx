import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
             {/* Abstract decoration or User Photo */}
             <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-800 to-zinc-700 relative group border border-white/5">
                <img 
                  src="https://picsum.photos/seed/dhiran/800/800" 
                  alt="Dhiran Karki" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-xr-dark via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <p className="text-white font-display font-bold text-xl">Dhiran Karki</p>
                    <p className="text-xr-accent text-sm">XR Developer & Engineer</p>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Bridging the gap between <br />
              <span className="text-xr-primary">physical and digital.</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                My journey began with a <strong className="text-white">Bachelor’s in Computer Engineering</strong>, laying a robust technical foundation in embedded systems and programming. This curiosity quickly evolved into a passion for immersive technologies.
              </p>
              <p>
                Beyond building, I have a passion for <strong className="text-white">mentorship</strong>. I have supervised final-year engineering students on cutting-edge projects like gesture-based AR control for video conferencing and voice-assisted AR travel companions.
              </p>
              <p>
                Currently, I’m advancing my expertise through the <strong className="text-white">Master of Computing (AI)</strong> program at Curtin University, Australia. 
                I combine my background in IoT, Robotics, and XR to create tools that are not just visually stunning, but functionally transformative.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 bg-zinc-800 rounded-lg border border-zinc-700">
                    <span className="block text-2xl font-bold text-white">52M+</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Filter Views</span>
                </div>
                <div className="px-4 py-2 bg-zinc-800 rounded-lg border border-zinc-700">
                    <span className="block text-2xl font-bold text-white">10+</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider">Major Projects</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
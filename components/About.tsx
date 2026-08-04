import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe, Trophy, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col"
          >
             {/* Profile Photo Card */}
             <div className="w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-900 to-zinc-800 relative group border border-white/10 shadow-2xl flex flex-col justify-end">
                <img 
                  src="/Images/Profile_image.png" 
                  alt="Dhiran Karki" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/dhiran/800/800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                <div className="relative z-10 p-6">
                    <p className="text-white font-display font-bold text-2xl">Dhiran Karki</p>
                    <p className="text-xr-accent text-sm font-medium mt-0.5">AI Software Engineer | XR & Intelligent Systems</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs text-zinc-300 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      <GraduationCap size={14} className="text-xr-primary" />
                      <span>Curtin University • Master of Computing (AI)</span>
                    </div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed font-normal">
              <p>
                I'm an engineer passionate about building intelligent systems where AI meets immersive technologies.
              </p>
              <p>
                My experience spans AI, XR, robotics, computer vision, and embedded systems across healthcare, education, conservation, and industrial applications. I enjoy designing end-to-end solutions that combine software, hardware, and user experience to solve practical problems.
              </p>
              <p>
                Currently pursuing a Master of Computing (Artificial Intelligence) at Curtin University while expanding my expertise in AI engineering and intelligent software systems.
              </p>
            </div>

            {/* HIGHLIGHTS CARDS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      <Rocket size={20} />
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-white">13+ Projects</span>
                      <span className="text-xs text-zinc-400 font-medium">Engineering & Applied AI</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-white">52M+ Views</span>
                      <span className="text-xs text-zinc-400 font-medium">AR Experience Audience</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-white">Meta Top 120</span>
                      <span className="text-xs text-zinc-400 font-medium">Global AR Creator</span>
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-white">M.Comp (AI)</span>
                      <span className="text-xs text-zinc-400 font-medium">Curtin University, AU</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Cpu, Bot, Glasses, Code, Terminal, Sparkles } from 'lucide-react';
import { CURRENTLY_BUILDING } from '../constants';

const icons = [Bot, Glasses, Cpu, Terminal, Code, Sparkles];

const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/80 border-y border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Hammer size={14} className="animate-bounce" />
            <span>Active Focus</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Currently Building
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Active exploration and research initiatives at the intersection of AI engineering, immersive XR, and edge intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_BUILDING.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-xr-accent transition-colors">
                  {item}
                </h3>
                <p className="text-xs text-zinc-500">
                  Active R&D and implementation phase
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;

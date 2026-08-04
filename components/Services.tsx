import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { WHAT_I_BUILD_CARDS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="what-i-build" className="py-24 bg-black relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight"
          >
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-xr-primary to-xr-accent">Build</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg font-normal">
            End-to-end engineering capabilities across artificial intelligence, immersive software, hardware integration, and scalable cloud systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_BUILD_CARDS.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-7 bg-zinc-900/60 border border-white/10 rounded-2xl hover:bg-zinc-900/90 hover:border-xr-primary/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-xr-primary group-hover:text-white transition-colors">
                    <CardIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                  <p className="text-xs text-zinc-500 mb-6 font-medium">{card.subtitle}</p>

                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-zinc-300 font-medium">
                        <CheckCircle2 size={16} className="text-xr-primary mr-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-xr-primary to-xr-accent">Together</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg mb-4 leading-relaxed max-w-2xl">
              I'm always interested in collaborating on research, AI engineering, XR development, robotics, and innovative software projects.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed max-w-2xl">
              Whether you're building intelligent applications, immersive experiences, or connected hardware solutions, I'd be happy to discuss ideas and collaborate.
            </p>
            
            <a 
              href="mailto:mail.dhirankarki@gmail.com"
              className="inline-flex items-center px-7 py-3.5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all shadow-lg hover:scale-105 group"
            >
              <Mail size={18} className="mr-2" />
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>

          <div className="lg:col-span-4 bg-zinc-900/60 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-sm uppercase tracking-wider text-zinc-400 font-semibold mb-6">
              Connect With Me
            </h3>
            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-xl bg-zinc-800/40 border border-white/5 hover:border-xr-accent/40 text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-xr-accent group-hover:bg-xr-primary group-hover:text-white transition-colors mr-3">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block text-sm">{link.platform}</span>
                    <span className="text-xs text-zinc-500">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dhiran Karki. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6 items-center">
            <p>AI Software Engineer | XR & Intelligent Systems Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

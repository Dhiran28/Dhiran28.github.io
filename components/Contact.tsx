import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to build the future?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              I’m always open to collaborations, research projects, and creative partnerships in XR and immersive tech.
            </p>
            <a 
              href="mailto:contact@dhiran28.com"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors group"
            >
              Let's Talk 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-xr-accent transition-colors"
              >
                <link.icon size={20} className="mr-3" />
                <span className="font-medium">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Dhiran Karki. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6 items-center">
            <p>Designed & Built with React + Tailwind</p>
            <Link to="/dashboard" className="hover:text-zinc-400 transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
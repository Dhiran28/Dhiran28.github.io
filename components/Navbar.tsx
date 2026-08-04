import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an external link (not starting with #), let it behave normally
    if (!href.startsWith('#')) return;

    e.preventDefault();
    setIsOpen(false);

    // If it's a route (starts with #/), update location
    if (href.startsWith('#/')) {
      window.location.hash = href;
      return;
    }

    // It's a scroll anchor (e.g., #about)
    const targetId = href.substring(1);
    const currentHash = window.location.hash;

    // Check if we are currently on a route (like #/vision or #/dashboard)
    const isRoute = currentHash.startsWith('#/');

    if (isRoute) {
      // If we are on a different page, go to home first
      window.location.hash = '/';
      
      // Wait for home to mount, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Optional: Update URL to show the section hash
          // window.history.replaceState(null, '', href);
        }
      }, 300); // Increased timeout slightly to ensure mounting
    } else {
      // Already on home, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      } else {
        // Fallback if element not found (e.g. slight mismatch), go to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-xr-dark/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                const isRoute = window.location.hash.startsWith('#/');
                if (isRoute) {
                   window.location.hash = '#/';
                } else {
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                   window.history.pushState(null, '', '#');
                }
              }}
              className="text-2xl font-display font-bold tracking-tighter text-white group-hover:text-xr-accent transition-colors"
            >
              DK<span className="text-xr-primary">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium transition-all duration-200 cursor-pointer text-zinc-400 hover:text-white hover:text-shadow-glow"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-xr-dark border-b border-white/10">
          <div className="px-4 pt-2 pb-8 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
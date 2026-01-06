import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];
  
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 96; // height of your fixed header, adjust if needed
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
};
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold gradient-text">
                Gulf Tea House
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Deansgate, Manchester
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => (
    <motion.a
      key={item.label}
      onClick={() => scrollToSection(item.label.toLowerCase())}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-700 dark:text-gray-300 hover:text-chai-600 dark:hover:text-chai-400 font-medium transition-colors relative group cursor-pointer"
    >
      {item.label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-premium-gold to-chai-500 group-hover:w-full transition-all duration-300" />
    </motion.a>
  ))}

           
            
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/gulf_mcr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-shadow"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            
            {/* Theme Toggle */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() =>{scrollToSection(item.label.toLowerCase());
                  
                    setIsOpen(false);}}
                    className="text-gray-700 dark:text-gray-300 hover:text-chai-600 dark:hover:text-chai-400 font-medium py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex items-center justify-between pt-4">
                  <motion.a
                    href="https://instagram.com/gulf_mcr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600"
                  >
                    <Instagram className="w-5 h-5" />
                    @gulf_mcr
                  </motion.a>
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-premium-gold to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Gulf Tea House</h2>
                <p className="text-gray-400 text-sm">Deansgate, Manchester</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Where tradition meets premium tea experience in the heart of Manchester.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/gulf_mcr", color: "hover:text-pink-500" },
                { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { icon: Twitter, href: "#", color: "hover:text-sky-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Gallery', 'Contact'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-premium-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-premium-gold rounded-full" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-premium-gold mt-1" />
                <span className="text-gray-400">283 Deansgate, Manchester M3 4EW</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-premium-gold" />
                <span className="text-gray-400">INSERT_PHONE_NUMBER_HERE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-premium-gold" />
                <span className="text-gray-400">INSERT_EMAIL_ADDRESS_HERE</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              {[
                ['Monday - Wednesday', '9:00 AM - 10:00 PM'],
                ['Thursday', 'Closed'],
                ['Friday - Sunday', '9:00 AM - 10:00 PM'],
                ['Holidays', 'Special Hours']
              ].map(([day, hours], index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-400">{day}</span>
                  <span className={`font-medium ${day === 'Thursday' ? 'text-red-400' : 'text-premium-gold'}`}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-center md:text-left">
            © {currentYear} Gulf Tea House. All rights reserved.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in Manchester</span>
          </motion.div>
          
          <div className="text-gray-500 text-sm">
            <a href="#" className="hover:text-premium-gold transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-premium-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

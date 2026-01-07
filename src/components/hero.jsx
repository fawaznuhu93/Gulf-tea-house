import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-28 scroll-mt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-chai-900/90" />
        
        {/* INSERT YOUR BACKGROUND IMAGE HERE */}
        {/* Replace the div below with your actual image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"
          style={{ backgroundImage: 'url(YOUR_BACKGROUND_IMAGE_URL_HERE)' }}
        />
        
        {/* Animated floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-32 h-32 border border-premium-gold/20 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3 backdrop-blur-sm"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-lg">
              4.5/5 <span className="text-gray-400">(21 Reviews)</span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold"
          >
            <span className="gradient-text">Gulf</span>
            <br />
            <span className="text-white">Tea House</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-amber-100 max-w-3xl mx-auto font-cormorant"
          >
            Where Manchester's finest teas meet premium experience
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu').scrollIntoView({behavior: 'smooth' })}
              className="btn-premium text-lg px-12 py-4"
            >
              Explore Our Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth' })}
              className="glass-effect text-white border-2 border-premium-gold/50 hover:border-premium-gold font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Book a Tasting
            </motion.button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12"
          >
            {[
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "283 Deansgate",
                desc: "Manchester M3 4EW"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Open Today",
                desc: "9:00 AM - 10:00 PM"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Experience",
                desc: "£1 - £10"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="premium-card text-center"
              >
                <div className="inline-block p-3 bg-gradient-to-br from-premium-gold/20 to-premium-gold/10 rounded-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-premium-gold animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;

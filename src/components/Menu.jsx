import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Star, Clock, Thermometer } from 'lucide-react';
import teaData from '../data/teas';

const Menu = () => {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['all', 'premium', 'chai', 'herbal', 'iced', 'matcha', 'special'];

  // Filster logic
  const filteredTeas = teaData
    .filter(tea => category === 'all' || tea.category === category)
    .filter(tea => tea.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'time') return a.brewTime - b.brewTime;
      return b.popularity - a.popularity;
    });

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-premium-gold/20 to-chai-500/20 rounded-full text-premium-gold font-semibold mb-6">
            CURATED SELECTION
          </span>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="gradient-text">Premium</span> Tea Menu
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Each tea is carefully sourced and crafted for an exceptional experience
          </p>
        </motion.div>

        {/* Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sticky top-20 z-30 glass-effect rounded-3xl p-6 mb-12 shadow-2xl backdrop-blur-lg"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    category === cat
                      ? 'bg-gradient-to-r from-premium-gold to-chai-600 text-white shadow-lg'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search teas..."
                  className="pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-premium-gold"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              
              <select
                className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-premium-gold"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="time">Brew Time</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Tea Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category + search + sortBy}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTeas.map((tea, index) => (
              <motion.div
                key={tea.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group premium-card"
              >
                {/* Tea Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  {/* INSERT YOUR TEA IMAGES HERE */}
                  {/* Replace the div below with your actual image */}
                  <div 
                    className="w-full h-full bg-gray-200"
                    style={{ backgroundImage: `url(${tea.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  
                  {/* Premium Badge */}
                  {tea.premium && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-premium-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      PREMIUM
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full">
                    <span className="font-bold text-lg">£{tea.price}</span>
                  </div>
                </div>

                {/* Tea Info */}
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{tea.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{tea.origin}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-bold">{tea.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{tea.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tea.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-chai-100 to-tea-100 dark:from-chai-900/30 dark:to-tea-900/30 text-chai-800 dark:text-chai-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-4 h-4" />
                      {tea.temperature}°C
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tea.brewTime} min
                    </div>
                    <div className="text-chai-600 font-semibold">
                      {tea.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-premium"
                    onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth' })}
                  >
                    Call to Book
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredTeas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">No teas found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setCategory('all');
                setSearch('');
              }}
              className="btn-premium"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;

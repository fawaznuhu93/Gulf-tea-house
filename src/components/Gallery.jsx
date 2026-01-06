import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import galleryImages from '../data/galleryImages';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(galleryImages[currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1]);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(galleryImages[currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1]);
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full text-pink-600 font-semibold mb-6">
            VISUAL JOURNEY
          </span>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Experience <span className="gradient-text">Through Lens</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Follow our Instagram for daily moments of tea perfection
          </p>
          <motion.a
            href="https://instagram.com/gulf_mcr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            @gulf_mcr
          </motion.a>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => openImage(image, index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                {/* INSERT YOUR GALLERY IMAGES HERE */}
                {/* Replace the div below with your actual image */}
                <div 
                  className="w-full h-full bg-gray-300 transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                    <p className="text-sm text-gray-300">{image.date}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-premium-gold rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeImage}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white hover:text-premium-gold transition-colors"
                onClick={closeImage}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-premium-gold transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-premium-gold transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* INSERT YOUR SELECTED IMAGE HERE */}
                {/* Replace the div below with your actual image */}
                <div 
                  className="w-full h-[70vh] rounded-2xl"
                  style={{ backgroundImage: `url(${selectedImage.url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-premium-gold">{selectedImage.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{currentIndex + 1} of {galleryImages.length}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

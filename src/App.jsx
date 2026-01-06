import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Sample images for slideshow (from your galleries)
  const slideshowImages = [
    '/photos/street/1.jpg',
    '/photos/blackandwhite/1.jpg',
    '/photos/documentary/1.jpg',
    '/photos/portrait/1.jpg',
    '/photos/colors/1.jpg',
    '/photos/abstract/1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-white relative">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slideshowImages[currentImage]}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Menu Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 border-b border-black bg-white/90 backdrop-blur-sm">
        <div className="flex justify-between items-center px-8 py-6">
          <Link href="/" className="text-xl font-light tracking-wider">
            NHNURSHED
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm tracking-widest hover:opacity-50 transition"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <nav className="text-center space-y-8">
              <Link 
                href="/galleries"
                className="block text-6xl md:text-8xl font-light hover:italic transition"
                onClick={() => setMenuOpen(false)}
              >
                Galleries
              </Link>
              <Link 
                href="/prints"
                className="block text-6xl md:text-8xl font-light hover:italic transition"
                onClick={() => setMenuOpen(false)}
              >
                Prints
              </Link>
              <Link 
                href="/about"
                className="block text-6xl md:text-8xl font-light hover:italic transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact"
                className="block text-6xl md:text-8xl font-light hover:italic transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Statement */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-light mb-4 tracking-tight"
          >
            NUR-E HABIB
            <br />
            NURSHED
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl font-light tracking-wide mb-8"
          >
            DOCUMENTARY PHOTOGRAPHER
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-sm tracking-widest text-gray-600"
          >
            DHAKA, BANGLADESH
          </motion.p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end text-xs tracking-wider">
        <div>
          <p>EST. 2018</p>
          <p className="text-gray-600">VISUAL STORYTELLER</p>
        </div>
        <div className="text-right">
          <p>SCROLL TO EXPLORE</p>
          <p className="text-gray-600">↓</p>
        </div>
      </div>
    </main>
  );
}
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const allSlideshowImages = [
  '/photos/street/1.jpg', '/photos/street/2.jpg', '/photos/street/3.jpg',
  '/photos/street/4.jpg', '/photos/street/5.jpg',
  '/photos/blackandwhite/1.jpg', '/photos/blackandwhite/2.jpg', '/photos/blackandwhite/3.jpg',
  '/photos/blackandwhite/4.jpg', '/photos/blackandwhite/5.jpg',
  '/photos/documentary/1.jpg', '/photos/documentary/2.jpg', '/photos/documentary/3.jpg',
  '/photos/portrait/1.jpg', '/photos/portrait/2.jpg', '/photos/portrait/3.jpg',
  '/photos/colors/1.jpg', '/photos/colors/2.jpg', '/photos/colors/3.jpg',
  '/photos/abstract/1.jpg', '/photos/abstract/2.jpg', '/photos/abstract/3.jpg',
  '/photos/series1/1.jpg', '/photos/series2/1.jpg', '/photos/series3/1.jpg',
  '/photos/series4/1.jpg', '/photos/series5/1.jpg',
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Home() {
  const [images] = useState(() => shuffleArray(allSlideshowImages));
  const [currentImage, setCurrentImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const menuItems = [
    { label: 'Galleries', href: '/galleries' },
    { label: 'Prints', href: '/prints' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <main className="h-screen w-screen overflow-hidden bg-white relative">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            NHNURSHED
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition"
          >
            {menuOpen ? 'CLOSE  ✕' : 'MENU'}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col"
          >
            {/* Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 pt-20">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-6xl md:text-8xl font-light text-black hover:italic transition-all duration-200 text-center py-2 px-6"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Footer — pinned to bottom */}
            <div className="px-10 py-6 flex justify-between items-center">
              <div className="flex gap-8 text-xs tracking-widest text-gray-600">
                <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                  INSTAGRAM
                </a>
                <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                  FACEBOOK
                </a>
                <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                  FLICKR
                </a>
              </div>
              <p className="text-xs tracking-widest text-gray-600">DHAKA, BANGLADESH</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Statement */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-8 pointer-events-none">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs tracking-widest text-gray-600 mb-8"
          >
            DOCUMENTARY · STREET · VISUAL STORYTELLING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none text-black"
          >
            NUR-E HABIB
            <br />
            <span className="italic">NURSHED</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm tracking-widest text-gray-600 mt-8"
          >
            PHOTOGRAPHER · DHAKA, BANGLADESH
          </motion.p>
        </div>
      </div>

      {/* Slideshow Dots — bottom center */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2 pointer-events-auto">
        {images.slice(0, 9).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-px transition-all duration-500 ${
              currentImage % 9 === index ? 'w-8 bg-black' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>

    </main>
  );
}
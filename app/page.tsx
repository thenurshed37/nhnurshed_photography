'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center px-10 py-8">
          <Link href="/" className="text-xl tracking-widest text-black font-light hover:opacity-40 transition">
            NHNURSHED
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl tracking-widest text-black font-light hover:opacity-40 transition"
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

            <div className="px-10 py-6 flex justify-between items-center">
              <div className="flex gap-8 text-xs tracking-widest text-gray-600">
                <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">INSTAGRAM</a>
                <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FACEBOOK</a>
                <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FLICKR</a>
              </div>
              <p className="text-xs tracking-widest text-gray-600">DHAKA, BANGLADESH</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Identity */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs tracking-widest text-gray-500 mb-8"
          >
            DOCUMENTARY · VISUAL STORYTELLING
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
            PHOTOGRAPHER · BANGLADESH
          </motion.p>
        </div>
      </div>

    </main>
  );
}
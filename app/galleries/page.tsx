'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const menuItems = [
  { label: 'Galleries', href: '/galleries' },
  { label: 'Prints', href: '/prints' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function GalleriesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const galleries = [
    { name: 'Abstract', slug: 'abstract' },
    { name: 'Black & White', slug: 'blackandwhite' },
    { name: 'Colors', slug: 'colors' },
    { name: 'Documentary', slug: 'documentary' },
    { name: 'Portrait', slug: 'portrait' },
    { name: 'Street', slug: 'street' },
  ];

  const series = [
    { name: 'Jatra', slug: 'series1', description: 'A journey shaped by desires, dreams, and the pursuit of something greater.' },
    { name: 'The Vanished Mirage', slug: 'series2', description: 'A pursuit through fog, mountains, and moonlight — chasing what was never truly lost.' },
    { name: 'Not Me, Neither You', slug: 'series3', description: 'A conceptual exploration of contradiction, coexistence, and invisible distance.' },
    { name: 'Reality of Dreams', slug: 'series4', description: 'Drifting through the fragile space between imagination and existence.' },
    { name: 'Where Is My Home?', slug: 'series5', description: 'The quiet aftermath of displacement along the coastline of Matarbari.' },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="text-xl tracking-widest text-black font-light hover:opacity-40 transition">
            NHNURSHED
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-xl tracking-widest text-black font-light hover:opacity-40 transition"
          >
            MENU
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
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex justify-between items-center px-10 py-6">
              <Link href="/" className="text-xl tracking-widest text-black font-light hover:opacity-40 transition">
                NHNURSHED
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl tracking-widest text-black font-light hover:opacity-40 transition"
              >
                CLOSE  ✕
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-1">
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

      {/* Galleries Title */}
      <section className="px-10 pt-12 pb-16">
        <h1 className="text-7xl md:text-9xl font-light text-black mb-3">GALLERIES</h1>
        <p className="text-sm tracking-widest text-gray-500">SINGLE PHOTOGRAPH COLLECTIONS</p>
      </section>

      {/* Galleries Grid */}
      <section className="px-16 pb-32">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {galleries.map((gallery) => (
            <Link key={gallery.slug} href={`/gallery/${gallery.slug}`} className="group">
              <div className="bg-gray-50 p-10 md:p-14 flex items-center justify-center mb-6" style={{ minHeight: '360px' }}>
                <img
                  src={`/photos/${gallery.slug}/1.jpg`}
                  alt={gallery.name}
                  className="max-w-full max-h-72 object-contain group-hover:opacity-85 transition duration-700"
                />
              </div>
              <h3 className="text-lg font-light text-black tracking-wide group-hover:italic transition-all">
                {gallery.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Series Title */}
      <section className="px-10 pt-8 pb-16">
        <h2 className="text-7xl md:text-9xl font-light text-black mb-3">SERIES</h2>
        <p className="text-sm tracking-widest text-gray-500">LONG-FORM VISUAL NARRATIVES</p>
      </section>

      {/* Series Grid — links to /series/[slug] */}
      <section className="px-16 pb-40">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {series.map((item) => (
            <Link key={item.slug} href={`/series/${item.slug}`} className="group">
              <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center mb-6" style={{ minHeight: '320px' }}>
                <img
                  src={`/photos/${item.slug}/1.jpg`}
                  alt={item.name}
                  className="max-w-full max-h-64 object-contain group-hover:opacity-85 transition duration-700"
                />
              </div>
              <h3 className="text-lg font-light text-black tracking-wide mb-2 group-hover:italic transition-all">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 font-light">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 flex justify-between items-center text-xs tracking-widest text-gray-400">
        <p>© 2026 NHNURSHED</p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">INSTAGRAM</a>
          <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FACEBOOK</a>
          <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FLICKR</a>
        </div>
      </footer>
    </main>
  );
}
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GalleriesPage() {
  const galleries = [
    { name: 'Abstract', slug: 'abstract' },
    { name: 'Black & White', slug: 'blackandwhite' },
    { name: 'Colors', slug: 'colors' },
    { name: 'Documentary', slug: 'documentary' },
    { name: 'Portrait', slug: 'portrait' },
    { name: 'Street', slug: 'street' },
  ];

  const series = [
    { name: 'Monsoon Series', slug: 'series1', description: 'A visual journey through monsoon Bangladesh' },
    { name: 'Old Dhaka Nights', slug: 'series2', description: 'The light and life after dark in Old Dhaka' },
    { name: 'Silent Moments', slug: 'series3', description: 'Quiet human moments in a loud world' },
    { name: 'Urban Chaos', slug: 'series4', description: 'The rhythm of city life across Bangladesh' },
    { name: 'Human Connection', slug: 'series5', description: 'Bonds between people across communities' },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="text-sm tracking-widest text-black font-light hover:opacity-40 transition">
            NHNURSHED
          </Link>
          <Link href="/" className="text-sm tracking-widest text-black font-light hover:opacity-40 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Galleries Title */}
      <section className="px-10 pt-12 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-7xl md:text-9xl font-light text-black mb-3"
        >
          GALLERIES
        </motion.h1>
        <p className="text-sm tracking-widest text-gray-500">SINGLE PHOTOGRAPH COLLECTIONS</p>
      </section>

      {/* Galleries — wall-like spacing */}
      <section className="px-16 pb-32">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {galleries.map((gallery, index) => (
            <Link key={gallery.slug} href={`/gallery/${gallery.slug}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Photo with wall breathing room */}
                <div className="bg-gray-50 p-10 md:p-14 flex items-center justify-center mb-6"
                  style={{ minHeight: '360px' }}>
                  <img
                    src={`/photos/${gallery.slug}/1.jpg`}
                    alt={gallery.name}
                    className="max-w-full max-h-72 object-contain group-hover:opacity-85 transition duration-700"
                  />
                </div>
                <h3 className="text-lg font-light text-black tracking-wide group-hover:italic transition-all">
                  {gallery.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Series Title */}
      <section className="px-10 pt-8 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-7xl md:text-9xl font-light text-black mb-3"
        >
          SERIES
        </motion.h2>
        <p className="text-sm tracking-widest text-gray-500">LONG-FORM VISUAL NARRATIVES</p>
      </section>

      {/* Series — wall-like spacing */}
      <section className="px-16 pb-40">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {series.map((item, index) => (
            <Link key={item.slug} href={`/gallery/${item.slug}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Landscape ratio with wall padding */}
                <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center mb-6"
                  style={{ minHeight: '320px' }}>
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
              </motion.div>
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
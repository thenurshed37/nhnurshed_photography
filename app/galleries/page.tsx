'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GalleriesPage() {
  const galleries = [
    { name: 'ABSTRACT', slug: 'abstract', count: 25 },
    { name: 'BLACK & WHITE', slug: 'blackandwhite', count: 30 },
    { name: 'COLORS', slug: 'colors', count: 28 },
    { name: 'DOCUMENTARY', slug: 'documentary', count: 32 },
    { name: 'PORTRAIT', slug: 'portrait', count: 24 },
    { name: 'STREET', slug: 'street', count: 35 },
  ];

  const series = [
    { name: 'MONSOON SERIES', slug: 'series1', count: 12 },
    { name: 'OLD DHAKA NIGHTS', slug: 'series2', count: 15 },
    { name: 'SILENT MOMENTS', slug: 'series3', count: 10 },
    { name: 'URBAN CHAOS', slug: 'series4', count: 14 },
    { name: 'HUMAN CONNECTION', slug: 'series5', count: 13 },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="border-b border-black">
        <div className="flex justify-between items-center px-8 py-6">
          <Link href="/" className="text-xl font-light tracking-wider hover:italic transition">
            NHNURSHED
          </Link>
          <Link href="/" className="text-sm tracking-widest hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Galleries Section */}
      <section className="px-8 py-20">
        <h1 className="text-6xl md:text-8xl font-light mb-4">GALLERIES</h1>
        <p className="text-sm tracking-wider text-gray-600 mb-16">SINGLE PHOTOGRAPH COLLECTIONS</p>
        
        <div className="grid md:grid-cols-3 gap-px bg-black border border-black">
          {galleries.map((gallery, index) => (
            <Link
              key={gallery.slug}
              href={`/gallery/${gallery.slug}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`/photos/${gallery.slug}/1.jpg`}
                    alt={gallery.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-6 border-t border-black">
                  <h3 className="text-2xl font-light mb-2">{gallery.name}</h3>
                  <p className="text-xs tracking-wider text-gray-600">{gallery.count} PHOTOGRAPHS</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Series Section */}
      <section className="px-8 py-20 bg-gray-50">
        <h2 className="text-6xl md:text-8xl font-light mb-4">SERIES</h2>
        <p className="text-sm tracking-wider text-gray-600 mb-16">LONG-FORM VISUAL NARRATIVES</p>
        
        <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
          {series.map((item, index) => (
            <Link
              key={item.slug}
              href={`/gallery/${item.slug}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`/photos/${item.slug}/1.jpg`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-6 border-t border-black">
                  <h3 className="text-2xl font-light mb-2">{item.name}</h3>
                  <p className="text-xs tracking-wider text-gray-600">{item.count} PHOTOGRAPHS</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const galleryNames: Record<string, string> = {
  abstract: 'Abstract',
  blackandwhite: 'Black & White',
  colors: 'Colors',
  documentary: 'Documentary',
  portrait: 'Portrait',
  street: 'Street',
  series1: 'Monsoon Series',
  series2: 'Old Dhaka Nights',
  series3: 'Silent Moments',
  series4: 'Urban Chaos',
  series5: 'Human Connection',
};

const menuItems = [
  { label: 'Galleries', href: '/galleries' },
  { label: 'Prints', href: '/prints' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function GalleryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageList: string[] = [];
      let i = 1;
      while (i <= 100) {
        try {
          const res = await fetch(`/photos/${slug}/${i}.jpg`);
          if (res.ok) { imageList.push(`/photos/${slug}/${i}.jpg`); i++; }
          else break;
        } catch { break; }
      }
      setImages(imageList);
      setLoaded(true);
    };
    loadImages();
  }, [slug]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowRight') setSelectedImage(p => p !== null ? Math.min(p + 1, images.length - 1) : null);
      if (e.key === 'ArrowLeft') setSelectedImage(p => p !== null ? Math.max(p - 1, 0) : null);
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage, images.length]);

  useEffect(() => {
    if (selectedImage !== null || menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage, menuOpen]);

  const title = galleryNames[slug] || slug;

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/galleries" className="text-xl tracking-widest text-black font-light hover:opacity-40 transition">
            ← GALLERIES
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

      {/* Title */}
      <div className="px-10 pt-10 pb-20">
        <h1 className="text-6xl md:text-8xl font-light text-black">{title}</h1>
        {loaded && (
          <p className="text-sm text-gray-500 mt-3 tracking-widest">
            {images.length} PHOTOGRAPHS
          </p>
        )}
      </div>

      {/* Photo Grid */}
      {loaded && (
        <div className="px-16 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer"
              >
                <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center mb-6" style={{ minHeight: '400px' }}>
                  <img
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className="max-w-full max-h-80 object-contain group-hover:opacity-85 transition duration-500"
                  />
                </div>
                <p className="text-sm font-light text-black tracking-wide group-hover:italic transition-all">
                  {title}, {new Date().getFullYear()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex justify-between items-center px-10 py-6 flex-shrink-0">
              <p className="text-sm font-light text-black tracking-wide">{title}</p>
              <div className="flex items-center gap-10">
                <p className="text-sm text-gray-500 tracking-widest">
                  {selectedImage + 1} / {images.length}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xl tracking-widest text-black hover:opacity-40 transition"
                >
                  CLOSE  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center px-24 py-8 relative">
              {selectedImage > 0 && (
                <button
                  className="absolute left-10 text-black text-xl hover:opacity-40 transition z-10"
                  onClick={() => setSelectedImage(selectedImage - 1)}
                >
                  ←
                </button>
              )}

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={images[selectedImage]}
                alt={`${title} ${selectedImage + 1}`}
                className="max-w-full object-contain"
                style={{ maxHeight: 'calc(100vh - 180px)' }}
              />

              {selectedImage < images.length - 1 && (
                <button
                  className="absolute right-10 text-black text-xl hover:opacity-40 transition z-10"
                  onClick={() => setSelectedImage(selectedImage + 1)}
                >
                  →
                </button>
              )}
            </div>

            <div className="px-10 py-6 flex-shrink-0">
              <p className="text-xs tracking-widest text-gray-400 text-center">
                ← → ARROW KEYS TO NAVIGATE · ESC TO CLOSE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
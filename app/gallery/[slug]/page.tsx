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

export default function GalleryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageList: string[] = [];
      let i = 1;
      while (i <= 100) {
        try {
          const response = await fetch(`/photos/${slug}/${i}.jpg`);
          if (response.ok) {
            imageList.push(`/photos/${slug}/${i}.jpg`);
            i++;
          } else break;
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
      if (e.key === 'ArrowRight') setSelectedImage((p) => p !== null ? Math.min(p + 1, images.length - 1) : null);
      if (e.key === 'ArrowLeft') setSelectedImage((p) => p !== null ? Math.max(p - 1, 0) : null);
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage, images.length]);

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const title = galleryNames[slug] || slug;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/galleries" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            ← GALLERIES
          </Link>
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Gallery Title */}
      <div className="px-10 pt-12 pb-16">
        <h1 className="text-6xl md:text-8xl font-light text-black">{title}</h1>
      </div>

      {/* Photo Grid — no borders, generous space */}
      {loaded && (
        <div className="px-10 pb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <p className="text-sm font-light text-gray-700 tracking-wide group-hover:italic transition-all">
                  {title}, {new Date().getFullYear()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox — photo on a wall feeling */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
            onClick={() => setSelectedImage(null)}
          >
            {/* Lightbox Nav */}
            <div className="flex justify-between items-center px-10 py-6">
              <p className="text-sm font-light text-black tracking-wide">
                {title}
              </p>
              <div className="flex items-center gap-10">
                <p className="text-sm text-gray-400 tracking-widest">
                  {selectedImage + 1} / {images.length}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-sm tracking-widest text-gray-800 hover:opacity-50 transition"
                >
                  CLOSE  ✕
                </button>
              </div>
            </div>

            {/* Photo — on a wall */}
            <div
              className="flex-1 flex items-center justify-center px-20 py-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev */}
              {selectedImage > 0 && (
                <button
                  className="absolute left-10 text-gray-400 text-2xl hover:text-black transition z-10"
                  onClick={() => setSelectedImage(selectedImage - 1)}
                >
                  ←
                </button>
              )}

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={images[selectedImage]}
                alt={`${title} ${selectedImage + 1}`}
                className="max-h-full max-w-full object-contain shadow-sm"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
              />

              {/* Next */}
              {selectedImage < images.length - 1 && (
                <button
                  className="absolute right-10 text-gray-400 text-2xl hover:text-black transition z-10"
                  onClick={() => setSelectedImage(selectedImage + 1)}
                >
                  →
                </button>
              )}
            </div>

            {/* Lightbox Footer */}
            <div className="px-10 py-6">
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
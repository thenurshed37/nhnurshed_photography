'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Photo data with titles and pricing
const photoData: Record<string, any> = {
  abstract: { title: 'ABSTRACT', priceRange: '3,000 - 8,000 BDT' },
  blackandwhite: { title: 'BLACK & WHITE', priceRange: '4,000 - 10,000 BDT' },
  colors: { title: 'COLORS', priceRange: '3,500 - 9,000 BDT' },
  documentary: { title: 'DOCUMENTARY', priceRange: '5,000 - 10,000 BDT' },
  portrait: { title: 'PORTRAIT', priceRange: '4,500 - 10,000 BDT' },
  street: { title: 'STREET', priceRange: '4,000 - 10,000 BDT' },
  series1: { title: 'MONSOON SERIES', priceRange: '6,000 - 10,000 BDT' },
  series2: { title: 'OLD DHAKA NIGHTS', priceRange: '6,000 - 10,000 BDT' },
  series3: { title: 'SILENT MOMENTS', priceRange: '5,000 - 10,000 BDT' },
  series4: { title: 'URBAN CHAOS', priceRange: '6,000 - 10,000 BDT' },
  series5: { title: 'HUMAN CONNECTION', priceRange: '6,000 - 10,000 BDT' },
};

export default function GalleryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
          } else {
            break;
          }
        } catch {
          break;
        }
      }
      setImages(imageList);
    };
    
    loadImages();
  }, [slug]);

  const galleryInfo = photoData[slug] || { title: slug.toUpperCase(), priceRange: '3,000 - 10,000 BDT' };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="border-b border-black sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-8 py-6">
          <Link href="/galleries" className="text-xl font-light tracking-wider hover:italic transition">
            ← GALLERIES
          </Link>
          <Link href="/" className="text-sm tracking-widest hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Gallery Header */}
      <div className="px-8 py-16 border-b border-black">
        <h1 className="text-6xl md:text-8xl font-light mb-4">{galleryInfo.title}</h1>
        <div className="flex flex-wrap gap-8 text-sm tracking-wider text-gray-600">
          <p>{images.length} PHOTOGRAPHS</p>
          <p>PRINTS AVAILABLE: {galleryInfo.priceRange}</p>
        </div>
      </div>

      {/* Image Grid with Titles */}
      <div className="px-8 py-12">
        <div className="grid md:grid-cols-3 gap-px bg-black border border-black">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image}
                  alt={`${galleryInfo.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-4 border-t border-black">
                <p className="text-xs tracking-wider font-light">
                  {galleryInfo.title} NO. {String(index + 1).padStart(2, '0')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with Print Info */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-white z-50 flex"
          onClick={() => setSelectedImage(null)}
        >
          {/* Image Side */}
          <div className="w-2/3 flex items-center justify-center p-8">
            <img 
              src={images[selectedImage]}
              alt="Full size"
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Info Side */}
          <div className="w-1/3 border-l border-black p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              className="text-2xl hover:opacity-50 mb-8"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-light mb-2">
              {galleryInfo.title}
            </h2>
            <p className="text-sm tracking-wider text-gray-600 mb-8">
              NO. {String(selectedImage + 1).padStart(2, '0')}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light mb-4 border-b border-black pb-2">PRINT OPTIONS</h3>
                
                <div className="space-y-4">
                  <div className="border border-black p-4">
                    <p className="font-light mb-1">12 × 16 INCH</p>
                    <p className="text-xs text-gray-600 mb-2">Matte or Glossy Finish</p>
                    <p className="text-sm">5,000 BDT ($70 USD)</p>
                  </div>

                  <div className="border border-black p-4">
                    <p className="font-light mb-1">16 × 24 INCH</p>
                    <p className="text-xs text-gray-600 mb-2">Premium Matte or Glossy</p>
                    <p className="text-sm">10,000 BDT ($130 USD)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4 border-b border-black pb-2">CUSTOM SIZES</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Other sizes and framing options available upon request.
                </p>
              </div>

              <a
                href={`mailto:nhnurshed@gmail.com?subject=Print Inquiry: ${galleryInfo.title} No. ${selectedImage + 1}`}
                className="block w-full text-center border-2 border-black px-6 py-4 hover:bg-black hover:text-white transition text-sm tracking-widest"
              >
                CONTACT FOR PRINT
              </a>

              <p className="text-xs text-gray-600 text-center">
                All prints are hand-signed and numbered
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
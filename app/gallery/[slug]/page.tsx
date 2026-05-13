'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Auto-detect how many images are in the folder
    const loadImages = async () => {
      const imageList: string[] = [];
      let i = 1;
      
      // Try to load images until we hit a 404
      while (i <= 100) { // Max 100 images per gallery
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

  const galleryNames: Record<string, string> = {
    abstract: 'Abstract',
    blackandwhite: 'Black & White',
    colors: 'Colors',
    documentary: 'Documentary',
    portrait: 'Portrait',
    street: 'Street',
    series1: 'Series 1',
    series2: 'Series 2',
    series3: 'Series 3',
    series4: 'Series 4',
    series5: 'Series 5',
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wider">nhnurshed</a>
          <a href="/" className="text-sm hover:text-gray-400 transition">← Back to Home</a>
        </div>
      </nav>

      {/* Gallery Title */}
      <div className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-4">
          {galleryNames[slug] || slug}
        </h1>
        <p className="text-gray-500">{images.length} photographs</p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(image)}
              className="aspect-square bg-gray-900 overflow-hidden cursor-pointer group"
            >
              <img 
                src={image}
                alt={`${galleryNames[slug]} ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-400"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage}
            alt="Full size"
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
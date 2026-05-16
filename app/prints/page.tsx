'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const prints = [
  { id: 1,  title: 'Untitled I',     category: 'Street',       price12x16: 5000,  price16x24: 10000 },
  { id: 2,  title: 'Untitled II',    category: 'Documentary',  price12x16: 5000,  price16x24: 10000 },
  { id: 3,  title: 'Untitled III',   category: 'Black & White',price12x16: 5500,  price16x24: 10000 },
  { id: 4,  title: 'Untitled IV',    category: 'Street',       price12x16: 5000,  price16x24: 9500  },
  { id: 5,  title: 'Untitled V',     category: 'Portrait',     price12x16: 6000,  price16x24: 10000 },
  { id: 6,  title: 'Untitled VI',    category: 'Documentary',  price12x16: 5500,  price16x24: 10000 },
  { id: 7,  title: 'Untitled VII',   category: 'Abstract',     price12x16: 4500,  price16x24: 9000  },
  { id: 8,  title: 'Untitled VIII',  category: 'Black & White',price12x16: 6000,  price16x24: 10000 },
  { id: 9,  title: 'Untitled IX',    category: 'Street',       price12x16: 5000,  price16x24: 9500  },
  { id: 10, title: 'Untitled X',     category: 'Colors',       price12x16: 5000,  price16x24: 10000 },
  { id: 11, title: 'Untitled XI',    category: 'Documentary',  price12x16: 5500,  price16x24: 10000 },
  { id: 12, title: 'Untitled XII',   category: 'Portrait',     price12x16: 6000,  price16x24: 10000 },
  { id: 13, title: 'Untitled XIII',  category: 'Street',       price12x16: 5000,  price16x24: 9000  },
  { id: 14, title: 'Untitled XIV',   category: 'Abstract',     price12x16: 4500,  price16x24: 9000  },
  { id: 15, title: 'Untitled XV',    category: 'Black & White',price12x16: 6000,  price16x24: 10000 },
  { id: 16, title: 'Untitled XVI',   category: 'Colors',       price12x16: 5000,  price16x24: 9500  },
  { id: 17, title: 'Untitled XVII',  category: 'Documentary',  price12x16: 5500,  price16x24: 10000 },
  { id: 18, title: 'Untitled XVIII', category: 'Street',       price12x16: 5000,  price16x24: 9500  },
  { id: 19, title: 'Untitled XIX',   category: 'Portrait',     price12x16: 6000,  price16x24: 10000 },
  { id: 20, title: 'Untitled XX',    category: 'Black & White',price12x16: 6000,  price16x24: 10000 },
];

type PrintSize = '12x16' | '16x24';
type Finish = 'Matte' | 'Glossy';

export default function PrintsPage() {
  const [selected, setSelected] = useState<typeof prints[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<PrintSize>('12x16');
  const [selectedFinish, setSelectedFinish] = useState<Finish>('Matte');

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const getPrice = (print: typeof prints[0]) =>
    selectedSize === '12x16' ? print.price12x16 : print.price16x24;

  const getUSD = (bdt: number) => Math.round(bdt / 72);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            NHNURSHED
          </Link>
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="px-10 pt-16 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-7xl md:text-9xl font-light text-black mb-4"
        >
          PRINTS
        </motion.h1>
        <p className="text-sm text-gray-600 font-light max-w-lg leading-relaxed">
          All prints are hand-signed and numbered. Select a photograph to see
          sizing, pricing, and ordering details.
        </p>
      </section>

      {/* Prints Grid — no borders, generous space */}
      <section className="px-10 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {prints.map((print, index) => (
            <motion.div
              key={print.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => { setSelected(print); setSelectedSize('12x16'); setSelectedFinish('Matte'); }}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-gray-100 mb-5 relative">
                <img
                  src={`/photos/prints/${print.id}.jpg`}
                  alt={print.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500 flex items-end justify-start p-4">
                  <span className="text-white text-xs tracking-widest opacity-0 group-hover:opacity-100 transition">
                    VIEW DETAILS →
                  </span>
                </div>
              </div>
              <h3 className="text-base font-light text-black mb-1 group-hover:italic transition-all">
                {print.title}
              </h3>
              <p className="text-sm text-gray-500">
                from {print.price12x16.toLocaleString()} BDT
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Print Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col md:flex-row overflow-y-auto"
          >
            {/* Image — with wall feeling */}
            <div
              className="md:w-3/5 bg-gray-50 flex items-center justify-center"
              style={{ minHeight: '50vh' }}
            >
              <div className="p-16 w-full h-full flex items-center justify-center">
                <img
                  src={`/photos/prints/${selected.id}.jpg`}
                  alt={selected.title}
                  className="max-h-full max-w-full object-contain shadow-sm"
                  style={{ maxHeight: 'calc(100vh - 120px)' }}
                />
              </div>
            </div>

            {/* Details Side */}
            <div className="md:w-2/5 px-12 py-12 overflow-y-auto flex flex-col">
              {/* Close */}
              <div className="flex justify-between items-center mb-12">
                <p className="text-xs tracking-widest text-gray-400">
                  PRINT {String(selected.id).padStart(2, '0')} OF 20
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-sm tracking-widest text-gray-800 hover:opacity-50 transition"
                >
                  CLOSE  ✕
                </button>
              </div>

              {/* Title */}
              <h2 className="text-4xl font-light text-black mb-2">{selected.title}</h2>
              <p className="text-sm tracking-widest text-gray-500 mb-12">
                {selected.category.toUpperCase()} · ARCHIVAL PRINT
              </p>

              {/* Size */}
              <div className="mb-8">
                <p className="text-xs tracking-widest text-gray-400 mb-4">SELECT SIZE</p>
                <div className="grid grid-cols-2 gap-3">
                  {(['12x16', '16x24'] as PrintSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-4 px-4 text-left transition ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                    >
                      <p className="text-sm font-light mb-1">
                        {size === '12x16' ? '12 × 16 inch' : '16 × 24 inch'}
                      </p>
                      <p className={`text-xs ${selectedSize === size ? 'text-gray-400' : 'text-gray-500'}`}>
                        {size === '12x16' ? '30 × 40 cm' : '40 × 60 cm'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div className="mb-10">
                <p className="text-xs tracking-widest text-gray-400 mb-4">SELECT FINISH</p>
                <div className="grid grid-cols-2 gap-3">
                  {(['Matte', 'Glossy'] as Finish[]).map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setSelectedFinish(finish)}
                      className={`py-4 text-sm font-light transition ${
                        selectedFinish === finish
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-black hover:bg-gray-200'
                      }`}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="py-6 mb-8 bg-gray-50 px-6">
                <p className="text-xs tracking-widest text-gray-400 mb-2">PRICE</p>
                <p className="text-4xl font-light text-black">
                  {getPrice(selected).toLocaleString()} BDT
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  ≈ ${getUSD(getPrice(selected))} USD
                </p>
              </div>

              {/* Contact Button */}
              <a
                href={`mailto:nhnurshed@gmail.com?subject=Print Order: ${selected.title}&body=Hi Nurshed,%0D%0A%0D%0AI would like to order a print:%0D%0A%0D%0ATitle: ${selected.title}%0D%0ASize: ${selectedSize === '12x16' ? '12x16 inch' : '16x24 inch'}%0D%0AFinish: ${selectedFinish}%0D%0APrice: ${getPrice(selected).toLocaleString()} BDT%0D%0A%0D%0AName:%0D%0APhone:%0D%0ADelivery Address:%0D%0A%0D%0AThank you!`}
                className="block w-full text-center bg-black text-white px-6 py-5 hover:bg-gray-800 transition text-sm tracking-widest mb-4"
              >
                CONTACT TO ORDER
              </a>

              <p className="text-xs text-gray-400 text-center mb-10">
                After contacting, you will receive payment and delivery details.
                Prints are shipped within 7–10 business days.
              </p>

              {/* Print Details */}
              <div className="space-y-3 text-xs text-gray-500 pt-6 mt-auto">
                <div className="flex justify-between"><span>PAPER</span><span>Premium Archival 280gsm</span></div>
                <div className="flex justify-between"><span>INK</span><span>Pigment-based archival</span></div>
                <div className="flex justify-between"><span>EDITION</span><span>Limited to 50</span></div>
                <div className="flex justify-between"><span>SIGNED</span><span>Hand-signed by artist</span></div>
                <div className="flex justify-between"><span>DELIVERY</span><span>Bangladesh only</span></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="px-10 py-8 flex justify-between items-center text-xs tracking-widest text-gray-400">
        <p>© 2026 NHNURSHED · ALL PRINTS HAND-SIGNED</p>
        <Link href="/contact" className="hover:text-black transition">CONTACT ↗</Link>
      </footer>
    </main>
  );
}
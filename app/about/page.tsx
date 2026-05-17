'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Galleries', href: '/galleries' },
  { label: 'Prints', href: '/prints' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

      {/* Hero */}
      <section className="px-10 pt-12 pb-16">
        <h1 className="text-7xl md:text-9xl font-light text-black">ABOUT</h1>
      </section>

      {/* Portrait + Bio */}
      <section className="px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            {!photoError ? (
              <div className="bg-gray-50 p-12 flex items-center justify-center" style={{ minHeight: '500px' }}>
                <img
                  src="/photos/photographer.jpg"
                  alt="Nur-E Habib Nurshed"
                  className="max-w-full max-h-96 object-contain"
                  onError={() => setPhotoError(true)}
                />
              </div>
            ) : (
              <div className="bg-gray-50 flex items-center justify-center" style={{ minHeight: '500px' }}>
                <div className="text-center px-8">
                  <p className="text-sm text-gray-400 tracking-widest mb-3">PHOTOGRAPHER PORTRAIT</p>
                  <p className="text-xs text-gray-300">Add your photo as<br /><code className="text-gray-400">public/photos/photographer.jpg</code></p>
                </div>
              </div>
            )}
            <div className="mt-6">
              <h2 className="text-2xl font-light text-black">Nur-E Habib Nurshed</h2>
              <p className="text-sm text-gray-500 mt-1 tracking-wide">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-5 text-base text-gray-700 font-light leading-relaxed">
              <p>
                Bangladeshi CSE student and self-taught photographer based in Bangladesh.
                Nurshed began to consider photography as a passion while studying at
                Government Science College, Dhaka and is currently pursuing an undergraduate
                degree in CSE at American International University-Bangladesh.
              </p>
              <p>
                He visually documents street, travel, and social issues around the country.
                After completing the "Fundamentals of Photography" course by Photo Learner's
                Academy instructed by Ayman Nakib, he developed a deep interest in photography.
              </p>
              <p>
                Following "Immersive Media and Online Journalism" by Pathshala South Asian
                Media Institute, he immersed himself in journalism and writing. The
                "Documentary Photography – One Day Workshop" by Saiful Huq Omi arranged
                by Counter Foto further fueled his passion for visual documentation.
              </p>
              <p>
                Nurshed has collaborated with numerous NGOs and organizations covering
                cultural functions, sports, products, and outdoor portraits — in addition
                to his street documentary work across different areas of Bangladesh.
              </p>
            </div>
            <div className="flex gap-8 mt-10">
              <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest text-black hover:opacity-40 transition">INSTAGRAM ↗</a>
              <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest text-black hover:opacity-40 transition">FACEBOOK ↗</a>
              <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest text-black hover:opacity-40 transition">FLICKR ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition + Publications + Education */}
      <section className="px-10 py-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          <div>
            <p className="text-xs tracking-widest text-black mb-8">RECOGNITION & EXHIBITIONS</p>
            <div className="space-y-5">
              {[
                { year: '2023', title: 'First Prize — AIUBPC Photography Exhibition Season III' },
                { year: '2023', title: 'Photo Fest Asia 2023 — EWUPC' },
                { year: '2021', title: 'Break the Circle Season XI — IUTPS' },
                { year: '2020', title: 'ANYV Photography Contest 2020' },
                { year: '2020', title: 'Break the Circle Season X — IUTPS' },
                { year: '2019', title: 'Photo Fest Asia 2019 — EWUPC' },
                { year: '—', title: 'Remembrance — BUETPS' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-xs text-gray-400 w-8 flex-shrink-0 pt-0.5">{item.year}</span>
                  <span className="text-sm text-gray-700 font-light leading-relaxed">{item.title}</span>
                </div>
              ))}
              <p className="text-sm text-gray-500 pl-12 font-light">+ 13 more exhibitions</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-black mb-8">PUBLISHED IN</p>
            <div className="space-y-4">
              {[
                'In Focus — The Business Standard',
                'Hardcore Street Collective',
                'Street Sans Frontières (friendsinstreet)',
                'MyStreetBnw — Instagram Feature',
              ].map((pub, i) => (
                <p key={i} className="text-sm text-gray-700 font-light leading-relaxed">{pub}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-black mb-8">EDUCATION & WORKSHOPS</p>
            <div className="space-y-6">
              {[
                { title: 'Fundamentals of Photography', org: "Photo Learner's Academy — Ayman Nakib" },
                { title: 'Immersive Media and Online Journalism', org: 'Pathshala South Asian Media Institute' },
                { title: 'Documentary Photography Workshop', org: 'Saiful Huq Omi — Counter Foto' },
                { title: 'BSc in Computer Science & Engineering', org: 'American International University-Bangladesh' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-sm text-black font-light">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-3xl font-light text-black mb-2">Available for assignments</h3>
            <p className="text-gray-600 font-light">Documentary, street, portrait, events & collaborations</p>
          </div>
          <Link href="/contact" className="text-sm tracking-widest text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition">
            GET IN TOUCH →
          </Link>
        </div>
      </section>

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
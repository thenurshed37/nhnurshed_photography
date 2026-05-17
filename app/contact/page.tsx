'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const menuItems = [
  { label: 'Galleries', href: '/galleries' },
  { label: 'Prints', href: '/prints' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nhnurshed@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

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

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-73px)]">

        {/* Left */}
        <div className="px-10 py-16 flex flex-col justify-between border-r border-gray-100">
          <div>
            <h1 className="text-7xl md:text-8xl font-light text-black mb-16">
              GET IN<br />TOUCH
            </h1>
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-2">EMAIL</p>
                <a href="mailto:nhnurshed@gmail.com" className="text-lg font-light text-black hover:opacity-40 transition">
                  nhnurshed@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-2">PHONE</p>
                <a href="tel:+8801522111174" className="text-lg font-light text-black hover:opacity-40 transition">
                  +880 1522-111174
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-2">BASED IN</p>
                <p className="text-lg font-light text-black">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-4">FOLLOW</p>
                <div className="space-y-3">
                  <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="block text-base font-light text-black hover:opacity-40 transition">Instagram ↗</a>
                  <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="block text-base font-light text-black hover:opacity-40 transition">Facebook ↗</a>
                  <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="block text-base font-light text-black hover:opacity-40 transition">Flickr ↗</a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs tracking-widest text-gray-500 mt-12">
            AVAILABLE FOR ASSIGNMENTS & COLLABORATIONS
          </p>
        </div>

        {/* Right — Form */}
        <div className="px-10 py-16 flex items-center">
          {submitted ? (
            <div className="w-full text-center">
              <h2 className="text-4xl font-light text-black mb-4">Thank You</h2>
              <p className="text-gray-600 font-light mb-8">
                Your email client should have opened. If not, email directly at nhnurshed@gmail.com
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm tracking-widest text-gray-600 hover:text-black transition underline underline-offset-4"
              >
                SEND ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-8">
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">YOUR NAME</label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">EMAIL ADDRESS</label>
                <input type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">SUBJECT</label>
                <input type="text" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Print Inquiry / Assignment / Collaboration"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition bg-transparent"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">MESSAGE</label>
                <textarea required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 resize-none transition bg-transparent"
                />
              </div>
              <button type="submit"
                className="w-full bg-black text-white py-5 text-sm tracking-widest hover:bg-gray-800 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
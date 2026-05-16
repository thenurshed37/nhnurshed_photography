'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            NHNURSHED
          </Link>
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-73px)]">

        {/* Left — Info */}
        <div className="px-10 py-16 flex flex-col justify-between border-r border-gray-100">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-7xl md:text-8xl font-light text-black mb-16"
            >
              GET IN<br />TOUCH
            </motion.h1>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-2">EMAIL</p>
                <a href="mailto:nhnurshed@gmail.com" className="text-lg font-light text-black hover:opacity-50 transition">
                  nhnurshed@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-400 mb-2">PHONE</p>
                <a href="tel:+8801522111174" className="text-lg font-light text-black hover:opacity-50 transition">
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
                  <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer"
                    className="block text-base font-light text-black hover:opacity-50 transition">
                    Instagram ↗
                  </a>
                  <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer"
                    className="block text-base font-light text-black hover:opacity-50 transition">
                    Facebook ↗
                  </a>
                  <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer"
                    className="block text-base font-light text-black hover:opacity-50 transition">
                    Flickr ↗
                  </a>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center"
            >
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
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="w-full space-y-8"
            >
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">SUBJECT</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Print Inquiry / Assignment / Collaboration"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 transition"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest text-gray-500 block mb-3">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black text-base font-light text-black placeholder-gray-400 resize-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-5 text-sm tracking-widest hover:bg-gray-800 transition"
              >
                SEND MESSAGE
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </main>
  );
}
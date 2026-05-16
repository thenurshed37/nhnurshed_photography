'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="h-screen overflow-hidden bg-white flex flex-col">
      {/* Header */}
      <nav className="bg-white flex-shrink-0">
        <div className="flex justify-between items-center px-10 py-5">
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            NHNURSHED
          </Link>
          <Link href="/" className="text-sm tracking-widest text-gray-800 font-light hover:opacity-50 transition">
            HOME
          </Link>
        </div>
      </nav>

      {/* Main Content — all in one screen */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden">

        {/* Left — Portrait */}
        <div className="col-span-3 border-r border-gray-100 flex flex-col">
          <div className="flex-1 overflow-hidden">
            {/* Replace with your photo by saving it as public/photos/photographer.jpg */}
            <img
              src="/photos/photographer.jpg"
              alt="Nur-E Habib Nurshed"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="p-6 flex-shrink-0">
            <h1 className="text-lg font-light text-black leading-tight">
              NUR-E HABIB<br />NURSHED
            </h1>
            <p className="text-xs text-gray-500 mt-1 tracking-wide">DHAKA, BANGLADESH</p>
          </div>
        </div>

        {/* Middle — Bio */}
        <div className="col-span-5 px-10 py-8 overflow-y-auto border-r border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest text-gray-400 mb-6">ABOUT</p>
            <div className="space-y-4 text-sm text-gray-700 font-light leading-relaxed">
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
                Following "Immersive Media and Online Journalism" by Pathshala South Asian Media
                Institute, he immersed himself in journalism and writing.
              </p>
              <p>
                The "Documentary Photography – One Day Workshop" by Saiful Huq Omi arranged by
                Counter Foto further fueled his passion for visual documentation. He continues
                his learning through books, research, and constant experimentation.
              </p>
              <p>
                Nurshed has collaborated with numerous NGOs and organizations covering cultural
                functions, sports, products, and outdoor portraits, in addition to his street
                documentary work across Bangladesh.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-widest text-gray-400 mb-4">PUBLISHED IN</p>
              <div className="space-y-2 text-sm text-gray-700 font-light">
                <p>In Focus — The Business Standard</p>
                <p>Hardcore Street Collective</p>
                <p>Street Sans Frontières (friendsinstreet)</p>
                <p>MyStreetBnw — Instagram Feature</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — Recognition + Education */}
        <div className="col-span-4 px-8 py-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs tracking-widest text-gray-400 mb-4">RECOGNITION</p>
            <div className="space-y-3 mb-8">
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
                  <span className="text-xs text-gray-700 font-light leading-relaxed">{item.title}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 pl-12">+ 13 more national & international exhibitions</p>
            </div>

            <p className="text-xs tracking-widest text-gray-400 mb-4">EDUCATION</p>
            <div className="space-y-4">
              {[
                { title: 'Fundamentals of Photography', org: "Photo Learner's Academy — Ayman Nakib" },
                { title: 'Immersive Media and Online Journalism', org: 'Pathshala South Asian Media Institute' },
                { title: 'Documentary Photography Workshop', org: 'Saiful Huq Omi — Counter Foto' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-700 font-light">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.org}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex gap-6 text-xs tracking-widest text-gray-400">
              <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">INSTAGRAM</a>
              <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FACEBOOK</a>
              <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">FLICKR</a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
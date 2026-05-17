'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'Galleries', href: '/galleries' },
  { label: 'Prints', href: '/prints' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const seriesData: Record<string, { title: string; description: string }> = {
  series1: {
    title: 'Jatra',
    description: `Jatra, a journey we all attempt, is a path shaped by our desires and dreams, whether driven by necessity, competition, or the pursuit of something greater. This journey, perhaps destined by the Almighty, remains a mystery as we navigate through the landscape of our ambitions. We dream of love, knowledge, and the magic that transforms the mundane into the extraordinary — a blue moonlit night in a city filled with chaos, or a railway line spreading endlessly onto the horizon. But true satisfaction lies not in dreams alone.

Like Santiago in Paulo Coelho's 'The Alchemist,' we must awaken from our dreams and embark on our own Jatra — to discover the hidden treasures of life within and around us. Santiago's journey from the comforts of his Spanish homeland to the majestic Pyramids of Egypt was not just a physical voyage; it was a passionate quest for self-discovery and the treasures hidden within his soul.

Will you rise from the silence of blue and amplify it to the vibrant red of passion and action, and begin your Jatra? The journey to discover your true self, your real treasure, awaits.`,
  },
  series2: {
    title: 'The Vanished Mirage: In Pursuit of You',
    description: `Waking up on a shining morning I felt void. Realized that you were not there, it was just an empty space beside me. I set out on a journey in pursuit of you. I sniffed the foggy cold on that winter's day and found a scent of something that was known to me. The fragrance was sweet and full of grace like the blooming flowers. As I followed the scent, I knew that I was getting closer to you. Flowers were blended on your fragrance. Standing in front of your beauty very clear I remember that moment, that I had found you in the cold of December like this. But not at that moment.

Then I ascended to the heights of the mountain. The wind was still and deathly silent all around the rustled leaves. I was barking on that blue night out of your name. The church bells chimed, and echoes was full of that place. I was tired and full of hopelessness but kept searching for you. For that moment, I realized that you were lost in the darkness of the shining moon's glare, but it trapped me in the depths of its darkness and left me hypnotized and unconscious.

Later I was awoken by a wonderful piece of clouds hovering above the mountain's layers. A vision of beauty like no other, a piece of art created full of beauty, You. Your form is so fluid so endlessly changing. I see you were never far; you were there to show me the light. Or maybe I journeyed towards your flame for the feelings that we held so dear was nothing but a mirage, unclear.`,
  },
  series3: {
    title: 'Not Me, Neither You',
    description: `Not Me, Neither You is a conceptual photographic exploration of contradiction, coexistence, and the invisible distance between human experiences. By merging opposing realities — love and neglect, wealth and poverty, construction and destruction, freedom and captivity — the work questions the fragile boundaries that separate one life from another.

Through layered visual narratives, the series reflects on how identities and conditions are often shaped by circumstance rather than choice. The contrasts within each frame are not presented as opposites alone, but as interconnected states that exist simultaneously within society and within ourselves.

This project invites viewers to confront the uncomfortable spaces between privilege and suffering, presence and absence, asking a simple yet unsettling question: if lives can change so easily from one side to the other, then who truly belongs to either?`,
  },
  series4: {
    title: 'Reality of Dreams',
    description: `Reality of Dreams is a conceptual series that drifts through the fragile space between imagination and existence. Built through monochromatic grey tones, the photographs transform ordinary tools, objects, animals, human figures, shadows, and fragments of light into quiet symbols of memory, desire, and uncertainty.

The absence of vivid color creates a suspended atmosphere where reality feels softened, almost dreamlike, allowing familiar subjects to carry unfamiliar meanings. Shadows become voices, light becomes emotion, and everyday forms begin to resemble fragments of forgotten dreams.

Rather than offering fixed narratives, the series invites viewers to wander through ambiguity — to question what is real, what is remembered, and what is only imagined. In this shifting landscape of grey, dreams are no longer an escape from reality, but another way of seeing it.`,
  },
  series5: {
    title: 'Where Is My Home?',
    description: `Along the fragile coastline of Matarbari, the sea no longer feels distant. After Cyclone Shakti swept through the coastal communities of Cox's Bazar in May 2025, homes, memories, and familiar landscapes were left altered by water and wind.

This long-term project follows the quiet aftermath of displacement — the uncertainty of people living between erosion and survival, between memory and rebuilding. Through intimate moments and coastal landscapes, Where Is My Home? reflects on the emotional weight of losing place, while questioning what "home" truly means when the land itself becomes unstable.

The project is not only about destruction, but also about endurance: the resilience of communities who continue to stand beside the sea, even as it slowly redraws the boundaries of their lives.`,
  },
};

export default function SeriesPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const series = seriesData[slug];

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
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  if (!series) return null;

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <nav className="sticky top-0 bg-white z-40">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/galleries" className="text-xl tracking-widest text-black font-light hover:opacity-40 transition">
            ← SERIES
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

      {/* Series Title & Description */}
      <section className="px-10 pt-12 pb-20 border-b border-gray-100">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Title */}
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-6">PHOTO SERIES</p>
            <h1 className="text-5xl md:text-7xl font-light text-black leading-tight">
              {series.title}
            </h1>
            {loaded && (
              <p className="text-sm text-gray-400 tracking-widest mt-6">
                {images.length} PHOTOGRAPHS
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-5">
            {series.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base text-gray-600 font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Photos — exhibition style, no clicking */}
      {loaded && (
        <section className="px-16 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {images.map((image, index) => (
              <div key={index} className="select-none">
                <div
                  className="bg-gray-50 p-8 md:p-12 flex items-center justify-center"
                  style={{ minHeight: '400px' }}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src={image}
                    alt={`${series.title} — ${index + 1}`}
                    className="max-w-full max-h-80 object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-10 py-8 flex justify-between items-center text-xs tracking-widest text-gray-400 border-t border-gray-100">
        <p>© 2026 NHNURSHED</p>
        <Link href="/galleries" className="hover:text-black transition">
          ← BACK TO GALLERIES
        </Link>
      </footer>
    </div>
  );
}
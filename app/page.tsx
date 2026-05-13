export default function Home() {
  const galleries = [
    { name: 'Abstract', slug: 'abstract' },
    { name: 'Black & White', slug: 'blackandwhite' },
    { name: 'Colors', slug: 'colors' },
    { name: 'Documentary', slug: 'documentary' },
    { name: 'Portrait', slug: 'portrait' },
    { name: 'Street', slug: 'street' },
  ];

  const series = [
    { 
      name: 'Series 1', 
      slug: 'series1',
      title: 'Series Title 1',
      description: 'Add your series description here...'
    },
    { 
      name: 'Series 2', 
      slug: 'series2',
      title: 'Series Title 2',
      description: 'Add your series description here...'
    },
    { 
      name: 'Series 3', 
      slug: 'series3',
      title: 'Series Title 3',
      description: 'Add your series description here...'
    },
    { 
      name: 'Series 4', 
      slug: 'series4',
      title: 'Series Title 4',
      description: 'Add your series description here...'
    },
    { 
      name: 'Series 5', 
      slug: 'series5',
      title: 'Series Title 5',
      description: 'Add your series description here...'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wider">nhnurshed</a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#galleries" className="hover:text-gray-400 transition">Galleries</a>
            <a href="#series" className="hover:text-gray-400 transition">Series</a>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-8xl font-light mb-6 tracking-tight">
            Nur-E Habib Nurshed
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-8">
            Documentary & Street Photographer
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Visual storyteller documenting street life, travel, and social issues across Bangladesh
          </p>
          <a 
            href="#galleries" 
            className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
          >
            View Work
          </a>
        </div>
      </section>

      {/* Galleries Section */}
      <section id="galleries" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Galleries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <a 
                key={gallery.slug} 
                href={`/gallery/${gallery.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-900 mb-4 overflow-hidden">
                  <img 
                    src={`/photos/${gallery.slug}/1.jpg`}
                    alt={gallery.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h4 className="text-xl font-light group-hover:text-gray-400 transition">
                  {gallery.name}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Series Section */}
      <section id="series" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Photo Series</h3>
          <p className="text-center text-gray-400 mb-12">
            Long-form visual storytelling projects
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {series.map((item) => (
              <a 
                key={item.slug}
                href={`/gallery/${item.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-900 mb-4 overflow-hidden">
                  <img 
                    src={`/photos/${item.slug}/1.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h4 className="text-xl font-light mb-2 group-hover:text-gray-400 transition">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">About</h3>
          
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Bangladeshi CSE student and self-taught photographer based in Bangladesh. Nurshed began to consider 
              photography as a passion while studying at Government Science College, Dhaka and is currently pursuing 
              an undergraduate degree in CSE at American International University-Bangladesh.
            </p>
            
            <p>
              He visually documents street, travel, and social issues around the country. After completing the 
              "Fundamentals of Photography" course by Photo Learner's Academy instructed by Ayman Nakib, he developed 
              a deep interest in the photography sector. Following "Immersive Media and Online Journalism" by Pathshala 
              South Asian Media Institute, he immersed himself in journalism and writing. The "Documentary Photography – 
              One Day Workshop" by Saiful Huq Omi arranged by Counter Foto further fueled his interest in the visual art 
              of documentation. He continues his learning journey through books, research, and experimenting with new 
              techniques.
            </p>
            
            <p>
              Nurshed has collaborated with numerous NGOs and organizations to cover various events including cultural 
              functions, sports, products, and outdoor portraits, in addition to his street documentary work across 
              different areas of Bangladesh.
            </p>
            
            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-white font-light text-xl mb-4">Recognition & Exhibitions</h4>
              <p>
                Recipient of first prize at "AIUBPC present Intra AIUB Photography Exhibition - Season III" and has 
                participated in more than 20 national and international photography exhibitions including Photo Fest Asia 
                2019 and 2023 by EWUPC, "Remembrance" by BUETPS, "Break the Circle Season X & XI" by IUTPS, "ANYV Photography 
                Contest 2020" and many more.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-white font-light text-xl mb-4">Published Work</h4>
              <p>
                His work has been published in "In Focus" by The Business Standard, Hardcore Street Collective, 
                Street Sans Frontières (friendsinstreet), MyStreetBnw's Instagram page, and various online publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Get in Touch</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-sm text-gray-500 mb-2">Email</h4>
                <a href="mailto:nhnurshed@gmail.com" className="text-lg hover:text-gray-400 transition">
                  nhnurshed@gmail.com
                </a>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-500 mb-2">Phone</h4>
                <a href="tel:+8801522111174" className="text-lg hover:text-gray-400 transition">
                  +880 1522-111174
                </a>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-500 mb-4">Follow</h4>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://www.instagram.com/nhnurshed_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                  >
                    Instagram →
                  </a>
                  <a 
                    href="https://www.facebook.com/nurehabib.nurshed" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                  >
                    Facebook →
                  </a>
                  <a 
                    href="https://flickr.com/photos/159417255@N08" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                  >
                    Flickr →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  required
                  className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full border border-white px-8 py-3 hover:bg-white hover:text-black transition"
                >
                  Send Message
                </button>
              </form>
              <p className="text-xs text-gray-600 mt-4">
                Available for assignments and collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Nur-E Habib Nurshed. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="https://www.instagram.com/nhnurshed_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="https://www.facebook.com/nurehabib.nurshed" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://flickr.com/photos/159417255@N08" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Flickr
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
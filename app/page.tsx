export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-wider">nhnurshed</h1>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:text-gray-400 transition">Work</a>
            <a href="#series" className="hover:text-gray-400 transition">Series</a>
            <a href="#about" className="hover:text-gray-400 transition">About</a>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Nur-E Habib Nurshed
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-8">
            Documentary & Street Photographer
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Capturing stories through black & white, street, and documentary photography
          </p>
          <a 
            href="#work" 
            className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition"
          >
            View Work
          </a>
        </div>
      </section>

      {/* Work Section - Genres */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Galleries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Street', 'Black & White', 'Documentary', 'Singles'].map((genre) => (
              <div key={genre} className="group cursor-pointer">
                <div className="aspect-square bg-gray-900 mb-4 flex items-center justify-center hover:bg-gray-800 transition">
                  <span className="text-gray-600 text-sm">20-30 photos</span>
                </div>
                <h4 className="text-xl font-light group-hover:text-gray-400 transition">
                  {genre}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Series Section */}
      <section id="series" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Photo Series</h3>
          <p className="text-center text-gray-400 mb-8">
            Long-form visual storytelling projects
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group cursor-pointer">
                <div className="aspect-video bg-gray-900 mb-4 hover:bg-gray-800 transition flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Series {num} - 10-15 photos</span>
                </div>
                <h4 className="text-xl font-light mb-2 group-hover:text-gray-400 transition">
                  Series Title {num}
                </h4>
                <p className="text-sm text-gray-500">
                  Description will go here...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-light mb-8">About</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            I'm a photographer based in Dhaka, Bangladesh, specializing in documentary, 
            street, and black & white photography. My work focuses on capturing authentic 
            moments and telling stories through visual narratives.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Available for assignments and collaborations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-light mb-12 text-center">Get in Touch</h3>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
            />
            <textarea 
              placeholder="Your Message" 
              rows={6}
              className="w-full bg-transparent border border-gray-800 px-4 py-3 focus:outline-none focus:border-gray-600"
            ></textarea>
            <button 
              type="submit"
              className="w-full border border-white px-8 py-3 hover:bg-white hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <p className="text-center text-gray-600 text-sm">
          © 2026 nhnurshed. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
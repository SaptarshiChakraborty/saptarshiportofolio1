import { useState } from 'react';

export default function ResumeSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans text-white bg-gradient-to-br from-gray-900 to-black min-h-screen">
      {/* Nav Bar */}
      <header className="flex items-center justify-between p-4 bg-gray-950 shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold">Saptarshi Chakraborty</h1>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('about')}>About</button>
          <a
            href="https://www.linkedin.com/in/saptarshichakraborty14/details/certifications/"
            target="_blank"
          >
            Certificates
          </a>
          <a
            href="https://www.linkedin.com/in/saptarshichakraborty14/"
            target="_blank"
          >
            Projects
          </a>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-center p-4 space-y-4">
          <button onClick={() => scrollToSection('about')}>About</button>
          <a
            href="https://www.linkedin.com/in/saptarshichakraborty14/details/certifications/"
            target="_blank"
          >
            Certificates
          </a>
          <a
            href="https://www.linkedin.com/in/saptarshichakraborty14/"
            target="_blank"
          >
            Projects
          </a>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center pt-24 pb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hi, I'm Saptarshi Chakraborty
        </h2>
        <p className="mt-4 text-lg text-gray-300">Aspiring Data Professional</p>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-10 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-300">
          I'm passionate about data science, machine learning, and building
          impactful digital experiences. I thrive in solving problems and
          turning raw data into valuable insights.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-10 max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-300 mb-2">
          Email:{' '}
          <a href="mailto:saptarshichak14@gmail.com" className="text-blue-400">
            saptarshichak14@gmail.com
          </a>
        </p>
        <p className="text-gray-300">
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/saptarshichakraborty14/"
            target="_blank"
            className="text-blue-400"
          >
            View Profile
          </a>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-600 py-6">
        © {new Date().getFullYear()} Saptarshi Chakraborty. All rights reserved.
      </footer>
    </div>
  );
}

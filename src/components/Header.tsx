import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY - (isScrolled ? 80 : 100); // Adjust offset for fixed header
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                        ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300">
          <Sparkles className="w-8 h-8" />
          Creative-Engine
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-text text-lg font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text hover:text-primary transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40 animate-fade-in">
            <button
              className="absolute top-6 right-6 text-text hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-text text-3xl font-semibold hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link, useLocation, and useNavigate

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsOpen(false); // Close mobile menu on link click

    if (href.startsWith('#')) {
      e.preventDefault(); // Prevent default Link behavior for anchor links

      // If already on home page, just scroll
      if (location.pathname === '/') {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100; // Adjust offset for fixed header
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      } else {
        // Navigate to home page and then scroll
        navigate('/');
        setTimeout(() => {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
          }
        }, 100); // Small delay to allow page to render
      }
    }
    // For route links (e.g., '/', '/contact'), the Link component's default behavior is fine
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center text-white text-2xl font-bold group">
          <Rocket className="w-8 h-8 text-primary mr-2 transform transition-transform duration-300 group-hover:rotate-12" />
          Creative-Engine
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-textSecondary hover:text-primary transition-colors duration-300 relative group
                ${location.pathname === link.href || (link.href === '/' && location.pathname === '/') ? 'text-primary' : ''}
              `}
              onClick={(e) => handleNavLinkClick(e, link.href)} // Use the custom handler
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8" />
        </button>
        <ul className="space-y-8 text-center">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="text-white text-3xl font-semibold hover:text-primary transition-colors duration-300"
                onClick={(e) => handleNavLinkClick(e, link.href)} // Use the custom handler
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

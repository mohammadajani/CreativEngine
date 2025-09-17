import React from 'react';
import { Sparkles, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100; // Adjust offset for fixed header
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <Sparkles className="w-7 h-7" />
              Creative-Engine
            </a>
            <p className="text-textSecondary max-w-xs mb-4">
              Igniting your social presence with captivating content and strategic insights.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-textSecondary mb-2">Email: info@creativeengine.com</p>
            <p className="text-textSecondary mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-textSecondary">Address: 123 Creative Way, Digital City, DC 90210</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-textSecondary text-sm">
          &copy; {new Date().getFullYear()} Creative-Engine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

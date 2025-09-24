import React from 'react';
import { Sparkles, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault(); // Always prevent default for custom handling

    if (href.startsWith('#')) {
      // This is an in-page anchor link (e.g., #services)
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100; // Adjust offset for fixed header
        window.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
        // If the element is not on the current page (e.g., user is on /contact and clicks #services)
        // Navigate to home page and then scroll
        navigate('/');
        // Use a timeout to ensure the main content (with the target ID) is rendered
        setTimeout(() => {
          const homeTargetElement = document.querySelector(href);
          if (homeTargetElement) {
            const homeOffset = homeTargetElement.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: homeOffset, behavior: 'smooth' });
          }
        }, 100); // Small delay to allow page to render
      }
    } else if (href.startsWith('/')) {
      // This is a react-router-dom route link (e.g., /, /contact)
      navigate(href);
    }
  };

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" onClick={(e) => handleNavLinkClick(e, '/')} className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
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
            <p className="text-textSecondary mb-2">Email: creativexengine@gmail.com</p>
            <p className="text-textSecondary mb-2">Phone: +91 7066000321</p>
            <p className="text-textSecondary">Address: Nagpur, Maharashtra, India</p>
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

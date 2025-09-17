import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = servicesSection.getBoundingClientRect().top + window.scrollY - 100; // Adjust for fixed header
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden scroll-reveal"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, // Pexels: Team working on project
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in-up">
          Creative-Engine: <span className="text-primary">Igniting Your Social Presence</span>
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary mb-10 animate-fade-in-up delay-200">
          We craft compelling social media content that captivates audiences, builds brands, and drives results.
        </p>
        <a
          href="#services"
          onClick={handleScrollToServices}
          className="btn-primary animate-fade-in-up delay-400"
        >
          Explore Our Services
          <ArrowRight className="ml-3 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

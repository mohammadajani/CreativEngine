import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      Array.from(sectionRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (sectionRef.current) {
        Array.from(sectionRef.current.children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-reveal">
          Our Creative <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-16 scroll-reveal delay-100">
          Explore a selection of our diverse projects, showcasing our expertise in various social media content formats.
        </p>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="card group overflow-hidden relative scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-textSecondary text-base mb-4">{item.description}</p>
                <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              {/* Overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

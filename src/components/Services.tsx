import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
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
      { threshold: 0.2 }
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
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-reveal">
          Our <span className="text-primary">Expert Services</span>
        </h2>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-16 scroll-reveal delay-100">
          From captivating visuals to compelling narratives, we cover every aspect of your social media content needs.
        </p>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="card card-hover flex flex-col items-center text-center scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-full bg-primary/20 text-primary mb-6">
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-textSecondary text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

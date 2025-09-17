import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div ref={sectionRef} className="container mx-auto text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          What Our Clients <span className="text-primary">Say</span>
        </h2>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-16">
          Hear directly from the brands we've helped elevate their social media presence.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="card p-8 md:p-10 lg:p-12 text-center relative overflow-hidden">
            <blockquote className="text-xl md:text-2xl italic text-text leading-relaxed mb-8 transition-opacity duration-500 ease-in-out">
              "{TESTIMONIALS[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src={TESTIMONIALS[currentIndex].avatar}
                alt={TESTIMONIALS[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md"
              />
              <div>
                <p className="text-white font-semibold text-lg">{TESTIMONIALS[currentIndex].name}</p>
                <p className="text-textSecondary text-sm">{TESTIMONIALS[currentIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

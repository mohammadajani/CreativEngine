import React, { useEffect, useRef } from 'react';
import { Rocket, ArrowRight } from 'lucide-react'; // Added ArrowRight

const CallToAction: React.FC = () => {
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

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = contactSection.getBoundingClientRect().top + window.scrollY - 100; // Adjust for fixed header
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div ref={sectionRef} className="container mx-auto text-center scroll-reveal">
        <div className="card p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/20 to-surface border-primary/50">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-primary">Elevate Your Brand?</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-10">
            Let's create social media content that truly stands out and connects with your audience.
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="btn-primary"
          >
            Get in Touch Today
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

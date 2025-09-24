import React, { useEffect, useRef } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation

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

  return (
    <section id="call-to-action" className="section-padding bg-surface"> {/* Changed ID to avoid conflict with new page */}
      <div ref={sectionRef} className="container mx-auto text-center scroll-reveal">
        <div className="card p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary/20 to-surface border-primary/50">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-primary">Elevate Your Brand?</span>
          </h2>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-10">
            Let's create social media content that truly stands out and connects with your audience.
          </p>
          <Link
            to="/contact" // Link to the new contact page
            className="btn-primary"
          >
            Get in Touch Today
            <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

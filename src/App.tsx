import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8) && (rect.bottom >= 0);
        if (isVisible) {
          el.classList.add('is-visible');
        } else {
          el.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;

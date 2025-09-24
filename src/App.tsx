import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage'; // Import the new ContactPage

// Component to handle scroll-reveal and scroll to top on route change
const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

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
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

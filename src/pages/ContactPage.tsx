import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SERVICES } from '../constants'; // Import SERVICES for the dropdown

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '', // Changed from 'subject' to 'service'
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', service: '', message: '' }); // Clear form
  };

  return (
    <div className="min-h-screen bg-background text-text pt-24 md:pt-32"> {/* Added padding for fixed header */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
            Let's <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            We're excited to hear about your project and help you create stunning social media content. Reach out today!
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section ref={sectionRef} className="section-padding scroll-reveal">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8 bg-surface border border-border rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textSecondary text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-textSecondary text-sm font-medium mb-2">
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white appearance-none pr-8" // Added appearance-none and pr-8 for custom arrow
                  required
                >
                  <option value="" disabled>Select a service you're interested in</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-white resize-y"
                  placeholder="Tell us about your project and how we can help..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                Send Message
                <Send className="ml-3 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="card p-8 bg-surface border border-border rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Details</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <p className="text-textSecondary">creativexengine@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <p className="text-textSecondary">+91 7066000321</p> {/* Updated phone number */}
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                    <p className="text-textSecondary">Nagpur, Maharashtra, India</p> {/* Updated address */}
                  </div>
                </div>
              </div>
            </div>
            {/* Interactive Map */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Find Us on the Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119063.00000000001!2d79.00000000000001!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border border-border shadow-md"
                title="Google Map of Nagpur, Maharashtra, India"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

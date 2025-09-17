import { Camera, Film, Lightbulb, PenTool, Sparkles, TrendingUp } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: Camera,
    title: 'Captivating Photos',
    description: 'High-quality, visually stunning photography tailored for all social platforms, ensuring your brand stands out.',
  },
  {
    icon: Sparkles,
    title: 'Dynamic Carousels & Reels',
    description: 'Engaging multi-image carousels and short-form video reels designed to tell a story and maximize interaction.',
  },
  {
    icon: Film,
    title: 'Impactful Shorts & Documentaries',
    description: 'From quick, attention-grabbing shorts to in-depth video documentaries, we produce content that resonates.',
  },
  {
    icon: PenTool,
    title: 'Expert Script Writing',
    description: 'Crafting compelling narratives and scripts for videos, ads, and campaigns that capture your audience\'s imagination.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Content Planning',
    description: 'Developing comprehensive content strategies that align with your brand goals and drive measurable results.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Monitoring and analyzing content performance to optimize strategies and ensure continuous growth.',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Brand Launch Photography',
    description: 'A series of vibrant, high-resolution photos for a new fashion brand launch campaign.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Social media content creation
    category: 'Photography',
  },
  {
    id: 2,
    title: 'Product Showcase Imagery',
    description: 'Stunning product photography highlighting key features and aesthetic appeal of a tech gadget.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Team working on project
    category: 'Product Photography',
  },
  {
    id: 3,
    title: 'Editorial Content Graphics',
    description: 'Visually engaging graphics and imagery for a series of educational social media posts and blogs.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Writing/planning
    category: 'Graphic Design',
  },
  {
    id: 4,
    title: 'Event Highlight Photography',
    description: 'Dynamic photos capturing the energy and key moments of a major industry event.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Event photography/videography
    category: 'Event Photography',
  },
  {
    id: 5,
    title: 'Behind-the-Scenes Short',
    description: 'A captivating short video offering a glimpse into a local artisan\'s workshop and process.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Video production
    category: 'Short Video',
  },
  {
    id: 6,
    title: 'Promotional Product Reel',
    description: 'A dynamic and engaging reel showcasing the benefits and features of a new product.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Interview/documentary style
    category: 'Promotional Reel',
  },
  {
    id: 7,
    title: 'Brand Story Video',
    description: 'A narrative-driven short video detailing the journey and values of a sustainable startup.',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: People collaborating, good for "story"
    category: 'Brand Story Video',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Creative-Engine transformed our social media presence! Their team's ability to craft engaging reels and stunning photos brought our brand to life. We saw a 200% increase in engagement within months!",
    name: 'Sarah Chen',
    title: 'Marketing Director, EcoBloom Organics',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Professional woman
  },
  {
    quote: "The video documentary they produced for us was beyond our expectations. The scriptwriting was brilliant, and the final product perfectly captured our company's story. Truly exceptional work!",
    name: 'David Lee',
    title: 'CEO, InnovateTech Solutions',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Professional man
  },
  {
    quote: "Our carousels have never looked better! Creative-Engine's attention to detail and understanding of current social trends is unmatched. They're an invaluable partner for our content strategy.",
    name: 'Maria Rodriguez',
    title: 'Brand Manager, Urban Chic Apparel',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Professional woman
  },
  {
    quote: "From concept to execution, Creative-Engine delivered. Their shorts are incredibly effective, and their team is a pleasure to work with. Highly recommend for any business looking to boost their social game.",
    name: 'James Wilson',
    title: 'Founder, FitFusion Gym',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Professional man
  },
];

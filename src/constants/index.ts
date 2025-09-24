import { Camera, Film, Lightbulb, PenTool, Sparkles, TrendingUp } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' }, // Changed from '/#services'
  { name: 'Portfolio', href: '#portfolio' }, // Changed from '/#portfolio'
  { name: 'Testimonials', href: '#testimonials' }, // Changed from '/#testimonials'
  { name: 'Contact', href: '/contact' },
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
    quote: "Creative-Engine truly understands the pulse of social media. Their captivating reels and stunning photography elevated our brand's online presence, leading to a significant boost in customer engagement!",
    name: 'Priya Sharma',
    title: 'Marketing Head, Aura Lifestyle',
    avatar: 'https://images.pexels.com/photos/3760303/pexels-photo-3760303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Indian woman
  },
  {
    quote: "The scriptwriting for our product launch video was exceptional. Creative-Engine crafted a narrative that resonated deeply with our audience, resulting in our most successful campaign to date. Highly recommended!",
    name: 'Rajesh Kumar',
    title: 'Founder & CEO, TechInnovate Solutions',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Indian man
  },
  {
    quote: "Our social media carousels have never looked this professional and engaging. Creative-Engine's strategic approach to content planning and execution is simply brilliant. They are an indispensable partner!",
    name: 'Ananya Singh',
    title: 'Brand Strategist, EthnicThreads Co.',
    avatar: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Indian woman
  },
  {
    quote: "From concept to final delivery, Creative-Engine exceeded our expectations. Their short-form video content is incredibly impactful, driving both awareness and conversions. A fantastic team to collaborate with!",
    name: 'Vikram Patel',
    title: 'Director of Digital, GlobalConnect',
    avatar: 'https://images.pexels.com/photos/1081682/pexels-photo-1081682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Indian man
  },
  {
    quote: "The content planning and analytics provided by Creative-Engine have been a game-changer for us. Their insights helped us refine our strategy and achieve consistent growth across all platforms.",
    name: 'Sneha Reddy',
    title: 'Marketing Manager, HealthHub India',
    avatar: 'https://images.pexels.com/photos/3760303/pexels-photo-3760303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Pexels: Indian woman (reused for variety)
  },
];

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar_url: string;
  featured: boolean;
}

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      // Fetch featured testimonials from Supabase
      const { data, error } = await fetch('/api/admin/testimonials')
        .then(res => res.json())
        .catch(() => ({ data: [], error: true }));

      if (!error && data) {
        const featured = data.filter((t: Testimonial) => t.featured);
        setTestimonials(featured.length > 0 ? featured : getDefaultTestimonials());
      } else {
        setTestimonials(getDefaultTestimonials());
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setTestimonials(getDefaultTestimonials());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultTestimonials = (): Testimonial[] => [
    {
      id: 1,
      name: 'Ahmed Hassan',
      role: 'Product Lead',
      company: 'TechStartup Inc',
      content: 'Abdul transformed our vision into reality. His full-stack expertise and attention to detail resulted in a product that exceeded our expectations.',
      avatar_url: '👨‍💼',
      featured: true,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CEO',
      company: 'Design Studio Co',
      content: 'Working with Abdul was a game-changer. His ability to bridge design and engineering created seamless user experiences that our customers love.',
      avatar_url: '👩‍💼',
      featured: true,
    },
    {
      id: 3,
      name: 'Malik Ahmed',
      role: 'CTO',
      company: 'Enterprise Solutions',
      content: 'The scalability and performance of the system Abdul built for us is outstanding. He understood our growth trajectory perfectly.',
      avatar_url: '👨‍💻',
      featured: true,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading || testimonials.length === 0) {
    return (
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#030014]' : 'bg-white'}`}>
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500`}>
              What People Say
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#030014]' : 'bg-white'}`}>
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500`}>
              What People Say
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Feedback from colleagues and clients I've worked with
            </p>
          </div>

          {/* Carousel */}
          <div className={`relative p-8 rounded-xl border backdrop-blur-sm min-h-96 flex flex-col justify-center ${
            theme === 'dark'
              ? 'border-[#7042f861] bg-gradient-to-r from-purple-900/20 to-cyan-900/20'
              : 'border-purple-300/30 bg-gradient-to-r from-purple-50 to-cyan-50'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Quote Mark */}
                <div className="text-5xl text-purple-500/30">{"'"}</div>

                {/* Testimonial Content */}
                <p className={`text-xl leading-relaxed italic ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                  {currentTestimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-500/20">
                  <div className="text-4xl">{currentTestimonial.avatar_url}</div>
                  <div>
                    <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {currentTestimonial.name}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button
                onClick={handlePrev}
                className={`p-2 rounded-full transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-purple-500'
                    : 'bg-gray-200 hover:bg-purple-500'
                } text-gray-600 hover:text-white`}
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className={`p-2 rounded-full transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-purple-500'
                    : 'bg-gray-200 hover:bg-purple-500'
                } text-gray-600 hover:text-white`}
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-purple-500'
                    : `w-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

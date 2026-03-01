'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  initials: string;
  featured: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Product Lead',
    company: 'TechStartup Inc',
    content: 'Abdul transformed our vision into reality. His full-stack expertise and attention to detail resulted in a product that exceeded our expectations.',
    initials: 'AH',
    featured: true,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'CEO',
    company: 'Design Studio Co',
    content: 'Working with Abdul was a game-changer. His ability to bridge design and engineering created seamless user experiences that our customers love.',
    initials: 'SW',
    featured: true,
  },
  {
    id: 3,
    name: 'Malik Ahmed',
    role: 'CTO',
    company: 'Enterprise Solutions',
    content: 'The scalability and performance of the system Abdul built for us is outstanding. He understood our growth trajectory perfectly.',
    initials: 'MA',
    featured: true,
  },
];

export default function TestimonialCarousel() {
  const [testimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500">
              What People Say
            </h2>
            <p className="text-lg text-gray-300">
              {"Feedback from colleagues and clients I've worked with"}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative p-8 md:p-12 rounded-xl border border-border backdrop-blur-sm bg-linear-to-r from-purple-900/20 to-cyan-900/20 min-h-72 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Quote Mark */}
                <div className="text-5xl text-purple-500/30 font-serif">{'"'}</div>

                {/* Testimonial Content */}
                <p className="text-xl leading-relaxed italic text-gray-200">
                  {currentTestimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-500/20">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-400">
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
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary text-gray-400 hover:text-white transition-all"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary text-gray-400 hover:text-white transition-all"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

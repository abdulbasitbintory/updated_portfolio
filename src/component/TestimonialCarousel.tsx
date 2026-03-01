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
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    role: 'Product Lead',
    company: 'TechStartup Inc',
    content: 'Abdul transformed our vision into reality. His full-stack expertise and attention to detail resulted in a product that exceeded our expectations.',
    initials: 'AH',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'CEO',
    company: 'Design Studio Co',
    content: 'Working with Abdul was a game-changer. His ability to bridge design and engineering created seamless user experiences that our customers love.',
    initials: 'SW',
  },
  {
    id: 3,
    name: 'Malik Ahmed',
    role: 'CTO',
    company: 'Enterprise Solutions',
    content: 'The scalability and performance of the system Abdul built for us is outstanding. He understood our growth trajectory perfectly.',
    initials: 'MA',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-balance text-foreground">
              What People{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                Say
              </span>
            </h2>
            <p className="text-muted-foreground">
              {"Feedback from colleagues and clients I've worked with"}
            </p>
          </div>

          {/* Carousel */}
          <div className="relative p-8 md:p-12 rounded-2xl border border-border bg-card/30 backdrop-blur-sm min-h-64 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Testimonial Content */}
                <p className="text-lg md:text-xl leading-relaxed text-card-foreground italic">
                  {'"'}{currentTestimonial.content}{'"'}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-card-foreground">{currentTestimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
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
                className="p-2 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <FiChevronRight className="w-4 h-4" />
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
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

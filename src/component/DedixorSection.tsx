'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DedixorSection() {
  const achievements = [
    'Innovative Product Development',
    'Scalable Architecture Design',
    'Growth-Focused Engineering',
    'User-Centric Problem Solving',
  ];

  return (
    <section className="py-24">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-3">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-balance text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Co-Founder at{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-accent">
                Dedixor
              </span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building cutting-edge solutions that transform ideas into impactful products
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {"At Dedixor, we're committed to empowering businesses with innovative digital solutions. Through strategic product design and cutting-edge engineering, we help organizations scale, transform, and succeed in the digital landscape."}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card/20 border border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  href="https://dedixor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all text-sm"
                >
                  Visit Dedixor
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm flex flex-col justify-center items-center min-h-80"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-card-foreground">Dedixor</p>
                  <p className="text-sm text-muted-foreground mt-1">Digital Product Solutions</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['SaaS', 'Web Apps', 'Mobile', 'AI/ML'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full border border-border bg-muted/30 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

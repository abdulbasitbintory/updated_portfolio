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
    <section className="py-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-balance bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Co-Founder at Dedixor
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building cutting-edge solutions that transform ideas into impactful products
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-6 rounded-xl border border-border backdrop-blur-sm bg-linear-to-br from-purple-900/20 to-cyan-900/20">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-gray-300">
                  {"At Dedixor, we're committed to empowering businesses with innovative digital solutions. Through strategic product design and cutting-edge engineering, we help organizations scale, transform, and succeed in the digital landscape."}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 shrink-0 rounded-full bg-linear-to-r from-purple-500 to-cyan-500" />
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="https://dedixor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-linear-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Visit Dedixor
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              className="p-8 rounded-xl border border-border backdrop-blur-sm bg-linear-to-br from-purple-900/10 to-cyan-900/10 min-h-96 flex flex-col justify-center items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
                </motion.div>
                <div>
                  <p className="text-xl font-bold text-white">Dedixor</p>
                  <p className="text-sm text-gray-400">Digital Product Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

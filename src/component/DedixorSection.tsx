'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

export default function DedixorSection() {
  const { theme } = useTheme();

  const achievements = [
    'Innovative Product Development',
    'Scalable Architecture Design',
    'Growth-Focused Engineering',
    'User-Centric Problem Solving',
  ];

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-[#030014]' : 'bg-white'}`}>
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
              className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Co-Founder at Dedixor
            </motion.h2>
            <motion.p
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
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
              <div className={`p-6 rounded-xl border backdrop-blur-sm ${
                theme === 'dark'
                  ? 'border-[#7042f861] bg-gradient-to-br from-purple-900/20 to-cyan-900/20'
                  : 'border-purple-300/30 bg-gradient-to-br from-purple-50 to-cyan-50'
              }`}>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission
                </h3>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  At Dedixor, we're committed to empowering businesses with innovative digital solutions. 
                  Through strategic product design and cutting-edge engineering, we help organizations 
                  scale, transform, and succeed in the digital landscape.
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {achievement}
                    </span>
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
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Visit Dedixor
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              className={`p-8 rounded-xl border backdrop-blur-sm min-h-96 flex flex-col justify-center items-center ${
                theme === 'dark'
                  ? 'border-[#7042f861] bg-gradient-to-br from-purple-900/10 to-cyan-900/10'
                  : 'border-purple-300/30 bg-gradient-to-br from-purple-100/50 to-cyan-100/50'
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 text-center">
                <motion.div
                  className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.div>
                <div>
                  <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Dedixor
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Digital Product Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

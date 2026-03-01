'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function ProductBuilderShowcase() {
  const { theme } = useTheme();

  const services: ServiceCard[] = [
    {
      title: 'Product Design',
      description: 'User-centric design that combines aesthetics with functionality',
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Full-Stack Engineering',
      description: 'End-to-end development with modern tech stack and best practices',
      icon: '⚙️',
      color: 'from-purple-500 to-cyan-500',
    },
    {
      title: 'Product Strategy',
      description: 'Strategic guidance from conception to market launch',
      icon: '📊',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Scalability & Performance',
      description: 'Building products that grow with your business needs',
      icon: '🚀',
      color: 'from-blue-500 to-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-[#030014] to-[#0a0015]' : 'bg-white'}`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500`}>
            Product Builder & Engineer
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            I don't just build features—I build complete products that solve real problems and delight users
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-xl p-8 border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'border-[#7042f861] bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:from-gray-900/80 hover:to-gray-800/80'
                  : 'border-purple-200/50 bg-gradient-to-br from-white/50 to-white/30 hover:from-white/80 hover:to-white/60'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 space-y-4">
                <div className="text-5xl">{service.icon}</div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.description}
                </p>
              </div>

              <div className={`absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* My Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`p-8 rounded-xl border backdrop-blur-sm ${
            theme === 'dark'
              ? 'border-[#7042f861] bg-gradient-to-r from-purple-900/20 to-cyan-900/20'
              : 'border-purple-300/30 bg-gradient-to-r from-purple-50 to-cyan-50'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Development Approach
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Understand',
                description: 'Deep dive into your vision, market, and user needs',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create beautiful, intuitive experiences grounded in research',
              },
              {
                step: '03',
                title: 'Build & Scale',
                description: 'Engineer robust, performant solutions built for growth',
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ y: -5 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                  {item.step}
                </div>
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

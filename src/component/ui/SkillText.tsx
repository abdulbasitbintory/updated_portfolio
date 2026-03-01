"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaRobot, FaLaptopCode } from "react-icons/fa";
import { FaArrowsToCircle } from "react-icons/fa6";

const SkillText = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fullText =
    "Mastering the tools and technologies that power modern web experiences";
  const categories = [
    { name: "Web-Development", icon: <FaCode className="text-cyan-400" /> },
    { name: "App-Development", icon: <FaServer className="text-purple-400" /> },
    { name: "DSA", icon: <FaLaptopCode className="text-pink-400" /> },
    { name: "Machine Learning", icon: <FaRobot className="text-yellow-400" /> },
    {
      name: "Cyber-Security",
      icon: <FaArrowsToCircle className="text-blue-200" />,
    },
  ];

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setcurrentIndex(currentIndex + 1);
      }, 30);
    } else {
      // Start deleting after pause
      setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setcurrentIndex((prev) => {
            if (prev <= 0) {
              clearInterval(intervalRef.current as NodeJS.Timeout);
              return 0;
            }
            setDisplayText(fullText.substring(0, prev - 1));
            return prev - 1;
          });
        }, 15);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Auto-rotate categories
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-2">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-2">
          <h1 className="mb-3 sm:mb-4 md:mb-6 lg:mb-8 md:text-7xl text-5xl">
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              Ideas
            </span>{" "}
            Into{" "}
            <p className="bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                Reality
              </span>
            </p>
          </h1>
          <div className="relative inline-block ">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:my-12 my-14">
              {categories.map((category, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeCategory === index ? 1 : 0.2,
                    y: activeCategory === index ? 0 : 10,
                    scale: activeCategory === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`inline-flex items-center gap-1 sm:gap-2 md:gap-2 mx-1 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full transition-all text-sm sm:text-base md:text-lg ${
                    activeCategory === index
                      ? "bg-linear-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30"
                      : ""
                  }`}
                >
                  <span className="text-sm sm:text-base md:text-lg">
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Typing text */}
        <motion.div className="max-w-2xl mx-auto relative">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 lg:mb-16 min-h-[50px] sm:min-h-[60px] md:min-h-[70px] lg:min-h-20">
            {displayText}
            <span className="ml-1 inline-block w-1 h-5 sm:w-2 sm:h-6 md:w-2.5 md:h-7 lg:w-3 lg:h-8 bg-cyan-400 animate-pulse"></span>
          </p>

          {/* Floating badges - hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:block">
            <div className="absolute -top-6 -right-8 md:-top-8 md:-right-10 lg:-top-10 lg:-right-12 ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1,
                  delay: 1,
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-linear-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base font-medium text-cyan-300 border border-cyan-500/30"
              >
                +1 Years Experience
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -left-8 md:-bottom-6 md:-left-10 lg:-bottom-8 lg:-left-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-linear-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-full text-xs sm:text-sm md:text-base font-medium text-pink-300 border border-pink-500/30"
              >
                5+ Projects
              </motion.div>
            </div>
          </div>

          {/* Mobile badges - simpler version for small screens */}
          <div className="sm:hidden flex justify-center gap-3 mt-4">
            <div className="px-3 py-1.5 bg-linear-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-300 border border-cyan-500/30">
              +1 Years of Experience
            </div>
            <div className="px-3 py-1.5 bg-linear-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-full text-xs font-medium text-pink-300 border border-pink-500/30">
              5+ Projects
            </div>
          </div>
        </motion.div>

        {/* Animated tech stack */}
        <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          {[
            { icon: "/c.svg", name: "C" },
            { icon: "/java.svg", name: "Java" },
            { icon: "/js.svg", name: "JavaScript" },
            { icon: "/python.svg", name: "Python" },
            { icon: "/dart.svg", name: "Dart" },
            { icon: "/react.svg", name: "React" },
            { icon: "/next.svg", name: "Next.js" },
            { icon: "/tailwind.svg", name: "Tailwind" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700 flex items-center justify-center p-2 sm:p-3 md:p-4 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col items-center "
        >
          <p className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4">
            Explore my Technical Skills
          </p>
          <div className="w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-16 lg:w-12 lg:h-20 rounded-3xl border-2 border-purple-500/50 flex justify-center z-10 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillText;

"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillProps {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
  proficiency: number;
}

const SkillDataProvider = ({ 
  src, 
  width, 
  height, 
  index,
  name,
  proficiency 
}: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Generate random position within a sphere for 3D effect
  const randomPosition = () => {
    const radius = 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return { x, y, z };
  };
  
  const position = randomPosition();
  
  // Animation variants
  const frontVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotateX: 90,
      rotateY: 90,
      rotateZ: 90,
      x: position.x,
      y: position.y,
      z: position.z
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      y: 0,
      z: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }
    }),
    hover: {
      scale: 1.15,
      z: 20,
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
      transition: { duration: 0.3 }
    }
  };
  
  const backVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: 180,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative z-10 w-24 h-24 perspective-1000 cursor-pointer"
      style={{ perspective: "1000px" }}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      onClick={() => setIsFlipped(!isFlipped)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Front side - Skill icon */}
      <motion.div
        className={`absolute w-full h-full backface-hidden rounded-2xl flex items-center justify-center ${
          isFlipped ? "hidden" : ""
        }`}
        // variants={frontVariants}
        style={{
          background: "linear-gradient(145deg, rgba(30, 30, 50, 0.8), rgba(20, 20, 40, 0.8))",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.img
            src={src}
            alt={name}
            width={width}
            height={height}
            className="w-full h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0
            }}
            transition={{ 
              scale: { duration: 0.3 },
              rotate: { duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }
            }}
          />
          
          {/* Hover effect */}
          {isHovered && !isFlipped && (
            <>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 z-0"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl blur-md z-0 animate-pulse"></div>
            </>
          )}
        </div>
      </motion.div>
      
      {/* Back side - Skill details */}
      <motion.div
        className={`absolute w-full h-full backface-hidden rounded-2xl flex flex-col items-center justify-center p-4 ${
          !isFlipped ? "hidden" : ""
        }`}
        variants={backVariants}
        style={{
          background: "linear-gradient(145deg, rgba(30, 30, 50, 0.9), rgba(20, 20, 40, 0.9))",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          transformStyle: "preserve-3d",
          transform: "rotateY(180deg)"
        }}
      >
        <h3 className="text-sm font-bold text-center text-white mb-2">{name}</h3>
        
        {/* Proficiency bar */}
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
        </div>
        
        <p className="text-xs text-cyan-400 font-medium">{proficiency}%</p>
        
        {/* Flip back indicator */}
        {/* <div className="absolute bottom-2 text-xs text-gray-400">
          Click to flip back
        </div> */}
      </motion.div>
      
      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              initial={{ 
                opacity: 0,
                x: Math.random() * 40 - 20,
                y: Math.random() * 40 - 20
              }}
              animate={{ 
                opacity: [0, 1, 0],
                x: Math.random() * 80 - 40,
                y: Math.random() * 80 - 40
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            ></motion.div>
          ))}
        </div>
      )}
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0
        }}
        style={{
          borderImage: "linear-gradient(45deg, #8b5cf6, #06b6d4) 1",
          boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)"
        }}
      />
    </motion.div>
  );
};

export default SkillDataProvider;
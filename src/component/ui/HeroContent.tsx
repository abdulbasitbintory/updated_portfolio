"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "./motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 mt-16 sm:mt-24 lg:mt-32 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-3 bg-black/20 rounded-lg flex items-center gap-2 opacity-90"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-sm xs:text-base sm:text-lg md:text-xl">
            Welcome to the world of mystery
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-cyan-500">
              {" "}
              The Best{" "}
            </span>
            Project Experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-400 my-4 max-w-2xl"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://docs.google.com/document/d/11c1jJXJzWuRSPPrmO6HIDNWeaLfCTuLJ/edit?usp=sharing&ouid=116695343558861600638&rtpof=true&sd=true" // <-- Update this path to your actual resume file
          className="relative z-2 py-3 px-6 md:py-4 md:px-8
            bg-linear-to-r from-purple-600 to-indigo-600
            text-white font-medium rounded-xl
            shadow-lg shadow-purple-500/20
            hover:from-purple-700 hover:to-indigo-700
            hover:shadow-purple-500/40 hover:scale-[1.02]
            transition-all duration-300
            group flex items-center justify-center gap-2
            w-full max-w-xs sm:max-w-sm"
        >
          Check Out My Resume!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="lg:h-[650px] lg:w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

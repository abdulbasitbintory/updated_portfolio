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
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 w-full z-20 max-w-7xl mx-auto gap-8 lg:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm w-fit"
        >
          <SparklesIcon className="text-primary h-4 w-4" />
          <span className="Welcome-text text-sm font-medium">
            Full-Stack Developer & Co-Founder
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground max-w-2xl text-balance"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              {" "}
              Digital{" "}
            </span>
            Products That Matter
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-muted-foreground max-w-lg leading-relaxed"
        >
          {"I'm"} a Full Stack Software Engineer crafting high-performance web
          applications, mobile experiences, and scalable software solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-3 mt-2"
        >
          <a
            href="https://docs.google.com/document/d/11c1jJXJzWuRSPPrmO6HIDNWeaLfCTuLJ/edit?usp=sharing&ouid=116695343558861600638&rtpof=true&sd=true"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all text-sm"
          >
            View Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-muted/30 transition-all text-sm"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Technology stack icons"
          height={500}
          width={500}
          className="lg:h-[550px] lg:w-[550px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

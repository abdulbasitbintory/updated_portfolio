"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "./ui/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex mt-10 flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-5">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] xs:text-[36px] sm:text-[46px] md:text-[56px] font-extrabold text-center text-gray-100"
        >
          {/* Main Title Line */}
          <div className="flex mt-10 lg:mt-20 flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>Performance</span>
            {/* Connector/Emphasis Element */}
            <span className="relative flex items-center justify-center">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 blur-8px opacity-70"></span>
              <span className="relative text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-purple-500 to-cyan-500 px-0.5">
                {" "}
                {/* Reduced padding */}&
              </span>
            </span>
            <span>Security</span>
          </div>
          {/* Optional Subtext */}
          <div className="mt-2 text-[14px] xs:text-[16px] sm:text-[20px] font-medium text-gray-300">
            Engineered Excellence
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-40px sm:w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="w-[60px] sm:w-[70px] z-10"
          />
        </div>

        <div className="Welcome-box px-12px sm:px-[15px] py-3px sm:py-4px z-20 border my-15px sm:my-20px border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] sm:text-[12px]">
            Encryption
          </h1>
        </div>
      </div>

      <div className="absolute z-20 bottom-40px px-5px">
        <div className="cursive text-[17px] sm:text-2xl font-medium text-center text-gray-500">
          Prioritizing data security through end-to-end encryption in projects.
        </div>
      </div>
      {/* Background Video Section */}
      {/* Updated Video Section for Better Mobile Coverage */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full h-full object-cover min-h-screen"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;

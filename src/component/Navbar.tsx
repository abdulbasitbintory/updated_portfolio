"use client";
import { Socials } from "@/data";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-[70px] fixed top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/90 backdrop-blur-md shadow-lg shadow-[#2A0E61]/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="globe4.svg"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-pulse"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-cyan-500">
              Abdul Basit's Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-medium font-bold text-gray-300 hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full bg-[#030014]/50 border border-[#7042f861] hover:bg-purple-500/20 transition-all duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="invert filter"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`xl:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-lg overflow-hidden ${isMenuOpen ? "py-4" : ""}`}
      >
        <div className="flex flex-col items-center gap-6 py-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-xl text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#030014]/50 border border-[#7042f861] hover:bg-purple-500/20 transition-all duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className=""
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

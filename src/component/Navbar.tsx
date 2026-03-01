"use client";

import { Socials } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Education", href: "/education" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
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
        <Link href="/" className="h-auto w-auto flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/globe4.svg"
                alt="Abdul Basit Portfolio Logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-pulse"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-linear-to-r from-primary to-accent hidden sm:inline">
              Abdul Basit
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors group ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.description}
              className="p-1.5 rounded-full bg-[#030014]/50 border border-border hover:bg-primary/20 transition-all duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="invert"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-8 h-8 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
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
        className={`lg:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-lg overflow-hidden ${
          isMenuOpen ? "py-4" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center gap-4 mt-4">
            <ThemeToggle />
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.description}
                className="p-2 rounded-full bg-[#030014]/50 border border-border hover:bg-primary/20 transition-all duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="invert"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Socials } from "@/data";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/globe4.svg"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-lg text-foreground">
                Abdul Basit
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Software Engineer skilled in designing and building robust,
              scalable applications with modern development practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Back to Top */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {Socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.description}
                    whileHover={{ y: -2 }}
                    className="w-10 h-10 rounded-xl border border-border bg-card/50 flex items-center justify-center hover:border-primary/50 transition-all"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={18}
                      height={18}
                      className="invert opacity-60"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdul Basit. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

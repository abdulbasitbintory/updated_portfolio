"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaArrowUp,
} from "react-icons/fa";
import { Socials } from "@/data";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative z-20 w-full pt-20 pb-10 overflow-hidden border-t border-gray-800/50"
      id="contact"
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(56, 2, 155, 0.2) 0%, rgba(7, 0, 20, 0.8) 70%)",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 -z-20 opacity-10 bg-grid-pattern"></div>
      <div className="absolute inset-0 -z-30 bg-stars"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaEnvelope className="text-purple-500" /> Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    required
                    disabled={isSubmitting}
                  />
                  <FaEnvelope className="absolute right-4 top-3.5 text-gray-400" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Abdul, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center gap-2 px-6 py-3.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg transform transition-all duration-300 group ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-purple-700 hover:to-indigo-700 hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <FaRocket className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-4 text-green-400"
                >
                  Thanks for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mt-1">
                  <FaEnvelope className="text-purple-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a
                    href="mailto:abdulsmainacc@gmail.com"
                    className="text-white hover:text-purple-300 transition"
                  >
                    abdulsmainacc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mt-1">
                  <FaPhone className="text-cyan-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a
                    href="tel:+923307090669"
                    className="text-white hover:text-cyan-300 transition"
                  >
                    +92 (330) 709 0669
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="text-indigo-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white hover:text-pink-300 transition">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
              <div>
                <h4 className="text-gray-400 text-sm mb-4">Social Media</h4>
                <div className="flex flex-wrap gap-3">
                  {Socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-gray-900/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all shadow-lg"
                    >
                      <Image
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                        className=" invert"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-2">My Newsletter</h4>
                <p className="text-gray-300 text-sm">
                  Subscribe for updates on my latest projects and articles.
                </p>
                <div className="mt-3 flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none text-sm"
                  />
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg text-sm transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent w-full my-10"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Image
                src="/globe4.svg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-3xl bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-cyan-500">
                Abdul Basit
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Software Engineer skilled in designing and building robust,
              scalable applications with modern development practices and
              technologies.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-purple-500/20"
            >
              <FaArrowUp className="text-white" />
            </button>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Abduls-Tech. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      ></motion.div>
    </footer>
  );
};

export default Footer;

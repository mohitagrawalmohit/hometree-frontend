"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white text-gray-800 shadow-md"
          : "bg-transparent text-white"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="relative flex items-center justify-center max-w-7xl mx-auto px-6 py-4">
        {/* 🍔 Hamburger (only visible on mobile + when not scrolled) */}
        {!scrolled && (
          <button
            onClick={toggleMenu}
            className="absolute left-4 p-3  bg-none hover:bg-none transition backdrop-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 text-[#9ac65b] hover:text-[#0296d6]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* 🏠 Logo Centered */}
        <Link href="/" className="flex justify-center items-center mx-auto z-[50]">
          <Image
            src="/hometreeLogo.png"
            alt="Logo"
            width={scrolled ? 220 : 220}
            height={scrolled ? 220 : 220}
            className="object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* 📋 Desktop Nav (visible only when scrolled) */}
        {scrolled && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute right-8">
            <Link href="" className="hover:text-[#0296d6] transition">
              Home
            </Link>
            <Link href="#aboutUs" className="hover:text-[#0296d6] transition">
              About Us
            </Link>
            <Link href="#projects" className="hover:text-[#0296d6] transition">
              Projects
            </Link>
            <Link
              href="#ContactUs"
              className="px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#9ac65b] to-[#0296d6] hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>

      

     {/* 🧭 Fullscreen Animated Menu (works for desktop + mobile) */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-white"
      style={{ zIndex: 9998 }}
    >
      <motion.nav
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center space-y-10 text-4xl md:text-5xl font-medium"
      >
        {[
          {name:"Home", href:""},
           { name: "About Us", href: "#aboutUs" },
          { name: "Projects", href: "#projects" },
         
          { name: "Contact Us", href: "#ContactUs" },
         
        ].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.4 }}
          >
            <Link
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="relative inline-block group"
            >
              {/* Hover Gradient Text */}
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-[#9ac65b] group-hover:to-[#0296d6] transition-all duration-500 ease-out"
              >
                {item.name}
              </motion.span>

              {/* Matching Gradient Underline */}
              {/* <motion.span
                layoutId={`underline-${item.name}`}
                className="absolute left-0 bottom-[-6px] h-[3px] bg-gradient-to-r from-[#9ac65b] to-[#0296d6] rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out"
              ></motion.span> */}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* ✖ Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-white/80 hover:text-white transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}

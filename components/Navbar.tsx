"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
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
       <button
  onClick={toggleMenu}
  className={`
    absolute left-4 p-3 transition z-[60]

    /* MOBILE — always visible */
    block

    /* DESKTOP — show when not scrolled, hide when scrolled */
    ${!scrolled ? "md:block" : "md:hidden"}
  `}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-13 h-13 text-[#00A17F] hover:text-[#BBD694]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

        {/* 🏠 Logo */}
<Link href="/" className="flex justify-center items-center mx-auto z-[50]">
  <Image
    src="/hometreeLogo.png"
    alt="Logo"
    width={scrolled ? 220 : 220}   // desktop width
    height={scrolled ? 100 : 100}
    className="
      object-contain 
      transition-all duration-300

      w-[140px]       /* 📱 Mobile size */
      md:w-[220px]    /* 💻 Desktop size */
    "
    priority
  />
</Link>


        {/* 📋 Desktop Navigation */}
        {scrolled && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute right-8">
            <Link href="/" className="hover:text-[#BBD694] transition">
              Home
            </Link>

            <Link href="#aboutUs" className="hover:text-[#BBD694] transition">
              About Us
            </Link>

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="hover:text-[#BBD694] transition flex items-center gap-1"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 mt-[1px]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 bg-white text-gray-800 shadow-lg rounded-md py-2 w-48 border border-gray-100"
                  >
                    <Link
                      href="/residential"
                      className="block px-5 py-2.5 text-sm hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] hover:text-white transition-all"
                    >
                      Residential Projects
                    </Link>
                    <Link
                      href="/commercial"
                      className="block px-5 py-2.5 text-sm hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] hover:text-white transition-all"
                    >
                      Commercial Projects
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#ContactUs"
              className="px-5 py-2 text-white font-semibold bg-gradient-to-r from-[#00A17F] to-[#BBD694] hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>

      {/* 🧭 Fullscreen Animated Mobile Menu */}
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
                { name: "Home", href: "/" },
                { name: "About Us", href: "#aboutUs" },
                { name: "Residential Projects", href: "/residential" },
                { name: "Commercial Projects", href: "/commercial" },
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
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white group-hover:from-[#00A17F] group-hover:to-[#BBD694] transition-all duration-500 ease-out"
                    >
                      {item.name}
                    </motion.span>
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

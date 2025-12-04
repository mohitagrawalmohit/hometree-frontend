"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  openForm: () => void; // 🔥 Receive popup trigger from RootLayout
}

export default function Navbar({ openForm }: NavbarProps) {
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
        scrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="relative flex items-center justify-center max-w-7xl mx-auto px-6 py-4">
        
        {/* MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className={`absolute left-4 p-3 transition z-[60] block ${
            !scrolled ? "md:block" : "md:hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-13 h-13 text-[#00A17F] hover:text-[#BBD694]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* LOGO */}
        <Link href="/" className="flex justify-center items-center mx-auto z-[50]">
          <Image
            src="/hometreeLogo.png"
            alt="Logo"
            width={220}
            height={100}
            className="w-[140px] md:w-[220px] object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        {scrolled && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium absolute right-8">

            <Link href="/" className="hover:text-[#BBD694] transition">
              Home
            </Link>

            

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-[#BBD694] transition flex items-center gap-1">
                Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                  className="w-4 h-4 mt-[1px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 bg-white text-gray-800 w-48 shadow-lg rounded-md py-2 border border-gray-100"
                  >
                    <Link href="/residential" className="block px-5 py-2.5 hover:bg-[#00A17F] hover:text-white transition">Residential Projects</Link>
                    <Link href="/commercial" className="block px-5 py-2.5 hover:bg-[#00A17F] hover:text-white transition">Commercial Projects</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/blogs" className="hover:text-[#BBD694] transition">
              Blogs
            </Link>
            
            <Link href="/about-us" className="hover:text-[#BBD694] transition">
              About Us
            </Link>

            {/* CONTACT US — USE ROOTLAYOUT POPUP */}
            <button
              onClick={openForm}
              className="px-5 py-2 text-white font-semibold bg-gradient-to-r from-[#00A17F] to-[#BBD694] hover:opacity-90 transition"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>

      {/* ======================
          MOBILE MENU
      ====================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex flex-col items-center justify-center text-white z-[9998]"
          >

            <motion.nav className="flex flex-col items-center space-y-10 text-4xl font-medium">
              {[
                { name: "Home", href: "/" },
               
                { name: "Residential Projects", href: "/residential" },
                { name: "Blogs", href: "/blogs" },
                 { name: "About Us", href: "/about-us" },
                { name: "Career", href: "/careers" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#BBD694] transition"
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE — OPEN POPUP */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openForm();
                }}
                className="text-[#00A17F] hover:text-[#BBD694]"
              >
                Contact Us
              </button>
            </motion.nav>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-white/80 text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SUB_HEADINGS = [
  "Most Rewarding Real Estate Opportunities",
  "Transform Your Life in the Next 3–5 Years",
  "Properties at Prices You’ve Never Seen Before",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-cycle subheading every 3 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % SUB_HEADINGS.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">

      {/* 📷 FALLBACK IMAGE (visible while video loads) */}
      <img
        src="/hero-fallback.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      />

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[2]"
      >
        <source src="/hero-bg-new.mp4" type="video/mp4" />
      </video>

      {/* 🔥 Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-[3]" />

      {/* 🌟 CONTENT */}
      <div className="relative z-[4] text-center px-6 flex flex-col items-center">

        {/* ⭐ MAIN STATIC HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl md:text-6xl font-extrabold tracking-tight
            bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text
            drop-shadow-2xl
          "
        >
          Noida's Smartest Investments
        </motion.h1>

        {/* 💫 Animated Sub-heading */}
        <div className="mt-6 h-10 md:h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-2xl font-medium text-white/90"
            >
              {SUB_HEADINGS[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        
      </div>
    </section>
  );
}

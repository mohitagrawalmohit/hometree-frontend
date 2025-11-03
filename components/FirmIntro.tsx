"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FirmIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8f9fa] to-[#eef4ee] py-12 px-6 md:px-20"
    >
      {/* Subtle Moving Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00A17F]/15 via-[#BBD694]/15 to-[#00A17F]/15 blur-3xl"
        style={{ y }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6"
        >
          Building India’s{" "}
          <span className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
            Most Trusted Real Estate Brand
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10"
        >
          At <strong>HomeTree</strong>, we’re not brokers — we’re curators of
          spaces that define modern living. Our philosophy goes beyond
          transactions; we build trust, elevate experiences, and connect people
          to homes that inspire belonging and growth. Rooted in innovation and
          driven by integrity, we are shaping the new language of real estate in
          India.
        </motion.p>

        {/* Gradient Divider + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center mb-14"
        >
          <div className="h-[3px] w-20 bg-gradient-to-r from-[#00A17F] to-[#BBD694] rounded-full mb-4"></div>
          <span className="uppercase tracking-wider text-sm font-semibold text-gray-700">
            Established Excellence Since 2015
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-gray-900">250+</h3>
            <p className="text-sm text-gray-500 mt-1">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">40+</h3>
            <p className="text-sm text-gray-500 mt-1">Cities Across India</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">50K+</h3>
            <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
          </div>
        </motion.div>
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00A17F]/20 to-[#BBD694]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#BBD694]/25 to-[#00A17F]/10 blur-3xl rounded-full" />
    </section>
  );
}

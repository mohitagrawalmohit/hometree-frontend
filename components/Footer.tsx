"use client";
import Image from "next/image";
import FooterForm from "../components/FooterForm";

export default function Footer() {
  return (
    <section
      className="relative py-20 md:py-28 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/footer-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        {/* FORM SECTION */}
        <FooterForm />

        {/* BRAND CONTENT */}
        <div className="text-white/90 leading-relaxed text-center md:text-left">

          {/* Logo */}
          <div className="mb-8 flex justify-center md:justify-start">
            <Image
              src="/hometreeLogo.png"
              alt="HomeTree Logo"
              width={190}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base max-w-md mx-auto md:mx-0 mb-6 text-white/80 leading-relaxed">
            Founded in 2003, <span className="font-semibold text-white">HomeTree</span> is
            one of India’s fastest-growing real estate brands—known for trust,
            innovation, and long-term value creation. We specialise in premium
            Noida developments built with design, sustainability, and modern living.
          </p>

          {/* ⭐ NEW BUTTON ADDED HERE ⭐ */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/careers"
              className="px-7 py-3 rounded-lg text-sm font-semibold text-white 
                        bg-gradient-to-r from-[#00A17F] to-[#BBD694] 
                        hover:opacity-90 transition-all shadow-md"
            >
              Join Our Team →
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-white/60 mt-10">
            Copyright © {new Date().getFullYear()} HomeTree Developers.
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

// components/ProjectDetail.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PropertyIn = {
  id: number;
  slug?: string;
  name: string;
  tagline: string;
  logo?: string;
  heroImage?: string;
  overviewBg?: string;
  section3Bg?: string;
  galleryBg?: string;
  features: { title: string; image?: string }[];
  gallery: string[];
  amenities: string[];
  description: string;
  locationText: string;
};

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function ProjectDetail({ property }: { property: PropertyIn }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const galleryRef = useRef<HTMLDivElement | null>(null);

  function scrollSlider(dir: "prev" | "next") {
    const el = galleryRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // client-side validation (simple)
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <div className="relative w-full"
    style={{
      backgroundImage: "url('/project/projectbg.jpg')", // 👈 replace with your global bg
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* 1. Hero Banner (full width) */}
      {/* 1. Hero Banner (clean version — only background + centered logo) */}
<section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
  {/* Background Image */}
  {property.heroImage && (
    <Image
      src={property.heroImage}
      alt={property.name}
      fill
      className="object-cover"
      priority
    />
  )}

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Centered Logo */}
  {property.logo && (
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <div className="w-36 h-36 md:w-48 md:h-48  flex items-center justify-center shadow-lg">
        <Image
          src={property.logo}
          alt={`${property.name} logo`}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  )}
</section>


      {/* 2. Overview Section full width with bg image */}
<section
  className="relative py-16"
  style={{
    backgroundImage: property.overviewBg ? `url(${property.overviewBg})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* LEFT: Project Name + Tagline */}
      <div className="lg:col-span-5 text-white py-30">
        <h2 className="text-4xl md:text-5xl font-bold">{property.name}</h2>
        <p className="mt-3 text-lg md:text-xl opacity-90">{property.tagline}</p>
      </div>

      {/* RIGHT: Description, Details */}
      <div className="lg:col-span-7 text-white bg-white/10 backdrop-blur-sm py-16 px-6  shadow-lg">
        <div className="space-y-7 text-sm md:text-base">
          {/* Description */}
          <div>
            
            <p className="text-gray-100 leading-relaxed">{property.description}</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Location</h4>
            <p className="text-gray-100">{property.locationText}</p>
          </div>

          {/* Unit Types */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Unit Types</h4>
            <p className="text-gray-100">2, 3 & 4 BHK Apartments</p>
          </div>

          {/* Possession */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Possession</h4>
            <p className="text-gray-100">Expected: 2026 Onwards</p>
          </div>
        </div>
      </div>
    </div>

    {/* Centered CTA */}
    <div className="flex justify-left mt-12">
      <button
        style={{
          background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
        }}
        className="px-10 py-3  text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
      >
        Enquire Now
      </button>
    </div>
  </div>
</section>


      {/* 4. Gallery Section full width with bg image (slider + enquire CTA) */}
      <section
        className="relative py-14 bg-none"
        
      >
        
       
  <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
             <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center mb-10">
    
    {/* LEFT TEXT BLOCK */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
        LIVE THE RHYTHM OF <br />
        <span className="text-white">THE CITY</span>
      </h2>

      <p className="mt-6 text-white text-base md:text-lg leading-relaxed max-w-md">
        From elegant 2BHK residences to spacious penthouses, every home in Noida’s 
        most sought-after projects is crafted for light, comfort, and timeless sophistication. 
        Experience the perfect blend of nature, architecture, and modern lifestyle.
      </p>

      <button className="mt-8 border border-white text-white hover:white hover:text-white transition-all duration-300 px-8 py-3 font-semibold text-sm tracking-wider uppercase">
        Enquire Now
      </button>
    </div>

    {/* RIGHT SIDE STATEMENT */}
    <div className="md:text-right">
      <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug">
        Noida’s <br className="hidden md:block" />
        <span className="text-white">Residential Skyline,</span>
        <br className="hidden md:block" />
        Reimagined
      </h3>
    </div>
  </div>
          <div className="flex items-center justify-between mb-6 px-120">
            <h3 className="text-2xl md:text-3xl text-white font-bold">Explore Gallery</h3>
            
          </div>

          <div className="relative px-25">
            <div
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 "
            >
              {property.gallery.map((g, idx) => (
                <div key={idx} className="snap-center flex-[0_0_80%] md:flex-[0_0_100%]  overflow-hidden">
                  <div className="relative h-130">
                    <Image src={g} alt={`g-${idx}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button onClick={() => scrollSlider("prev")} className="bg-none p-2  text-8xl text-white">
                ‹
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={() => scrollSlider("next")} className="bg-none p-2  text-8xl text-white">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Amenities / Features (luxury minimalist style) */}
<section className="relative py-20 bg-none text-white overflow-hidden">
  {/* Subtle wave overlay (optional background pattern) */}
  <div className="absolute inset-0 bg-black/80" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
    {/* Description */}
    <p className="max-w-3xl mx-auto text-gray-200 text-base md:text-lg mb-12 leading-relaxed">
      Great Value Real is not just a place to live — it’s a community that defines
      modern living in Noida. Designed around connection, light, and lifestyle,
      our projects open the door to a sophisticated, vibrant residential experience.
    </p>

    {/* Amenities Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-6 mb-16">
      {property.amenities.map((a, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center space-y-4 group"
        >
          {/* Icon (placeholder — replace with your SVGs) */}
          <div className="w-14 h-14 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 opacity-80 group-hover:opacity-100 transition"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0115 0v6.75H4.5V12zM9 21h6"
              />
            </svg>
          </div>

          {/* Label */}
          <p className="text-sm md:text-base font-medium group-hover:text-[#BBD694] transition">
            {a}
          </p>
        </div>
      ))}
    </div>

    {/* Enquire Button */}
    <button className="border border-white text-white hover:text-[#2E2725] hover:bg-white px-8 py-3 tracking-wide font-semibold uppercase text-sm transition-all duration-300">
      Enquire Now
    </button>
  </div>
</section>


      {/* 6. Location Section (stylized static map) */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Location</h3>
          <p className="text-white mb-6 max-w-2xl">{property.locationText}</p>

          <div className="w-full  overflow-hidden shadow">
            {/* Replace with an actual static map image or an embedded map later */}
            <div className="relative h-100 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">Map placeholder — add a static map image or embed Google Maps</div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

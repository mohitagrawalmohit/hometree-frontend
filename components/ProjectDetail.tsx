// components/ProjectDetail.tsx
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import type { PropertyIn } from "@/data/projects";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function ProjectDetail({ property }: { property: PropertyIn }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const galleryRef = useRef<HTMLDivElement | null>(null);

  // Autoplay control states
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragTimeoutRef = useRef<any>(null);

  // ==========================================================================================
  // ⭐ AUTOPLAY LOGIC (One image at a time, pause on hover, pause on drag, resume in 3 sec)
  // ==========================================================================================
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    let interval: any;

    const startAutoplay = () => {
      interval = setInterval(() => {
        if (isHovered || isDragging) return;

        const maxScroll = el.scrollWidth - el.clientWidth;

        // If at end → restart
        if (el.scrollLeft + el.clientWidth >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
        }
      }, 2000);
    };

    startAutoplay();

    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Pause during dragging
  const handleDragStart = () => {
    setIsDragging(true);
    clearTimeout(dragTimeoutRef.current);
  };

  // Resume after 3 seconds once drag stops
  const handleDragEnd = () => {
    dragTimeoutRef.current = setTimeout(() => {
      setIsDragging(false);
    }, 3000);
  };

  // ==========================================================================================
  // Manual Arrow Scroll
  // ==========================================================================================
  function scrollSlider(dir: "prev" | "next") {
    const el = galleryRef.current;
    if (!el) return;

    const w = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  }

  // ==========================================================================================
  // Contact Form (same as before)
  // ==========================================================================================
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  // ==========================================================================================
  // UI STARTS HERE
  // ==========================================================================================

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: "url('/project/projectbg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden flex items-center justify-center">
        {property.heroImage && (
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-black/60" />

        {property.logo && (
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="w-36 h-36 md:w-70 md:h-20 flex items-center justify-center shadow-lg">
              <Image
                src={property.logo}
                alt={`${property.name} logo`}
                width={600}
                height={600}
                className="object-contain"
              />
              
          
            </div>
            <div className="w-36 h-36 md:w-100 md:h-48 flex items-center justify-center shadow-lg">
<h2 className="text-4xl text-white md:text-5xl font-bold">{property.name}</h2>
               
            </div>
          </div>
        )}
      </section>

      {/* OVERVIEW SECTION */}
<section
  className="relative py-16"
  style={{
    backgroundImage: property.overviewBg
      ? `url(${property.overviewBg})`
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

      {/* LEFT */}
      <div className="lg:col-span-5 text-white flex flex-col justify-between">
        
        {/* Title & tagline */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">{property.name}</h2>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            {property.tagline}
          </p>
        </div>

  {/* CTA Button Section */}
<div className="mt-28">

  {/* 🔘 Container that controls width — same as Enquire Now */}
  <div className="w-fit flex flex-col gap-4">

    {/* Enquire Now */}
    <button
      style={{
        background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
      }}
      className="px-5 py-2 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition w-full"
    >
      Enquire Now
    </button>

    {/* ⭐ Download Brochure (same width & height) */}
    <button
      className="
        px-5 py-2
        text-white 
        font-semibold text-lg 
        border-[2px] border-white 
        bg-transparent 
        hover:bg-white hover:text-black 
        transition 
        w-full
      "
    >
      Brochure
    </button>

  </div>

</div>


      </div>

      {/* RIGHT */}
      <div className="lg:col-span-7 text-white bg-white/10 backdrop-blur-sm py-10 px-6 shadow-lg">
        <div className="space-y-7">
          <p className="text-gray-100 leading-relaxed">
            {property.description}
          </p>

          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Location</h4>
            <p className="text-gray-100">{property.locationText}</p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Unit Types</h4>
            <p className="text-gray-100">{property.unitType}</p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-2">Possession</h4>
            <p className="text-gray-100">{property.possession}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= GALLERY SECTION ================= */}
      <section className="relative py-14">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

          {/* Why Invest + Configurations */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">

            {/* WHY INVEST */}
            {property.whyInvest && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Invest in {property.name}
                </h2>

                <ul className="space-y-4">
                  {property.whyInvest.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white text-lg">
                      <span className="text-[#BBD694] text-xl">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CONFIGURATIONS */}
            {property.configurations && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Configurations & Sizes
                </h2>

                <div className="overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                  <table className="w-full text-white text-base">
                    <thead className="bg-white/20">
                      <tr>
                        <th className="py-3 px-4">Configuration</th>
                        <th className="py-3 px-4">Size</th>
                        <th className="py-3 px-4">Residences</th>
                      </tr>
                    </thead>

                    <tbody>
                      {property.configurations.map((c, i) => (
                        <tr key={i} className={i % 2 ? "bg-white/5" : "bg-white/10"}>
                          <td className="py-3 px-4">{c.type}</td>
                          <td className="py-3 px-4">{c.size}</td>
                          <td className="py-3 px-4">{c.residences}</td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>
            )}

          </div>

          {/* Gallery Header */}
          <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
            Explore Gallery
          </h3>

          {/* ================= SLIDER ================= */}
<div
  className="relative w-full"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="relative flex items-center">

    {/* Left Arrow */}
    <button
      onClick={() => scrollSlider("prev")}
      className="
        absolute 
        -left-6 
        sm:-left-8 
        md:-left-12 
        text-4xl 
        sm:text-5xl 
        md:text-6xl 
        text-white 
        hover:text-[#BBD694] 
        z-20
      "
    >
      ‹
    </button>

    {/* Slider Track */}
    <div
      ref={galleryRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      className="
        flex gap-6 
        overflow-x-auto 
        scroll-smooth 
        snap-x 
        snap-mandatory 
        w-full 
        py-4
      "
    >
      {property.gallery.map((g, idx) => (
        <div
          key={idx}
          className="
            snap-center 
            flex-[0_0_100%]   /* always 1 image */
          "
        >
          <div
            className="
              relative 
              w-full
              h-[220px]       /* ⭐ mobile  */
              sm:h-[300px]    /* ⭐ small phones/tablets */
              md:h-[380px]    /* ⭐ tablets */
              lg:h-[450px]    /* ⭐ large screens */
              xl:h-[520px]    /* ⭐ desktops / big screens */
              overflow-hidden 
            "
          >
            <Image
              src={g}
              alt={`gallery-${idx}`}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      onClick={() => scrollSlider("next")}
      className="
        absolute 
        -right-6 
        sm:-right-8 
        md:-right-12 
        text-4xl 
        sm:text-5xl 
        md:text-6xl
        text-white 
        hover:text-[#BBD694] 
        z-20
      "
    >
      ›
    </button>

  </div>
</div>

        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="max-w-3xl mx-auto text-gray-200 mb-12 text-3xl leading-relaxed">
            Great Value Real is not just a place to live…
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-6 mb-16">
            {property.amenities.map((a, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 group">
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 opacity-80 group-hover:opacity-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12a7.5 7.5 0 0115 0v6.75H4.5V12zM9 21h6"
                    />
                  </svg>
                </div>

                <p className="text-sm md:text-base font-medium group-hover:text-[#BBD694] transition">
                  {a}
                </p>
              </div>
            ))}
          </div>

          <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
            Enquire Now
          </button>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Location
          </h3>

          <p className="text-white max-w-2xl text-2xl mb-6">{property.locationText}</p>

          <div className="w-full shadow-lg overflow-hidden">
            <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[550px] xl:h-[650px] bg-gray-900">
              {property.map ? (
                <Image
                  src={property.map}
                  alt={`${property.name} Location`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Map placeholder — add property.map
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

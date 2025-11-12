"use client";

import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function FounderSection() {
  return (
    <section
      className="relative py-24 md:py-32 text-gray-900"
      style={{
        backgroundImage: "linear-gradient(to right, #ffffff, #f8f8f8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text Content */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            MEET OUR{" "}
            <span className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
              FOUNDER
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Amit <span className="font-normal text-gray-600">(Founder & Real Estate Consultant)</span>
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            A visionary with over 22 years of experience in Indian real estate,
            Amit has been instrumental in connecting thousands of clients to the
            right opportunities. He believes in <strong>educating, not just selling</strong>, and has
            built <span className="font-semibold text-gray-900">HomeTree</span> as a trusted, transparent, and
            human-first brand.
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 pl-4 border-[#00A17F] italic text-gray-700 text-lg leading-relaxed mb-10">
            “Every property has a story — and every client deserves the right one.”
            <br />
            <span className="not-italic text-sm text-gray-500">– Amit</span>
          </blockquote>

          {/* CTA */}
          <button
            className="flex items-center gap-2 text-base font-medium text-white px-6 py-3 shadow-md hover:opacity-90 transition-all"
            style={{
              background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
            }}
          >
            Watch Founder Stories <ArrowRightCircle size={20} />
          </button>
        </div>

        {/* RIGHT: Founder Image */}
        <div className="relative w-full h-[550px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/founder.webp" // replace with your founder image
            alt="Amit – Founder of HomeTree"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Overlay Accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Subtle name tag overlay */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-md shadow-md">
            <p className="text-gray-800 font-semibold">Amit</p>
            <p className="text-sm text-gray-500 -mt-1">Founder, HomeTree</p>
          </div>
        </div>
      </div>
    </section>
  );
}

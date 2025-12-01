

"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FooterForm from "@/components/FooterForm";

 

export default function BlogPage() {
   const [showForm, setShowForm] = useState(false);
  return (
    <main className="w-full bg-white text-black">

      {/* ============================
    HERO SECTION (BIGGER IMAGES)
============================ */}
<section className="relative w-full bg-[#F8F9FA] py-20 md:py-28 border-b border-black/10">
  <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

    {/* MAIN TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight mb-6
                 bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent"
    >
      M3M vs Experion Noida Comparison 2025
    </motion.h1>

    <p className="text-black/60 text-lg md:text-xl max-w-3xl mx-auto">
      Best Projects • Pricing • Amenities • Investment Guide  
      <br />Exclusive Report by <span className="font-semibold text-black">Hometree</span>.
    </p>

    {/* COMPARISON IMAGES */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">

      {/* LEFT IMAGE */}
      <a href="/property/m3m-jacob-and-co" className="flex justify-center group">
        <div className="w-full max-w-[750px] relative">
          <Image
            src="/homepage/projects/m3m-jacob.webp"
            alt="M3M Noida"
            width={1600}
            height={1000}
            className="rounded-2xl shadow-xl object-cover h-[450px] md:h-[520px] w-full 
                       group-hover:opacity-90 transition"
          />
          <span className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            View M3M Project →
          </span>
        </div>
      </a>

      {/* VS TEXT */}
      <div className="flex justify-center items-center">
        <span className="text-[80px] md:text-[140px] font-extrabold text-[#00A17F] tracking-tight select-none">
          VS
        </span>
      </div>

      {/* RIGHT IMAGE */}
      <a href="/property/experion-151-noida" className="flex justify-center group">
        <div className="w-full max-w-[750px] relative">
          <Image
            src="/homepage/projects/experion-151.webp"
            alt="Experion Noida"
            width={1600}
            height={1000}
            className="rounded-2xl shadow-xl object-cover h-[450px] md:h-[520px] w-full 
                       group-hover:opacity-90 transition"
          />
          <span className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            View Experion Project →
          </span>
        </div>
      </a>

    </div>
  </div>
</section>



      {/* ============================
          MAIN CONTENT
      ============================ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* ============================
              INTRODUCTION
          ============================ */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              M3M vs Experion Noida: Which Developer Leads in 2025?
            </h2>

            <p className="text-black/70 text-lg leading-relaxed">
              The Noida real estate market is rising rapidly, becoming one of the most stable
              and high-potential investment zones in India. Two real estate giants—
              <a href="/property/m3m-jacob-and-co" className="text-[#00A17F] font-semibold underline"> M3M </a>
              and  
              <a href="/property/experion-151-noida" className="text-[#00A17F] font-semibold underline"> Experion Developers </a> 
              —are leading the luxury and premium residential segment.
            </p>
          </div>



          {/* ============================
              DEVELOPER OVERVIEW
          ============================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <Image
              src="/blogimages/developeroverview.webp"
              width={800}
              height={500}
              alt="Developers"
              className="rounded-xl shadow-lg w-full object-cover"
            />

            <div className="space-y-4">

              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                1. Developer Overview
              </h3>

              <div className="bg-[#F4F6F7] border border-black/10 p-6 rounded-lg space-y-3">
                <h4 className="font-bold text-[#00A17F]">
                  <a href="/property/m3m-jacob-and-co" className="hover:underline">
                    M3M India
                  </a>
                </h4>
                <p className="text-black/70">
                  Known for bold architecture, luxury skyscrapers, and future-ready amenities.
                </p>
              </div>

              <div className="bg-[#F4F6F7] border border-black/10 p-6 rounded-lg space-y-3">
                <h4 className="font-bold text-[#00A17F]">
                  <a href="/property/experion-151-noida" className="hover:underline">
                    Experion Developers
                  </a>
                </h4>
                <p className="text-black/70">
                  Focused on wellness, spacious homes, green environments, and lifestyle comfort.
                </p>
              </div>
            </div>
          </div>



          {/* ============================
    LOCATION ADVANTAGE
============================ */}
          <div className="space-y-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black flex items-center gap-3">
              <span className="w-[6px] h-10 bg-gradient-to-b from-[#00A17F] to-[#BBD694] rounded-full"></span>
              2. Location Advantage
            </h3>

            <p className="text-black/70 text-lg leading-relaxed">
              Both developers are positioned along the high-growth Noida–Greater Noida Expressway,
              offering unmatched accessibility to businesses, IT parks, schools, malls, and upcoming
              mega infrastructure including the Noida Airport.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="border border-black/10 bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-[#00A17F] mb-3">
                  M3M Location Highlights
                </h4>
                <ul className="text-black/70 space-y-2">
                  <li>• Prime Expressway frontage</li>
                  <li>• Close to DLF Mall of India</li>
                  <li>• Ideal for luxury-segment and NRI buyers</li>
                </ul>
              </div>

              <div className="border border-black/10 bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-[#BBD694] mb-3">
                  Experion Location Highlights
                </h4>
                <ul className="text-black/70 space-y-2">
                  <li>• Green calm sectors like 45 & 150</li>
                  <li>• Superior end-user livability</li>
                  <li>• Family-first environment</li>
                </ul>
              </div>
            </div>
          </div>



          {/* ============================
              BEST PROJECTS WITH CTA
          ============================ */}
          <div className="space-y-10">

            <h3 className="text-3xl font-semibold text-black">
              3. Best Projects by M3M & Experion
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* M3M */}
              <div className="bg-[#F7F8F9] rounded-xl p-6 border border-black/10">
                <h4 className="text-xl font-semibold mb-4 text-[#00A17F]">
                  <a href="/property/m3m-jacob-and-co">Top M3M Projects</a>
                </h4>
                <ul className="space-y-2 text-black/70">
                  <li>• M3M Sector 97 Noida</li>
                  <li>• M3M Expressway Noida</li>
                  <li>• 3/4/5 BHK Luxury Apartments</li>
                </ul>

                <a
                  href="/property/m3m-jacob-and-co"
                  className="block mt-4 text-[#00A17F] font-semibold underline"
                >
                  View M3M Project →
                </a>
              </div>

              {/* Experion */}
              <div className="bg-[#F7F8F9] rounded-xl p-6 border border-black/10">
                <h4 className="text-xl font-semibold mb-4 text-[#00A17F]">
                  <a href="/property/experion-151-noida">Top Experion Projects</a>
                </h4>

                <ul className="space-y-2 text-black/70">
                  <li>• Experion Elements Noida</li>
                  <li>• Experion Ready-to-Move Apartments</li>
                  <li>• Wellness-Focused Communities</li>
                </ul>

                <a
                  href="/property/experion-151-noida"
                  className="block mt-4 text-[#00A17F] font-semibold underline"
                >
                  View Experion Project →
                </a>
              </div>
            </div>
          </div>



          {/* ============================
              PRICE COMPARISON
          ============================ */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-black">4. Price Comparison</h3>

            <div className="overflow-x-auto bg-[#F8F9FA] border border-black/10 rounded-xl">
              <table className="w-full text-left text-black/70">
                <tbody>
                  <tr className="border-b border-black/10">
                    <td className="py-4 px-4 font-semibold">M3M Pricing</td>
                    <td className="py-4 px-4">₹1.5 Cr – ₹5 Cr+</td>
                  </tr>
                  <tr className="border-b border-black/10">
                    <td className="py-4 px-4 font-semibold">Experion Pricing</td>
                    <td className="py-4 px-4">₹1 Cr – ₹2 Cr</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold">Best For</td>
                    <td className="py-4 px-4">
                      M3M = Prestige & Expressway | Experion = Value & Livability
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



          {/* ============================
              AMENITIES
          ============================ */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-black">
              5. Amenities & Lifestyle
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              <div className="bg-[#F7F8F9] p-6 rounded-xl border border-black/10">
                <h4 className="text-[#00A17F] font-semibold mb-4">M3M Amenities</h4>
                <ul className="space-y-2 text-black/70">
                  <li>Smart home automation</li>
                  <li>Infinity pool + Rooftop decks</li>
                  <li>Concierge, valet & clubhouse</li>
                </ul>

                <a href="/property/m3m-jacob-and-co" className="underline text-[#00A17F] mt-3 block">
                  Explore M3M →
                </a>
              </div>

              <div className="bg-[#F7F8F9] p-6 rounded-xl border border-black/10">
                <h4 className="text-[#00A17F] font-semibold mb-4">Experion Amenities</h4>
                <ul className="space-y-2 text-black/70">
                  <li>Large green spaces</li>
                  <li>Sports courts, wellness zones</li>
                  <li>Family-centric architecture</li>
                </ul>

                <a href="/property/experion-151-noida" className="underline text-[#00A17F] mt-3 block">
                  Explore Experion →
                </a>
              </div>
            </div>
          </div>



          {/* ============================
              INVESTMENT OUTLOOK + LINKS
          ============================ */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-black">6. Investment Outlook</h3>

            <p className="text-black/70">
              M3M → Perfect for investors seeking **rapid appreciation** and premium resale value.
              <br />
              <a href="/property/m3m-jacob-and-co" className="text-[#00A17F] underline">
                Explore M3M Investment →
              </a>
            </p>

            <p className="text-black/70">
              Experion → Excellent **5–7% rental yields**, long-term stability & end-user demand.
              <br />
              <a href="/property/experion-151-noida" className="text-[#00A17F] underline">
                Explore Experion Investment →
              </a>
            </p>
          </div>



             {/* ============================
              FINAL SUMMARY + CTA
          ============================ */}
          <div className="bg-[#F5F5F5] border border-black/10 p-10 rounded-xl text-center space-y-6">

            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#00A17F] to-[#BBD694] bg-clip-text text-transparent">
              Need Expert Guidance?
            </h3>

            <p className="text-black/70 text-lg max-w-2xl mx-auto">
              Hometree provides <span className="font-semibold text-black">unbiased, research-backed, and ground-verified</span>  
              guidance to help you choose the best property.
            </p>

            {/* CTA BUTTONS → open popup form */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-[#00A17F] to-[#6BC59D] hover:opacity-90 shadow-md transition"
              >
                Talk to a Property Expert
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 rounded-lg border border-[#00A17F] text-[#00A17F] font-semibold text-lg hover:bg-[#00A17F] hover:text-white transition shadow-sm"
              >
                Get Callback
              </button>

            </div>

          </div>
        </div>
      </section>




      {/* ============================
            POPUP FORM MODAL
      ============================ */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center pt-10 z-[99999]"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow-lg hover:bg-[#F2F2F2]"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>

              {/* FORM */}
              <FooterForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";
import Image from "next/image";

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

        {/* ================= FORM CARD ================= */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
          <h3 className="text-center text-[13px] tracking-[3px] font-semibold text-white/90 uppercase mb-8">
            Register Your Interest
          </h3>

          <form className="space-y-5">

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-white/80 text-xs tracking-wide">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-white/40 text-white 
                           placeholder-white/60 px-4 py-3 rounded-md text-sm
                           focus:outline-none focus:border-[#BBD694] transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-white/80 text-xs tracking-wide">Phone Number</label>
              <div className="flex items-center border border-white/40 rounded-md px-4 py-3 
                              bg-transparent focus-within:border-[#BBD694] transition-all">
                <span className="mr-3 text-white/80 text-sm">🇮🇳 +91</span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="bg-transparent w-full outline-none text-white 
                             placeholder-white/60 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white/80 text-xs tracking-wide">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border border-white/40 text-white 
                           placeholder-white/60 px-4 py-3 rounded-md text-sm
                           focus:outline-none focus:border-[#BBD694] transition-all"
              />
            </div>

            {/* Dropdown */}
            <div className="space-y-2">
              <label className="text-white/80 text-xs tracking-wide">I am interested in</label>
              <select
                className="w-full bg-transparent border border-white/40 text-white/90 
                           px-4 py-3 rounded-md text-sm
                           focus:outline-none focus:border-[#BBD694] transition-all"
              >
                <option className="text-black" value="">
                  Select an option
                </option>
                <option className="text-black" value="Residential">Residential</option>
                <option className="text-black" value="Commercial">Commercial</option>
                <option className="text-black" value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-white/70 leading-relaxed">
              By submitting, you agree to allow HomeTree to process and contact you
              regarding this enquiry. Read our{" "}
              <span className="underline cursor-pointer hover:text-[#BBD694]">
                Terms & Conditions
              </span>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-white text-white uppercase tracking-[2px] py-3 
                         text-sm font-semibold rounded-md hover:bg-white hover:text-black 
                         transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* ================= BRAND CONTENT ================= */}
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

          <p className="text-sm md:text-base max-w-md mx-auto md:mx-0 mb-6 text-white/80 leading-relaxed">
            Founded in 2003, <span className="font-semibold text-white">HomeTree</span> is
            one of India’s fastest-growing real estate brands—known for trust,
            innovation, and long-term value creation. We specialise in premium
            Noida developments built around design, sustainability, and modern living.
          </p>

          <p className="text-xs md:text-sm text-white/60 mt-10">
            Copyright © {new Date().getFullYear()} HomeTree Developers.  
            All rights reserved.
          </p>

        </div>
      </div>
    </section>
  );
}

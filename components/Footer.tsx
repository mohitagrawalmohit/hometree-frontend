"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      className="relative py-20 md:py-28 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/footer-bg.jpeg')", // Replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT: Enquiry Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 sm:p-8 shadow-lg w-full">
          <h3 className="text-center text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] font-semibold text-white/90 uppercase mb-6">
            Register Your Interest
          </h3>

          <form className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-white/50 text-white placeholder-white/70 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#BBD694] transition"
            />

            {/* Phone Input */}
            <div className="flex items-center border border-white/50 rounded-md px-4 py-3 text-sm text-white/70 focus-within:border-[#BBD694] transition">
              <span className="mr-3">🇮🇳 +91</span>
              <input
                type="tel"
                placeholder="XXX XXX XXXX"
                className="bg-transparent w-full outline-none text-white placeholder-white/60"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white/50 text-white placeholder-white/70 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#BBD694] transition"
            />

            {/* Select Dropdown */}
            <select
              className="w-full bg-transparent border border-white/50 text-white/80 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#BBD694] transition"
            >
              <option className="text-black" value="">
                Information about the project
              </option>
              <option className="text-black" value="Residential">
                Residential Enquiry
              </option>
              <option className="text-black" value="Commercial">
                Commercial Enquiry
              </option>
            </select>

            {/* Disclaimer */}
            <p className="text-[11px] text-white/70 leading-relaxed">
              I agree to share my data with HomeTree, and allow HomeTree or its
              affiliates to collect, control, or process my data to communicate
              with me. For more details, view our{" "}
              <span className="underline cursor-pointer hover:text-[#BBD694]">
                Terms & Conditions
              </span>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-white text-white uppercase tracking-[2px] sm:tracking-[3px] py-3 text-sm font-semibold hover:bg-white hover:text-[#1a1a1a] transition-all rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT: Brand Description */}
        <div className="text-white/90 leading-relaxed text-center md:text-left px-2 md:px-0">
          <div className="mb-8 flex justify-center md:justify-start">
            <Image
              src="/hometreeLogo.png"
              alt="HomeTree Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

          <p className="text-sm md:text-base max-w-md mx-auto md:mx-0 mb-6 text-white/80">
            Founded in 2003,{" "}
            <span className="font-semibold text-white">HomeTree</span> is one of
            India’s fastest-growing real estate brands, redefining residential
            experiences through innovation, transparency, and design excellence.
            Our developments in Noida bring together modern comfort, sustainable
            architecture, and refined urban living.
          </p>

          <p className="text-xs md:text-sm text-white/60 mt-6">
            Copyright © {new Date().getFullYear()} HomeTree Developers. All
            rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      className="relative py-24 md:py-32 text-white"
      style={{
        backgroundImage: "url('/footer-bg.jpeg')", // Replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Enquiry Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-8 shadow-lg">
          <h3 className="text-center text-sm tracking-[3px] font-semibold text-white/90 uppercase mb-6">
            Register Your Interest
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-white/50 text-white placeholder-white/70 px-4 py-3 text-sm focus:outline-none focus:border-[#BBD694] transition"
            />

            <div className="flex items-center border border-white/50 px-4 py-3 text-sm text-white/70 focus-within:border-[#BBD694] transition">
              <span className="mr-3">🇮🇳 +91</span>
              <input
                type="tel"
                placeholder="XXX XXX XXXX"
                className="bg-transparent w-full outline-none text-white placeholder-white/60"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white/50 text-white placeholder-white/70 px-4 py-3 text-sm focus:outline-none focus:border-[#BBD694] transition"
            />

            <select
              className="w-full bg-transparent border border-white/50 text-white/80 px-4 py-3 text-sm focus:outline-none focus:border-[#BBD694] transition"
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

            <p className="text-[11px] text-white/70 leading-relaxed">
              I agree to share my data with HomeTree, and allow HomeTree or its
              affiliates to collect, control, or process my data to communicate
              with me. For more details, view our{" "}
              <span className="underline cursor-pointer hover:text-[#BBD694]">
                Terms & Conditions
              </span>.
            </p>

            <button
              type="submit"
              className="w-full border border-white text-white uppercase tracking-[3px] py-3 text-sm font-semibold hover:bg-white hover:text-[#1a1a1a] transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT: Brand Description */}
        <div className="text-white/90 leading-relaxed">
          <div className="mb-8">
            <Image
              src="/hometreeLogo.png"
              alt="HomeTree Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          <p className="text-sm md:text-base max-w-md mb-6">
            Founded in 2020, <span className="font-semibold text-white">HomeTree</span> 
            is one of India’s fastest-growing real estate brands, redefining 
            residential experiences through innovation, transparency, and design excellence. 
            Our developments in Noida bring together modern comfort, sustainable architecture, 
            and refined urban living.
          </p>

          <p className="text-sm text-white/70 mt-6">
            Copyright © {new Date().getFullYear()} HomeTree Developers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

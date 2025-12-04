"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* ============================
          HERO SECTION — JOIN OUR TEAM
      ============================ */}
      <section className="relative w-full h-[320px] md:h-[480px] lg:h-[520px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/career-banner.jpg" // 👉 replace with your hero image
            alt="Join Our Team at Hometree"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                       bg-clip-text text-transparent mb-4"
          >
            Join Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white/90 text-base md:text-lg max-w-xl"
          >
            Be part of a young, driven and transparent real estate team shaping 
            the future of investments in Noida.
          </motion.p>
        </div>
      </section>

      {/* ============================
          SECTION 2 — WHY WORK WITH US
      ============================ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold 
                           bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                           bg-clip-text text-transparent">
              Do You Want a New Challenge in Real Estate?
            </h2>

            <p className="text-black/70 text-base md:text-lg leading-relaxed">
              Junior, confirmed or senior — we are open to welcoming new talents 
              to our team if you demonstrate seriousness, motivation, and skill.
            </p>

            <p className="text-black/70 text-base md:text-lg leading-relaxed">
              We offer challenging opportunities to develop your experience. 
              We promote innovative ways of doing business and believe in the 
              strengths of each team member.
            </p>

            <p className="text-black/70 text-base md:text-lg leading-relaxed">
              By joining Hometree, you join a dynamic, young, and enthusiastic 
              team capable of understanding client challenges and offering 
              them the best possible advice.
            </p>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-xl border border-black/10">
              <Image
                src="/career-pic.jpg" // 👉 replace with your image
                alt="Hometree Team"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================
          SECTION 3 — APPLY FORM
      ============================ */}
      <section className="w-full bg-[#F7F8F9] py-18 md:py-20 border-t border-black/5">
        <div className="max-w-5xl mx-auto px-6">
          {/* Title + Intro */}
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="text-2xl md:text-4xl font-extrabold mb-4 
                         bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                         bg-clip-text text-transparent"
            >
              Apply to Join Our Team
            </h2>
            <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto">
              Tell us about yourself and your experience. If your profile 
              matches our current openings, our team will get in touch with you.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-black/10 p-6 md:p-8">
            <form
              className="space-y-5 md:space-y-6"
              onSubmit={(e) => e.preventDefault()} // 👉 Hook up to backend later
            >
              {/* Name + Email (2 columns on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                               focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                               placeholder:text-black/40 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                               focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                               placeholder:text-black/40 bg-white"
                  />
                </div>
              </div>

              {/* Mobile + City (2 columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    Your Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-black/15 rounded-md px-3 py-2.5
                                  focus-within:border-[#00A17F] focus-within:ring-1 focus-within:ring-[#00A17F] bg-white">
                    <span className="mr-2 text-sm text-black/70">🇮🇳 +91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-black/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Noida, Delhi, Gurugram"
                    className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                               focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                               placeholder:text-black/40 bg-white"
                  />
                </div>
              </div>

              {/* Address (full width) */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black/80">
                  Address
                </label>
                <textarea
                  rows={3}
                  placeholder="Enter your full address"
                  className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                             focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                             placeholder:text-black/40 bg-white resize-none"
                />
              </div>

              {/* Education + Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    Select Education <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                               focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                               bg-white text-black/80"
                  >
                    <option value="">Select education level</option>
                    <option value="primary">Primary Education</option>
                    <option value="secondary">Secondary Education</option>
                    <option value="higher">Higher Education</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black/80">
                    Number of Years of Experience
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder="e.g. 0, 2, 5"
                    className="w-full border border-black/15 rounded-md px-3 py-2.5 text-sm md:text-base
                               focus:outline-none focus:border-[#00A17F] focus:ring-1 focus:ring-[#00A17F]
                               placeholder:text-black/40 bg-white"
                  />
                </div>
              </div>

              {/* Upload CV */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-black/80">
                  Upload Your CV <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full text-sm md:text-base
                             file:mr-3 file:px-4 file:py-2.5 file:rounded-md
                             file:border-0 file:bg-[#00A17F] file:text-white file:font-semibold
                             file:hover:bg-[#02906F]
                             border border-black/15 rounded-md px-2 py-1 bg-white"
                />
                <p className="text-xs text-black/50 mt-1">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-3 rounded-lg text-white font-semibold text-sm md:text-base
                             bg-gradient-to-r from-[#00A17F] to-[#6BC59D]
                             hover:opacity-90 transition-all shadow-md"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

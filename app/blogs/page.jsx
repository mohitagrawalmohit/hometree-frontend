"use client";

import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <main className="w-full bg-white text-black">

      {/* =============================
          PAGE HEADER
      ============================= */}
      <section className="py-20 bg-[#F8F9FA] border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6  pt-15 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                       bg-clip-text text-transparent"
          >
            Hometree Blogs
          </motion.h1>

          <p className="mt-4 text-black/60 text-lg md:text-xl max-w-2xl mx-auto">
            Expert insights, project comparisons, and investment advice curated by HomeTree.
          </p>
        </div>
      </section>


      {/* =============================
          BLOG LIST (NO IMAGES)
      ============================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {/* =============================
              BLOG CARD 1
          ============================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-xl bg-[#F8F9FA] border border-black/10 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00A17F] to-[#6BC59D] bg-clip-text text-transparent">
              M3M vs Experion Noida Comparison 2025
            </h2>

            <p className="text-black/70 mt-4 leading-relaxed text-[17px]">
              A detailed breakdown comparing M3M and Experion developers in Noida —
              covering project quality, pricing, amenities, appreciation trends,
              and expert investment recommendations for 2025.
            </p>

            <a
              href="/blogs/m3m-vs-experion-noida"
              className="inline-block mt-6 text-[#00A17F] font-semibold text-lg hover:underline"
            >
              Read Full Blog →
            </a>
          </motion.div>

          {/* =============================
              BLOG CARD 2
          ============================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-xl bg-[#F8F9FA] border border-black/10 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00A17F] to-[#6BC59D] bg-clip-text text-transparent">
              Find Your Dream Home with HomeTree
            </h2>

            <p className="text-black/70 mt-4 leading-relaxed text-[17px]">
              A complete guide for homebuyers and investors — covering flats,
              rentals, commercial spaces, premium locations, budgets, and why
              HomeTree is the most trusted real estate advisor in Noida.
            </p>

            <a
              href="/blogs/find-your-dream-home"
              className="inline-block mt-6 text-[#00A17F] font-semibold text-lg hover:underline"
            >
              Read Full Blog →
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

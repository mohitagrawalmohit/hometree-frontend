"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function AboutHometree() {
  return (
    <section className="w-full bg-[#0E0E0E] text-white">
      {/* ------------------------------------------------------------ */}
      {/* 1. PAGE HEADER */}
      {/* ------------------------------------------------------------ */}
      <div
        className="relative py-28 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/about/about-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight 
          bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text"
        >
          About Hometree
        </motion.h1>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. INTRO SECTION */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Where Noida’s <span className="text-[#BBD694]">Smartest Investments</span> Begin
        </motion.h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
          Hometree was born from a simple belief — when people invest in real
          estate, they deserve clarity, honesty and someone who truly understands
          the ground reality of Noida’s market.
        </p>

        <p className="text-white/80 text-lg leading-relaxed mt-6 max-w-4xl">
          This belief comes from our founder, <span className="font-semibold text-white">Amit Gaba</span>,
          a real estate specialist with over <strong>22 years</strong> of experience navigating Noida’s
          complete transformation — from early sectors to today’s high-growth micro markets.
        </p>

        <p className="text-white/80 text-lg leading-relaxed mt-6 max-w-4xl">
          He built Hometree so homebuyers and investors never have to navigate Noida alone again.
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 3. TRACK RECORD */}
      {/* ------------------------------------------------------------ */}
      <div className="border-y border-white/10 bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 
            bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text"
          >
            Our Track Record
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-white/80 text-lg">
            <ul className="space-y-4">
              <li>● 450+ clients guided across Noida & nearby regions</li>
              <li>● 110+ under-construction projects vetted with appreciation data</li>
              <li>● 300+ families placed into future-ready homes</li>
              <li>● ₹210+ crore worth of real estate decisions guided</li>
            </ul>

            <ul className="space-y-4">
              <li>● 70% clients through referrals — proof of trust</li>
              <li>● Zero mismatched commitments</li>
              <li>● Zero hidden agendas</li>
              <li>● Zero forced selling — ever</li>
            </ul>
          </div>

          <p className="text-white/70 text-lg mt-10">
            Every client chooses us because they want a partner who protects their
            investment — and stays accountable.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 4. WHAT MAKES HOMETREE DIFFERENT */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Makes <span className="text-[#00A17F]">Hometree</span> Different
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-4xl">
          Hometree focuses exclusively on <strong>Noida</strong> — because smart investing isn’t
          about knowing everything, but knowing one region better than anyone else.
        </p>

        <ul className="text-white/80 text-lg leading-relaxed space-y-4 max-w-4xl">
          <li>• Micro-market forecasting & appreciation insights</li>
          <li>• Developer credibility based on 22 years of relationships</li>
          <li>• Pricing intelligence: launch, resale, pre-possession</li>
          <li>• Under-construction risk assessment (legal + financial + delivery)</li>
          <li>• Rental yield mapping for long-term investors</li>
          <li>• Ground-level verification before recommending any project</li>
        </ul>

        <p className="text-white/90 text-xl font-semibold mt-8">
          We don’t sell property — <span className="text-[#BBD694]">we engineer wealth-building decisions.</span>
        </p>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 5. WHY HOMETREE EXISTS */}
      {/* ------------------------------------------------------------ */}
      <div className="border-y border-white/10 bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Hometree Exists
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mb-8">
            Noida is one of India’s fastest-growing real estate corridors — but
            with big opportunity comes confusion, conflicting advice, and risk.
          </p>

          <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
            Hometree filters out the noise and guides clients using data-backed insights,
            ground research, and long-term strategy.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 6. FOUNDER SECTION */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="relative w-full h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/founder.webp"
            alt="Founder Amit Gaba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Founder
          </h2>

          <h3 className="text-xl md:text-2xl text-[#BBD694] font-semibold mb-4">
            Amit Gaba — 22+ Years of Noida Real Estate Expertise
          </h3>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            “If I won’t invest my own money in a project, I will never recommend
            it to you.”
          </p>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            This isn’t a statement. It’s the culture of Hometree — grounded in
            protection, clarity, and long-term responsibility.
          </p>

          <ul className="text-white/80 text-lg space-y-3">
            <li>• Deep knowledge of Noida’s evolving development patterns</li>
            <li>• Direct builder relationships</li>
            <li>• Expertise across luxury, mid-segment & investment assets</li>
            <li>• Transparent, client-first ideology</li>
          </ul>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 7. CLIENT OUTCOMES SECTION */}
      {/* ------------------------------------------------------------ */}
      <div className="border-y border-white/10 bg-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Clients Say It Best
          </h2>

          <ul className="space-y-6 text-white/80 text-lg max-w-4xl">
            <li>• 32% appreciation in 18 months for an Expressway investment</li>
            <li>• First-time buyers secured risk-free under-construction homes</li>
            <li>• Delhi families gained pre-launch units at rare pricing</li>
            <li>• NRIs trust Hometree for complete remote investment execution</li>
            <li>• Rental yields of 5.5–7.2% achieved in Noida Extension</li>
          </ul>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 8. APPROACH SECTION */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          The Hometree Approach
        </h2>

        <p className="text-white/80 text-lg leading-relaxed max-w-4xl mb-6">
          Clients don’t meet sales executives — they meet advisors who treat
          every property decision as long-term responsibility.
        </p>

        <ul className="text-white/80 text-lg space-y-4 max-w-4xl">
          <li>• Investment strategy</li>
          <li>• Shortlisting & analysis</li>
          <li>• Legal + builder checks</li>
          <li>• Site visits</li>
          <li>• Negotiations</li>
          <li>• Documentation</li>
          <li>• Post-purchase support</li>
        </ul>
      </div>
    </section>
  );
}

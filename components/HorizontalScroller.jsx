"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollerFixed() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * FIXED SCROLL BEHAVIOR:
   * - Boxes now move slowly
   * - Correct direction (to LEFT)
   * - Show earlier (less vertical scroll required)
   */
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-320%"]);

  const items = [
    {
      title: "Micro-Market Forecasting",
      desc: "Predicting which sectors will appreciate based on metro, infra and commercial zones.",
    },
    {
      title: "Developer Credibility",
      desc: "22+ years of developer relationships provide true delivery evaluation.",
    },
    {
      title: "Pricing Intelligence",
      desc: "Launch prices, resale windows & negotiation timing mapped precisely.",
    },
    {
      title: "Risk Assessment",
      desc: "Legal, financial & timeline analysis for every under-construction project.",
    },
    {
      title: "Rental Yield Mapping",
      desc: "Steady-return investment plans for prime Noida micro-markets.",
    },
    {
      title: "Ground Verification",
      desc: "We physically verify every project before recommending it.",
    },
  ];

  return (
    <div ref={containerRef} className="relative h-full">

      {/* Horizontal Row */}
      <motion.div style={{ x }} className="horizontal-inner">

        {items.map((item, i) => (
          <div
            key={i}
            className="min-w-[75vw] md:min-w-[35vw] h-full 
                       border border-white/40 bg-white/5 backdrop-blur-sm
                       p-10 mx-4 flex flex-col justify-between"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase 
                           bg-gradient-to-r from-[#00A17F] to-[#BBD694] 
                           bg-clip-text text-transparent">
              {item.title}
            </h3>

            <p className="text-white/80 text-lg mt-6 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

        {/* FINAL PANEL */}
        <div
          className="min-w-[75vw] md:min-w-[35vw] h-full mx-4 
                     border border-white/40 bg-white/5 backdrop-blur-sm 
                     flex items-center justify-center p-10 text-center"
        >
          <h3 className="text-3xl md:text-5xl text-white font-extrabold leading-tight">
            We don’t “sell property”.<br />
            We engineer wealth-building decisions.
          </h3>
        </div>

      </motion.div>
    </div>
  );
}

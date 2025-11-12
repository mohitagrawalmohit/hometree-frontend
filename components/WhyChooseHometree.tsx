"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function WhyChooseHometree() {
  const features = [
    {
      title: "Experience You Can Trust",
      description:
        "22+ years of industry expertise, deep developer relationships, and a history of successful transactions across Noida, Gurgaon, and Delhi.",
      icon: "🌆",
    },
    {
      title: "Consulting-Driven Approach",
      description:
        "We don’t “sell” — we strategise. Every recommendation is backed by data, on-ground insights, and market fundamentals.",
      icon: "💡",
    },
    {
      title: "End-to-End Support",
      description:
        "From project shortlisting to post-purchase service — we handle it all, so you focus on what matters: growth.",
      icon: "🤝",
    },
    {
      title: "Investor-First Focus",
      description:
        "We study every project from an investor’s lens — ensuring high appreciation, clear documentation, and safe returns.",
      icon: "📊",
    },
    {
      title: "Partnered with Leading Developers",
      description:
        "Access exclusive pre-launch offers, premium inventories, and first-mover advantages.",
      icon: "🏗️",
    },
    {
      title: "Digital & Influencer Edge",
      description:
        "We understand how today’s investors consume content. Our influencer-driven awareness videos, walkthroughs, and insights make property discovery inspiring and relatable.",
      icon: "📲",
    },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* TOP: 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          {/* LEFT: Heading + Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Why Choose{" "}
              <span
                className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text"
              >
                HomeTree
              </span>{" "}
              for Your Real Estate Investments?
            </h2>
            <p className="text-gray-600 text-lg max-w-lg">
              A modern approach to real estate — combining deep industry
              expertise with digital-first innovation and trusted guidance.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden  shadow-xl">
            <Image
              src="/whychooseus.webp" // your image here
              alt="Why Choose HomeTree"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM: 3x2 GRID FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-t-2 border-gray-200 pt-6"
            >
              {/* <div
                className="text-3xl mb-4"
                style={{ color: PRIMARY }}
              >
                {feature.icon}
              </div> */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

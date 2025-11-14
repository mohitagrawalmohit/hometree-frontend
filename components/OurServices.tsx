"use client";

import Image from "next/image";
import { Briefcase, Building2, BarChart, Users, FileText } from "lucide-react";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function OurServices() {
  const services = [
    {
      title: "Residential Sales & Consulting",
      description:
        "From premium apartments to plotted developments — we curate the finest living spaces across Delhi-NCR. We guide you through every key factor before you invest.",
      highlights: [
        "M3M Jacob & Co.",
        "Kalpataru Vista",
        "Ace Acreville Plots",
        "Eldeco Wow Life",
        "Experion Noida",
      ],
      icon: <Building2 size={36} />,
      image: "/services/residentials.webp",
    },
    {
      title: "Commercial Investments",
      description:
        "Future-ready offices, retail spaces, and co-working units that deliver long-term returns. We help you identify high-growth corridors and developer-backed projects.",
      highlights: [
        "Business owners",
        "High-net-worth individuals",
        "Startup founders",
        "Investors seeking ROI",
      ],
      icon: <Briefcase size={36} />,
      image: "/services/commercials.webp",
    },
    {
      title: "Property Portfolio Advisory",
      description:
        "We don’t just help you buy — we help you build your portfolio. Our advisors design strategies that ensure sustainable real estate growth.",
      highlights: [
        "Investment benchmarking",
        "Resales & secondary market",
        "Capital appreciation planning",
        "Rental yield optimisation",
      ],
      icon: <BarChart size={36} />,
      image: "/services/portfolioadvisory.webp",
    },
    {
      title: "Influencer & Educational Consulting",
      description:
        "HomeTree is a trusted voice in real estate education. Through videos, reels, and data-backed insights, we empower our audience to make smarter property choices.",
      highlights: ["Instagram", "YouTube", "LinkedIn"],
      icon: <Users size={36} />,
      image: "/services/influencing.webp",
    },
    {
      title: "End-to-End Transaction Management",
      description:
        "We handle everything — from site visits to registration. Experience seamless service and peace of mind at every step.",
      highlights: [
        "Document verification",
        "Bank loan assistance",
        "Legal & RERA support",
        "Post-sale services",
      ],
      icon: <FileText size={36} />,
      image: "/services/endtoendtransactions.webp",
    },
  ];

  return (
    <section
      className="relative py-8 md:py-10 text-white"
      style={{
        backgroundImage: "url('/services.webp')", // background image for the whole section
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // sticky / parallax feel
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
          Our Services
        </h2>
        <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto mb-16">
          A complete suite of real estate services designed to simplify your
          journey — from consultation to investment and beyond.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white/10 backdrop-blur-md border border-white/20  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-200 space-y-1">
                  {service.highlights.map((point, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                        }}
                      ></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

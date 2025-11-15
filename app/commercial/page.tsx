"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

const commercialProjects = [
  {
    id: 1,
    title: "HomeTree Business Bay",
    type: "Premium Office Spaces",
    location: "Sector 62, Noida",
    config: "Grade-A Smart Offices",
    price: "₹85 L onwards*",
    image: "/commercial1.jpg",
    status: "Ongoing",
    slug: "hometree-business-bay",
  },
  
];

export default function CommercialPage() {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Completed">("Ongoing");

  const filteredProjects = commercialProjects.filter(
    (p) => p.status === activeTab
  );

  const heroBackground = "/commercialherobg.mp4"; // or .jpg
  const isVideo = heroBackground.endsWith(".mp4");

  return (
    <div className="w-full">
      {/* 1️⃣ Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {isVideo ? (
          <video
            src={heroBackground}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={heroBackground}
            alt="Commercial Projects Hero"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Commercial Projects
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl text-sm md:text-base">
            Explore business towers and retail hubs that redefine workspace and
            investment excellence.
          </p>
        </div>
      </section>

      {/* 2️⃣ Filter Section */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            COMMERCIAL PROJECTS
          </h2>
          <div className="flex gap-4">
            {["Ongoing", "Completed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "Ongoing" | "Completed")}
                className={`px-5 py-2  text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#BBD694] text-white"
                    : "text-black hover:text-[#00A17F]"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Projects Section */}
<section className="py-24">
  <div className="max-w-[90rem] mx-auto px-6 md:px-12 space-y-32">
    {filteredProjects.map((project, index) => (
      <div
        key={project.id}
        className={`flex flex-col md:flex-row ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-center md:items-stretch gap-16 md:gap-24`}
      >
        {/* ✅ RIGHT: Image (shows first on mobile) */}
        <div
          className={`w-full md:w-1/2 relative min-h-[320px] sm:min-h-[400px] md:min-h-[650px] overflow-hidden shadow-2xl 
          order-first md:order-none`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* ✅ LEFT: Details (unchanged desktop layout) */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 mb-10">
            {project.type}
          </p>

          <div className="divide-y divide-gray-200 border-y border-gray-200 mb-10 space-y-2">
            <div className="flex items-center gap-6 py-6">
              <span className="text-2xl">📍</span>
              <p className="text-sm md:text-lg font-medium">
                {project.location}
              </p>
            </div>
            <div className="flex items-center gap-6 py-6">
              <span className="text-2xl">🏢</span>
              <p className="text-sm md:text-lg font-medium">
                {project.config}
              </p>
            </div>
            <div className="flex items-center gap-6 py-6">
              <span className="text-2xl">💰</span>
              <p className="text-sm md:text-lg font-medium">
                {project.price}
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <Link
              href={`/property/${project.slug}`}
              style={{
                background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
              }}
              className="px-10 py-3 text-lg text-white font-semibold hover:opacity-90 transition"
            >
              Explore
            </Link>

            <button className="px-10 py-3 border-2 border-black text-lg text-black font-semibold hover:bg-black hover:text-white transition">
              Brochure
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

const projects = [
  {
    id: 1,
    title: "The Right Life",
    type: "Residential Apartments",
    location: "On Sarjapur-Varthur Road",
    config: "3 & 3.5 BHK Residential Apartments",
    price: "₹1.5 Cr onwards*",
    image: "/project1.webp",
    status: "Ongoing",
    slug: "the-right-life",
  },
  {
    id: 2,
    title: "HomeTree Skanda",
    type: "Luxury Residences",
    location: "Sector 150, Noida",
    config: "2, 3 & 4 BHK Premium Residences",
    price: "₹2.1 Cr onwards*",
    image: "/project2.jpg",
    status: "Completed",
    slug: "hometree-skanda",
  },
  {
    id: 3,
    title: "The Green Valley",
    type: "Residential Apartments",
    location: "On gaziabad Road",
    config: "3 & 3.5 BHK Residential Apartments",
    price: "₹1.2 Cr onwards*",
    image: "/project3.jpg",
    status: "Ongoing",
    slug: "the-green-valley",
  },
];

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState<"Ongoing" | "Completed">("Ongoing");

  const filteredProjects = projects.filter((p) => p.status === activeTab);

  // 👇 You can set hero background here (image or video)
  const heroBackground = "/collectionherobg.mp4"; // can be .mp4 or .jpg/.webp
  const isVideo = heroBackground.endsWith(".mp4");

  return (
    <div className="w-full">
      {/* 1️⃣ Hero Section (auto detects video/image) */}
      <section className="relative w-full h-[60vh] md:h-[120vh] overflow-hidden">
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
            alt="Residential Projects Hero"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-3xl md:text-3xl font-semibold tracking-tight">
            Discover premium residences designed for modern living and timeless comfort.
          </h1>
          
        </div>
        
      </section>

      {/* 2️⃣ Filter Section */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            RESIDENTIAL PROJECTS
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
        } items-center gap-16 md:gap-24`}
      >
        {/* ✅ RIGHT: Image (shows first on mobile, right on desktop) */}
        <div
          className={`flex-1 relative w-full h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden shadow-2xl 
          order-1 md:order-2`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* ✅ LEFT: Details (shows after image on mobile, left on desktop) */}
        <div className="flex-1 text-gray-800 order-2 md:order-1">
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
              <span className="text-2xl">🛏️</span>
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

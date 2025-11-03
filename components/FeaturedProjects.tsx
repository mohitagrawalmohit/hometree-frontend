"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Mana Cresta",
    status: "Ongoing",
    description:
      "Mana Cresta is a stunning new development by HomeTree in Noida Sector 150. Featuring eco-friendly design, landscaped balconies, and smart amenities for modern living.",
    highlights: [
      "Located in Sector 150, Noida",
      "2.5 & 3 BHK Premium Apartments",
      "₹1.49 Cr onwards",
    ],
    image: "/project1.webp",
  },
  {
    id: 2,
    title: "HomeTree Vista",
    status: "Ongoing",
    description:
      "A premium residential tower with panoramic city views, green rooftops, and luxury interiors designed for elegant living.",
    highlights: [
      "Near Golf Course Extension, Gurgaon",
      "3 & 4 BHK Smart Residences",
      "₹2.1 Cr onwards",
    ],
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "HomeTree Horizon",
    status: "Upcoming",
    description:
      "An iconic high-rise offering future-ready homes with next-gen facilities, sustainable architecture, and rooftop leisure zones.",
    highlights: [
      "At Baner, Pune",
      "2 & 3 BHK Residences",
      "Launching Soon",
    ],
    image: "/project3.jpg",
  },
  {
    id: 4,
    title: "HomeTree Capital",
    status: "Completed",
    description:
      "Located in the heart of Bangalore, this landmark development delivers world-class craftsmanship and urban sophistication.",
    highlights: [
      "Off Sarjapur Road, Bangalore",
      "Completed in 2024",
      "Premium 3 & 4 BHK Homes",
    ],
    image: "/project4.jpg",
  },
  {
    id: 5,
    title: "HomeTree Riverfront",
    status: "Ongoing",
    description:
      "Wake up to serene river views in this lush, eco-centric project combining tranquility with modern city access.",
    highlights: [
      "On Dwarka Expressway, Gurgaon",
      "2.5 & 3 BHK Waterfront Apartments",
      "₹1.85 Cr onwards",
    ],
    image: "/project3.jpg",
  },
];

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Sync content with carousel
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const currentProject = projects[selectedIndex];

  return (
    <section className="py-10 px-6 md:px-16 bg-white flex flex-col md:flex-row gap-10 items-center justify-between relative overflow-hidden">
      {/* LEFT SIDE CONTENT */}
      <div className="md:w-[40%] space-y-6">
        {/* Static Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Residential Projects by the Best Builder in{" "}
          <span className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
            India
          </span>
        </h2>

        {/* Static Tabs */}
        <div className="flex gap-6 font-medium text-gray-500 uppercase text-sm tracking-wide">
          {["Ongoing", "Completed", "Upcoming"].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer pb-1 transition-all ${
                tab === currentProject.status
                  ? "text-gray-900 border-b-2 border-[#00A17F]"
                  : "hover:text-gray-700"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Swiping Description + Highlights */}
        <div className="relative min-h-[180px] overflow-hidden">
         <AnimatePresence mode="wait">
  <motion.div
    key={currentProject.id}
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    exit={{ x: "-100%" }}
    transition={{
      duration: 0.6,
      ease: [0.32, 0.72, 0, 1],
    }}
    className="absolute top-0 left-0 w-full"
  >
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      {currentProject.description}
    </p>

    <ul className="mt-4 space-y-2 text-gray-800 text-sm md:text-base">
      {currentProject.highlights.map((point, i) => (
        <li key={i} className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-[#00A17F] to-[#BBD694] rounded-full"></span>
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
</AnimatePresence>

        </div>

        {/* Static Button */}
        <Link
          href={`/property/the-modern-moreland-house`}
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-white rounded-full font-medium shadow-md hover:opacity-90 transition"
        >
          Explore
        </Link>
      </div>

      {/* RIGHT SIDE CAROUSEL */}
      <div className="md:w-[55%] relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-[0_0_80%] md:flex-[0_0_60%] mr-6 relative overflow-hidden  shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-[420px]"
                />
                <div className="absolute top-4 left-4 bg-black/60 px-3 py-1  text-white text-sm font-medium tracking-wide">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] text-gray-700 hover:text-white p-3 rounded-full shadow transition"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-100 hover:bg-gradient-to-r hover:from-[#00A17F] hover:to-[#BBD694] text-gray-700 hover:text-white p-3 rounded-full shadow transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

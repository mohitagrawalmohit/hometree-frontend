"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function TrendingProjects() {
  const projects = [
    {
      id: 1,
      name: "The Prestige City Noida",
      developer: "Prestige Group",
      location: "Rajendra Nagar, Noida",
      details: "2.5, 3 & 4 BHK",
      area: "3431 SQ. FT.",
      price: "₹ 1.25 Cr - 2.89 Cr",
      tag: "New launch",
      img: "/project1.webp",
    },
    {
      id: 2,
      name: "Adani Shantigram The Meadows",
      developer: "Adani Shantigram",
      location: "S G Highway, Noida",
      details: "2, 2.5, 3 BHK",
      area: "1458 SQ. FT.",
      price: "₹ 81.08 L - 1.05 Cr",
      img: "/project2.jpg",
    },
    {
      id: 3,
      name: "Maya Garden Magnesia",
      developer: "Maya Garden Group",
      location: "Zirakpur, Noida",
      details: "Commercial Space - 3425 SQ. FT.",
      price: "₹ 25.93 L - 2.67 Cr",
      tag: "New launch",
      img: "/project3.jpg",
    },
    {
      id: 4,
      name: "Prestige Marigold Phase 2",
      developer: "Prestige Group",
      location: "Devanahalli, Noida",
      details: "Plots",
      area: "1500 - 2400 SQ. FT.",
      price: "₹ 99.75 L - 1.59 Cr",
      img: "/project4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Trending Projects</h2>
        <p className="text-gray-500 mt-2">
          The Noteworthy Real Estate in Noida
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Desktop Left Side Card */}
        <div className="hidden md:flex bg-white rounded-xl shadow-sm border p-6 flex-col justify-between">
          <div>
            <div className="mb-4 flex justify-center">
              <Image
                src="/building_green.png"
                alt="Best Sellers Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Best Sellers in Noida
            </h3>
            <p className="text-gray-500 text-sm text-center">
              The latest residential offerings from the best builders in Noida,
              handpicked by our team of experts just for you and backed by our
              widely acclaimed transaction and financial services.
            </p>
          </div>

          <Link
            href="/projects"
            className="mt-6 bg-[#3FD59F] hover:bg-[#34c48f] text-white text-center rounded-full py-2 transition"
          >
            View All
          </Link>
        </div>

        {/* Desktop Grid (Unchanged) */}
        <div className="md:col-span-4 hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-xl shadow-sm border overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                {project.tag && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="px-4">
                <h4 className="font-semibold text-gray-800 text-sm truncate">
                  {project.name}
                </h4>
                <p className="text-xs text-gray-500 mb-1">
                  By {project.developer}
                </p>
                <p className="text-xs text-gray-600">{project.location}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {project.details || project.area}
                </p>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <p className="font-semibold text-gray-900">{project.price}</p>
                  <button className="text-[#3FD59F] font-medium hover:underline">
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll View */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pb-3 no-scrollbar">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="min-w-[85%] flex-shrink-0 bg-white rounded-xl shadow-sm border flex overflow-hidden"
            >
              {/* Image on left */}
              <div className="relative w-[45%] h-36 flex-shrink-0">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                {project.tag && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-[2px] rounded-full">
                    {project.tag}
                  </span>
                )}
                <button className="absolute bottom-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition">
                  <Heart className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>

              {/* Info on right */}
              <div className="p-3 flex flex-col justify-between w-[55%]">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm truncate">
                    {project.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-[1px]">
                    By {project.developer}
                  </p>
                  <p className="text-[11px] text-gray-600 truncate">
                    {project.location}
                  </p>
                  <div className="flex justify-between text-[11px] text-gray-500 mt-[2px]">
                    <span>{project.details}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between items-center text-xs">
                  <p className="font-semibold text-gray-900">{project.price}</p>
                  <button className="text-[#3FD59F] font-medium hover:underline">
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ✅ Mobile “Best Sellers” Card at the End */}
          <div className="min-w-[85%] flex-shrink-0 bg-white rounded-xl shadow-sm border flex flex-col justify-between p-5 text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/building_green.png"
                alt="Best Sellers Icon"
                width={60}
                height={60}
                className="object-contain mb-3"
              />
              <h3 className="text-lg font-semibold mb-2">
                Best Sellers in Noida
              </h3>
              <p className="text-gray-500 text-sm">
                The latest residential offerings from the best builders in
                Noida, handpicked by our team of experts just for you and backed
                by our widely acclaimed services.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-6 bg-[#3FD59F] hover:bg-[#34c48f] text-white text-center rounded-full py-2 transition text-sm font-medium"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

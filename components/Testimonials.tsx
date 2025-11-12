"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

const testimonials = [
  {
    text: "Hometree helped us find our first office in Noida. Their knowledge and guidance made it seamless.",
    author: "Rajeev Malhotra",
    role: "Entrepreneur",
  },
  {
    text: "Unlike typical brokers, they understood my goals before showing me properties. True consultants.",
    author: "Shruti Agarwal",
    role: "Investor",
  },
  {
    text: "Their influencer videos are super informative. You can tell they care about real education, not just selling.",
    author: "Aviral Shah",
    role: "First-time buyer",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-32 text-center overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          <span className="bg-gradient-to-r from-[#00A17F] to-[#BBD694] text-transparent bg-clip-text">
            Testimonials
          </span>
        </h2>

        {/* Testimonial content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Quote
              className="mx-auto mb-8 text-[#00A17F]"
              size={48}
              strokeWidth={1.5}
            />

            <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed mb-10">
              “{testimonial.text}”
            </p>

            <div className="text-gray-200 font-semibold text-lg">
              {testimonial.author}
            </div>
            <div className="text-gray-400 text-sm">{testimonial.role}</div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === index
                  ? "bg-gradient-to-r from-[#00A17F] to-[#BBD694] w-6"
                  : "bg-gray-500/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

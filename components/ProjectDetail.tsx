// components/ProjectDetail.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PropertyIn = {
  id: number;
  slug?: string;
  name: string;
  tagline: string;
  logo?: string;
  heroImage?: string;
  overviewBg?: string;
  section3Bg?: string;
  galleryBg?: string;
  features: { title: string; image?: string }[];
  gallery: string[];
  amenities: string[];
  description: string;
  locationText: string;
};

const PRIMARY = "#00A17F";
const ACCENT = "#BBD694";

export default function ProjectDetail({ property }: { property: PropertyIn }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const galleryRef = useRef<HTMLDivElement | null>(null);

  function scrollSlider(dir: "prev" | "next") {
    const el = galleryRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? w : -w, behavior: "smooth" });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // client-side validation (simple)
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <div className="w-full">
      {/* 1. Hero Banner (full width) */}
      <section className="relative w-full h-[56vh] md:h-[72vh] overflow-hidden">
        {property.heroImage && (
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* left: logo + title/tagline */}
            <div className="md:col-span-2 text-white">
              <div className="flex items-center gap-4">
                {property.logo && (
                  <div className="w-20 h-20 bg-white/10 rounded-md flex items-center justify-center p-2">
                    <Image
                      src={property.logo}
                      alt="project logo"
                      width={72}
                      height={72}
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                    {property.name}
                  </h1>
                  <p className="text-sm md:text-base opacity-90 mt-1">
                    {property.tagline}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4 items-center">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-black bg-[rgba(255,255,255,0.9)]">
                  Starting Price: ₹ 2.4 Cr
                </span>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{property.locationText}</span>
              </div>
            </div>

            {/* right: quick CTA */}
            <div className="md:col-span-1 flex justify-start md:justify-end">
              <button
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
                className="text-white px-5 py-2 rounded-full font-semibold shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section full width with bg image */}
      <section
        className="relative py-14"
        style={{
          backgroundImage: property.overviewBg ? `url(${property.overviewBg})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* left: name + tagline + short */}
          <div className="lg:col-span-7 text-white py-6">
            <h2 className="text-3xl md:text-4xl font-bold">{property.name}</h2>
            <p className="mt-3 max-w-2xl opacity-90">{property.tagline}</p>

            <div className="mt-6 text-sm md:text-base max-w-xl">
              <p className="mb-3">{property.description}</p>
              <div className="flex gap-4 mt-4">
                <div className="inline-flex items-center gap-3 bg-white/5 px-3 py-2 rounded-md">
                  <strong>Unit types</strong>
                  <span>2,3,4 BHK</span>
                </div>
                <div className="inline-flex items-center gap-3 bg-white/5 px-3 py-2 rounded-md">
                  <strong>Possession</strong>
                  <span>2026 Onwards</span>
                </div>
              </div>
            </div>
          </div>

          {/* right: enquiry CTA card */}
          <div className="lg:col-span-5 flex items-start">
            <div className="w-full bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-lg">Quick Enquiry</h4>
              <p className="text-sm text-gray-600 mt-2">Leave your details and we’ll get back to you.</p>

              <form onSubmit={onSubmit} className="mt-4 space-y-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                  placeholder="Name"
                />
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                  placeholder="Phone"
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border rounded-md px-3 py-2 text-sm outline-none"
                  placeholder="Email (optional)"
                />
                <button
                  type="submit"
                  style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
                  className="w-full text-white py-2 rounded-full font-semibold"
                >
                  Request Callback
                </button>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="mt-3 p-3 rounded-md bg-green-50 text-green-800 text-sm"
                  >
                    Thanks! We will contact you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section-3 full width bg — Key features with images */}
      <section
        className="relative py-14"
        style={{
          backgroundImage: property.section3Bg ? `url(${property.section3Bg})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">Key Features</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {property.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/6 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  {f.image && (
                    <Image src={f.image} alt={f.title} fill className="object-cover" />
                  )}
                </div>
                <div className="p-4 text-white">
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="text-sm opacity-80 mt-2">Thoughtfully designed & curated.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gallery Section full width with bg image (slider + enquire CTA) */}
      <section
        className="relative py-14"
        style={{
          backgroundImage: property.galleryBg ? `url(${property.galleryBg})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl text-white font-bold">Gallery</h3>
            <button
              style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
              className="text-white px-4 py-2 rounded-full font-semibold"
            >
              Enquire Now
            </button>
          </div>

          <div className="relative">
            <div
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6"
            >
              {property.gallery.map((g, idx) => (
                <div key={idx} className="snap-center flex-[0_0_80%] md:flex-[0_0_40%] rounded-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image src={g} alt={`g-${idx}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button onClick={() => scrollSlider("prev")} className="bg-white/90 p-2 rounded-full shadow">
                ‹
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={() => scrollSlider("next")} className="bg-white/90 p-2 rounded-full shadow">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Amenities / Features (clean card grid) */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">Amenities</h3>
            <button
              style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }}
              className="text-white px-4 py-2 rounded-full font-semibold"
            >
              Enquire Now
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {property.amenities.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-4 rounded-lg text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(0,0,0,0.04)] mx-auto flex items-center justify-center mb-3">
                  <span className="text-xl">✓</span>
                </div>
                <div className="text-sm font-medium">{a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location Section (stylized static map) */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Location</h3>
          <p className="text-gray-600 mb-6 max-w-2xl">{property.locationText}</p>

          <div className="w-full rounded-lg overflow-hidden shadow">
            {/* Replace with an actual static map image or an embedded map later */}
            <div className="relative h-72 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400">Map placeholder — add a static map image or embed Google Maps</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact / Enquiry Section - sticky or separate */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-6">Ready to know more? Fill the form and our representative will reach out.</p>

            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded-md px-3 py-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input className="border rounded-md px-3 py-2" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <input className="border rounded-md px-3 py-2 md:col-span-2" placeholder="Email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea className="border rounded-md px-3 py-2 md:col-span-2" rows={4} placeholder="Message (optional)"></textarea>

              <div className="md:col-span-2">
                <button style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }} className="text-white px-6 py-2 rounded-full font-semibold">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow sticky top-24">
              <h4 className="font-semibold mb-2">Schedule Visit</h4>
              <p className="text-sm text-gray-600 mb-4">Choose a convenient slot and we will confirm.</p>

              <form onSubmit={onSubmit} className="space-y-3">
                <input className="w-full border rounded-md px-3 py-2" placeholder="Name" />
                <input className="w-full border rounded-md px-3 py-2" placeholder="Phone" />
                <button style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }} className="w-full text-white py-2 rounded-full font-semibold">
                  Schedule Visit
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

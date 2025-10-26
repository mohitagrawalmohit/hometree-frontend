"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      >
        <source src="/hero-bg-new.mp4" type="video/mp4" />
      </video>

      {/* Optional subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-[2]" />

      {/* You can keep this empty for now (future hero text or call-to-action) */}
      <div className="relative z-[3]" />
    </section>
  );
}

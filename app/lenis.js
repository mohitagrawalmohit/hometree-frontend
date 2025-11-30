"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function UseLenis() {
  useEffect(() => {
    const lenis = new Lenis({
  lerp: 0.5,
  wheelMultiplier: 1.2,
  smoothWheel: true,
  smoothTouch: false,
});


    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
}

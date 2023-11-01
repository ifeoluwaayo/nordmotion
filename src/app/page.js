"use client";
import About from "@/components/About";
import Cars from "@/components/Cars";
import Hero from "@/components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const addMotion = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };

    addMotion();
  }, []);

  return (
    <main className="bg-black">
      <Hero />
      <Cars />
      <About />
    </main>
  );
}

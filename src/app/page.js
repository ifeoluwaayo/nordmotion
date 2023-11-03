"use client";
import About from "@/components/Home/About";
import Cars from "@/components/Home/Cars";
import Footer from "@/components/Home/Footer.jsx";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
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
    <div>
      <main className="bg-black relative z-[9999]">
        <Hero />
        <Cars />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

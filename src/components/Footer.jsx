"use client";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const footer = useRef(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth <= 768;
    console.log(isMobile);

    gsap.to(footer.current, {
      scrollTrigger: {
        trigger: footer.current,
        scrub: true,
        end: "bottom-=200px",
        onLeave: () => setDone(true),
        onEnterBack: () => setDone(false),
        onLeaveBack: () => setDone(true),
      },
      backgroundColor: "#fff",
      position: !isMobile && "sticky",
      bottom: !isMobile && 0,
      left: !isMobile && 0,
      color: "#000",
      duration: 1,
    });
  }, []);

  return (
    <footer
      ref={footer}
      className={`w-full min-h-screen ${
        done ? "bg-white" : "bg-black"
      } text-white`}>
      <div className="w-full h-[85%] py-[10vh] md:pt-[25vh] px-[6vw] place-items-start md:justify-items-center justify-items-stretch grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl mb-5">Headquarters</h1>
          <p>
            Plot 14, Adebisi Ogunniyi Crescent, Lekki-Epe expressway, Ikate,
            Lekki, Lagos
          </p>
          <a href="tel: +2348149799150" className="mt-3">
            T: +2348149799150
          </a>

          <div className="mt-8 flex flex-col">
            <a href="mailto:info@nordmotion.com" className="">
              E: info@nordmotion.com
            </a>
            <a href="https://nordmotion.com" className="">
              W: www.nordmotion.com
            </a>

            <div className="flex gap-5 mt-6 font-black">
              <Link href="https://instagram.com/nordmotion">IG</Link>
              <Link href="https://facebook.com/nordmotion">FB</Link>
              <Link href="https://x.com/nordmotion">X</Link>
              <Link href="https://tumblr.com/nordmotion">TL</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl mb-5">Company</h1>
          <Link href="">Nord Automobiles</Link>
          <Link href="">Mission & Vision</Link>
          <Link href="">Objectives</Link>
          <Link href="">Directors</Link>
          <Link href="">Locations</Link>
          <Link href="">Careers</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl mb-5">Vehicles</h1>
          <Link href="">Nord Flit</Link>
          <Link href="">Nord Max</Link>
          <Link href="">Nord A3</Link>
          <Link href="">Nord A5</Link>
          <Link href="">Nord A7</Link>
          <Link href="">Nord Tank</Link>
          <Link href="">Nord Tusk</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl mb-5">Quick Links</h1>
          <Link href="">Build Your Vehicle</Link>
          <Link href="">Services</Link>
          <Link href="">FAQ</Link>
          <Link href="">Newsletter</Link>
          <Link href="">Terms & Conditions</Link>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
      <div className="border-t flex h-[15%] py-[6vh] items-center w-full px-[10vw] border-gray-500">
        <p className="text-lg font-medium">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved. By{" "}
          <Link href="https://adeayomide.me" className="font-semibold">
            Ayomide Adelaja
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

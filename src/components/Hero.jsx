"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const bgVideo = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="absolute" ref={bgVideo}>
        <video
          src="assets/bg.mp4"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          controls={false}
          className="w-full h-screen object-cover brightness-[.6]"
        />
      </div>

      <div className="flex relative flex-col items-center justify-center w-full h-full">
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white max-w-[80%] text-5xl md:text-6xl uppercase text-center font-black tracking-wider leading-tight">
          Nord Motion: <br /> The Future of African Automotive
        </h1>
        <p
          data-scroll
          data-scroll-speed="0.3"
          className="text-white max-w-[75vw] md:max-w-[60vw] text-lg font-medium text-center mt-5">
          Nord Automobiles is a Nigerian automotive manufacturer with
          headquarters in Lagos, Nigeria. Our establishment was born out of the
          need for a remarkable made-in-Nigeria automobile brand.
        </p>
        <div className="flex gap-5 mt-8">
          <button
            id="left"
            className="group [transform:translateZ(0)] rounded-full px-5 py-3 overflow-hidden relative before:absolute before:bg-white bg-black before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 border hover:scale-95 transition-all ease-in-out duration-200 border-black hover:border-white">
            <span className="font-semibold text-lg hover:scale-95 transition-all ease-in-out duration-200 text-white relative z-0 group-hover:text-black">
              Build Your Car
            </span>
          </button>
          <button
            id="right"
            className="group [transform:translateZ(0)] rounded-full px-5 py-3 overflow-hidden relative before:absolute before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 border hover:scale-95 transition-all ease-in-out duration-200 border-white">
            <span className="font-semibold text-lg hover:scale-95 transition-all ease-in-out duration-200 text-white relative z-0 group-hover:text-black">
              Search Inventory
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

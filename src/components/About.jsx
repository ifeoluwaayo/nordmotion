"use client";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { TextPlugin } from "gsap/TextPlugin";

const phrase1 = `Nord Automobiles is a Nigerian automotive manufacturer with
headquarters in Lagos, Nigeria. Our establishment was born out of
the need for a remarkable made-in-Nigeria automobile brand.`;

const phrase2 = `Our operations focus on delivering quality expertise in the value
chain - which includes the design, sourcing, development,
assembling, distribution, marketing, provision of sales and
after-sales service of our unique Nigerian branded automobiles.`;

const phrase3 = `Our fleet of Nigerian branded vehicles include the Nord Tank, Nord
Max, Nord Tusk, Nord Flit, Nord A3 Sedan, Nord A5 SUV, Nord A7 SUV,
Nord Yarn, Nord Tripper, Nord Lasgi and more.`;

const phrase4 = `Our key objectives include`;

const phrase5 = `· Design and alignment of vehicles in Nigeria and Sub-Saharan
Africa to fit the local climate.`;

const phrase6 = `· Offer affordable and durable vehicles.`;

const phrase7 = `· Offer easy access to best-in-class after-sales quality service.`;

const phrase8 = `· Build a reliable and credible Nigerian auto brand`;

const About = () => {
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    createAnimation();
  }, []);

  const createAnimation = () => {
    const tl = gsap.timeline();

    tl.to("h3", {
      duration: 2,
      text: "Nord Automobile",
      delay: 1,
      scrollTrigger: {
        trigger: "#trigger",
      },
    }).to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top-=300px`,
        end: `+=${window.innerHeight / 2}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(
        <p className="mr-[1.5vw]" key={word + "_" + i}>
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-[.2]"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });

    return letters;
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col-reverse gap-6 md:gap-0 mt-[10vh] md:flex-row bg-black items-center justify-center">
        <div
          ref={container}
          className="flex md:flex-[.5] text-gray-400 px-8 flex-col">
          <h3
            className="text-2xl font-medium text-gray-300 mb-3"
            id="trigger"></h3>
          <p className="text-lg flex flex-wrap mb-3">{splitWords(phrase1)}</p>
          <p className="text-lg flex flex-wrap mb-3">{splitWords(phrase2)}</p>
          <p className="text-lg flex flex-wrap mb-3">{splitWords(phrase3)}</p>
          <p className="text-lg flex flex-wrap mb-3">{splitWords(phrase4)}</p>

          <ul className="text-gray-500 text-base">
            <li className="text-base flex flex-wrap mb-1">
              {splitWords(phrase5)}
            </li>
            <li className="text-base flex flex-wrap mb-1">
              {splitWords(phrase6)}
            </li>
            <li className="text-base flex flex-wrap mb-1">
              {splitWords(phrase7)}
            </li>
            <li className="text-base flex flex-wrap mb-1">
              {splitWords(phrase8)}
            </li>
          </ul>
        </div>
        <div className="md:h-[100vh] z-20 h-[100vw] w-[100vw] flex md:flex-[.5] md:w-full top-0 relative">
          <Image
            src="/assets/wireframe.jpg"
            alt="Wireframe"
            fill
            className="rotate-90 md:rotate-0"
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;

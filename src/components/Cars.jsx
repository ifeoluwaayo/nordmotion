"use client";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIntersection } from "@/lib/hooks";

const cars = [
  { name: "Nord A3", src: "nord_a3" },
  { name: "Nord A5", src: "nord_a5" },
  { name: "Nord Max", src: "nord_max" },
  { name: "Nord Flit", src: "nord_flit" },
  { name: "Nord Tripper", src: "nord_tripper" },
  { name: "Nord Yarn", src: "nord_yarn" },
  { name: "Nord Tank", src: "nord_tank" },
  { name: "Nord Tusk", src: "nord_tusk" },
  { name: "Nord A7", src: "nord_a7" },
];

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  const imageContainer = useRef(null);
  const carsContainer = useRef(null);

  const observer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "top-=100px",
      // end: document.body.offsetHeight - window.innerHeight - 800,
      end: "bottom+=250px",
      pin: true,
    });
  }, []);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        const { id } = visibleSection;
        setSelectedCar(id);
      }
    });

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex relative flex-col text-gray-500 p-[10%]">
      <div className="flex gap-[5%] h-[400px] justify-between flex-col-reverse md:flex-row">
        <div
          ref={imageContainer}
          className="relative h-[400px] z-10 w-full md:w-[55%] mt-5 md:mt-0">
          <Image
            src={`/assets/${cars[selectedCar].src}.jpg`}
            alt={cars[selectedCar].name}
            fill
            priority
            className="object-cover"
          />
          <p className="text-lg absolute text-gray-100 font-medium bottom-2 right-2">
            {cars[selectedCar].name}
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-6 w-full md:max-w-[45%]">
          <h2 className="text-white font-medium text-3xl underline underline-offset-4">
            Our Vehicles
          </h2>
          <p>
            Our fleet of Nigerian branded vehicles include the Nord Tank, Nord
            Max, Nord Tusk, Nord Flit, Nord A3 Sedan, Nord A5 SUV, Nord A7 SUV,
            Nord Yarn, Nord Tripper, Nord Lasgi and more.
          </p>
        </div>
      </div>
      <div ref={carsContainer} className="md:mt-28 mt-12 flex flex-col">
        {cars.map((car, index) => {
          return (
            <Link
              id={index}
              data-section
              onMouseEnter={() => {
                setSelectedCar(index);
              }}
              href={`/vehicles/${cars[selectedCar].src}`}
              className={`flex justify-end border-t font-semibold py-3 last:border-b border-gray-500 text-3xl transition-all duration-200 ease-in-out ${
                selectedCar === index ? "text-gray-50" : "text-gray-300"
              }`}
              key={`c_${index}`}>
              <p className="mt-3 flex gap-2">
                <span>{car.name.split(" ")[0]}</span>
                <div
                  className={`relative h-[35px] w-[30px] ${
                    selectedCar === index ? "block" : "hidden"
                  }`}>
                  <Image
                    src={`/assets/${cars[selectedCar].src}.jpg`}
                    alt={cars[selectedCar].name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <span>{car.name.split(" ")[1]}</span>
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;

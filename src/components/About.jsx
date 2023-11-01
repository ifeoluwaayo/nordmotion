import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black items-center justify-center">
      <div className="flex flex-[.5] text-gray-400 px-8 flex-col">
        <h3 className="text-2xl font-medium text-gray-300 mb-3">
          Nord Automobile
        </h3>
        <p className="text-lg">
          Nord Automobiles is a Nigerian automotive manufacturer with
          headquarters in Lagos, Nigeria. Our establishment was born out of the
          need for a remarkable made-in-Nigeria automobile brand.
          <br />
          <br />
          Our operations focus on delivering quality expertise in the value
          chain - which includes the design, sourcing, development, assembling,
          distribution, marketing, provision of sales and after-sales service of
          our unique Nigerian branded automobiles.
          <br />
          <br />
          Our fleet of Nigerian branded vehicles include the Nord Tank, Nord
          Max, Nord Tusk, Nord Flit, Nord A3 Sedan, Nord A5 SUV, Nord A7 SUV,
          Nord Yarn, Nord Tripper, Nord Lasgi and more.
          <br />
          <br />
          Our key objectives include:
          <ul className="text-gray-500 text-base">
            <li>
              &#183; Design and alignment of vehicles in Nigeria and Sub-Saharan
              Africa to fit the local climate.
            </li>
            <li>&#183; Offer affordable and durable vehicles.</li>
            <li>
              &#183; Offer easy access to best-in-class after-sales quality
              service.
            </li>
            <li>&#183; Build a reliable and credible Nigerian auto brand</li>
          </ul>
        </p>
      </div>
      <div className="h-[100vh] flex flex-[.5] w-full top-0 relative">
        <Image src="/assets/wireframe.jpg" alt="Wireframe" fill className="" />
      </div>
    </div>
  );
};

export default About;

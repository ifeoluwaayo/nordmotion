"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const expandableVideoBlock = () => {
    const element = document.querySelector(".video-block");
    const container = element.querySelector(".video-block__container");
    const figure = element.querySelector("figure.video");
    const video = element.querySelector("video");
    const caption = figure.querySelector("figcaption div");

    let isPlaying = false;

    // On video playing toggle values
    video.onplaying = function () {
      isPlaying = true;
    };

    // On video pause toggle values
    video.onpause = function () {
      isPlaying = false;
    };

    // pause the video and hide the caption
    const videoPause = () => {
      if (video && !video.paused && isPlaying) {
        video.pause();

        gsap.to(caption, {
          y: "100%",
          opacity: 1,
          duration: 0.5,
        });
      }
    };

    // play the video and show the caption
    const videoPlay = async () => {
      if (video && video.paused && !isPlaying) {
        gsap.to(caption, {
          y: "0%",
          duration: 0.5,
        });

        return await video.play();
      }
    };

    // add parallax effect to the video before expanding
    gsap.fromTo(
      figure,
      {
        clipPath: `inset(15%)`,
        y: "-50%",
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top top",
          scrub: true,
          //markers: true
        },
        y: "0%",
        duration: 0.5,
        onStart: () => {
          videoPause();
        },
      }
    );

    // init timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1000px",
        // end: "400vh",
        scrub: true,
        pin: container,
      },
    });

    // expand the video block
    tl.fromTo(
      figure,
      {
        clipPath: `inset(15%)`,
      },
      {
        clipPath: `inset(0%)`,
        duration: 0.5,
        onUpdate: () => {
          videoPause();
        },
        onComplete: () => {
          videoPlay();
        },
      }
    );

    // keep the video block untouched on scrolling for a while
    tl.fromTo(
      figure,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 1,
        onUpdate: () => {
          videoPlay();
        },
        onComplete: () => {
          videoPause();
        },
      }
    );

    // shrink the video block to initial state
    tl.fromTo(
      figure,
      {
        clipPath: `inset(0%)`,
      },
      {
        clipPath: `inset(15%)`,
        duration: 0.5,
      }
    );
  };

  const setVwVh = () => {
    let vw = document.documentElement.clientWidth / 100;
    let vh = document.documentElement.clientHeight / 100;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("DOMContentLoaded", setVwVh());
    window.addEventListener("DOMContentLoaded", expandableVideoBlock());
    window.addEventListener("resize", setVwVh());

    return () => {
      window.removeEventListener("DOMContentLoaded", setVwVh());
      window.removeEventListener("DOMContentLoaded", expandableVideoBlock());
      window.removeEventListener("resize", setVwVh());
    };
  }, []);

  return (
    <div className="">
      <div className="">
        <section className="video-block video-block_full-width">
          <div className="video-block__container">
            <figure className="video">
              <video
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
                controls={false}
                src="/assets/bg.mp4"></video>
              <figcaption className="video__caption">
                <div className="">Nord Automobile is the best in Nigeria</div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

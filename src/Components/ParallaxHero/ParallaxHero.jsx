import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParallaxHero.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = () => {
  useEffect(() => {
    gsap.fromTo(
      "img",
      { scale: 1, z: 0 },
      {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          markers: false, // Set to true if you want to see markers for debugging
        },
      }
    );

    gsap.fromTo(
      ".section.hero",
      { scale: 1 },
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=150%",
          scrub: true,
          markers: false, // Set to true if you want to see markers for debugging
        },
      }
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero"></section>
        <section className="section gradient-purple"></section>
        <section className="section gradient-blue"></section>
      </div>
      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
    </div>
  );
};

export default ParallaxHero;

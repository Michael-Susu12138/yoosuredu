import React, { useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  useEffect(() => {
    const handleScroll = () => {
      const slideshow = document.querySelector(".untitled");
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      // Adjust the height based on scroll position
      if (scrollPosition < screenHeight) {
        const newHeight = 60 + (scrollPosition / screenHeight) * 40; // 60vh to 100vh
        slideshow.style.height = `${newHeight}vh`;
      } else {
        slideshow.style.height = "100vh";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="untitled">
      <div className="untitled__slides">
        <div className="untitled__slide">
          <div className="untitled__slideBg"></div>
          <div className="untitled__slideContent">
            <span>London</span>
            <span>Scout</span>
            <a
              className="button"
              href="https://unsplash.com/@scoutthecity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div className="untitled__slide">
          <div className="untitled__slideBg"></div>
          <div className="untitled__slideContent">
            <span>Vladimir</span>
            <span>Kudinov</span>
            <a
              className="button"
              href="https://unsplash.com/@madbyte"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div className="untitled__slide">
          <div className="untitled__slideBg"></div>
          <div className="untitled__slideContent">
            <span>Macio</span>
            <span>Amorim</span>
            <a
              className="button"
              href="https://unsplash.com/@maicoamorim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
        <div className="untitled__slide">
          <div className="untitled__slideBg"></div>
          <div className="untitled__slideContent">
            <span>Mario</span>
            <span>Calvo</span>
            <a
              className="button"
              href="https://unsplash.com/@mariocalvo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash Profile
            </a>
          </div>
        </div>
      </div>
      <div className="untitled__shutters"></div>
    </div>
  );
};

export default Slideshow;

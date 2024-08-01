import React, { useEffect } from "react";
import "./ParallaxSection.css";

const ParallaxSection = () => {
  useEffect(() => {
    const parallax = document.getElementById("parallax");

    const handleScroll = () => {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div id="parallax" className="parallax-item">
        <h2>Div 1</h2>
      </div>
      <div className="parallax-item">
        <h2>Div 2</h2>
      </div>
      <div className="parallax-item">
        <h2>Div 3</h2>
      </div>
      <div className="parallax-item">
        <h2>Div 4</h2>
      </div>
    </section>
  );
};

export default ParallaxSection;

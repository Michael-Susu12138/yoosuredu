import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flight-component">
      <span>New York</span>
      <input
        type="range"
        className="flight"
        style={{ "--val": scrollProgress }}
        value={scrollProgress}
        min="0"
        max="100"
        aria-label="percentage flown"
        readOnly
      />
      <span>Madrid</span>
    </div>
  );
};

export default ProgressBar;

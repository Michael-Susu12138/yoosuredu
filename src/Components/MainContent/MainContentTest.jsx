import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1 className="main-heading">YOOSUREDU 优硕国际留学</h1>
      <div className="scroll-down">
        <svg
          width="50"
          height="30"
          viewBox="0 0 50 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.512 5.20219C50.1627 4.55132 50.1627 3.49606 49.512 2.84516L47.155 0.488151C46.504 -0.162717 45.4487 -0.162717 44.798 0.488151L25 20.2861L5.20219 0.488151C4.55132 -0.162717 3.49606 -0.162717 2.84519 0.488151L0.488151 2.84516C-0.162717 3.49606 -0.162717 4.55132 0.488151 5.20219L23.8216 28.5355C24.4723 29.1865 25.5276 29.1865 26.1786 28.5355L49.512 5.20219Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainContent;

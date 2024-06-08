import React from "react";
import "./TeacherCard.css";

const TeacherCard = ({ name, description, details, imageUrl }) => {
  return (
    <div className="teacher-card">
      <img src={imageUrl} alt={name} className="teacher-image" />
      <div className="teacher-info">
        <h2 className="teacher-name">{name}</h2>
        <p className="teacher-description">{description}</p>
        <p className="teacher-details">{details}</p>
      </div>
      <div className="teacher-action">
        <span role="img" aria-label="Next">
          <svg
            width="25"
            height="44"
            viewBox="0 0 25 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.48098 1.35212C3.92035 0.791653 3.01138 0.791653 2.45072 1.35212L0.420476 3.38235C-0.140159 3.9431 -0.140159 4.85213 0.420476 5.41259L17.4737 22.4659L0.420476 39.519C-0.140159 40.0797 -0.140159 40.9886 0.420476 41.5493L2.45072 43.5795C3.01138 44.1402 3.92035 44.1402 4.48098 43.5795L24.5794 23.4809C25.1402 22.9204 25.1402 22.0114 24.5794 21.4507L4.48098 1.35212Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TeacherCard;

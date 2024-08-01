import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = ({ title, description, imageUrl }) => {
  return (
    <div className="featured-section">
      <img src={imageUrl} alt={title} className="featured-image" />
      <div className="featured-info">
        <h2 className="featured-title">{title}</h2>
        <p className="featured-description">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedSection;

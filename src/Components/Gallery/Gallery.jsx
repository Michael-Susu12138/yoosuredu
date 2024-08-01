// src/Components/Gallery/Gallery.jsx
import React from "react";
import "./Gallery.css";

const galleryData = [
  { id: 1, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 1" },
  { id: 2, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 2" },
  { id: 3, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 3" },
  { id: 4, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 4" },
  { id: 5, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 5" },
  { id: 6, imageUrl: "https://via.placeholder.com/200", alt: "Exhibit 6" },
  // Add more exhibits here
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((exhibit) => (
          <div key={exhibit.id} className="gallery-item">
            <img
              src={exhibit.imageUrl}
              alt={exhibit.alt}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

// src/Components/News/News.jsx
import React from "react";
import "./News.css";

const newsData = [
  {
    id: 1,
    title: "Breaking News: React 18 Released",
    date: "August 1, 2024",
    description:
      "React 18 introduces several new features, including automatic batching, new APIs like startTransition, and much more.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Next.js 13.2: What's New?",
    date: "July 25, 2024",
    description:
      "Next.js 13.2 comes with new features such as improved routing, better image optimization, and faster builds.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "JavaScript Frameworks: A 2024 Overview",
    date: "July 18, 2024",
    description:
      "This article provides an overview of the most popular JavaScript frameworks in 2024, including React, Vue, and Angular.",
    imageUrl: "https://via.placeholder.com/150",
  },
  // Add more news items here
];

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-section-title">News</h1>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-item">
            <img src={news.imageUrl} alt={news.title} className="news-image" />
            <div className="news-content">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-date">{news.date}</p>
              <p className="news-description">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

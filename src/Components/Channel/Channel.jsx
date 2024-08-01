// src/Components/Channel/Channel.jsx
import React from "react";
import "./Channel.css";

const videoData = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/L_jWHffIx5E" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/eYq7WapuDLU" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/tVj0ZTS4WF4" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/hHUbLv4ThOo" },
  // Add more video links here
];

const Channel = () => {
  return (
    <div className="channel-container">
      <h1 className="channel-title">Channel</h1>
      <div className="channel-grid">
        {videoData.map((video) => (
          <div key={video.id} className="channel-item">
            <iframe
              className="channel-video"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="video-title">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;

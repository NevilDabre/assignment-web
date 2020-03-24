import React from "react";
import "./VideoFrame.css";

const Video = ({ youtubeId }) => {
  return (
    <div className="video-holder">
      <iframe
        className="video"
        title="educational-video"
        align="middle"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
};

export default Video;

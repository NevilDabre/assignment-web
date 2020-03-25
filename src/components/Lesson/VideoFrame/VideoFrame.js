import React from "react";
import "./VideoFrame.css";

const Video = ({ youtubeId }) => {
  return (
    <div className="video-holder">
      <iframe
        className="video"
        title="DNA educational video"
        align="middle"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        aria-label="DNA educational video content"
      />
    </div>
  );
};

export default Video;

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

  // return (
  //   <div className="main">
  //     <iframe className="item" />
  //   </div>
  // );
};

export default Video;

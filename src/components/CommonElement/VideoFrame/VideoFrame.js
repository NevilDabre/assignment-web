import React, { useEffect, useState } from "react";
import "./VideoFrame.css";

const VideoFrame = ({ youtubeId, ariaLabel, title }) => {
  const [videoSrc, setVideoSrc] = useState(
    `https://www.youtube.com/embed/${youtubeId}`
  );

  useEffect(() => {}, [youtubeId]);

  useEffect(() => {
    return setVideoSrc();
  }, []);

  return (
    <div className="video-holder" role="complementary">
      <iframe
        className="video"
        title={title}
        align="middle"
        src={videoSrc}
        frameBorder="0"
        aria-label={ariaLabel}
      />
    </div>
  );
};

export default VideoFrame;

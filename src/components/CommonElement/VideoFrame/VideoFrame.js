import React, { useEffect, useState, createRef } from 'react';
import './VideoFrame.css';
import PropTypes from "prop-types";

const VideoFrame = ({ youtubeId, ariaLabel, title }) => {
  const [videoSrc, setVideoSrc] = useState(
    `https://www.youtube.com/embed/${youtubeId}`,
  );
  const newRef = createRef();

  useEffect(() => { }, [youtubeId, videoSrc]);

  useEffect(() => {
    return function cleanup() {
      setVideoSrc();
    };
  }, []);

  return (
    <div
      id="video-holder"
      className="video-holder"
      role="complementary"
      ref={newRef}
    >
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

VideoFrame.propTypes = {
  youtubeId: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
};

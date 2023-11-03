import React from "react";

const VideoPlayer = ({ src, width, height, controls }) => {
  return (
    <video
      src={src}
      width={width}
      height={height}
      controls={controls}
      preload="metadata"
    />
  );
};

export default VideoPlayer;

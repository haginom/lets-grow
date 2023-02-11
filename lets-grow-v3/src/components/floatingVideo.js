import React from "react";
import Video from "./video";

const directionStyles = {
  right: { transform: "rotate(2deg)", marginLeft: "1rem", marginRight: "1rem" },
  left: { transform: "rotate(-3deg)", marginLeft: "1rem", marginRight: "1rem" }
};

const FloatingVideo = ({
  poster,
  source,
  className,
  direction,
  marginTop,
  marginLeft,
  marginBottom
}) => {
  return (
    <div style={{ ...directionStyles[direction], marginTop, marginLeft, marginBottom }}>
      <Video
        poster={poster}
        source={source}
        className={`shadow-3 mb4 br2 ${className ? ` ${className}` : ""}`}
      />
    </div>
  );
};

export default FloatingVideo;

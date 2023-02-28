import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

const directionStyles = {
  right: { transform: "rotate(3deg)", marginLeft: "1rem", marginRight:"1rem" },
  left: { transform: "rotate(-3deg)", marginLeft: "1rem", marginRight:"1rem" },
  leftLess: {transform: "rotate(-1deg)", marginLeft: "1rem", marginRight:"1rem"}
};

const FloatingPhoto = ({
  id,
  alt,
  image,
  className,
  direction,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  zIndex
}) => {
  return (
    <div id={id} style={{ ...directionStyles[direction], marginTop, marginBottom,marginLeft, marginRight, zIndex, borderRadius:"0.6rem" }}>
      <GatsbyImage
        alt={alt}
        image={image}
        imgStyle={{borderRadius:"0.6rem"}}
        style={{borderRadius:"0.6rem", boxShadow: "5px 5px 5px 2px rgba(0,0,0,0.73)"}}
        className={`shadow-5 br4 ${className ? ` ${className}` : ""}`}
      />
    </div>
  );
};



export default FloatingPhoto;


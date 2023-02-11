import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"

const RoundedImg = ({
  alt,
  image,
  className,
}) => {
  return (
    <div style={{ borderRadius:"1rem" }}>
      <GatsbyImage
        alt={alt}
        image={image}
        imgStyle={{borderRadius:"1rem"}}
        style={{borderRadius:"1rem"}}
        className={`br4 ${className ? ` ${className}` : ""}`}
      />
    </div>
  );
};



export default RoundedImg;


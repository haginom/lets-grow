import React from "react";

const ThreeColumnCollapse = ({ children, backgroundColour }) => (
  <div className="dt-l dt--fixed-l h-100 mb3">
    <div className={`dtc-l b--${backgroundColour || "white"}`}>
      {children[0]}
    </div>
    <div className={`dtc-l b--${backgroundColour || "white"}`}>
      {children[1]}
    </div>
    <div className={`dtc-l b--${backgroundColour || "white"}`}>
      {children[2]}
    </div>
  </div>
);

export default ThreeColumnCollapse;

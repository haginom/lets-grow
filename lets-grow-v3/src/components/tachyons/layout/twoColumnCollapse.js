import React from "react";

const TwoColumnCollapse = ({ children, backgroundColour }) => {

  return (
    <div className="cf mw8">
    <div
      className={`fl w-100 w-50-l br-l bw3 b--${backgroundColour ||
        "white"} mb4-ns mb3 mb0-l`}
    >
      {children[0]}
    </div>
    <div
      className={`fl w-100 w-50-l bl-l bw3 b--${backgroundColour || "white"} mb4-ns mb3 mb0-l`}
    >
      {children[1]}
    </div>
  </div>

  )
  
};

export default TwoColumnCollapse;

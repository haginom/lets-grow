import React from "react";
import TwoColumnCollapse from "../tachyons/layout/twoColumnCollapse";
import ThreeColumnCollapse from "../tachyons/layout/threeColumnCollapse";

const ColumnsCollapse = ({ children, backgroundColour }) => {
  if (children.length === 1) {
    return children;
  }
  if (children.length === 2) {
    return (
      <TwoColumnCollapse backgroundColour={backgroundColour}>
        {children}
      </TwoColumnCollapse>
    );
  }
  if (children.length === 3) {
    return (
      <ThreeColumnCollapse backgroundColour={backgroundColour}>
        {children}
      </ThreeColumnCollapse>
    );
  }
};

export default ColumnsCollapse;

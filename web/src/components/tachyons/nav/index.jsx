import React from "react";
import { Link } from "gatsby";
import tachyons from "../tachyonsComposer";
import { navigate } from "@reach/router";

export const ExternalLink = tachyons(
  ({ href, children, ...props }) => (
    <a rel="noopener noreferrer" target="_blank" href={href} {...props}>
      {children}
    </a>
  ),
  "link dim dark-gray f6 dib mr3 mr4-l"
);

export const ScrollingLink = ({ children, anchorId }) => (
  <Link
    to="/"
    className="white fw7"
    onClick={e => {
      e.preventDefault();
      navigate(anchorId);
    }}
  >
    {children}
  </Link>
);

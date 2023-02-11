import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="w-100 ph2 pb2">
    <div className="w-100 bg-black white tc pv4">
      <Link to="/policies" className="white no-underline">
        POLICIES AND PROCEDURES
      </Link>
    </div>
  </footer>
);

export default Footer;

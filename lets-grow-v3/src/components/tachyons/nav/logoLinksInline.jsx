import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import tachyons from "../tachyonsComposer";

const Nav = tachyons("nav", "dt w-90 mw8 center border-box pv3");

const Logo = ({ image }) => {
  const Container = tachyons(Link, "dtc v-mid mid-gray dim");
  const Logo = tachyons(GatsbyImage, "");
  return (
    <Container to="/">
      <Logo image={image} />
    </Container>
  );
};

const LinksContainer = tachyons("div", "dtc v-mid w-100 tr");

const NavLink = tachyons(Link, "link dim dark-blue f6 f5-ns dib");

const ExternalLink = tachyons(
  ({ href, children, ...props }) => (
    <a rel="noopener noreferrer" target="_blank" href={href} {...props}>
      {children}
    </a>
  ),
  "link dim dark-blue f6 f5-ns dib"
);

const LogoLinksInline = ({ image, children }) => {
  return (
    <Nav>
      <Logo image={image} />
      <LinksContainer>{children}</LinksContainer>
    </Nav>
  );
};

LogoLinksInline.Nav = Nav;
// LogoLinksInline.Logo = Logo;
LogoLinksInline.LinksContainer = LinksContainer;
LogoLinksInline.Link = NavLink;
LogoLinksInline.ExternalLink = ExternalLink;

export default LogoLinksInline;

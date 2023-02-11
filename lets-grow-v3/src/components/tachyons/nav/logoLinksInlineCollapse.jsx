import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import tachyons from "../tachyonsComposer";
import styled from "styled-components";


const Logo = ({ image, className, portal }) => {
  const Container = tachyons(
    Link,
    `db dtc-l v-mid mid-gray link dim w-100  tc tl-l mb0 mb0-l pt3  ${className ? ` ${className}` : "pv3-ns"} ${portal ? "w-50-l" : "w-20-l"}`
  );
  return (
    <Container to="/">
      <GatsbyImage 
        className={`dib ${portal ? "w-100" : " w2 h2"}`}
        style={{zIndex: -1}}
        image={image} 
        alt="logo"/>
    </Container>
  );
};

const LinksContainer = tachyons(
  "div",
  "db dtc-l v-top pt4-l w-100 w-80-l tc tr-l pb1 pb0-l"
);

const NavLink = tachyons(
  Link,
  "link dim dark-gray f6 dib mb2 mb0-l w-100 w-auto-ns"
);

const ExternalLink = tachyons(
  ({ href, children, ...props }) => (
    <a rel="noopener noreferrer" target="_blank" href={href} {...props}>
      {children}
    </a>
  ),
  "link dim dark-gray f6 dib mr3 mr4-l"
);

const LogoLinksInlineCollapse = ({ portal, image, children }) => {
  return (
    <>
    {portal ? 
      <StyledNav portal> <Logo portal className="pv0-ns" style={{zIndex:-1}} image={image} />
      <LinksContainer>{children}</LinksContainer></StyledNav> : 
      
      <StyledNav>
      <Logo style={{zIndex:-1}} image={image} />
      <LinksContainer>{children}</LinksContainer>
      <StyledSubHeading className="absolute letsgrowfont tl-l"> 
        Engaging educational resources and tailored live events led by CBeebies best loved gardener Mr. Bloom
      </StyledSubHeading>
      </StyledNav>}
      
    
    </>
  );
};


const StyledNav = styled.nav`
  display: table;
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: center;
  margin-bottom: ${props => (props.portal ? '1rem' : '3rem')};

  @media screen and (min-width: 30rem){
    margin-bottom: ${props => (props.portal ? '1rem' : '5.25rem')};
  } 
  @media screen and (min-width: 60em){
    margin-bottom: ${props => (props.portal ? '1rem' : '2rem')};
    text-align: left;
  }
}`

const StyledSubHeading = styled.h2`
  max-width: 52rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  @media screen and (min-width: 30em){
    bottom: -5rem;
    font-size:1.5rem;
  }
  @media screen and (min-width: 60em){
    left: 8rem;
    bottom: -1rem;
    font-size: 2rem;
  }
`

LogoLinksInlineCollapse.Nav = StyledNav;
// LogoLinksInlineCollapse.Logo = Logo;
LogoLinksInlineCollapse.LinksContainer = LinksContainer;
LogoLinksInlineCollapse.Link = NavLink;
LogoLinksInlineCollapse.ExternalLink = ExternalLink;

export default LogoLinksInlineCollapse;

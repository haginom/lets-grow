import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const OrangeButton = ({navigation, markup, className, targetBlank}) => {
  const { orangeButton } = useStaticQuery(graphql`
    query{
      orangeButton: 
      file(relativePath: {eq: "orange-button.png"}) {
        childImageSharp {
          gatsbyImageData(width: 220, height: 100)
        }
      }
    }
  `
  )
  return (
  <>
  { targetBlank ?  
    <StyledLink
      target="_BLANK"
      rel="noopener noreferrer" 
      className={`${className ? ` ${className}`: ""}`} 
      href={navigation}>
      <GatsbyImage
          image={orangeButton.childImageSharp.gatsbyImageData}
          alt=""
        />
      <InnerWrapper>{markup}</InnerWrapper>
    </StyledLink> : 
    <StyledLink
      className={`${className ? ` ${className}`: ""}`} 
      href={navigation}>
      <GatsbyImage
          image={orangeButton.childImageSharp.gatsbyImageData}
          alt=""
        />
      <InnerWrapper>{markup}</InnerWrapper>
    </StyledLink> }
    </>
   )
  
}

const StyledLink = styled.a`
    z-index: 2;
    width: 190px;
    @media screen and (min-width: 60em){
      width: 220px;
    }
    font-size: 16px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding: 0;

    :not(:disabled) {
      cursor: pointer;
    }
`

const InnerWrapper = styled.div`
  max-width: 190px;
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
  text-align: center;
  justify-content: center;
  display: inline-block;
  margin-bottom: 0.5rem;
  font: inherit;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 550;
  line-height: 1rem;
  color: white;

  &:visited{
    color: white;
  }
`

export default OrangeButton;
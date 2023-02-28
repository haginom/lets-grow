import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Banner = () => {
  const { banner } = useStaticQuery(graphql`
    query{
      banner: 
      file(relativePath: {eq: "banner-with-babies.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `
)

  return (
    <StyledBanner>
      <GatsbyImage 
        className="center"
        style={{maxWidth: "48rem"}}
        image = {banner.childImageSharp.gatsbyImageData}
        alt="Banner with text, Let's Grow Online Launches Spring 2023"
      />
    </StyledBanner>
  )

}

const StyledBanner = styled.div`
  
@media screen and (min-width: 60em){
  max-width: 62rem;
  margin-top: -11rem;
  margin-right: -10rem;
}


`


export default Banner


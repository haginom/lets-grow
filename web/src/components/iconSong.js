import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const IconButton = ({icon, text, heading, file}) => {
  return (
  
    <StyledButton
      href={file}>
      <StyledHeading className="letsgrowfont">{heading}</StyledHeading>
      <GatsbyImage
        image={icon}
        alt=""
      />
      <audio src="/test/audio.ogg">
      Your browser does not support HTML5 audio player, please upgrade your browser.
    </audio>
      <InnerWrapper>{text}</InnerWrapper>
    </StyledButton>
  )

}

const StyledHeading = styled.h4` 
  font-size: 1.3rem;
`

const StyledButton = styled.a` 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  
  :visited{
    color: white;
  }
`

const InnerWrapper = styled.div`
  margin-top: .5rem;
  max-width: 100px;
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 0.75rem;
  text-transform: uppercase;
  text-align: center;
`

export default IconButton;


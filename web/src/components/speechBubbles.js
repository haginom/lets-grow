import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const SpeechBubbles = ({
  speechBubble,
  direction,
  id,
  mw,
  inner,
  mt,
  mb,
  ml
}) => {
  return (
    <StyledSpeechBubble ml={ml} mt={mt} mb={mb} id={id} mw={mw} direction={direction} className="relative">
      <GatsbyImage
        style={{transform: "scale(1.5}"}}
        image={speechBubble}
        alt="quotes inside decorative speech bubbles"
      />
      {inner}
    </StyledSpeechBubble>
  )
}

export const InnerWrapper = ({
  quote, 
  citation, 
  org, 
  direction,
  mw,
  fs,
  mb,
  mts,
  mtxs,
  mt,
  pas
}) => 
  {  
    return (
    <StyledInnerWrapper direction={direction} pas={pas} mb={mb} mt={mt} mts={mts} mtxs={mtxs} fs={fs} mw={mw}>
        <p className="i fw6 mb2 tc"> {quote}</p>
        <p className="tc fw6"> {citation}</p>
        <p className="tc"> {org}</p>
    </StyledInnerWrapper>
    )

}

const StyledSpeechBubble = styled.div`
  max-width: ${props => props.mw || "530px"};
  transform: ${props => props.direction || "rotate(0deg)"};
  margin-top: ${props => props.mt || "0rem"};
  margin-bottom: ${props => props.mb || "0rem"};  
  margin-left: 0rem;
 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
 
  @media screen and (min-width: 60rem ){ 
    margin-left: ${props => props.ml || "0rem"};
  }  
`
const StyledInnerWrapper = styled.div`
  position: absolute;
  max-width: ${props => props.mw || "25rem"};
  font-size: ${props => props.fs || "0.6rem"};
  transform: ${props => props.direction || "rotate(0deg)"};
  line-height: normal;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: center;
  margin-bottom:${props => props.mb || "0px"};
  margin-top:${props => props.mt || "0px"};

  @media screen and (max-width: 45rem){
    font-size: 0.75rem;
    line-height: normal;
    padding: ${props => props.pas || "0 2.5rem 0 2.5rem"};
    align-self: center;
    margin-bottom:-2rem;
  }

  @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 390px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size:0.5rem;
    margin-bottom: -2rem;
    margin-top: ${props => props.mtxs || "-2rem"};
}

@media only screen 
  and (min-device-width: 390px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    font-size:0.65rem;
    margin-bottom: 0rem;
    margin-top: ${props => props.mts || "-.5rem"};
}
  




`
  




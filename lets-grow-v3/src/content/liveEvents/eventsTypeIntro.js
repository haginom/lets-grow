import React from "react";
import OrangeButton from "../../components/button";
import FloatingPhoto from "../../components/floatingPhoto"
import styled from "styled-components";

const StyledTableCells= styled.div`
  display: flex;
  flex-direction: column;
  max-width: "500px"
  justify-content: center;
`
const SubHeading = styled.h3`
  font-size: 1.5rem;
  text-indent: .75rem;
  margin-top: 1rem;

  @media screen and (min-width: 30em){
    font-size: 2.25rem;
  }
`


const EventTypeIntro = ({data}) => {
  return (
    <>
    <div className="dt-l dt--fixed-l h-100 mb2 ph1">
      <div className="dtc-l white br bw0 bw2-l bg-light-blue mb2 mb0-l pa4-ns pa2">
        <StyledWidth mr="1rem" ml="auto" className="flex flex-column mw6">
          <SubHeading className="letsgrowfont">Headline Shows</SubHeading>
          <StyledTableCells>
            <FloatingPhoto 
              alt=""
              image={data.eventsIntroTwo.childImageSharp.gatsbyImageData} 
              direction="left"
              marginTop="2rem"
              marginBottom="1rem"
            /> 
            <OrangeButton
              navigation="/live-events/#headlineShow"
              className="self-center mb3 mt2 grow"
              markup={"learn more"}/>
          </StyledTableCells>
        </StyledWidth>
      </div>   
      <div className="dtc-l white bl bw0 bw2-l bg-green pa4-ns pa2 mb2 mb0-l">
        <StyledWidth ml="2rem" className="flex flex-column mw6">
          <SubHeading className="letsgrowfont">Roaming Interactive Shows</SubHeading>
          <StyledTableCells>
            <FloatingPhoto 
              alt=""
              image={data.eventsIntroFour.childImageSharp.gatsbyImageData} 
              direction="right"
              marginTop="2rem"
              marginBottom="1rem"
            />
            <OrangeButton
              navigation="/live-events/#roamingInteractive" 
              className="self-center mb3 mt2 grow"
              markup={"learn more"}/>
          </StyledTableCells>
        </StyledWidth>
      </div>
    </div>
    <div className="dt-l dt--fixed-l h-100 mb2 ph1">
      <div className="dtc-l white br bw0 bw2-l bg-orange pa4-ns pa2 mb2 mb0-l">
        <StyledWidth ml="auto" mr="1rem"  className="mw6">
          <SubHeading className="letsgrowfont">Interactive Installations</SubHeading>
          <StyledTableCells>
            <FloatingPhoto 
                alt=""
                image={data.eventsIntroOne.childImageSharp.gatsbyImageData} 
                direction="left"
                marginTop="2rem"
                marginBottom="2rem"
              />
              <OrangeButton
                navigation="/live-events/#interactiveInstallation"
                className="self-center mb3 mt2 grow"   
                markup={"learn more"}/>
          </StyledTableCells>
        </StyledWidth>
      </div>
      <div className="dtc-l white bl bw0 bw2-l bg-purple pa4-ns pa2 mb2 mb0-l">
        <StyledWidth ml="2rem" className="mw6">
          <SubHeading className="letsgrowfont">Make & Take Workshops</SubHeading>
          
          <FloatingPhoto 
              alt=""
              image={data.eventsIntroThree.childImageSharp.gatsbyImageData} 
              direction="right"
              marginTop="3rem"
              marginBottom="1rem"
            />
            <OrangeButton 
              navigation="/live-events/#makeTakeWorkshops"
              className="self-center mb3 mt2 grow"
              markup={"learn more"}
            />
        </StyledWidth>
      </div>
  </div>

  </>
    
  );
};


const StyledWidth = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  margin-bottom: -1rem;
  margin-right: ${props => props.mr || "0rem" };

  @media screen and (min-width: 955px){
    margin-left: ${props => props.ml || "inherit" };
  }
`

export default EventTypeIntro;

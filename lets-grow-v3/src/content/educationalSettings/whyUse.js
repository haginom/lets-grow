import React from "react";
import FullWidthPanel from "../../components/fullWidthPanel";
import { Paragraph, SubHeading } from "../../components/tachyons/text";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const WhyUse = ({data}) => {
  return (
    <FullWidthPanel image={data.vegCoupleTwo.childImageSharp.gatsbyImageData} bottom="-9.5rem" left="48rem" colours={"bg-purple white"} maxWidth="64rem">
      <SubHeading>
        Why Use Let's Grow?
      </SubHeading>
      <StyledGrid className="ml5-l">
        <StyledBox colour="#a99a28" className="boxOne">
          <Paragraph className="fw5">Let's Grow...</Paragraph>
          <List>
            <li>
              Covers all areas of the E.Y.F.S curriculum
            </li>
            <li>
              Is based on ‘Development Matters’
            </li>
            <li>
              Is informed by the ‘Characteristics of Effective Learning’
            </li>
            <li>
              Provides opportunities for hands-on sensory experiences
            </li>
            <li>
              Offers a raft of multimedia resources and supportive guides
             </li>
          </List>
        </StyledBox>
        <StyledBox colour={"#68979c"} className="boxTwo">
          <ToggleDecoration top="-12rem" right="14%">
            <GatsbyImage
              image={data.courgette.childImageSharp.gatsbyImageData}
              alt="picture of courgette"
              />
            </ToggleDecoration>
          <Paragraph className="fw5">Teachers use Let's Grow...</Paragraph>
          <List>
            <li>To deliver a creative E.Y.F.S curriculum</li>
            <li>As an irresistible invitation to learn through play</li>
            <li>To aid in collecting baseline data</li>
            <li>To support and encourage learning on...</li>
            <StyledList>
                <li>
                  Healthy eating and nutrition
                </li>
                <li>
                  The four seasons and celebrations throughout the year
                </li>
                <li>
                  The natural world and gardening
                </li>
                <li>
                  Essential early life skills
                </li>
            </StyledList>
          </List>
        </StyledBox>
        <StyledBox colour="#e57d37" className="boxThree">
          <ToggleDecoration top="-8rem" right="2%">
            <GatsbyImage  
                image={data.cauliflower.childImageSharp.gatsbyImageData}
                alt="picture of cauliflower"
                />
            </ToggleDecoration>
          <Paragraph className="fw5">Let's Grow provides children with the opportunity to...</Paragraph>
          <StyledList>
            <li>
              Explore and engage with the natural world
              </li>
            <li>
              Build personal, social and emotional confidence
              </li>
            <li>
              Develop language and communication skills
            </li>
            <li>
              Think critically
            </li>
            <li>
              Grow a stronger sense of wellbeing
            </li>
            <li>
              Engage in immersive, imaginative play
            </li>
            <li>
              Develop a sense of nurture, caretaking and responsibility
            </li>
            <li>
              Achieve school readiness
            </li>
          </StyledList>
        </StyledBox>
      </StyledGrid>

    </FullWidthPanel>
  );
};

const List = styled.ul`
  line-height: 1.5rem;
  margin-left: 0.5rem;
  list-style: disc outside !important;
  li {
    padding-left: .5rem;
    margin-left: .5rem;
  }
`

const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight:500;
  border: white solid 0.5rem;
  border-radius: 30px;
  transform-style: preserve-3d;
  background: ${props => props.colour || "orange"}
`

const ToggleDecoration = styled.div`
  display:none; 
  @media all and (min-width: 45em) {
    display: block;
    position: absolute;
    transform:translateZ(-1px);
    top: ${props => props.top || "0px"};
    right: ${props => props.right || "0px"};
  }
` 


const StyledList = styled.ul`
  > li {
    padding-left:10px;
    line-height: 1.5rem;
    position: relative;
    display: block;
    list-style:none;
    margin-left: 2rem;
  }
  
  li:before {
    content: "✓";
    color: #ffffff;
    position:absolute;
    display: block;
    margin-right:1rem;
    left: -1rem;
  }
`
const StyledGrid = styled.div`
display: flex;
flex-direction: column;
margin: 2rem 0 2rem 0;

> * {
  padding: 1rem .5rem 1rem 0.5rem;
  margin: 1rem 0 1rem 0;
}

 @media screen and (min-width: 45em){
   > * {
    padding: 2rem 1rem 2rem 1rem;
   }
    margin-bottom: 5rem;
    max-width:62rem;
    display: grid;
    grid-template-columns: 0.8fr 0.3fr 0.25fr 0.8fr 0.3fr;
    grid-template-rows: 0.5fr 0.35fr 0.65fr 0.25fr 0.75fr;
    .boxOne{
      z-index:3;
      grid-column-start: 3;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end:3
      
    }
    .boxTwo{
      z-index:2;
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start:2;
      grid-row-end: 5;
    }
    .boxThree{
      z-index:3;
      grid-column-start:2;
      grid-column-end:5;
      grid-row-start:4;
      grid-row-end:6;
    }
}
}
`
export default WhyUse;

import React from "react";
import {  SubHeading } from "../../components/tachyons/text";
import styled from "styled-components";
import FullWidthPanel from "../../components/fullWidthPanel"

const EventsPitch = ({data}) => {
    return (
      <FullWidthPanel image={data.vegFam.childImageSharp.gatsbyImageData} bottom={"-13rem"} left={"37rem"} colours="bg-dark-blue white" markup={"get in touch"} navigation={"/#contact"} mb={"4rem"} maxWidth={"64rem"}>
    <div className="mb5">
      <SubHeading className="mb4">
        Why choose a Let's Grow Live Event?
      </SubHeading>
        <StyledList>
          <StyledListItem path={data.BulletEyesOne.publicURL}>
            Let’s Grow Live Events are total crowd pleasers
          </StyledListItem>
          <StyledListItem path={data.BulletEyesTwo.publicURL}>
            We can tailor any number of performances, activities and workshops to suit your aims and venue
          </StyledListItem>
          <StyledListItem path={data.BulletEyesThree.publicURL}>
            We offer production services and everything needed to stage a really memorable event
          </StyledListItem>
          <StyledListItem path={data.BulletEyesFour.publicURL}>
            With over 20 years of industry experience, our team are warm and approachable professionals
          </StyledListItem>
          <StyledListItem path={data.BulletEyesOne.publicURL}>
            If you would like bespoke elements, activities or features our super-creatives have you covered        
          </StyledListItem>
      </StyledList>    
    </div>
  </FullWidthPanel>

    )
  
};

const StyledList = styled.ul`
  > li {
    clear: left;
    padding: .5rem 0;
  }

  list-style: none;

`
const StyledListItem = styled.li`
font-weight: 700;
&:before {
  content: "";
  background-image: url(${props => props.path});
  background-size: 45px 33.75px;
  background-repeat: no-repeat;
  background-position: center;
  position:relative;
  display: block;
  float: left;
  margin-right:1.5rem;
  bottom: 0.5rem;
  height: 33.75px;
  width: 45px;
}

`




export default EventsPitch;

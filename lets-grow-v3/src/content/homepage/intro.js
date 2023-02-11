import React from "react";
import FullWidthPanel from "../../components/fullWidthPanel";
import { Paragraph, List, ListItem } from "../../components/tachyons/text";
import OrangeButton from "../../components/button";
import styled from "styled-components";

const Intro = () => (
  <FullWidthPanel isIntro={"true"} colours="bg-pink white" maxWidth="60rem">
    <StyledLayout className="ml4-l">
      <Paragraph className="fw7">
        Welcome to Let’s Grow, brought to you by Ben Faulks, the award winning co-creator and presenter of ‘Mr. Bloom’s Nursery’ as seen on CBeebies.
      </Paragraph>

      <Paragraph>
        Let’s Grow brings to life an irresistible world of funky allotments and adorable baby fruits and vegetables. Little learners become immersed in nature and imaginative play exploring the wonderful themes of gardening, growing, nurture and healthy eating.
      </Paragraph>

      <Paragraph>
        Let’s Grow comprises two different types of offering:
      </Paragraph>
      <List>
        <ListItem>Online Educational Resources</ListItem>
        <ListItem>Live Events</ListItem>
      </List>
      <Paragraph>
        Read on to learn more!
      </Paragraph>
    </StyledLayout>
    <StyledFlex className="flex flex-wrap mb2 ml5-l justify-between-l"> 
      <OrangeButton 
        markup={"Online Educational Resources"}
        navigation={"educational-resources"}
        className="grow" 
        />
      <OrangeButton 
        markup={"Live Events Tailored For You"}
        navigation={"live-events"}
        className="grow" 
        />
    </StyledFlex>

  </FullWidthPanel>
);


const StyledLayout = styled.div`
  max-width: 37rem;
  margin: 3rem 0 4rem 0;
  @media screen and (max-width: 60rem){
  justify-content: center;
  margin: 0;
} 
`
const StyledFlex = styled.div`
  max-width: 28rem;
  @media screen and (max-width: 60rem){
  justify-content: center;
} 
`

export default Intro;

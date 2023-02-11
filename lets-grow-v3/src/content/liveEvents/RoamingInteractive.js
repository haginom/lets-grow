import React from "react";
import FullWidthPanel from "../../components/fullWidthPanel";
import styled from "styled-components";
import { StyledEventContainer, StyledTag, RegularTitle, FlexRow, SecondRow, ThirdRow, ButtonContainer, Paragraph} from "../../components/styled/eventTypeStyles";
import OrangeButton from "../../components/button";
import RoundedImg from "../../components/roundedImg";

const RoamingInteractive = ({data}) => (
  <FullWidthPanel maxWidth="64rem"  colours="bg-gold white">
    <div id="roamingInteractive"></div>
    <StyledEventContainer>
      <FlexRow>
        <RegularTitle className="letsgrowfont">
            The Let’s Grow Nannies
        </RegularTitle>
        <StyledTag className="bg-gold white letsgrowfont">
            Roaming Interactive Shows
        </StyledTag>
      </FlexRow>
      <SecondRow>
        <TextWrapper>
          <Paragraph className="fw6">
            Our unique roaming shows invite audiences to join our eccentric Let’s Grow Nannies and their baby fruits & vegetables for an unforgettable day out.
          </Paragraph>
          <Paragraph>
            Kids (and big kids!) are encouraged to get involved in the fun and lend a hand in feeding and caring for our adorable babies, each of whom have their own unique character and backstory.
          </Paragraph>
          <Paragraph>
            Roaming shows can be tailored to suit your event and are typically 45 minutes long with up to 3 shows running throughout the day.
          </Paragraph>
          <Paragraph >
            Fantastic fun for festivals, community events and special celebrations, we tailor our visit to you!
          </Paragraph>
        </TextWrapper>
        <RoundedImg
            image={data.riOne.childImageSharp.gatsbyImageData}
            alt="Smiling girl with a baby vegetable"
        />
        </SecondRow>
        <ThirdRow>
          <RoundedImg
              image={data.riTwo.childImageSharp.gatsbyImageData}
              alt="Mr Bloom & Band"
          />
          <RoundedImg
              image={data.riThree.childImageSharp.gatsbyImageData}
              alt="Children with Vegetable babies"
          />
          <RoundedImg
              image={data.riFour.childImageSharp.gatsbyImageData}
              alt="Child feeding vegetable baby"
          />
        </ThirdRow>
    </StyledEventContainer>
    <ButtonContainer>
      <OrangeButton
        className={"center grow"} 
        navigation={"/#contact"}
        markup={"get in touch"}
      />
    </ButtonContainer>
  </FullWidthPanel>
);


const TextWrapper = styled.div`
  padding: 0.5rem;
  max-width: 31rem;
`


export default RoamingInteractive;

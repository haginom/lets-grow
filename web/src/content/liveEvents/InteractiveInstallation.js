import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import styled from "styled-components"
import {
  StyledEventContainer,
  StyledTag,
  RegularTitle,
  FlexRow,
  SecondRow,
  ThirdRow,
  ButtonContainer,
  Paragraph,
} from "../../components/styled/eventTypeStyles"
import { OrangeButtonInternalLink } from "../../components/button"
import FloatingPhoto from "../../components/floatingPhoto"
import RoundedImg from "../../components/roundedImg"

const InteractiveInstallation = ({ data }) => (
  <FullWidthPanel maxWidth="64rem" colours="bg-orange white">
    <div id="interactiveInstallation"></div>
    <StyledEventContainer>
      <FlexRow>
        <RegularTitle className="letsgrowfont">
          The Let’s Grow Pop-up Allotment
        </RegularTitle>
        <StyledTag className="bg-orange white letsgrowfont">
          Interactive Installation
        </StyledTag>
      </FlexRow>
      <SecondRow>
        <TextWrapper>
          <Paragraph className="fw6">
            The Let’s Grow Nannies invite you to join them in in their beautiful
            pop-up allotment! Audiences are welcomed into our interactive play
            space to get stuck into a range of fabulous activities.
          </Paragraph>
          <Paragraph>
            Visitors are encouraged to befriend, feed and care for our adorable
            baby fruits and vegetables - each of whom has their own unique story
            and character - and help out with some gardening. There’s a chill
            out space, lovely toys and a portrait painting area for budding
            artists too.
          </Paragraph>
          <Paragraph>
            Shows can be tailored for your event. We recommend running up to
            three 45 minute shows throughout a full day. The setting and all
            toys and activities are provided as part of the show.
          </Paragraph>
          <Paragraph>All we need is the space!</Paragraph>
        </TextWrapper>
        <RoundedImg
          image={data.iiOne.childImageSharp.gatsbyImageData}
          alt="Group at an allotment"
        />
      </SecondRow>
      <ThirdRow>
        <RoundedImg
          image={data.ii2Cover.childImageSharp.gatsbyImageData}
          alt="Event setup image"
        />
        <RoundedImg
          image={data.iiThree.childImageSharp.gatsbyImageData}
          alt="Mother and child taking a selfie"
        />
        <RoundedImg
          image={data.iiFour.childImageSharp.gatsbyImageData}
          alt="Two young girls feeding vegetable babies"
        />
      </ThirdRow>
    </StyledEventContainer>
    <ButtonContainer>
      <OrangeButtonInternalLink
        className="center grow"
        navigation={"/#contact"}
        markup={"get in touch"}
      />
    </ButtonContainer>

    <StyledEventContainer>
      <FlexRow>
        <RegularTitle align="center" className="letsgrowfont">
          The Let’s Grow Magic Shed & Treasure Hunt
        </RegularTitle>
        <StyledTag className="bg-orange white letsgrowfont">
          Interactive Installation
        </StyledTag>
      </FlexRow>
      <ImageGrid>
        <FloatingPhoto
          marginTop="1rem"
          image={data.iiaOne.childImageSharp.gatsbyImageData}
          alt="Girl with Lets Grow Treasure Hunter Award"
        />
        <FloatingPhoto
          zIndex="5"
          marginLeft="0.25rem"
          direction="left"
          image={data.iiaTwo.childImageSharp.gatsbyImageData}
          alt="Boy holiding Lets Grow Treasure Hunter Award"
        />
        <FloatingPhoto
          zIndex="5"
          image={data.iiaThree.childImageSharp.gatsbyImageData}
          alt="Lets Grow Treasure Hunter Award"
        />
        <FloatingPhoto
          direction={"right"}
          image={data.iiaFour.childImageSharp.gatsbyImageData}
          alt="Lets grow staff at a treasure hunt"
        />
        <FloatingPhoto
          direction={"left"}
          image={data.iiaFive.childImageSharp.gatsbyImageData}
          alt="Lets grow with young girl"
        />
        <FloatingPhoto
          zIndex="7"
          direction={"right"}
          image={data.iiaSix.childImageSharp.gatsbyImageData}
          alt="Treasure Hunt map"
        />
        <FloatingPhoto
          zIndex="6"
          marginRight="-2rem"
          marginLeft="-1rem"
          image={data.iiaSeven.childImageSharp.gatsbyImageData}
          alt="Mr Bloom & Band"
        />
      </ImageGrid>
      <LargeTextWrapper>
        <Paragraph className="fw6">
          Starting from our Magic Shed, this is a wonderful treasure hunt with a
          difference!
        </Paragraph>
        <Paragraph>
          The Let’s Grow Fruit and Vegetable Babies are playing Hide & Seek! The
          experience begins at the Magic Shed where families are given a map,
          stickers and clues before being sent out on their quest. Big,
          colourful vinyl stickers or rustic signs of our baby fruits and
          vegetables are hidden around your event site and families are tasked
          with finding them all.
        </Paragraph>
        <Paragraph>
          Upon completion it’s back to the Magic Shed to ring the victory bell
          and be enrolled into the Treasure Hunter Hall of Fame!
        </Paragraph>
        <Paragraph>
          With a bounty of imaginative, interactive features, the Magic Shed
          really lives up to its name. The friendly Let’s Grow Nannies manage
          its various quirks and idiosyncrasies to the delight of visitors, of
          all ages!
        </Paragraph>
        <Paragraph>
          The Let’s Grow team do all the work and visit your site ahead of the
          event to plan the hunt. An enchanting experience with fun for all the
          family.
        </Paragraph>
      </LargeTextWrapper>
    </StyledEventContainer>
    <ButtonContainer>
      <OrangeButtonInternalLink
        className={"center grow"}
        navigation={"/#contact"}
        markup={"get in touch"}
      />
    </ButtonContainer>
  </FullWidthPanel>
)

const TextWrapper = styled.div`
  padding: 0.5rem;
  max-width: 31rem;
`

const LargeTextWrapper = styled.div`
  padding-top: 0.5rem;
  max-width: 52rem;
`

const ImageGrid = styled.div`
  display: grid;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  grid-template-columns: 1.6fr 1fr 1fr 1.7fr;
  grid-template-rows: auto auto;
  gap: 0;

  div:nth-child(4) {
    grid-row: span 2;
  }
  div:nth-child(2) {
    transform: scale(1.2);
  }

  @media screen and (min-width: 60em) {
    div:nth-child(n + 5) {
      margin-top: -1.5rem;
    }
  }
`

export default InteractiveInstallation

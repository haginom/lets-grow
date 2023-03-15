import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import styled from "styled-components"
import {
  StyledEventContainer,
  StyledTag,
  ButtonContainer,
} from "../../components/styled/eventTypeStyles"
import { OrangeButtonInternalLink } from "../../components/button"
import FloatingPhoto from "../../components/floatingPhoto"
import RoundedImg from "../../components/roundedImg"

const MakeTakeWorkshops = ({ data }) => (
  <FullWidthPanel maxWidth="64rem" colours="bg-purple white">
    <div id="makeTakeWorkshops"></div>
    <StyledEventContainer>
      <Intro>
        <StyledTag className="ml3-l mb2 bg-purple white letsgrowfont">
          Make & Take Workshops
        </StyledTag>
        <Paragraph className="fw6 mb2">
          Our Make & Take Workshops encourage hands-on creativity in a
          specially-curated space. Everyone leaves with something self-made and
          special.
        </Paragraph>
        <Paragraph className="mb2">
          We bring everything needed and seasonally theme the materials. All we
          need is a minimum space of 6m x 6m.
        </Paragraph>
      </Intro>
      <Layout>
        <Column>
          <StyledTag className="bg-gold white w-100 letsgrowfont">
            Veggie Cress Heads
          </StyledTag>
          <RoundedImg
            image={data.mtwOne.childImageSharp.gatsbyImageData}
            alt="workshop image"
          />
          <Paragraph className="mb2 mb4-l">
            A great mix of planting and art, this simple and fun activity shows
            children how quickly seeds can grow into something tasty for your
            sandwich!
          </Paragraph>
          <StyledTag className="w-100 bg-gold white letsgrowfont">
            Plant your own produce
          </StyledTag>
          <RoundedImg
            image={data.mtwTwo.childImageSharp.gatsbyImageData}
            alt="workshop image"
          />
          <Paragraph className="mb2">
            This hands-on, educational experience encourages little green
            fingers to plant seeds that benefit butterflies, bees and other
            creatures.
          </Paragraph>
          <Paragraph>
            Everyone leaves with colourfully personalised pots with funky
            wooden-spoon seed markers, and the anticipation of watching their
            plant grow!
          </Paragraph>
        </Column>
        <Column>
          <StyledTag className="w-100 bg-gold white letsgrowfont">
            Mr. Bloom Gardening Hats
          </StyledTag>
          <RoundedImg
            image={data.mtw3Cover.childImageSharp.gatsbyImageData}
            alt="two kids with hats"
          />
          <Paragraph className="mb2">
            Horticultural Haute Couture! Kids and adults alike personalise a Mr.
            Bloom-style gardening hat using all manner of colourful up-cycled
            fabrics, ribbon and materials.
          </Paragraph>
          <StyledTag className="w-100 bg-gold white letsgrowfont">
            Junior Nanny Workshops
          </StyledTag>
          <FloatingPhoto
            direction="left"
            imgStyle={{ borderRadius: "0.8rem", margin: "0.5rem" }}
            style={{ borderRadius: "0.8rem", margin: "0.5rem" }}
            image={data.mtwFour.childImageSharp.gatsbyImageData}
            alt="Mr Bloom & Band"
          />
          <FloatingPhoto
            direction="right"
            marginTop="-2rem"
            imgStyle={{ borderRadius: "0.8rem", margin: "0.5rem" }}
            style={{ borderRadius: "0.8rem", margin: "0.5rem" }}
            image={data.mtwFive.childImageSharp.gatsbyImageData}
            alt="three kids with eggs"
          />
          <Paragraph className="mb2">
            Guided by the Let’s Grow Nannies, visitors make their very own
            beautiful baby having selected the perfect fruit or vegetable from
            the Let’s Grow market stall.
          </Paragraph>
          <Paragraph>
            They bring their baby to life with a costume, eyes and accessories
            and get to take them home after being ceremoniously registered as a
            ‘Junior Let’s Grow Nanny’!
          </Paragraph>
        </Column>
      </Layout>
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

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
`
const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 0.5rem;
  flex: 0 1 28rem;

  > * {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`

const Intro = styled.div`
  margin-left: 1rem;
`

const Paragraph = styled.p`
  line-height: 1rem;
  font-size: 0.75rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 35em) {
    font-size: 1rem;
    line-height: 1.3rem;
    padding: 0.5rem;
    padding-left: 1rem;
  }
`

export default MakeTakeWorkshops

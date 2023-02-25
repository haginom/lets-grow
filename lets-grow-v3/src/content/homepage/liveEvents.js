import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import FullWidthPanel from "../../components/fullWidthPanel"
import ColumnsCollapse from "../../components/layout/columnsCollapse"
import { SpeechBubbles, InnerWrapper } from "../../components/speechBubbles"
import { Paragraph } from "../../components/tachyons/text"
import FloatingVideo from "../../components/floatingVideo"
import { OrangeButtonInternalLink } from "../../components/button"
import FloatingPhoto from "../../components/floatingPhoto"
import mrBloomVideo from "../../videos/mr-bloom-v01.mp4"
import mrBloomPoster from "../../videos/poster-mr-bloom-v01.jpg"

const LiveEvents = ({ data }) => {
  const logoData = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 130, layout: FIXED)
        }
      }
    }
  `)
  return (
    <FullWidthPanel
      colours="white bg-blue"
      image={data.bunting.childImageSharp.gatsbyImageData}
      top="-3.6rem"
      left="36rem"
      maxWidth="58rem"
    >
      <div className="flex items-center">
        <GatsbyImage
          alt="logo"
          image={logoData.logo.childImageSharp.gatsbyImageData}
        />
        <StyledSubHeading className="letsgrowfont self-start">
          Let's Grow Live Events
        </StyledSubHeading>
      </div>

      <StyledLayout>
        <TextContainer id="textContainer">
          <Paragraph className="fw6">
            Mr. Bloom and friends bring you Let’s Grow Live Events!
          </Paragraph>
          <Paragraph>
            From stage shows of any size, to creative workshops and pop-up
            installations, our super-inventive team can curate a live event to
            suit your setting.
          </Paragraph>
          <Paragraph>
            We guarantee to delight audiences of every age with our family of
            baby fruit and veg, looked after by the lovely Let’s Grow Nannies
            and Mr. Bloom!
          </Paragraph>
        </TextContainer>
        <div id="vidContainer">
          <FloatingVideo
            poster={mrBloomPoster}
            source={mrBloomVideo}
            direction="right"
          />
        </div>
      </StyledLayout>

      <SpeechBubbles
        speechBubble={data.speechBubbleThree.childImageSharp.gatsbyImageData}
        mw={"680px"}
        mt={"-7rem"}
        mb={"-2rem"}
        ml={"-1rem"}
        direction={"rotate(-1deg)"}
        inner={
          <InnerWrapper
            mw={"35rem"}
            fs={"1rem"}
            mt={"2.5rem"}
            mts={"1.5rem"}
            mtxs={"-.9rem"}
            direction={"rotate(-3deg)"}
            quote={
              "“Magical and imaginative, family friendly theatre at its very finest!”"
            }
            citation={"Nesta Nelson"}
            org={"Producer, Back to Ours Arts Organisation"}
          />
        }
      />

      <StyledPhotoGallery className="mb2 relative mw8">
        <GatsbyImage
          alt="decorative watermelon"
          className="dn db-l"
          style={{
            top: "-250px",
            width: 460,
            position: "absolute",
            right: "-70px",
          }}
          image={data.watermelon.childImageSharp.gatsbyImageData}
        />
        <ColumnsCollapse backgroundColour="blue">
          <FloatingPhoto
            alt="Crowd pictured at a Lets Grow Live event with Mr bloom on stage"
            image={data.liveEventsOne.childImageSharp.gatsbyImageData}
            direction="left"
            marginTop="3rem"
          />
          <FloatingPhoto
            alt="Parents and Children at a Lets Grow Live Event at an allotment"
            image={data.liveEventsTwo.childImageSharp.gatsbyImageData}
            direction="right"
            marginTop="1rem"
          />
        </ColumnsCollapse>
        <ColumnsCollapse backgroundColour="blue">
          <FloatingPhoto
            alt="Mother and Child smiling, with boy feeding a courgette baby"
            image={data.liveEventsThree.childImageSharp.gatsbyImageData}
            direction="leftLess"
            marginTop="1rem"
          />
          <FloatingPhoto
            alt="Bob with Courgette Baby"
            image={data.liveEventsFour.childImageSharp.gatsbyImageData}
            direction="left"
            marginTop="1rem"
          />
        </ColumnsCollapse>
      </StyledPhotoGallery>
      <StyledLastSection>
        <SpeechBubbles
          speechBubble={data.speechBubbleFour.childImageSharp.gatsbyImageData}
          id="secondElement"
          mw={"680px"}
          mt={"-2rem"}
          direction={"rotate(0.5deg)"}
          inner={
            <InnerWrapper
              mw={"30rem"}
              mb={"-1rem"}
              fs={"1rem"}
              mts={"0.5rem"}
              mtxs={"-1rem"}
              direction={"rotate(0.5deg)"}
              quote={
                "“From concept to design, creation to execution - this team will pull out all the stops to bring fantastic dreams to life using their skills, vision and attention to detail.”"
              }
              citation={"Harriet Roberts"}
              org={"Blackburn Business Improvement District"}
            />
          }
        />
        <div id="first">
          <OrangeButtonInternalLink
            navigation={"live-events"}
            markup={"find out more"}
            className="grow"
          />
        </div>
      </StyledLastSection>
    </FullWidthPanel>
  )
}

const TextContainer = styled.div`
  @media screen and (min-width: 35rem) and (max-width: 60rem) {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 60em) {
    max-width: 27rem;
  }
`

const StyledSubHeading = styled.h2`
  margin-top: 2.5rem;
  margin-left: -1rem;
  font-size: 1.5rem;
  @media screen and (min-width: 35em) {
    font-size: 2.25rem;
  }
`

const StyledLayout = styled.div`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 45rem) {
    margin-bottom: 0rem;
  }

  @media screen and (min-width: 60em) {
    max-width: 58rem;
    min-width: 54rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 0.25fr 0.5fr;
    grid-template-columns: 1fr 0.5fr 0.5fr 1fr;

    #textContainer {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    #vidContainer {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
`

const StyledPhotoGallery = styled.div`
  max-width: 58rem;
`
const StyledLastSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  gap: 1rem;

  @media screen and (min-width: 60em) {
    max-width: 62rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.25fr 0.4fr 0.1fr 1fr;
    justify-items: end;
    align-items: center;
    margin-left: 2rem;
    gap: 0rem;

    #first {
      grid-row-start: 0;
      grid-row-end: 1;
      grid-column-start: 2;
      justify-self: start;
      margin-bottom: 3rem;
    }
    #secondElement {
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
`

export default LiveEvents

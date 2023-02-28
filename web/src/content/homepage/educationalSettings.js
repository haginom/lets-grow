import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import FloatingVideo from "../../components/floatingVideo"
import promo2020 from "../../videos/lets-grow-promo-2020.mp4"
import promoPoster from "../../videos/poster-promo-2020.jpg"
import { Paragraph, SubHeading } from "../../components/tachyons/text"
import { SpeechBubbles, InnerWrapper } from "../../components/speechBubbles"
import Banner from "../../components/banner"
import { OrangeButtonInternalLink } from "../../components/button"
import styled from "styled-components"

const EducationalSettings = ({ data }) => {
  const logoImages = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 125, layout: FIXED)
        }
      }
    }
  `)
  return (
    <FullWidthPanel
      image={data.vegCoupleThree.childImageSharp.gatsbyImageData}
      bottom="-15.2rem"
      left="36rem"
      colours="white bg-green"
      maxWidth="60rem"
    >
      <div className="flex items-center">
        <GatsbyImage
          alt=""
          style={{ overflow: "visible" }}
          image={logoImages.logo.childImageSharp.gatsbyImageData}
        />
        <SubHeading>Let's Grow For Early Years Educational Settings</SubHeading>
      </div>
      <StyledLayout className="ml5-l mb3 mb5-ns">
        <Paragraph className="fw6 mb3-ns">
          Our online Early Years resources offer a captivating range of
          innovative session plans, creative schemes of work, interactive films,
          songs and ideas for hands-on sensory experiences. Joy and learning for
          children aged 3-5yrs, while also great fun for children up to 7yrs.
        </Paragraph>
        <div
          className="mv1 mv4-ns ml5-l flex justify-center"
          style={{ maxWidth: "700px" }}
        >
          <FloatingVideo
            poster={promoPoster}
            source={promo2020}
            direction="left"
          />
        </div>
        <Paragraph>
          Developed hand-in-hand with Early Years Practitioners, every
          easy-to-use resource aligns to the Early Years Foundation Stage
          curriculum.
        </Paragraph>
        <Paragraph style={{ marginBottom: "-15px" }}>
          Deliverable in a range of settings such as nurseries, pre-schools and
          primary schools, our content supports the development of children’s
          social skills, language and communication, confidence and knowledge.
        </Paragraph>
      </StyledLayout>
      <StyledContainer>
        <SpeechBubbles
          speechBubble={data.speechBubbleOne.childImageSharp.gatsbyImageData}
          id={"one"}
          direction={"rotate(-2deg)"}
          inner={
            <InnerWrapper
              fs={"0.875rem"}
              pas={"0 3.5rem 0 3.5rem"}
              mts={"-1rem"}
              mt={"-1rem"}
              mtxs={"-1.5rem"}
              quote={
                "“We absolutley love using Let’s Grow! We recommend it to any school for all the amazing cross-curricular links and the unique opportunities for learning that it provides.”"
              }
              citation={"Natasha Willenbrook - Reception Teacher"}
              org={"Cherryfold Community Primary School"}
            />
          }
        />
        <SpeechBubbles
          speechBubble={data.speechBubbleTwo.childImageSharp.gatsbyImageData}
          id={"two"}
          direction={"rotate(2deg)"}
          inner={
            <InnerWrapper
              fs={"0.875rem"}
              mb={"1rem"}
              mt={"-0.5rem"}
              mts={"-2rem"}
              mtxs={"-1.5rem"}
              quote={
                "“Let’s Grow is easy to follow, fun to teach and great value! It’s a very rewarding process for both the children and staff. All puplis made fantastic progress because of it!”"
              }
              citation={"Megan Dodd - Nursery & Reception Teacher, SEND"}
              org={"Heptonstall Junior, Infant & Nursery School"}
            />
          }
        />
      </StyledContainer>
      <StyledWidth>
        <Banner />
        <StyledButtonLayout className="ml5-l">
          <OrangeButtonInternalLink
            className="grow"
            navigation={"#contact"}
            markup={"Keep me Updated"}
          />
        </StyledButtonLayout>
      </StyledWidth>
    </FullWidthPanel>
  )
}

const StyledButtonLayout = styled.div`
  max-width: 72rem;
  margin-bottom: 2rem;
  > * {
    margin-left: auto;
    margin-right: auto;
  }
`

const StyledLayout = styled.div`
  max-width: 48.575rem;
  justify-items: center;
`

const StyledWidth = styled.div`
  max-width: 48.58rem;
`
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-left: -1rem;
  gap: 1rem;

  @media screen and (min-width: 60em) {
    margin-top: 3rem;
    max-width: 62rem;
    min-width: 60rem;
    display: grid;
    grid-template-rows: 1fr 0.5fr 0.5fr 1fr;
    grid-template-columns: 1fr 0.25fr 0.5fr 1fr;

    #one {
      grid-row-start: 1;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 4;
    }

    #two {
      grid-row-start: 2;
      grid-row-end: 5;
      grid-column-start: 3;
      grid-column-end: 5;
    }
  }
`

export default EducationalSettings

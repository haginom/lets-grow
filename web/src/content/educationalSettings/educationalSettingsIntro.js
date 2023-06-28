import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import {
  SubHeading,
  Paragraph,
  List,
  ListItem,
} from "../../components/tachyons/text"
import { IconButton } from "../../components/iconButton"
import { StyledSmallWidth } from "../../components/styled/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const EducationalSettingsIntro = ({ data }) => {
  return (
    <FullWidthPanel
      image={data.vegFam.childImageSharp.gatsbyImageData}
      bottom={"-22.5rem"}
      left={"-6rem"}
      colours="white bg-green"
      maxWidth="63rem"
    >
      <div className="flex flex-wrap mt5-l mb7-l mb4-l">
        <Column>
          <SubHeading>Let’s Grow for Educational Settings</SubHeading>
          <StyledSmallWidth className="mb4">
            <Paragraph>
              Our unique online Early Years resources have been designed for
              mainstream, SEND and alternative provision schools, nurseries,
              pre-schools, childminders and home educators to use throughout the
              academic year.
            </Paragraph>
            <Paragraph>
              Let’s Grow has the Early Years Foundation Stage curriculum
              embedded throughout and offers children an irresistible invitation
              to learn though play.
            </Paragraph>
            <Paragraph>
              Our innovative, engaging content is led by our trio of friendly
              gardeners and a family of adorable baby fruits and vegetables who
              are brought to life in the classroom.
            </Paragraph>
            <Paragraph>Users have access to:</Paragraph>
            <List>
              <ListItem>Comprehensive session plans</ListItem>
              <ListItem>
                Simple preparation and practical delivery guides
              </ListItem>
              <ListItem>
                A series of interactive, pre-recorded{" "}
                <span className="fw6">'Video Calls'</span> that kick-start each
                session
              </ListItem>
              <ListItem>
                A suite of multimedia resources including films, songs and
                printables
              </ListItem>
              <ListItem>
                Easy to implement <span className="fw6">‘Handy Hints’</span>{" "}
                full of helpful ideas and advice
              </ListItem>
              <ListItem>Curriculum linked activities </ListItem>
              <ListItem>Enhanced continuos provision ideas</ListItem>
              <ListItem>
                The opportunity to complete Arts Award Discover
              </ListItem>
            </List>
          </StyledSmallWidth>
          <h3 className="letsgrowfont ml0 f3 f2-ns mt5-ns mt3">
            Excerpts of Let’s Grow content
          </h3>
          <IconDiv className="mh3-m">
            <IconButton
              icon={data.iconOne.childImageSharp.gatsbyImageData}
              text={"Mr. Bloom Session Plan Excerpt"}
              file={data.bloomSessionPlan.publicURL}
            />
            <IconButton
              icon={data.iconThree.childImageSharp.gatsbyImageData}
              text={"Mr. Bloom Video Call"}
              file={data.bloomVideoCall.publicURL}
            />
            <IconButton
              icon={data.iconSix.childImageSharp.gatsbyImageData}
              text={"Get Growing Guide"}
              file={data.bobFloVideoCall.publicURL}
            />
            <IconButton
              icon={data.iconFour.childImageSharp.gatsbyImageData}
              text={"Songs"}
              file={data.song.publicURL}
            />
            <IconButton
              icon={data.iconTwo.childImageSharp.gatsbyImageData}
              text={"Handy Hints"}
              file={data.handyHintsInfo.publicURL}
            />
            <IconButton
              icon={data.iconOne.childImageSharp.gatsbyImageData}
              text={"Bob & Flo Session Plan Excerpt"}
              file={data.bobFloSessionPlan.publicURL}
            />
            <IconButton
              icon={data.iconThree.childImageSharp.gatsbyImageData}
              text={"Bob & Flo Video Call"}
              file={data.bobFloVideoCall.publicURL}
            />
          </IconDiv>
        </Column>

        <ImageColumn>
          <GatsbyImage
            alt="poloroid image of Mr Bloom"
            className="polaroidOne"
            style={{ transform: "rotate(5deg)" }}
            image={data.polaroidBloom.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            alt="poloroid image of Flo"
            className="polaroidTwo"
            style={{ transform: "rotate(-2deg" }}
            image={data.polaroidFlo.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            alt="poloroid image of Bob"
            className="polaroidThree"
            style={{ transform: "rotate(2deg)" }}
            image={data.polaroidBob.childImageSharp.gatsbyImageData}
          />
        </ImageColumn>
      </div>
    </FullWidthPanel>
  )
}

const IconDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 9rem);
  justify-content: space-around;
  grid-gap: 20px;
  align-items: start;
  justify-content: center;
  margin-top: 2rem;

  @media screen and (min-width: 45em) {
    margin-top: 2rem;
    justify-content: start;
  }

  @media screen and (min-width: 60em) {
    margin-left: -1rem;
  }
`
const Column = styled.div`
  flex: 0 1 700px;

  @media screen and (min-width: 60em) {
    margin-bottom: 4rem;
  }
`

const ImageColumn = styled.div`
  max-width: 300px;
  max-height: 800px;
  display: inline-grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 1fr;
  margin-top: 3rem;
  .polaroidOne {
    z-index: 3;
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
  }
  .polaroidTwo {
    z-index: 2;
    grid-column: 1 / span 2;
    grid-row: 2 / span 3;
  }
  .polaroidThree {
    z-index: 1;
    grid-column: 2 / span 2;
    grid-row: 4 / span 2;
  }

  @media screen and (min-width: 65em) {
    margin-top: -2rem;
  }
  @media screen and (max-width: 823px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export default EducationalSettingsIntro

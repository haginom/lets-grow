import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { SubHeading, Paragraph } from "../../components/tachyons/text"
import OrangeButton from "../../components/button"
import styled from "styled-components"
import { ThemeIntro } from "../../components/guideTable"
import { GatsbyImage } from "gatsby-plugin-image"

export const GSOne = ({ data }) => (
  <FullWidthPanel
    image={data.gsgOne.childImageSharp.gatsbyImageData}
    bottom="-4rem"
    left="28rem"
    colours="bg-light-blue white"
    maxWidth="58rem"
  >
    <Wrapper className="mw7-l">
      <SubHeading className="letsgrowfont mb2 mt4">
        Getting Started Guide
      </SubHeading>
      <Paragraph className="fw6">
        Our schemes of work are designed with flexibility in mind. Sessions can
        be delivered in sequential order or as standalone content to compliment
        the wider curriculum.
      </Paragraph>
      <Paragraph>
        You decide how Let’s Grow works best in your setting throughout the
        academic year, however, there’s only one way to begin...
      </Paragraph>
      <Paragraph>
        Start by watching our opening video call, ‘Welcome to Let’s Grow with
        Mr. Bloom’, with your children. From here, you can dive straight into
        any of the four themes.
      </Paragraph>
      <Paragraph>
        A video call to one or more of our characters begins every session,
        which in turn acts as the catalyst for the fun and learning that
        follows.
      </Paragraph>
      <Paragraph>
        Session plans are divided into two parts, with ‘Part One’ introducing
        the theme and characters. ‘Part Two’ goes on to provide curriculum
        linked activities and ideas to support the facilitation of your enhanced
        continuous provision.
      </Paragraph>
      <Paragraph>
        Note, that in ‘Getting to Know Each Other’ and ‘Celebrations’ an
        exciting introductory session establishes the idea of the fruit &
        vegetable babies coming to visit the children in your setting.
      </Paragraph>
      <OrangeButton
        navigation="/portal/meet-the-characters"
        className="self-center mv4 ml5-ns mt2 grow"
        markup={"meet the characters"}
      />
    </Wrapper>
  </FullWidthPanel>
)

export const GSTwo = ({ data }) => (
  <FullWidthPanel colours="bg-navy white" maxWidth="58rem">
    <SubHeading className="mt4">Themes and Sessions at a glance</SubHeading>
    <ThemeIntro data={data} />
  </FullWidthPanel>
)

export const GSThree = ({ data }) => (
  <FullWidthPanel
    image={data.MrBloom.childImageSharp.gatsbyImageData}
    top="9.5rem"
    left="37rem"
    colours="bg-gold white"
    maxWidth="58rem"
  >
    <SubHeading className="mt4">Songs</SubHeading>
    <Paragraph className="mw7">
      As part of Let’s Grow and for use in the wider daily routine, Mr. Bloom’s
      collection of songs can be used whenever the children could do with a
      little motivation! Songs are designed to encourage children to wash their
      hands, tidy up, eat lunch, keep active and there’s a one minute countdown
      song. There are audio versions of Mr. Bloom and his band singing the songs
      and you can also video call Mr. Bloom at his shed for an acoustic
      sing-song with his ukulele. There’s even Bob & Flo’s daily workout video
      which is ideal for getting everyone moving!
    </Paragraph>
    <OrangeButton
      navigation="/"
      className="ml7-ns mt5 grow"
      markup={"listen to our songs"}
    />
    <GatsbyImage
      style={{ marginTop: "-3.5rem", marginBottom: "-3.5rem" }}
      image={data.gsgFive.childImageSharp.gatsbyImageData}
    />
  </FullWidthPanel>
)

export const GSFour = ({ data }) => (
  <FullWidthPanel colours="bg-light-yellow white" maxWidth="58rem">
    <SubHeading className="mt4">Symbols & Icons</SubHeading>
    <SymbolsTable className="mb5">
      <TableColumn>
        <GatsbyImage
          style={{
            height: "11rem",
            width: "18rem",
            overflow: "visible",
            marginLeft: "1.5rem",
          }}
          image={data.gsgTwo.childImageSharp.gatsbyImageData}
          alt=""
        />
        <Text>
          Bubbles contain suggested teacher dialogue to frame the activity.
        </Text>
      </TableColumn>
      <TableColumn>
        <GatsbyImage
          objectFit="contain"
          style={{
            height: "11rem",
            marginLeft: "2rem",
            transform: "scale(1.1)",
          }}
          image={data.gsgThree.childImageSharp.gatsbyImageData}
          alt=""
        />
        <Text>
          Notepads list the items that will be required for each task.
        </Text>
      </TableColumn>
      <TableColumn>
        <GatsbyImage
          objectFit="contain"
          style={{ marginTop: "4.2rem", marginBottom: "3.5rem" }}
          image={data.gsgFour.childImageSharp.gatsbyImageData}
          alt=""
        />
        <Text>
          A highlighter references a multimedia resource which you will find in
          the library.
        </Text>
      </TableColumn>
      <TableColumn mt="-4.6rem">
        <IconContainer className="flex flex-column">
          <GatsbyImage
            image={data.gsgEleven.childImageSharp.gatsbyImageData}
            alt=""
          />
          <GatsbyImage
            image={data.gsgThirteen.childImageSharp.gatsbyImageData}
            alt=""
          />
          <GatsbyImage
            image={data.gsgTwelve.childImageSharp.gatsbyImageData}
            alt=""
          />
        </IconContainer>
        <Text>
          Clickable icons are shortcuts to the multimedia content for that
          session.
        </Text>
      </TableColumn>
    </SymbolsTable>
  </FullWidthPanel>
)

const IconContainer = styled.div`
  margin-top: 1rem;
  @media all and (min-width: 60em) {
    margin-top: 0rem;
  }
  > * {
    flex: 0 1 85px;
    align-self: center;
  }
`
const Text = styled.p`
  max-width: ${props => props.m || "0rem"};
  max-width: 12.6rem;
`
const Wrapper = styled.div``

const SymbolsTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  gap: 1rem;
  margin-top: 3rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media all and (min-width: 60em) {
    flex-wrap: nowrap;
    margin: 3rem 0 0 0;
    max-width: 62rem;
  }
`
const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  max-width: 13rem;
  justify-content: center;
  gap: 1rem;

  @media all and (min-width: 60em) {
    margin-top: ${props => props.mt || "0rem"};
    gap: 2rem;
  }
`

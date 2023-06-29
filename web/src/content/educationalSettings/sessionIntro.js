import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { SubHeading, Paragraph } from "../../components/tachyons/text"
import { OrangeButton, OrangeButtonInternalLink } from "../../components/button"
import styled from "styled-components"

const SessionIntro = ({ data, portal }) => {
  return (
    <>
      <div className="dt-l dt--fixed-l h-100 mb2 ph1">
        <div className="dtc-l white br bw0 bw2-l bg-yellow mb2 mb0-l pa2">
          <StyledWidth
            mr="1rem"
            ml="auto"
            className="flex flex-column ph2 ph4-ns pt4"
          >
            <SubHeading>Getting to know each other</SubHeading>
            <TextWrapper>
              <Paragraph>
                A series of sessions where the children meet and care for an
                adorable family of baby fruits & vegetables in turn, exploring
                their own identity and diving into the world of Let’s Grow. Each
                session is introduced by Bob, Flo & the babies.
              </Paragraph>
              <Paragraph>
                Ideal for collecting baseline data and helping children settle
                into a new learning environment.
              </Paragraph>
            </TextWrapper>
            {portal ? (
              <OrangeButtonInternalLink
                targetBlank={false}
                navigation="/portal/getting-to-know-each-other"
                className="self-center mt3-l grow"
                markup={"let's go"}
              />
            ) : (
              <OrangeButton
                targetBlank={true}
                className="self-center mt3-l grow"
                navigation={data.curriculumLinksOne.publicURL}
                markup={"curriculum links & learning objectives"}
              />
            )}

            <ImgBoxOne>
              <GatsbyImage
                alt="decorative image of mirror and brush"
                image={data.decorativeOne.childImageSharp.gatsbyImageData}
              />
            </ImgBoxOne>
          </StyledWidth>
        </div>
        <div className="dtc-l white bl bw0 bw2-l bg-orange mb2 mb0-l pa2">
          <StyledWidth ml="1rem" className="ph2 ph4-ns mw6 pt4">
            <SubHeading>Growing things</SubHeading>
            <TextWrapper>
              <Paragraph>
                Practical sessions that focus on the natural world, plants,
                growing things and where our food comes from. Children get
                hands-on experience growing mushrooms, radishes, potatoes,
                peppers, rainbow chard and lettuce. Each session is introduced
                by CBeebies’ favourite gardener, Mr. Bloom.
              </Paragraph>
              <Paragraph>
                Our ‘Get Growing Guide’ is easy to implement and will have you
                growing fruits and vegetables with confidence in no time!
              </Paragraph>
            </TextWrapper>
            {portal ? (
              <OrangeButtonInternalLink
                targetBlank={false}
                navigation="/portal/growing-things"
                className="self-center mt3-l grow"
                markup={"let's go"}
              />
            ) : (
              <OrangeButton
                targetBlank={true}
                className="self-center mt3-l grow"
                navigation={data.curriculumLinksTwo.publicURL}
                markup={"curriculum links & learning objectives"}
              />
            )}

            <ImgBoxTwo>
              <GatsbyImage
                alt="decorative image of seeds and mushrooms"
                image={data.decorativeTwo.childImageSharp.gatsbyImageData}
              />
            </ImgBoxTwo>
          </StyledWidth>
        </div>
      </div>
      <div className="dt-l dt--fixed-l h-100 mb2 ph1">
        <div className="dtc-l white br bw0 bw2-l bg-light-green mb2 mb0-l pa2">
          <StyledWidth
            mr="1rem"
            ml="auto"
            className="flex flex-column ph2 ph4-ns mw6 pt4"
          >
            <SubHeading>Celebrations</SubHeading>
            <TextWrapper>
              <Paragraph>
                A calendar of sessions exploring celebrations throughout the
                year. Children are visited and care for a new baby fruit or
                vegetable who’s keen to learn more. Each session is introduced
                by Bob, Flo and the babies.
              </Paragraph>
              <Paragraph>
                Perfect for exploring beliefs and traditions, and how we
                celebrate across the world.
              </Paragraph>
            </TextWrapper>
            {portal ? (
              <OrangeButtonInternalLink
                targetBlank={false}
                navigation="/portal/celebrations"
                className="self-center mt3-l grow"
                markup={"let's go"}
              />
            ) : (
              <OrangeButton
                targetBlank={true}
                navigation={data.curriculumLinksThree.publicURL}
                className="self-center mt3-l grow"
                markup={"curriculum links & learning objectives"}
              />
            )}

            <ImgBoxThree>
              <GatsbyImage
                alt="decorative image of seasonal decorations"
                image={data.decorativeThree.childImageSharp.gatsbyImageData}
              />
            </ImgBoxThree>
          </StyledWidth>
        </div>
        <div className="dtc-l white bl bw0 bw2-l bg-pink mb2 mb0-l pa2">
          <StyledWidth
            ml="1rem"
            className="flex flex-column ph2 ph4-ns mw6 pt4"
          >
            <SubHeading>Seasons</SubHeading>
            <TextWrapper>
              <Paragraph>
                Four sessions that introduce the seasons of the year. Each
                session is introduced by CBeebies’ favourite gardener, Mr.
                Bloom.
              </Paragraph>
              <Paragraph>
                Ideal for learning about changes in weather and the seasonal
                impact on plants and animals.
              </Paragraph>
            </TextWrapper>
            {portal ? (
              <OrangeButtonInternalLink
                targetBlank={false}
                navigation="/portal/seasons"
                className="self-center mt3-l grow"
                markup={"let's go"}
              />
            ) : (
              <OrangeButton
                targetBlank={true}
                navigation={data.curriculumLinksFour.publicURL}
                className="self-center mt3-l grow"
                markup={"curriculum links & learning objectives"}
              />
            )}

            <ImgBoxFour>
              <GatsbyImage
                alt="decorative image of fallen leaves and snow"
                image={data.decorativeFour.childImageSharp.gatsbyImageData}
              />
            </ImgBoxFour>
          </StyledWidth>
        </div>
      </div>
    </>
  )
}

const ImgBoxOne = styled.div`
  display: relative;
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-right: -2rem;
  margin-left: 1rem;
  z-index: 1;

  @media screen and (min-width: 30em) {
    margin-left: 8rem;
    margin-top: -2rem;
  }
`
const ImgBoxTwo = styled.div`
  margin-left: 1rem;
  margin-right: 0.5rem;
  margin-top: -1.5rem;

  @media screen and (min-width: 30em) {
    margin-top: -2rem;
    margin-right: -1rem;
  }
`
const ImgBoxThree = styled.div`
  margin-top: -1.6rem;
  margin-right: -1rem;

  @media screen and (min-width: 30em) {
    margin-top: -3rem;
    margin-right: -2rem;
  }
`
const ImgBoxFour = styled.div`
  margin-top: -2rem;

  @media screen and (min-width: 30em) {
    margin-top: -3rem;
    margin-right: -0.5rem;
  }
`

const StyledWidth = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 30rem;

  @media screen and (min-width: 955px) {
    margin-left: ${props => props.ml || "inherit"};
    margin-right: ${props => props.mr || "0rem"};
  }
`

const TextWrapper = styled.div`
  flex: 1 1 15rem;
`

export default SessionIntro

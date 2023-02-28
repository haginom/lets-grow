import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import FullWidthPanel from "../../components/fullWidthPanel"
import WithAuthCheck from "../../components/withAuthCheck"
import styled from "styled-components"
import { SubHeading } from "../../components/tachyons/text"
import { GatsbyImage } from "gatsby-plugin-image"
import FloatingPhotoBL from "../../components/portal/floatingPhotoBorderless"
import FloatingVideo from "../../components/floatingVideo"
import promo2020 from "../../videos/lets-grow-promo-2020.mp4"
import promoPoster from "../../videos/poster-promo-2020.jpg"

const Mtc = () => {
  const data = useStaticQuery(graphql`
    query {
      mtcZero: file(relativePath: { eq: "portal/mtc-0.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: FIXED)
        }
      }
      mtcOne: file(relativePath: { eq: "portal/mtc-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 455)
        }
      }
      mtcTwo: file(relativePath: { eq: "portal/mtc-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 286)
        }
      }
      mtcThree: file(relativePath: { eq: "portal/mtc-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250)
        }
      }
      mtcFour: file(relativePath: { eq: "portal/mtc-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 190)
        }
      }
      decorative: file(relativePath: { eq: "portal/decorative-0.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Portal" />
      <FullWidthPanel
        image={data.mtcFour.childImageSharp.gatsbyImageData}
        bottom={"-2rem"}
        left={"2rem"}
        isMrBloom
        colours="bg-purple white"
        maxWidth="58rem"
      >
        <Centered className="ph4 ph2-l center">
          <SubHeading>Meet the Characters</SubHeading>
          <StyledFlexContainer className="flex ">
            <div className="mr5-l mr3">
              <Paragraph fw="600">
                Let’s Grow is brought to life by a trio of cheerful gardeners
                and a family of adorable fruit & vegetable babies.
              </Paragraph>
              <Paragraph>
                There’s always a friendly face ready to welcome you via our
                engaging and interactive, ‘video calls’.
              </Paragraph>
              <Paragraph>
                So when you’re ready, pop along and say, ‘Ello’. They’d love to
                meet you all!
              </Paragraph>
            </div>
            <VidContainer className="center mt3">
              <FloatingVideo
                poster={promoPoster}
                source={promo2020}
                direction="right"
                className="pa5"
                marginTopL="-2rem"
                marginTopS="1rem"
              />
            </VidContainer>
          </StyledFlexContainer>
        </Centered>
      </FullWidthPanel>
      <div className="dt-l dt--fixed-l h-100 mb2 ph1">
        <div className="dtc-l white br bw0 bw2-l bg-light-green mb2 mb0-l pa2">
          <StyledWidth mr="0rem" ml="auto" className="flex flex-column ph4 pt4">
            <SubHeading>Mr. Bloom</SubHeading>
            <Paragraph fw="600">
              Mr. Bloom is the first character that users will meet when
              beginning Let’s Grow. As CBeebies best loved gardener, he
              champions nature and the great outdoors, encouraging everyone to
              be excited by the natural world and to get involved with
              gardening.
            </Paragraph>
            <Paragraph>
              Additionally, he loves making music and has a fantastic collection
              of fun, motivational songs to accompany your daily tasks and
              routines.
            </Paragraph>
            <div className="center mr1 mb5 mt2">
              <FloatingPhotoBL
                alt=""
                image={data.mtcTwo.childImageSharp.gatsbyImageData}
                direction="left"
                marginTopL="1rem"
                marginTopS="1rem"
              />
            </div>
          </StyledWidth>
        </div>
        <div className="dtc-l white bl bw0 bw2-l bg-light-blue mb2 mb0-l pa2">
          <StyledWidth ml="0rem" className=" pa4 pt4">
            <SubHeading>Bob & Flo</SubHeading>
            <Wrapper>
              <div className="right">
                <Paragraph fw="600">
                  Bob & Flo are Mr. Bloom’s neighbours on the allotment. They’re
                  a friendly couple of gardeners who love nothing more than
                  meeting new people and looking after their bustling family of
                  fruit & vegetable babies.
                </Paragraph>
                <Paragraph>
                  In fact, they could do with some help and have been told that
                  the children could lend a hand. Is that the case? OK, let’s
                  go!
                </Paragraph>
              </div>
              <FloatingPhotoBL
                alt=""
                image={data.mtcThree.childImageSharp.gatsbyImageData}
                direction="right"
                marginTopL="-1rem"
                className="ml0"
              />
            </Wrapper>

            <Paragraph mb="1rem">
              So, begins an adventure of creative learning and deep investment,
              with Bob & Flo entrusting the care of their fruit & vegetable
              babies to the children, as the little characters visit them in
              their setting.
            </Paragraph>
          </StyledWidth>
        </div>
      </div>
      <FullWidthPanel colours="bg-orange white ph4" maxWidth="58rem">
        <SubHeading>The Babies</SubHeading>
        <BabiesWrapper>
          <Paragraph fw="600">
            At the heart of Let’s Grow are a family of adorable fruit &
            vegetable babies that live on Bob & Flo’s allotment.
          </Paragraph>
          <Paragraph fw="600">
            In each ‘Getting to know each other’ and ‘Celebrations’ session
            there’s always an engaging video call to Bob & Flo, which is
            followed by one of the babies coming to visit the children in their
            setting. Each baby has its own unique personality which is backed up
            by a fun scrapbook resource, full of detail and illustration. Upon
            arrival, the babies are duly integrated into all learning activities
            within the classroom and are cared for by the children and their
            teacher.
          </Paragraph>
          <Paragraph>
            The ‘Getting to know each other’ theme features eight babies from
            Bob & Flo’s allotment while ‘Celebrations’, features a further 12
            characters.
          </Paragraph>
          <Paragraph>
            In preparation for these exciting ‘visits’, educators make the
            babies from real fruits or vegetables. It’s simple and fun to do by
            following our step-by-step guides in the ‘Character Preparation’
            part of each session. Our ‘Handy Hints’ contain further guidance on
            equipment, preparation, safety and creative delivery methods,
            supporting best practice and professional development.
          </Paragraph>
          <Paragraph className="mb5-ns mb4">
            Furthermore, as part of our ‘Arts Award’ offering, children are
            introduced to an ‘arty’ Leek called Flick, who leads the children
            through a unique adventure as they work towards achieving Arts Award
            Discover.
          </Paragraph>
        </BabiesWrapper>
        <GatsbyImage
          style={{ margin: "-2rem", marginTop: "-2rem" }}
          alt="group baby shot"
          image={data.decorative.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>
    </Layout>
  )
}

const MeetTheCharacters = ({ data, ...props }) => (
  <WithAuthCheck>
    <Mtc data={data} {...props} />
  </WithAuthCheck>
)

const StyledFlexContainer = styled.div`
margin-left:
  gap: 0.5rem;
  flex-wrap: wrap;
  @media screen and (min-width: 60em) {
    flex-wrap: nowrap;
  }
`

const BabiesWrapper = styled.div`
  max-width: 54rem;
  margin-bottom: 1rem;
`
const StyledWidth = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin-bottom: -1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 955px) {
    margin-left: ${props => props.ml || "inherit"};
    margin-right: ${props => props.mr || "0rem"};
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  div: first-child {
    flex: 1 1 15.2rem;
  }
  div: last-child {
    flex: 1 1 12.5rem;
  }

  @media screen and (min-width: 60em) {
    flex-wrap: nowrap;
  }
`
const Paragraph = styled.p`
  line-height: 1.2rem;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  font-weight: ${props => props.fw || "400"};
  margin-bottom: ${props => props.mb || "0rem"};
`
const Centered = styled.div`
  max-width: 32rem;

  @media all and (min-width: 60em) {
    max-width: 60rem;
  }
`

const VidContainer = styled.div`
  max-width: 20rem;

  @media all and (min-width: 60em) {
    max-width: 32rem;
    margin-right: 2rem;
  }
`

export default MeetTheCharacters

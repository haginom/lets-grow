import React from "react"
import Layout from "../../../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import WithAuthCheck from "../../../components/withAuthCheck"
import { graphql, useStaticQuery } from "gatsby"
import HandyHintTitle from "../../../components/portal/hhTitle"
import styled from "styled-components"
import FullWidthPanel from "../../../components/fullWidthPanel"
import OrangeButton from "../../../components/button"
import FloatingPhotoBL from "../../../components/portal/floatingPhotoBorderless"
import Seo from "../../../components/seo"

const CelebrationOverview = () => {
  const data = useStaticQuery(graphql`
    query {
      celebrationsOne: file(
        relativePath: { eq: "portal/overview/celebrations-0.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      celebrationsTwo: file(
        relativePath: { eq: "portal/overview/celebrations-1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 470)
        }
      }
      celebrationsThree: file(
        relativePath: { eq: "portal/overview/celebrations-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 525)
        }
      }
      celebrationsFour: file(
        relativePath: { eq: "portal/overview/celebrations-3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 370)
        }
      }
      celebrateZero: file(
        relativePath: { eq: "portal/overview/celebration-3-0.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 230)
        }
      }
      celebrateOne: file(
        relativePath: { eq: "portal/overview/celebration-3-1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 420)
        }
      }
      celebrateTwo: file(
        relativePath: { eq: "portal/overview/celebration-3-2.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateThree: file(
        relativePath: { eq: "portal/overview/celebration-3-3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateFour: file(
        relativePath: { eq: "portal/overview/celebration-3-4.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateFive: file(
        relativePath: { eq: "portal/overview/celebration-3-5.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateSix: file(
        relativePath: { eq: "portal/overview/celebration-3-6.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateSeven: file(
        relativePath: { eq: "portal/overview/celebration-3-7.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateEight: file(
        relativePath: { eq: "portal/overview/celebration-3-8.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateNine: file(
        relativePath: { eq: "portal/overview/celebration-3-9.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateTen: file(
        relativePath: { eq: "portal/overview/celebration-3-10.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateEleven: file(
        relativePath: { eq: "portal/overview/celebration-3-11.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateTwelve: file(
        relativePath: { eq: "portal/overview/celebration-3-12.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      celebrateThirteen: file(
        relativePath: { eq: "portal/overview/celebration-3-13.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <HandyHintTitle colour={"bg-gold"} title="overview" />
      <Seo title="Celebrations Overview" />
      <FullWidthPanel
        maxWidth="62rem"
        colours={"bg-yellow white"}
        left={"46rem"}
        bottom={"-28rem"}
        image={data.celebrationsOne.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mv4 ml3">Celebrations</Subheading>
        <List>
          <li>
            A scheme of 12 sessions that help children understand and prepare
            for seasonal celebrations that occur throughout the year.
          </li>
          <li>
            Exploration of each celebration focuses upon WHEN it occurs and HOW
            to prepare for it.
          </li>
          <li>
            There are opportunities to explore:{" "}
            <div className="flex flex-column">
              <span>How we celebrate across the world</span>
              <span>Beliefs and traditions</span>
              <span>Understanding and respect</span>
            </div>
          </li>

          <li>
            The scheme is intended to support and enhance your existing
            curriculum; providing resources and activities around seasonal
            celebrations and festivals.
          </li>
          <li>
            A fruit or vegetable baby visits as part of every session and the
            children are encouraged to nurture and care for the baby through
            imaginative play.
          </li>
          <li>
            A fruit or vegetable baby visits as part of every session and the
            children are encouraged to nurture and care for the baby through
            imaginative play.
          </li>
          <li>
            Teachers prepare by making the visiting character out of a real
            fruit or vegetable, following our guidance.
          </li>
          <li>
            Session plans are divided into two parts, with 'Part One'
            introducing the theme and characters. 'Part Two' goes on to provide
            curriculum linked activties and ideas to support the facilitation of
            your enhanced continuous provision.
          </li>
          <li>Our 'Handy Hints' support preparation and delivery. </li>
          <li>Deliver as stand-alone sessions throughout the year.</li>
        </List>

        <Container className="flex ml4-ns">
          <OrangeButton
            className={"center grow"}
            navigation={"#curriculum_links"}
            markup={"CURRICULUM LINKS"}
          />
          <OrangeButton
            className={"center grow"}
            navigation={"#learning_objectives"}
            markup={"Learning objectives"}
          />
        </Container>
        <GatsbyImage
          style={{ float: "right ", marginBottom: "12rem", marginTop: "2rem" }}
          image={data.celebrationsFour.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>
      <div id="curriculum_links" />
      <HandyHintTitle colour="bg-gold" title="curriculum links" />
      <FullWidthPanel
        colours={"bg-yellow white"}
        left={"40rem"}
        bottom={"-28rem"}
        maxWidth="62rem"
        image={data.celebrationsThree.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Celebrations{" "}
        </Subheading>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          An emotional connection with the characters and fiction offers
          opportunities for deep learning relating to numerous Early Learning
          Goals, primarily;
        </Paragraph>
        <div className="flex justify-between flex-wrap">
          <CheckList>
            <li>Listening, attention and understanding</li>
            <li>Speaking</li>
            <li>Self regulation</li>
            <li>Building relationships</li>
            <li>Managing self</li>
            <li>Comprehension</li>
            <li>People, culture and communities</li>
            <li>The natural world</li>
            <li>Being imaginative and expressive</li>
          </CheckList>
          <FloatingPhotoBL
            alt=""
            marginTopL="1rem"
            image={data.celebrationsTwo.childImageSharp.gatsbyImageData}
            direction="right"
          />
        </div>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          All sessions have been written with close reference to Development
          Matters and informed by the Characteristics of Effective Learning.
          'Getting To Know Each Other' builds development in all seven key
          areas, but has Understanding the World at its core.
        </Paragraph>
        <Subheading className="letsgrowfont i mv3">
          Opportunities for...
        </Subheading>
        <CheckList className="mt4" mb="26rem">
          <li>Parental engagement</li>
          <li> Problem solving</li>
          <li> Critical thinking</li>
          <li>Verbal and non-verbal communication</li>
          <li> Turn taking</li>
          <li> Imaginative engagement</li>
          <li>Promoting healthy eating</li>
        </CheckList>
      </FullWidthPanel>
      <div id="learning_objectives" />
      <HandyHintTitle colour="bg-gold" title="learning objectives" />
      <FullWidthPanel
        maxWidth="61rem"
        colours={"bg-yellow white"}
        left={"52rem"}
        bottom={"0rem"}
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Celebrations
        </Subheading>
        <ul>
          <OuterListBullet>
            <SessionBullet mwL="16rem" mwS="6rem" gap="6.7rem" gapS="5rem">
              <GatsbyImage
                image={data.celebrateZero.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be introduced to a special world of allotments and their
                  gardeners.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
            <SessionBullet mwL="20rem" mwS="10rem">
              <GatsbyImage
                image={data.celebrateOne.childImageSharp.gatsbyImageData}
                alt="Introductory Session with Bob, Flo & Babies"
              />
              <Bullets>
                <BulletPoint>
                  To understand that the fruit & vegetable babies are going to
                  come and visit and that the children will be caring for them.
                </BulletPoint>
                <BulletPoint>
                  To start to imagine what it will be like to care for the
                  babies when they visit.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
        </ul>
        <Subheading className="coffeeTea i mv5 ">
          To explore the theme of:
        </Subheading>
        <FlexContainer className="flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateTwo.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateThree.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
        <FlexContainer className="flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateFour.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateFive.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
        <FlexContainer className="flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateSix.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateSeven.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
        <FlexContainer className="flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateEight.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateNine.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
        <FlexContainer className="flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateTen.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateEleven.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
        <FlexContainer className="mb6 flex flex-wrap justify-between ">
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateTwelve.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            objectFit={"contain"}
            image={data.celebrateThirteen.childImageSharp.gatsbyImageData}
          />
        </FlexContainer>
      </FullWidthPanel>
    </Layout>
  )
}

const OverviewTwo = ({ data, ...props }) => (
  <WithAuthCheck>
    <CelebrationOverview data={data} {...props} />
  </WithAuthCheck>
)

const FlexContainer = styled.div`
  * < {
    flex: 0 1 400px;
    min-width: 250px;
    padding: 1rem;
  }
`
const Subheading = styled.h3`
  font-size: 1.4rem;
  @media screen and (min-width: 60em) {
    font-size: 2rem;
  }
`
const Container = styled.div`
  margin-top: 2rem;
  gap: 0rem;
  max-width: 32rem;

  @media screen and (min-width: 35em) {
    margin-top: 4rem;
    gap: 4rem;
  }
`
const CheckList = styled.ul`
  text-indent: ${props => (props.ti ? props.ti : "-3.3rem")};

  @media screen and (min-width: 60em) {
    margin-bottom: ${props => (props.mb ? props.mb : "0rem")};
  }

  > li {
    font-size: 0.875rem;
    list-style-position: outside;
    list-style-type: none;
    margin-bottom: 1.3rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-top: 0;
    padding-top: 0;
    font-weight: 400;
    line-height: 1.5rem;
    vertical-align: top;
    font-style: italic;

    @media screen and (min-width: 35em) {
      font-size: 1.3rem;
      line-height: 1.3rem;
      font-weight: 600;
    }
  }

  > li:before {
    content: "\\2713";
    font-size: 1.3rem;
    padding-right: 1rem;
    line-height: 1.5rem;
    vertical-align: top;
    margin-right: 1rem;
  }
`
const List = styled.ul`
  margin-left: ${props => (props.ml ? props.ml : "1rem")};
  text-indent: ${props => (props.ti ? props.ti : "-3.3rem")};

  > li {
    font-size: 0.875rem;
    list-style-position: outside;
    list-style-type: none;
    margin-bottom: 1.3rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-top: 0;
    padding-top: 0;
    font-weight: 400;
    line-height: 1.6rem;
    vertical-align: top;

    @media screen and (min-width: 35em) {
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 600;
    }

    div {
      display: inline-flex;
      text-indent: 0.1rem;
    }
    span {
      display: inline;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      line-height: 1.5rem;
    }
  }

  > li:before {
    content: "\\00B7";
    font-size: 4.5rem;
    margin-left: 1rem;
    padding-right: 1rem;
    line-height: 1.3rem;
    vertical-align: top;
    margin-bottom: 1rem;
  }
`
const Paragraph = styled.p`
  font-size: 0.7rem;
  margin-bottom: ${props => (props.mb ? props.mb : "0.5rem")};
  line-height: 1.5rem;
  font-weight: ${props => (props.fw ? props.fw : "400")};
  max-width: 56rem;
  margin-top: ${props => (props.mt ? props.mt : "0rem")};

  @media screen and (min-width: 35em) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`
const SessionBullet = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => (props.gapS ? props.gapS : "1rem")};

  @media screen and (min-width: 60em) {
    align-items: center;
    gap: ${props => (props.gap ? props.gap : "1rem")};
  }

  div:first-child {
    max-width: ${props => (props.mwS ? props.mwS : "11rem")};

    @media screen and (min-width: 60em) {
      max-width: ${props => (props.mwL ? props.mwL : "11rem")};
    }
  }

  div:last-child {
    flex: 1 1 200px;
  }
`
const OuterListBullet = styled.li`
  list-style: none;
  margin: 10px 0 0 0;
`
const Bullets = styled.div`
  position: relative;
`
const BulletPoint = styled.p`
  &::before {
    content: "";
    position: absolute;
    background: white;
    width: 10px;
    height: 10px;
    left: -0.2rem;
    transform: translateY(100%);
    border-radius: 50%;

    @media screen and (min-width: 60em) {
      left: -1rem;
    }
  }
  font-size: 0.875rem;
  margin-bottom: 1rem;
  margin-left: ${props => (props.ml ? props.ml : "1rem")};
  margin-right: 1rem;
  margin-top: 0;
  padding-top: 0;
  font-weight: 400;
  line-height: 1.5rem;
  vertical-align: top;

  @media screen and (min-width: 35em) {
    font-size: 1.2rem;
    line-height: 1.3rem;
    font-weight: 600;
  }
`
export default OverviewTwo

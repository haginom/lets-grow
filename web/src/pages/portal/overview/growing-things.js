import React from "react"
import Layout from "../../../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import WithAuthCheck from "../../../components/withAuthCheck"
import { graphql, useStaticQuery } from "gatsby"
import HandyHintTitle from "../../../components/portal/hhTitle"
import styled from "styled-components"
import FullWidthPanel from "../../../components/fullWidthPanel"
import { OrangeButtonInternalLink } from "../../../components/button"
import FloatingPhotoBL from "../../../components/portal/floatingPhotoBorderless"
import Seo from "../../../components/seo"

const CelebrationOverview = () => {
  const data = useStaticQuery(graphql`
    query {
      gtOne: file(relativePath: { eq: "portal/overview/gt-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 650)
        }
      }
      gtTwo: file(relativePath: { eq: "portal/overview/gt-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 525)
        }
      }
      gtThree: file(relativePath: { eq: "portal/overview/gt-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      gtFour: file(relativePath: { eq: "portal/overview/gt-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      gtFive: file(relativePath: { eq: "portal/overview/gt-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      gtSix: file(relativePath: { eq: "portal/overview/gt-7.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      seasonsFive: file(
        relativePath: { eq: "portal/overview/seasons-welcome.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 225)
        }
      }
      gtMushroomTurnip: file(
        relativePath: { eq: "portal/overview/gt-mushroom-turnip.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 130)
        }
      }
      gtPlant: file(relativePath: { eq: "portal/overview/gt-plant.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100)
        }
      }
      gtPotato: file(relativePath: { eq: "portal/overview/gt-potato.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      gtSeeds: file(relativePath: { eq: "portal/overview/gt-seeds.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160)
        }
      }
      gtMushroomsSeeds: file(
        relativePath: { eq: "portal/overview/gt-mushrooms-seeds.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 320)
        }
      }
      gtPlantPotatoes: file(
        relativePath: { eq: "portal/overview/gt-plant-potatoes.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 380)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Growing Things Overview" />
      <HandyHintTitle colour={"bg-orange"} title="overview" />
      <FullWidthPanel
        maxWidth="62rem"
        colours={"bg-washed-yellow white"}
        left={"30rem"}
        bottom={"-2rem"}
        image={data.gtOne.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mv4 ml3">
          'Growing things' with Mr. Bloom
        </Subheading>
        <List>
          <li>
            A scheme of four sessions aimed at introducing children to an
            understanding of plants, growing and where our food comes from.
          </li>
          <li>
            Children are encouraged to explore and engage with nature and
            growing, through a variety of hands-on gardening experiences and as
            an inspiration for creative play.
          </li>
          <li>
            Each session can provide learning content over a number of weeks and
            because growing takes time, some require a number of weeks of
            planning in advance. You can of course include children in this
            activity too!
          </li>

          <li>
            Session plans are divided into two parts, with 'Part One'
            introducing the theme and 'Part Two' going on to provide curriculum
            linked activities with ideas to support the facilitation of your
            enhanced continuous provision.
          </li>
          <li>
            By its nature, 'Growing Things' has seasonal restrictions, these are
            indicated at the beginning of each resource, as a guide.
          </li>
          <li>
            As part of this scheme you can grow:
            <div className="flex flex-column">
              <span>Mushrooms</span>
              <span>Radishes</span>
              <span>Potatoes</span>
              <span>Peppers</span>
              <span>Rainbow Chard</span>
              <span>Lettuce</span>
            </div>
          </li>
          <li>
            The plants that form the basis of our growing have been chosen to
            give children <br></br> the opportunity to explore:
            <br></br>
            <br></br>
            The stage of growth, from seed to harvest <br></br> Parts of the
            plant
            <br></br> Where our food comes from
            <br></br> The needs of different plants<br></br> Careful handling of
            living things
          </li>
          <li>
            We have taken care to choose a range of plants that:<br></br>
            <br></br>
            Grow quickly for little learners<br></br>
            Have exciting crops<br></br>
            Grow easily and will withstand some mishandling <br></br>Are
            familiar
            <br></br>
            Are low cost<br></br>
          </li>
        </List>

        <Container className="flex ml4-ns">
          <OrangeButtonInternalLink
            className={"center grow"}
            navigation={"#curriculum_links"}
            markup={"CURRICULUM LINKS"}
          />
          <OrangeButtonInternalLink
            className={"center grow"}
            navigation={"#learning_objectives"}
            markup={"Learning objectives"}
          />
        </Container>
        <GatsbyImage
          style={{ marginTop: "2rem", marginBottom: "-2rem" }}
          image={data.gtMushroomsSeeds.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>
      <div id="curriculum_links" />
      <HandyHintTitle colour="bg-orange" title="curriculum links" />
      <FullWidthPanel
        colours={"bg-washed-yellow white"}
        left={"44rem"}
        bottom={"-24rem"}
        maxWidth="62rem"
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Growing Things
        </Subheading>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          'Growing Things' relates to numerous Early Learning Goals, primarily;
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
            className="center"
            alt=""
            marginTopL="1rem"
            image={data.gtTwo.childImageSharp.gatsbyImageData}
            direction="right"
          />
        </div>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          All sessions have been written with close reference to Development
          Matters and informed by the Characteristics of Effective Learning.
          'Growing Things' builds development in all seven key areas, but has
          Understanding the World at its core.
        </Paragraph>
        <Subheading className="letsgrowfont i mv3">
          Opportunities for...
        </Subheading>
        <CheckList className="mt4" mb="8rem">
          <li>Parental engagement</li>
          <li>Problem solving</li>
          <li>Critical thinking</li>
          <li>Verbal and non-verbal communication</li>
          <li>Turn taking</li>
          <li>Imaginative engagement</li>
          <li>Promoting healthy eating</li>
        </CheckList>
        <GatsbyImage
          style={{ float: "right" }}
          image={data.gtPlantPotatoes.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>{" "}
      <div id="learning_objectives" />
      <HandyHintTitle colour="bg-orange" title="learning objectives" />
      <FullWidthPanel
        maxWidth={"62rem"}
        colours={"bg-washed-yellow white"}
        left={"52rem"}
        bottom={"0rem"}
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Growing Things
        </Subheading>
        <ul>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                image={data.seasonsFive.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be introduced to a special world of allotments and their
                  gardeners.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <StyledGrid>
            <OuterListBullet>
              <SessionBullet>
                <GatsbyImage
                  imgStyle={{
                    transform: "scale(0.75)",
                    transformOrigin: "left",
                  }}
                  image={data.gtThree.childImageSharp.gatsbyImageData}
                  alt="Find the Seed (all year round)"
                />
                <Bullets>
                  <BulletPoint>
                    To be able to find seeds in a variety of fruits and
                    vegetables.
                  </BulletPoint>
                  <BulletPoint>To sort seeds by shape and size. </BulletPoint>
                  <BulletPoint>
                    To understand how to use tools safely and to practice doing
                    so.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  image={data.gtSeeds.childImageSharp.gatsbyImageData}
                  alt="seeds"
                />
              </SessionBullet>
            </OuterListBullet>
            <OuterListBullet>
              <SessionBullet>
                <GatsbyImage
                  imgStyle={{
                    transform: "scale(0.75)",
                    transformOrigin: "left",
                  }}
                  image={data.gtFour.childImageSharp.gatsbyImageData}
                  alt="Seedlings (March to September)"
                />
                <Bullets>
                  <BulletPoint>
                    To use gentle handling when moving seedlings to a larger
                    growing area.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to identify some of some parts of a plant.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to spot differences between plants.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  imgStyle={{
                    transform: "scale(0.75)",
                    transformOrigin: "right",
                  }}
                  image={data.gtPlant.childImageSharp.gatsbyImageData}
                  alt="Plant"
                />
              </SessionBullet>
            </OuterListBullet>
            <OuterListBullet>
              <SessionBullet>
                <GatsbyImage
                  imgStyle={{
                    transform: "scale(0.75)",
                    transformOrigin: "left",
                  }}
                  image={data.gtFive.childImageSharp.gatsbyImageData}
                  alt="Mushrooms & Radishes (Feb to Sept)"
                />
                <Bullets>
                  <BulletPoint>
                    To understand the importance of instructions.
                  </BulletPoint>
                  <BulletPoint>
                    To understand that different plants need different care.
                  </BulletPoint>
                  <BulletPoint>
                    To understand that we must never pick mushrooms in the wild,
                    because not all mushrooms are safe to eat.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  imgStyle={{
                    transform: "scale(1)",
                    transformOrigin: "right",
                  }}
                  image={data.gtMushroomTurnip.childImageSharp.gatsbyImageData}
                  alt="Mushrooms and Radish"
                />
              </SessionBullet>
            </OuterListBullet>
            <OuterListBullet>
              <SessionBullet>
                <GatsbyImage
                  imgStyle={{
                    transform: "scale(0.75)",
                    transformOrigin: "left",
                  }}
                  image={data.gtSix.childImageSharp.gatsbyImageData}
                  alt="Potatoes & Peppers (June/July/Sept/Oct)"
                />
                <Bullets>
                  <BulletPoint>
                    To discover the different parts of a plant and the jobs that
                    they do.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to handle plants with care.
                  </BulletPoint>
                  <BulletPoint>
                    To understand where our food comes from.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  imgStyle={{
                    transform: "scale(1)",
                    transformOrigin: "right",
                  }}
                  image={data.gtPotato.childImageSharp.gatsbyImageData}
                  alt="Potatoes"
                />
              </SessionBullet>
            </OuterListBullet>
          </StyledGrid>
        </ul>
      </FullWidthPanel>
    </Layout>
  )
}

const OverviewTwo = ({ data, ...props }) => (
  <WithAuthCheck>
    <CelebrationOverview data={data} {...props} />
  </WithAuthCheck>
)

const Subheading = styled.h3`
  font-size: 1.4rem;
  @media screen and (min-width: 60em) {
    font-size: 2rem;
  }
`

const Container = styled.div`
  margin-top: 2rem;
  gap: 0rem;
  max-width: 28rem;

  @media screen and (min-width: 35em) {
    margin-top: 2rem;
    gap: 4rem;
  }
`
const CheckList = styled.ul`
  margin-left: ${props => (props.ml ? props.ml : "1rem")};
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
      line-height: 1.5rem;
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
    margin-left: 1rem;

    @media screen and (min-width: 35em) {
      margin-left: 0rem;
    }
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
      text-indent: 0.5rem;
    }
    span {
      display: inline;
      line-height: 1.6rem;
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
  max-width: 58rem;
  margin-top: ${props => (props.mt ? props.mt : "0rem")};

  @media screen and (min-width: 35em) {
    font-size: 1.3rem;
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`
const SessionBullet = styled.div`
  display: flex;
  align-items: center;
  max-width: 62rem;
  gap: 0rem;

  @media screen and (min-width: 60em) {
    gap: ${props => (props.gap ? props.gap : "0rem")};
  }

  div:first-child {
    max-width: 11rem;
    @media screen and (min-width: 60em) {
      min-width: 14rem;
    }
  }

  .decorative {
    max-width: 10rem;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-auto-rows: 210px;
  grid-template-columns: 100%;
  align-items: center;
  margin-bottom: 24rem;
`
const OuterListBullet = styled.li`
  list-style: none;
`
const Bullets = styled.div`
  position: relative;
  flex: 0 1 40rem;
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

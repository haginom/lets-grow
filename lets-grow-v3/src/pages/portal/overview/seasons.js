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

const SeasonsOverview = () => {
  const data = useStaticQuery(graphql`
    query {
      seasonsOne: file(relativePath: { eq: "portal/overview/seasons-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600)
        }
      }
      seasonsTwo: file(relativePath: { eq: "portal/overview/seasons-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 270)
        }
      }
      seasonsThree: file(
        relativePath: { eq: "portal/overview/seasons-3.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 525)
        }
      }
      seasonsWelcome: file(
        relativePath: { eq: "portal/overview/seasons-welcome.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 275)
        }
      }
      seasonsLeaves: file(
        relativePath: { eq: "portal/overview/seasons-leaves.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 125)
        }
      }
      seasonsSnow: file(
        relativePath: { eq: "portal/overview/seasons-snow.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 105)
        }
      }
      seasonsFlowers: file(
        relativePath: { eq: "portal/overview/seasons-flowers.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 105)
        }
      }
      seasonsBucket: file(
        relativePath: { eq: "portal/overview/seasons-bucket.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 105)
        }
      }
      seasonsA: file(
        relativePath: { eq: "portal/overview/seasons-autumn.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      seasonsW: file(
        relativePath: { eq: "portal/overview/seasons-winter.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      seasonsSp: file(
        relativePath: { eq: "portal/overview/seasons-spring.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      seasonsSu: file(
        relativePath: { eq: "portal/overview/seasons-summer.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      seasonsFlowersBucket: file(
        relativePath: { eq: "portal/overview/seasons-flowers-bucket.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 340)
        }
      }
      seasonsSnowLeaves: file(
        relativePath: { eq: "portal/overview/seasons-snow-leaves.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 480)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Seasons Overview" />
      <HandyHintTitle colour={"bg-pink"} title="overview" />
      <FullWidthPanel
        maxWidth="61rem"
        colours={"bg-light-pink white"}
        left={"27rem"}
        bottom={"-37rem"}
        image={data.seasonsOne.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mv4 ml3">Seasons</Subheading>
        <List>
          <li>
            A scheme of four sessions aimed at exploring the seasonal changes
            that occur throughout the year.
          </li>
          <li>
            Children are encouraged to explore and engage with the natural world
            around them.
          </li>
          <li>
            Each season has a dedicated session that focuses upon: Changes in
            weather
            <br></br>Seasonal impact upon plants and animals
          </li>
          <li>
            'Seasons' is not intended as a comprehensive standalone scheme of
            work; rather to enhance, support and broaden seasonally based
            content within the class teacher's existing framework; with our four
            seasons • sessions providing a spring board for further exploration.
          </li>
          <li>
            Session plans are divided into two parts, with 'Part One'
            introducing the theme and 'Part Two' going on to provide curriculum
            linked activities with ideas to support the facilitation of your
            enhanced continuous provision.
          </li>
        </List>{" "}
        <Subheading className="letsgrowfont i mv4 ml3">
          Additionally...
        </Subheading>
        <List>
          <li>
            Further seasonal content is available in our 'Celebrations' theme.
            For example, 'Harvest, Halloween and Bonfire Night' all occur during
            autumn and could be used to further enhance your topic.
          </li>
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
          image={data.seasonsFlowersBucket.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>
      <div id="curriculum_links" />
      <HandyHintTitle colour="bg-pink" title="curriculum links" />
      <FullWidthPanel
        colours={"bg-light-pink white"}
        left={"44rem"}
        bottom={"-24rem"}
        maxWidth="61rem"
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">Seasons</Subheading>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          'Seasons' relates to numerous Early Learning Goals, primarily;
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
            className="center"
            marginTopL="1rem"
            image={data.seasonsThree.childImageSharp.gatsbyImageData}
            direction="right"
          />
        </div>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          All sessions have been written with close reference to Development
          Matters and informed by the Characteristics of Effective Learning.
          'Seasons' builds development in all seven key areas, but has
          Understanding the World at its core.
        </Paragraph>
        <Subheading className="letsgrowfont i mv3">
          Opportunities for...
        </Subheading>
        <CheckList className="mt4" mb="6rem">
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
          image={data.seasonsSnowLeaves.childImageSharp.gatsbyImageData}
        />
      </FullWidthPanel>{" "}
      <div id="learning_objectives" />
      <HandyHintTitle colour="bg-pink" title="learning objectives" />
      <FullWidthPanel
        colours={"bg-light-pink white"}
        left={"52rem"}
        bottom={"0rem"}
        maxWidth={"62rem"}
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">Seasons</Subheading>
        <ul>
          <OuterListBullet>
            <SessionBullet gapS="6.3rem">
              <GatsbyImage
                image={data.seasonsWelcome.childImageSharp.gatsbyImageData}
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
                  image={data.seasonsA.childImageSharp.gatsbyImageData}
                  alt="Autumn"
                />
                <Bullets>
                  <BulletPoint>To introduce the theme of autumn.</BulletPoint>
                  <BulletPoint>
                    To explore some of the environmental impacts of autumn.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to identify some of the leaves and seeds that
                    fall in autumn.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  image={data.seasonsLeaves.childImageSharp.gatsbyImageData}
                  alt="leaves"
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
                  image={data.seasonsW.childImageSharp.gatsbyImageData}
                  alt="Winter"
                />
                <Bullets>
                  <BulletPoint>To introduce the theme of winter.</BulletPoint>
                  <BulletPoint>
                    To explore some of the environmental impacts of winter.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to identify some of some of the types of weather
                    that we might see in winter.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to identify and use some winter clothing.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  imgStyle={{
                    transform: "scale(0.5)",
                    transformOrigin: "right",
                  }}
                  image={data.seasonsSnow.childImageSharp.gatsbyImageData}
                  alt="leaves"
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
                  image={data.seasonsSp.childImageSharp.gatsbyImageData}
                  alt="Spring"
                />
                <Bullets>
                  <BulletPoint>To introduce the theme of spring.</BulletPoint>
                  <BulletPoint>
                    To explore some of the environmental impacts of spring.
                  </BulletPoint>
                  <BulletPoint>
                    To be able to identify flowers and baby animals that we
                    might see in spring.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  image={data.seasonsFlowers.childImageSharp.gatsbyImageData}
                  alt="flowers"
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
                  image={data.seasonsSu.childImageSharp.gatsbyImageData}
                  alt="Welcome to Lets Grow with Mr Bloom"
                />
                <Bullets>
                  <BulletPoint>To introduce the theme of summer.</BulletPoint>
                  <BulletPoint>
                    To explore some of the environmental impacts of summer.{" "}
                  </BulletPoint>
                  <BulletPoint>
                    To be able to stay safe in the summer sun.
                  </BulletPoint>
                </Bullets>
                <GatsbyImage
                  className="decorative"
                  objectFit={"contain"}
                  image={data.seasonsBucket.childImageSharp.gatsbyImageData}
                  alt="leaves"
                />
              </SessionBullet>
            </OuterListBullet>
          </StyledGrid>
        </ul>
      </FullWidthPanel>
    </Layout>
  )
}

const OverviewThree = ({ data, ...props }) => (
  <WithAuthCheck>
    <SeasonsOverview data={data} {...props} />
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
  @media screen and (min-width: 60em) {
    margin-bottom: ${props => (props.mb ? props.mb : "0rem")};
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
    max-width: 8rem;
  }
`
const StyledGrid = styled.div`
  display: grid;
  grid-auto-rows: 210px;
  grid-template-columns: 100%;
  align-items: center;
  margin-bottom: 10rem;
`
const OuterListBullet = styled.li`
  list-style: none;
`
const Bullets = styled.div`
  position: relative;
  flex: 0 1 42rem;
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
export default OverviewThree

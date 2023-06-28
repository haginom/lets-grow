import React from "react"
import Layout from "../../../components/layout/layout"
import WithAuthCheck from "../../../components/withAuthCheck"
import { graphql, useStaticQuery } from "gatsby"
import HandyHintTitle from "../../../components/portal/hhTitle"
import styled from "styled-components"
import FullWidthPanel from "../../../components/fullWidthPanel"
import { OrangeButtonInternalLink } from "../../../components/button"
import { GatsbyImage } from "gatsby-plugin-image"
import FloatingPhotoBL from "../../../components/portal/floatingPhotoBorderless"
import Seo from "../../../components/seo"

const GTKEOOverview = () => {
  const data = useStaticQuery(graphql`
    query {
      gtkeoOne: file(relativePath: { eq: "portal/overview/gtkeo-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
      gtkeoTwo: file(relativePath: { eq: "portal/overview/gtkeo-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      gtkeoThree: file(relativePath: { eq: "portal/overview/gtkeo-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 525)
        }
      }
      gtkeoFour: file(relativePath: { eq: "portal/overview/gtkeo-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      gtkeoFive: file(relativePath: { eq: "portal/overview/gtkeo-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoSix: file(relativePath: { eq: "portal/overview/gtkeo-6.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      gtkeoSeven: file(relativePath: { eq: "portal/overview/gtkeo-7.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoEight: file(relativePath: { eq: "portal/overview/gtkeo-8.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoNine: file(relativePath: { eq: "portal/overview/gtkeo-9.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoTen: file(relativePath: { eq: "portal/overview/gtkeo-10.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoEleven: file(relativePath: { eq: "portal/overview/gtkeo-11.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoTwelve: file(relativePath: { eq: "portal/overview/gtkeo-12.png" }) {
        childImageSharp {
          gatsbyImageData(width: 260)
        }
      }
      gtkeoThirteen: file(
        relativePath: { eq: "portal/overview/gtkeo-13.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Getting to know each other Overview" />
      <HandyHintTitle title="overview" />
      <FullWidthPanel
        maxWidth="62rem"
        colours={"bg-lightest-blue white"}
        left={"32rem"}
        bottom={"-11rem"}
        image={data.gtkeoOne.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mv4 ml3">
          Getting to know each other
        </Subheading>
        <List>
          <li>
            A scheme of seven sessions that enable children to explore their
            identities.
          </li>
          <li>
            A fruit or vegetable baby visits as part of every session and the
            children are encouraged to nurture and care for the baby through
            imaginative play.
          </li>
          <li>
            The children’s experience of getting to know each other is mirrored
            through the experience of getting to know the babies.
          </li>

          <li>
            Teachers prepare by making the visiting character out of a real
            fruit or vegetable, following our guidance.
          </li>
          <li>
            Session plans are divided into two parts, with 'Part One'
            introducing the theme and characters. 'Part Two' goes on to provide
            curriculum linked activties and ideas to support the facilitation of
            your enhanced continuos provision.
          </li>
          <li>Our 'Handy Hints' support preparation and delivery.</li>
        </List>
        <Subheading className="letsgrowfont i mv4 ml3">
          Additionally...
        </Subheading>
        <List>
          <li>
            'Getting to know each other' is a fantastic way to begin Let’s Grow.
          </li>
          <li>
            It's a perfect way for teachers to gather their baseline data.
          </li>
          <li>
            It's an ideal theme for children who are settling into a new class.
          </li>

          <li>
            It can be delivered as a block or stand-alone sessions at any time
            during the year.
          </li>
        </List>
        <Paragraph fw="600" ml="1.8rem">
          For best results, we recommend you deliver sessions in the order they
          are presented in. If you don't deliver sequentially, be sure to keep
          the final three sessions in order ('Special People', 'Looking After
          Me' and 'Moving On') as it affects the narrative.
        </Paragraph>
        <Paragraph fw="600" ml="1.8rem">
          The 'Moving On' session concludes the topic and sits just as well at
          the end of a block of the seven sessions in the autumn term as it does
          at the end of the summer term, after a full academic year of Let's
          Grow.
        </Paragraph>
        <ImgContainer>
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
          <GatsbyImage image={data.gtkeoTwo.childImageSharp.gatsbyImageData} />
        </ImgContainer>
      </FullWidthPanel>
      <div id="curriculum_links" />
      <HandyHintTitle title="curriculum links" />
      <FullWidthPanel
        colours={"bg-lightest-blue white"}
        left={"44rem"}
        bottom={"-24rem"}
        maxWidth="61rem"
        image={data.gtkeoFour.childImageSharp.gatsbyImageData}
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Getting to know each other
        </Subheading>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          An emotional connection with the characters and fiction offers
          opportunities for deep learning relating to numerous Early Learning
          Goals, primarily;
        </Paragraph>
        <div className="flex justify-between flex-wrap">
          <CheckList>
            <li>Listening, attention and understanding</li>
            <li> Speaking</li>
            <li> Self regulation</li>
            <li> Building relationships</li>
            <li> Managing self</li>
            <li> Comprehension</li>
            <li>People, culture and communities</li>
            <li> The natural world</li>
            <li>Being imaginative and expressive</li>
          </CheckList>
          <FloatingPhotoBL
            alt=""
            marginTopL="1rem"
            image={data.gtkeoThree.childImageSharp.gatsbyImageData}
            direction="right"
          />
        </div>
        <Paragraph ml="0rem" fw="600" mt="1rem">
          All sessions have been written with close reference to Development
          Matters and informed by the Characteristics of Effective Learning.
          'Getting to know each other' builds development in all seven key
          areas, but has Understanding the World at its core.
        </Paragraph>
        <Subheading className="letsgrowfont i mv3">
          Opportunities for...
        </Subheading>
        <CheckList className="mt4" mb="22rem">
          <li>Parental engagement</li>
          <li> Problem solving</li>
          <li> Critical thinking</li>
          <li>Verbal and non-verbal communication</li>
          <li> Turn taking</li>
          <li> Imaginative engagement</li>
          <li>Promoting healthy eating</li>
        </CheckList>
      </FullWidthPanel>{" "}
      <div id="learning_objectives" />
      <HandyHintTitle title="learning objectives" />
      <FullWidthPanel
        colours={"bg-lightest-blue white"}
        left={"44rem"}
        bottom={"0rem"}
        maxWidth="61rem"
      >
        <Subheading className="letsgrowfont i mt4 mb3 ">
          Getting to know each other
        </Subheading>
        <ul>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.75)", transformOrigin: "left" }}
                image={data.gtkeoFive.childImageSharp.gatsbyImageData}
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
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                image={data.gtkeoSix.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
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
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.75)", transformOrigin: "left" }}
                image={data.gtkeoSeven.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be able to observe and explain the way that different
                  people and the fruit and vegetable babies look.
                </BulletPoint>
                <BulletPoint>
                  To be able to change their own bodies and faces to represent
                  other people and characters.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.9)", transformOrigin: "left" }}
                image={data.gtkeoEight.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be able to recognise a range of emotions in faces and
                  bodies.
                </BulletPoint>
                <BulletPoint>
                  To be able to react appropriately to other people's emotions.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.9)", transformOrigin: "left" }}
                image={data.gtkeoNine.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be able to confidently express likes/dislikes, with respect
                  for different opinions.
                </BulletPoint>
                <BulletPoint>
                  To talk about a problem and suggest ways to resolve it.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.9)", transformOrigin: "left" }}
                image={data.gtkeoTen.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>To be able to create a soundscape</BulletPoint>
                <BulletPoint>To be able to use gesture.</BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.75)", transformOrigin: "left" }}
                image={data.gtkeoEleven.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To create a story using an object as a stimulus.
                </BulletPoint>
                <BulletPoint>
                  To choose an object to represent a person or situation.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                imgStyle={{ transform: "scale(0.9)", transformOrigin: "left" }}
                image={data.gtkeoTwelve.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>
                  To be able to use persuasive language.
                </BulletPoint>
                <BulletPoint>
                  To be able to help someone to understand their feelings.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
          <OuterListBullet>
            <SessionBullet>
              <GatsbyImage
                image={data.gtkeoThirteen.childImageSharp.gatsbyImageData}
                alt="Welcome to Lets Grow with Mr Bloom"
              />
              <Bullets>
                <BulletPoint>To be able to say goodbye.</BulletPoint>
                <BulletPoint>
                  To be able to understand the positives of moving on.
                </BulletPoint>
              </Bullets>
            </SessionBullet>
          </OuterListBullet>
        </ul>
      </FullWidthPanel>
    </Layout>
  )
}

const OverviewOne = ({ data, ...props }) => (
  <WithAuthCheck>
    <GTKEOOverview data={data} {...props} />
  </WithAuthCheck>
)

const Subheading = styled.h3`
  font-size: 1.4rem;
  @media screen and (min-width: 60em) {
    font-size: 2rem;
  }
`
const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: 60em) {
    margin-bottom: 9rem;
    justify-content: space-between;
  }
`
const Container = styled.div`
  margin-top: 2rem;
  gap: 0rem;
  @media screen and (min-width: 35em) {
    margin-top: 1.5rem;
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
    line-height: 1.5rem;
    vertical-align: top;

    @media screen and (min-width: 35em) {
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 600;
    }
  }

  > li:before {
    content: "\\00B7";
    font-size: 4.5rem;
    margin-left: 1rem;
    padding-right: 1rem;

    line-height: 24px;
    vertical-align: middle;
  }
`
const Paragraph = styled.p`
  font-size: 0.7rem;
  margin-bottom: ${props => (props.mb ? props.mb : "0.5rem")};
  line-height: 1.5rem;
  font-weight: ${props => (props.fw ? props.fw : "400")};
  margin-top: ${props => (props.mt ? props.mt : "0rem")};

  @media screen and (min-width: 35em) {
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`
const SessionBullet = styled.div`
  display: flex;
  align-items: center;
  gap: 0rem;

  div:first-child {
    max-width: 11rem;

    @media screen and (min-width: 60em) {
      min-width: 18.75rem;
    }
  }
  div:last-child {
    flex: 1 1 200px;
  }
  @media screen and (min-width: 60em) {
    gap: ${props => (props.gap ? props.gap : "1rem")};
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
export default OverviewOne

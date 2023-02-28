import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import WithAuthCheck from "../../components/withAuthCheck"
import HandyHintTitle from "../../components/portal/hhTitle"
import {
  HHFour,
  HHOne,
  HHThree,
  HHTwo,
  HHFive,
  HHSix,
  HHSeven,
  HHEight,
  HHNine,
  HHTen,
  HHEleven,
  HHTwelve,
  HHThirteen,
  HHFourteen,
  HHSixteen,
  HHFifteen,
} from "../../content/portal/handyHints"

const Hh = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "portal/icon-0.png" }) {
        childImageSharp {
          gatsbyImageData(width: 124)
        }
      }
      iconOne: file(relativePath: { eq: "portal/icon-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 124)
        }
      }
      iconTwo: file(relativePath: { eq: "portal/icon-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 124)
        }
      }
      mtcThree: file(relativePath: { eq: "portal/mtc-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150)
        }
      }
      banner: file(relativePath: { eq: "portal/banner.png" }) {
        childImageSharp {
          gatsbyImageData(width: 340)
        }
      }
      craftOne: file(relativePath: { eq: "portal/craft-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      craftTwo: file(relativePath: { eq: "portal/craft-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      craftThree: file(relativePath: { eq: "portal/craft-3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      craftFour: file(relativePath: { eq: "portal/craft-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      craftFive: file(relativePath: { eq: "portal/craft-5.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      craftSix: file(relativePath: { eq: "portal/craft-6.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babyOne: file(relativePath: { eq: "portal/baby-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babyTwo: file(relativePath: { eq: "portal/baby-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babyThree: file(relativePath: { eq: "portal/baby-3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babyFour: file(relativePath: { eq: "portal/baby-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babyFive: file(relativePath: { eq: "portal/baby-5.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babySix: file(relativePath: { eq: "portal/baby-6.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      babySeven: file(relativePath: { eq: "portal/baby-7.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesOne: file(relativePath: { eq: "portal/accessories-1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesTwo: file(relativePath: { eq: "portal/accessories-2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesThree: file(relativePath: { eq: "portal/accessories-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesFour: file(relativePath: { eq: "portal/accessories-4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesFive: file(relativePath: { eq: "portal/accessories-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, transformOptions: { fit: CONTAIN })
        }
      }
      accessoriesSix: file(relativePath: { eq: "portal/accessories-6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesSeven: file(relativePath: { eq: "portal/accessories-7.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesEight: file(relativePath: { eq: "portal/accessories-8.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesNine: file(relativePath: { eq: "portal/accessories-9.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesTen: file(relativePath: { eq: "portal/accessories-10.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      accessoriesEleven: file(
        relativePath: { eq: "portal/accessories-11.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesTwelve: file(
        relativePath: { eq: "portal/accessories-12.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }

      accessoriesThirteen: file(
        relativePath: { eq: "portal/accessories-13.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesFourteen: file(
        relativePath: { eq: "portal/accessories-14.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesFifteen: file(
        relativePath: { eq: "portal/accessories-15.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 350, transformOptions: { fit: CONTAIN })
        }
      }
      accessoriesSixteen: file(
        relativePath: { eq: "portal/accessories-16.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesSeventeen: file(
        relativePath: { eq: "portal/accessories-17.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesEighteen: file(
        relativePath: { eq: "portal/accessories-18.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesNineteen: file(
        relativePath: { eq: "portal/accessories-19.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesTwenty: file(
        relativePath: { eq: "portal/accessories-20.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      accessoriesTwentyOne: file(
        relativePath: { eq: "portal/accessories-21.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      accessoriesTwentyTwo: file(
        relativePath: { eq: "portal/accessories-22.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 375)
        }
      }
      decorative: file(relativePath: { eq: "portal/decorative-0.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      decorativeOne: file(relativePath: { eq: "portal/decorative-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 245)
        }
      }
      decorativeTwo: file(relativePath: { eq: "portal/decorative-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 255)
        }
      }
      decorativeThree: file(relativePath: { eq: "portal/decorative-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 185)
        }
      }
      decorativeFour: file(relativePath: { eq: "portal/decorative-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 325)
        }
      }
      decorativeFive: file(relativePath: { eq: "portal/decorative-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 180)
        }
      }
      decorativeSix: file(relativePath: { eq: "portal/decorative-6.png" }) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      decorativeSeven: file(relativePath: { eq: "portal/decorative-7.png" }) {
        childImageSharp {
          gatsbyImageData(width: 295)
        }
      }
      decorativeEight: file(relativePath: { eq: "portal/decorative-8.png" }) {
        childImageSharp {
          gatsbyImageData(width: 255)
        }
      }
      decorativeNine: file(relativePath: { eq: "portal/decorative-9.png" }) {
        childImageSharp {
          gatsbyImageData(width: 95)
        }
      }
      decorativeTen: file(relativePath: { eq: "portal/decorative-10.png" }) {
        childImageSharp {
          gatsbyImageData(width: 125)
        }
      }
      decorativeEleven: file(relativePath: { eq: "portal/decorative-11.png" }) {
        childImageSharp {
          gatsbyImageData(width: 285)
        }
      }
      decorativeTwelve: file(relativePath: { eq: "portal/decorative-12.png" }) {
        childImageSharp {
          gatsbyImageData(width: 125)
        }
      }
      health: file(relativePath: { eq: "portal/health.png" }) {
        childImageSharp {
          gatsbyImageData(width: 325)
        }
      }
    }
  `)
  return (
    <>
      <Layout portal>
        <Seo title="Portal" />
        <HandyHintTitle title="Handy Hints" />
        <HHOne />
        <HHTwo data={data} />
        <HHThree data={data} />
        <HHFour data={data} />
      </Layout>
      <div id="resources_accessories" />
      <HandyHintTitle
        icon={data.icon.childImageSharp.gatsbyImageData}
        title="Resources"
      />
      <HHFive data={data} />
      <HandyHintTitle
        icon={data.icon.childImageSharp.gatsbyImageData}
        title="Accessories"
      />
      <HHSix data={data} />
      <HandyHintTitle
        icon={data.icon.childImageSharp.gatsbyImageData}
        title="Accessories"
      />
      <HHSeven data={data} />
      <div id="shopping" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="SHOPPING FOR THE RIGHT FRUIT & VEGETABLE"
      />
      <HHEight data={data} />
      <div id="characters" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="TURNING THE FRUITS & VEGETABLES INTO CHARACTERS"
      />
      <HHNine data={data} />
      <div id="interaction" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="REVEALING & INTERACTING WITH THE VISITING BABY"
      />
      <HHTen data={data} />
      <div id="creative_teaching" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="CREATIVE TEACHING WITH THE BABIES"
      />
      <HHEleven data={data} />
      <div id="rules" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="Rules for play"
      />
      <HHTwelve data={data} />
      <div id="faqs" />
      <HandyHintTitle
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        title="Faq's"
      />
      <HHThirteen data={data} />
      <div id="health_and_safety" />
      <HandyHintTitle
        icon={data.iconTwo.childImageSharp.gatsbyImageData}
        title="HEALTH & SAFETY IN PREPARATION"
      />
      <HHFourteen data={data} />
      <div id="health_and_safety_playing" />

      <HandyHintTitle
        icon={data.iconTwo.childImageSharp.gatsbyImageData}
        title="HEALTH & SAFETY IN PLAYING"
      />
      <HHFifteen data={data} />
      <HandyHintTitle
        icon={data.iconTwo.childImageSharp.gatsbyImageData}
        title="HEALTH & SAFETY IN PLAYING"
      />
      <HHSixteen data={data} />
    </>
  )
}

const HandyHints = ({ data, ...props }) => (
  <WithAuthCheck>
    <Hh data={data} {...props} />
  </WithAuthCheck>
)

export default HandyHints

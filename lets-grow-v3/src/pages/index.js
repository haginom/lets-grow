import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import VideoIntro from "../content/videoIntro"
import Intro from "../content/homepage/intro"
import EducationalSettings from "../content/homepage/educationalSettings"
import SoonToCome from "../content/homepage/soonToCome"
import Contact from "../content/contact"
import LiveEvents from "../content/homepage/liveEvents"
import Login from "../content/login"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <VideoIntro />
      <Intro data={data} />
      <div id="educational-settings" />
      <EducationalSettings data={data} />
      <div id="soon-to-come" />
      <SoonToCome data={data} />
      <div id="live-events" />
      <LiveEvents data={data} />
      <div id="login" />
      <Login data={data} />
      <Contact data={data} />
      <div id="contact" />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    loginImage: file(relativePath: { eq: "log in.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    benPhoto: file(relativePath: { eq: "video-ben.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    logoGeneral: file(relativePath: { eq: "logo-educational-settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    introMrBloom: file(relativePath: { eq: "intro-mr-bloom.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    orangeButton: file(relativePath: { eq: "orange-button.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
    speechBubbleOne: file(relativePath: { eq: "Speech-Bubble-One.png" }) {
      childImageSharp {
        gatsbyImageData(width: 580, height: 250)
      }
    }
    speechBubbleTwo: file(relativePath: { eq: "Speech-Bubble-Two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 490, height: 240)
      }
    }
    speechBubbleThree: file(relativePath: { eq: "speech-bubble-three.png" }) {
      childImageSharp {
        gatsbyImageData(width: 610, height: 390)
      }
    }
    speechBubbleFour: file(relativePath: { eq: "speech-bubble-four.png" }) {
      childImageSharp {
        gatsbyImageData(width: 550, height: 290)
      }
    }
    liveEventsOne: file(relativePath: { eq: "live-events-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    liveEventsTwo: file(relativePath: { eq: "live-events-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    liveEventsThree: file(relativePath: { eq: "live-events-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    liveEventsFour: file(relativePath: { eq: "live-events-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    bunting: file(relativePath: { eq: "Bunting.png" }) {
      childImageSharp {
        gatsbyImageData(width: 380, layout: FIXED)
      }
    }
    vegCoupleOne: file(relativePath: { eq: "vegatables/veg-couple-one.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
    vegCoupleTwo: file(relativePath: { eq: "vegetables/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 420)
      }
    }
    vegCoupleThree: file(
      relativePath: { eq: "vegetables/veg-couple-three.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 430, layout: FIXED)
      }
    }
    watermelon: file(relativePath: { eq: "vegetables/Watermelon.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    contactVeg: file(relativePath: { eq: "vegetables/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 220, layout: FIXED)
      }
    }
  }
`

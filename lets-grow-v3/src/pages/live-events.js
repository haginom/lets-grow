import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import EventsIntro from "../content/liveEvents/eventsIntro"
import EventTypeIntro from "../content/liveEvents/eventsTypeIntro"
import EventPlanning from "../content/liveEvents/eventPlanning"
import EventsPitch from "../content/liveEvents/eventsPitch"
import { graphql } from "gatsby"
import HeadlineShow from "../content/liveEvents/HeadlineShow"
import RoamingInteractive from "../content/liveEvents/RoamingInteractive"
import InteractiveInstallation from "../content/liveEvents/InteractiveInstallation"
import MakeTakeWorkshops from "../content/liveEvents/MakeTakeWorkshops"

const LiveEvents = ({ data }) => {
  return (
    <Layout>
      <Seo title="Live Events" />
      <div id="live-events-intro" />
      <EventsIntro data={data} />
      <div id="event-type-intro" />
      <EventTypeIntro data={data} />
      <div id="event-planning" />
      <EventPlanning data={data} />
      <div id="events-pitch" />
      <EventsPitch data={data} />
      <div id="events-explainers" />
      {/* <HeadlineShow data={data} /> */}
      <RoamingInteractive data={data} />
      <InteractiveInstallation data={data} />
      {/* <MakeTakeWorkshops data={data} /> */}
    </Layout>
  )
}

export default LiveEvents

export const query = graphql`
  {
    BulletEyesOne: file(relativePath: { eq: "googly-eyes-one.png" }) {
      publicURL
    }
    BulletEyesTwo: file(relativePath: { eq: "googly-eyes-two.png" }) {
      publicURL
    }
    BulletEyesThree: file(relativePath: { eq: "googly-eyes-three.png" }) {
      publicURL
    }
    BulletEyesFour: file(relativePath: { eq: "googly-eyes-four.png" }) {
      publicURL
    }
    eventsIntroOne: file(relativePath: { eq: "events-intro-one.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 450, height: 300)
      }
    }
    eventsIntroTwo: file(relativePath: { eq: "events-intro-two.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 450, height: 300)
      }
    }
    eventsIntroThree: file(relativePath: { eq: "events-intro-three.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 450, height: 300)
      }
    }
    eventsIntroFour: file(relativePath: { eq: "events-intro-four.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 450, height: 300)
      }
    }
    vegCoupleOne: file(relativePath: { eq: "liveEvents/veg-couple-one.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: FIXED)
      }
    }
    vegCoupleTwo: file(relativePath: { eq: "liveEvents/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: FIXED)
      }
    }
    contactVeg: file(relativePath: { eq: "vegetables/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 250, layout: FIXED)
      }
    }
    vegFam: file(relativePath: { eq: "liveEvents/veg-fam.png" }) {
      childImageSharp {
        gatsbyImageData(width: 420, layout: FIXED)
      }
    }
    hsOne: file(relativePath: { eq: "liveEvents/headlineShow/hs-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 435, height: 274)
      }
    }
    hsTwo: file(relativePath: { eq: "liveEvents/headlineShow/hs-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 390, height: 324)
      }
    }
    hsThree: file(relativePath: { eq: "liveEvents/headlineShow/hs-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 435, height: 274)
      }
    }
    hsFour: file(relativePath: { eq: "liveEvents/headlineShow/hs-4.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420, height: 254)
      }
    }
    hsFive: file(relativePath: { eq: "liveEvents/headlineShow/hs-5.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420, height: 254)
      }
    }
    hsSix: file(relativePath: { eq: "liveEvents/headlineShow/hs-6.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420)
      }
    }
    riOne: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riTwo: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri-2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riThree: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri-3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riFour: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri-4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiOne: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiTwo: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii-2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiThree: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii-3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiFour: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii-4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiaOne: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaTwo: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaThree: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaFour: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaFive: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-5.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaSix: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-6.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaSeven: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia-7.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    mtwOne: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw-1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwTwo: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw-2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwThree: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw-3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwFour: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw-4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwFive: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw-5.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
  }
`

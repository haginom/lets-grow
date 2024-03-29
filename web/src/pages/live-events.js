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
import Login from "../content/login"

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
      <HeadlineShow data={data} />
      <RoamingInteractive data={data} />
      <InteractiveInstallation data={data} />
      <MakeTakeWorkshops data={data} />
      <div id="login" />
      <Login data={data} />
    </Layout>
  )
}

export default LiveEvents

export const query = graphql`
  {
    loginImage: file(relativePath: { eq: "log in.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
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
    hs1Cover: file(
      relativePath: { eq: "liveEvents/headlineShow/hs1-cover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 460, height: 300)
      }
    }
    hsTwo: file(relativePath: { eq: "liveEvents/headlineShow/hs2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 390, height: 324)
      }
    }
    hsThree: file(relativePath: { eq: "liveEvents/headlineShow/hs3.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 435, height: 274)
      }
    }
    hsFour: file(relativePath: { eq: "liveEvents/headlineShow/hs4.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420, height: 254)
      }
    }
    hsFive: file(relativePath: { eq: "liveEvents/headlineShow/hs5.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420, height: 254)
      }
    }
    hsSix: file(relativePath: { eq: "liveEvents/headlineShow/hs6.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 420)
      }
    }
    riOne: file(relativePath: { eq: "liveEvents/roamingInteractive/ri1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riTwo: file(relativePath: { eq: "liveEvents/roamingInteractive/ri2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riThree: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riFour: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ri4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    riCover: file(
      relativePath: { eq: "liveEvents/roamingInteractive/ricover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 460)
      }
    }
    iiOne: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    ii2Cover: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii2-cover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 460)
      }
    }
    iiThree: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiFour: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/ii4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    iiaOne: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaTwo: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaThree: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaFour: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaFive: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia5.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaSix: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia6.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    iiaSeven: file(
      relativePath: { eq: "liveEvents/interactiveInstallation/iia7.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 320)
      }
    }
    mtwOne: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwTwo: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtw3Cover: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw3-cover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 460)
      }
    }
    mtwFour: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw4.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
    mtwFive: file(
      relativePath: { eq: "liveEvents/makeTakeWorkshops/mtw5.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 390)
      }
    }
  }
`

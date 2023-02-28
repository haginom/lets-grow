import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Contact from "../content/contact"
import EducationalSettingsIntro from "../content/educationalSettings/educationalSettingsIntro"
import MoreInfo from "../content/educationalSettings/moreInfo"
import WhyUse from "../content/educationalSettings/whyUse"
import TeacherTestimonials from "../content/educationalSettings/teacherTestimonials"
import { graphql } from "gatsby"
import SessionIntro from "../content/educationalSettings/sessionIntro"
import ArtsAwards from "../content/educationalSettings/artsAwards"
import Login from "../content/login"

const EducationalResources = ({ data }) => {
  return (
    <Layout>
      <Seo title="Educational Resources" />
      <div id="intro"></div>
      <EducationalSettingsIntro data={data} />
      <div id="moreinfo"></div>
      <MoreInfo data={data} />
      <SessionIntro data={data} />
      <ArtsAwards data={data} />
      <WhyUse data={data} />
      <TeacherTestimonials data={data} />
      <div id="login" />
      <Login data={data} />
      <div id="contact" />
      <Contact data={data} />
    </Layout>
  )
}

export default EducationalResources

export const query = graphql`
  {
    loginImage: file(relativePath: { eq: "log in.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    iconOne: file(
      relativePath: { eq: "educationalSettings/intro-session-plans.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 130, height: 125)
      }
    }
    iconTwo: file(
      relativePath: { eq: "educationalSettings/intro-toolkit.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 130, height: 125)
      }
    }
    iconThree: file(
      relativePath: { eq: "educationalSettings/intro-video-calls.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 130, height: 125)
      }
    }
    iconFour: file(
      relativePath: { eq: "educationalSettings/intro-songs.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 130, height: 128)
      }
    }
    iconFive: file(
      relativePath: { eq: "educationalSettings/tt-clipboard.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 115, height: 115)
      }
    }
    polaroidBob: file(
      relativePath: { eq: "educationalSettings/Polaroid-Frame-Bob.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 350)
      }
    }
    polaroidFlo: file(
      relativePath: { eq: "educationalSettings/Polaroid-Frame-Flo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 350)
      }
    }
    polaroidBloom: file(
      relativePath: { eq: "educationalSettings/Polaroid-Frame-Bloom.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
    MrBloom: file(relativePath: { eq: "educationalSettings/mr-bloom.png" }) {
      childImageSharp {
        gatsbyImageData(width: 470, layout: FIXED)
      }
    }
    ttPhotoOne: file(
      relativePath: { eq: "educationalSettings/tt-photo-one.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(height: 200)
      }
    }
    ttPhotoTwo: file(
      relativePath: { eq: "educationalSettings/tt-photo-two.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(height: 200)
      }
    }
    ttPhotoThree: file(
      relativePath: { eq: "educationalSettings/tt-photo-three.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(height: 200)
      }
    }
    vegCoupleOne: file(relativePath: { eq: "vegetables/veg-couple-one.png" }) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: FIXED)
      }
    }
    vegCoupleTwo: file(relativePath: { eq: "vegetables/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
    vegCoupleThree: file(
      relativePath: { eq: "vegetables/veg-couple-three.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 420, layout: FIXED)
      }
    }
    vegFam: file(relativePath: { eq: "vegetables/veg-fam.png" }) {
      childImageSharp {
        gatsbyImageData(width: 720, layout: FIXED)
      }
    }

    flickRosetta: file(
      relativePath: { eq: "vegetables/flick-and-rosette.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 300, layout: FIXED)
      }
    }
    banner: file(
      relativePath: { eq: "educationalSettings/banner-ed-set.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 832, height: 400)
      }
    }
    decorativeOne: file(
      relativePath: { eq: "educationalSettings/decorative-one.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 400, height: 260)
      }
    }
    decorativeTwo: file(
      relativePath: { eq: "educationalSettings/decorative-two.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 490)
      }
    }
    decorativeThree: file(
      relativePath: { eq: "educationalSettings/decorative-three.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 530)
      }
    }
    decorativeFour: file(
      relativePath: { eq: "educationalSettings/decorative-four.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 530)
      }
    }
    courgette: file(relativePath: { eq: "educationalSettings/courgette.png" }) {
      childImageSharp {
        gatsbyImageData(width: 175, layout: FIXED)
      }
    }
    cauliflower: file(
      relativePath: { eq: "educationalSettings/cauliflower.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 210, layout: FIXED)
      }
    }
    bloomSessionPlan: file(
      relativePath: { eq: "Bloom_Example_SessionPlan.pdf" }
    ) {
      publicURL
    }
    bloomVideoCall: file(relativePath: { eq: "find-seed-video-call.mp4" }) {
      publicURL
    }
    handyHintsInfo: file(relativePath: { eq: "handy-hints-info.pdf" }) {
      publicURL
    }
    bobFloSessionPlan: file(relativePath: { eq: "Bob_Flo_Session_plan.pdf" }) {
      publicURL
    }
    bobFloVideoCall: file(relativePath: { eq: "bob-flo-video-call.mp4" }) {
      publicURL
    }
    song: file(relativePath: { eq: "IconSong.mp4" }) {
      publicURL
    }
    curriculumLinksOne: file(relativePath: { eq: "getting-to-know-cl.pdf" }) {
      publicURL
    }
    curriculumLinksTwo: file(relativePath: { eq: "growing-things-cl.pdf" }) {
      publicURL
    }
    curriculumLinksThree: file(relativePath: { eq: "celebrations-cl.pdf" }) {
      publicURL
    }
    curriculumLinksFour: file(relativePath: { eq: "seasons-cl.pdf" }) {
      publicURL
    }
    caseStudyOne: file(relativePath: { eq: "case-study-1.pdf" }) {
      publicURL
    }
    caseStudyTwo: file(relativePath: { eq: "case-study-2.pdf" }) {
      publicURL
    }
    caseStudyThree: file(relativePath: { eq: "case-study-3.pdf" }) {
      publicURL
    }
    caseStudyFour: file(relativePath: { eq: "case-study-4.pdf" }) {
      publicURL
    }
    contactVeg: file(relativePath: { eq: "vegetables/veg-couple-two.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200, layout: FIXED)
      }
    }
  }
`

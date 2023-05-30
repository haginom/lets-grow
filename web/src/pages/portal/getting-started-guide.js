import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import WithAuthCheck from "../../components/withAuthCheck"
import { graphql, useStaticQuery } from "gatsby"
import {
  GSOne,
  GSThree,
  GSTwo,
  GSFour,
} from "../../content/portal/gettingStarted"

const GettingStartedGuide = () => {
  const data = useStaticQuery(graphql`
    query {
      gsgOne: file(relativePath: { eq: "portal/GSG-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
      gsgTwo: file(relativePath: { eq: "portal/GSG-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 220)
        }
      }
      gsgThree: file(relativePath: { eq: "portal/GSG-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 220)
        }
      }
      gsgFour: file(relativePath: { eq: "portal/GSG-4.png" }) {
        childImageSharp {
          gatsbyImageData(width: 175)
        }
      }
      gsgFive: file(relativePath: { eq: "portal/GSG-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      gsgSix: file(relativePath: { eq: "portal/GSG-6.png" }) {
        childImageSharp {
          gatsbyImageData(height: 120)
        }
      }
      gsgSeven: file(relativePath: { eq: "portal/GSG-7.png" }) {
        childImageSharp {
          gatsbyImageData(height: 110)
        }
      }
      gsgEight: file(relativePath: { eq: "portal/GSG-8.png" }) {
        childImageSharp {
          gatsbyImageData(height: 140)
        }
      }
      gsgNine: file(relativePath: { eq: "portal/GSG-9.png" }) {
        childImageSharp {
          gatsbyImageData(height: 120)
        }
      }
      gsgTen: file(relativePath: { eq: "portal/GSG-10.png" }) {
        childImageSharp {
          gatsbyImageData(width: 90)
        }
      }
      gsgEleven: file(relativePath: { eq: "portal/GSG-11.png" }) {
        childImageSharp {
          gatsbyImageData(width: 85)
        }
      }
      gsgTwelve: file(relativePath: { eq: "portal/GSG-12.png" }) {
        childImageSharp {
          gatsbyImageData(width: 85)
        }
      }
      gsgThirteen: file(relativePath: { eq: "portal/GSG-13.png" }) {
        childImageSharp {
          gatsbyImageData(width: 85)
        }
      }
      MrBloom: file(relativePath: { eq: "educationalSettings/mr-bloom.png" }) {
        childImageSharp {
          gatsbyImageData(width: 420, layout: FIXED)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Portal" />
      <GSOne data={data} />
      <GSTwo data={data} />
      <GSThree data={data} />
      <GSFour data={data} />
    </Layout>
  )
}

const GettingStartedGuidePage = ({ data, ...props }) => (
  <WithAuthCheck>
    <GettingStartedGuide data={data} {...props} />
  </WithAuthCheck>
)



export default GettingStartedGuidePage

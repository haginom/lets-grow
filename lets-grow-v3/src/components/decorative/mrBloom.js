import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MrBloom = () => {
  const data = useStaticQuery(graphql`
    {
      introMrBloom: file(relativePath: { eq: "portal/mtc-0.png" }) {
        childImageSharp {
          gatsbyImageData(width: 225, layout: FIXED)
        }
      }
    }
  `)

  return (
    <div className="dn-m absolute" style={{ left: "50rem", bottom: "-16rem" }}>
      <GatsbyImage
        alt="image of Mr Bloom"
        image={data.introMrBloom.childImageSharp.gatsbyImageData}
      />
    </div>
  )
}

export default MrBloom

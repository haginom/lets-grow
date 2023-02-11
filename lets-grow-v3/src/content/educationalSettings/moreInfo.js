import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { Paragraph } from "../../components/tachyons/text"
import { StyledSmallWidth } from "../../components/styled/styled"

const MoreInfo = ({ data }) => {
  return (
    <>
      <FullWidthPanel
        colours="white bg-purple"
        image={data.MrBloom.childImageSharp.gatsbyImageData}
        top="-9rem"
        left="40rem"
        maxWidth="64rem"
      >
        <div className="flex mb6-l mt4-l">
          <StyledSmallWidth>
            <Paragraph className="fw6">
              Content covers 4 engaging themes which are flexible enough for
              teachers to fit into wider learning plans. Sessions are brought to
              life with the help of innovative, multimedia resources and can be
              delivered in a variety of ways to suit the setting and needs of
              children.
            </Paragraph>
          </StyledSmallWidth>
        </div>
      </FullWidthPanel>
    </>
  )
}

export default MoreInfo

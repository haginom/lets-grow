import * as React from "react"
import { OrangeButton } from "./button"
import { GatsbyImage } from "gatsby-plugin-image"
import IntroImage from "./decorative/introImage"
import styled from "styled-components"
import Bunting from "./decorative/bunting"
import MrBloom from "./decorative/mrBloom"

const FullWidthPanel = ({
  noPadding,
  isMrBloom,
  children,
  colours,
  maxWidth,
  isIntro,
  hasBunting,
  markup,
  navigation,
  image,
  top,
  bottom,
  left,
  right,
  mb,
}) => (
  <section className="w-100 ph1 mb2">
    <div
      style={{ overflow: "hidden" }}
      className={`${colours} br3 ${
        noPadding ? "ph1 pv1 " : "ph3 pv4 "
      }ph5-ns pv4-ns f6 f5-ns fw5`}
    >
      <Centered className="relative" maxWidth={maxWidth}>
        {hasBunting && <Bunting />}
        {children}
        {image ? (
          <Display>
            <GatsbyImage
              alt={"decorative vegetable"}
              style={{
                position: "absolute",
                top: top,
                bottom: bottom,
                left: left,
                right: right,
              }}
              image={image}
            />
          </Display>
        ) : (
          " "
        )}
        {markup ? (
          <ButtonLayout mb={mb}>
            <OrangeButton
              className="grow"
              navigation={navigation}
              markup={markup}
            />
          </ButtonLayout>
        ) : (
          ""
        )}
        {isIntro && <IntroImage />}
        {isMrBloom && <MrBloom />}
      </Centered>
    </div>
  </section>
)

const ButtonLayout = styled.div`
  @media all and (min-width: 60em) {
    margin-left: 3rem;
    margin-bottom: ${props => props.mb || "1rem"};
  }
`
const Display = styled.div`
  display: none;
  @media all and (min-width: 60em) {
    display: block;
  }
`

const Centered = styled.div`
  max-width: ${props => props.maxWidth || "54rem"};
  margin-left: auto;
  margin-right: auto;
`

export default FullWidthPanel

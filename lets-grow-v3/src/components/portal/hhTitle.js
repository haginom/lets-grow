import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const HandyHintTitle = ({ title, icon, maxWidth, colour }) => (
  <section className="flex w-100 ph1 ma1 mb2">
    <Container
      style={{ overflow: "hidden" }}
      className={`dt ${
        colour ? colour : "bg-navy"
      } white br4 f8-l f6 f5-ns fw5 ${icon ? "w-90" : "w-100"}`}
    >
      <Title className="f2 ttu coffeeTea pv4-ns pv1 tc b dtc v-mid">
        {title}
      </Title>
    </Container>
    <ImageContainer>
      {icon ? <GatsbyImage image={icon} alt="" /> : null}
    </ImageContainer>
  </section>
)

const Title = styled.h1`
  margin-top: 0.5rem;
`
const Container = styled.div`
  height: 115px;
`

const ImageContainer = styled.div`
  margin: auto;
  margin-top: -0.25rem;
`
export default HandyHintTitle

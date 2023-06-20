import * as React from "react"
import styled from "styled-components"

const VegTitle = ({ title, icon, colour }) => (
  <>
    <section className="flex w-100 mb2 position-relative">
      <Container
        style={{ overflow: "hidden" }}
        className={`dt ${
          colour ? colour : "bg-navy"
        } white br4 f8-l f6 f5-ns fw5 w-100 ph1 ma1 `}
      >
        <Title className="f2-ns f3 ttu coffeeTea pv4-ns pv1 ph2 tc b dtc v-mid">
          {title}
        </Title>
      </Container>
    </section>
    {icon}
  </>
)

const Title = styled.h1`
  margin-top: 0.5rem;
`
const Container = styled.div`
  height: 6rem;
  @media screen and (min-width: 60em) {
    height: 115px;
  }
`

export default VegTitle

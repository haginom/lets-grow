import * as React from "react"
import styled from "styled-components"

const FullWidthPanelTwo = ({ children, colours, maxWidth }) => (
  <section className="w-100 ph1 mb2">
    <div
      style={{ overflow: "hidden" }}
      className={`${colours} br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5`}
    >
      <Centered className="relative" maxWidth={maxWidth}>
        {children}
      </Centered>
    </div>
  </section>
)

const Centered = styled.div`
  max-width: ${props => props.maxWidth || "54rem"};
  margin-left: auto;
  margin-right: auto;
`

export default FullWidthPanelTwo

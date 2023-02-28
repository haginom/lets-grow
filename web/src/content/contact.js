import * as React from "react"
import FlexCollapse from "../components/tachyons/layout/flexCollapse"
import ContactForm from "../components/contactForm"
import { SubHeading, Paragraph } from "../components/tachyons/text"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Contact = ({ data }) => (
  <section style={{ overflow: "hidden" }} className="w-100 ph1 mb2">
    <div className="relative bg-purple white">
      <FlexCollapse className="flex flex-column flex-row-l">
        <div
          style={{ overflow: "hidden" }}
          className="w-100 w-50-l pt4 ph3 ph4-ns pb0 pb5-l"
        >
          <SubHeading>Contact Let&apos;s Grow</SubHeading>
          <Paragraph>
            If you would like to know more about Let’s Grow or simply want to
            share a story of the fun you’ve had with us, please enter your
            details and we’ll get back to you as soon as we’ve put the fruit &
            vegetable babies to bed!
          </Paragraph>
          <Paragraph>
            For more information on the origin of Let’s Grow, visit...
            <StyledWebsite href="www.benfaulks.co.uk">
              www.benfaulks.co.uk
            </StyledWebsite>
          </Paragraph>
        </div>
        <div className="w-100 w-50-l bg-purple pa5-ns pa3">
          <ContactForm />
        </div>
      </FlexCollapse>
      <Display>
        <GatsbyImage
          alt="decorative vegetable"
          style={{ position: "absolute", left: "0.5rem", bottom: "-2.5rem" }}
          image={data.contactVeg.childImageSharp.gatsbyImageData}
        />
      </Display>
    </div>
  </section>
)

export default Contact

const StyledWebsite = styled.a`
  color: white;
  &:hover {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:active {
    color: white;
  }
`

const Display = styled.div`
  display: none;
  @media all and (min-width: 60em) {
    display: block;
  }
`

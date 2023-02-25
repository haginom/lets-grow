import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const OrangeSubmitButton = ({ markup, className, value }) => {
  const { orangeButton } = useStaticQuery(graphql`
    query {
      orangeButton: file(relativePath: { eq: "orange-button.png" }) {
        childImageSharp {
          gatsbyImageData(width: 220, height: 100)
        }
      }
    }
  `)
  return (
    <StyledButton
      type="submit"
      value={value}
      className={`${className ? ` ${className}` : ""}`}
    >
      <GatsbyImage
        image={orangeButton.childImageSharp.gatsbyImageData}
        alt=""
      />
      <InnerWrapper>{markup}</InnerWrapper>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  z-index: 2;
  width: 12rem;
  @media screen and (min-width: 60em) {
    width: 14rem;
  }

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const InnerWrapper = styled.p`
  position: absolute;
  max-width: 190px;
  top: 2.5rem;
  left: 5.75rem;
  margin-bottom: 0.5rem;
  font: inherit;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 550;
  line-height: 1rem;
  color: white;

  &:visited {
    color: white;
  }
`

export default OrangeSubmitButton

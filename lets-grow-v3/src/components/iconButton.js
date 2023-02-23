import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

export const IconLink = ({ icon, text, heading, navigation }) => {
  return (
    <StyledLink to={navigation}>
      <StyledHeading className="letsgrowfont">{heading}</StyledHeading>
      <GatsbyImage image={icon} alt="" />
      <InnerWrapper>{text}</InnerWrapper>
    </StyledLink>
  )
}

export const IconButton = ({ icon, text, heading, file }) => {
  return (
    <StyledButton target="_BLANK" rel="noopener noreferrer" href={file}>
      <StyledHeading className="letsgrowfont">{heading}</StyledHeading>
      <GatsbyImage image={icon} alt="" />
      <InnerWrapper>{text}</InnerWrapper>
    </StyledButton>
  )
}

const StyledHeading = styled.h4`
  font-size: 1.3rem;
`

const StyledButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;

  :visited {
    color: white;
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;

  :visited {
    color: white;
  }
`

const InnerWrapper = styled.div`
  margin-top: 0.5rem;
  max-width: 100px;
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 0.75rem;
  text-transform: uppercase;
  text-align: center;
`

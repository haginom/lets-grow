import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

export const IconLink = ({ icon, text, navigation }) => {
  return (
    <StyledLink to={navigation}>
      <GatsbyImage image={icon} alt="" />
      <InnerWrapper>{text}</InnerWrapper>
    </StyledLink>
  )
}

export const IconButton = ({ icon, text, file }) => {
  return (
    <StyledButton target="_BLANK" rel="noopener noreferrer" href={file}>
      <GatsbyImage image={icon} alt="" />
      <InnerWrapper>{text}</InnerWrapper>
    </StyledButton>
  )
}

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
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
`

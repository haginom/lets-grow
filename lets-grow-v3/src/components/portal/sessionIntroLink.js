import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SessionIntroLink = ({ color, navigation, children, className }) => {
  return (
    <StyledLink
      color={color}
      to={navigation}
      className={`${className ? ` ${className}` : ""} br4`}
    >
      <Container>
        <InnerWrapper>{children}</InnerWrapper>
      </Container>
    </StyledLink>
  )
}

const StyledLink = styled(props => <Link {...props} />)`
  display: block;
  max-width: 31rem;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.color || "rgba(255, 255, 255, 0.25)"};
  width: 100%;
  text-decoration: none;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const InnerWrapper = styled.div`
  font: inherit;
  font-weight: 550;
  color: white;
  padding-top: 2.5rem;
  padding-bottom: 2.35rem;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
`

export default SessionIntroLink

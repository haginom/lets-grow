import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Session = ({ children, className, navigation }) => {
  return (
    <StyledLink
      to={navigation}
      className={`${className ? ` ${className}` : ""} br4`}
    >
      <InnerWrapper>{children}</InnerWrapper>
    </StyledLink>
  )
}

const StyledLink = styled(props => <Link {...props} />)`
  display: block;

  background-color: rgba(255, 255, 255, 0.25);
  outline: none;
  padding: 2.2rem;
  width: 100%;
  text-decoration: none;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const InnerWrapper = styled.div`
  text-align: center;
  font: inherit;
  text-transform: uppercase;
  font-weight: 550;
  letter-spacing: 0.01em;
  color: white;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
`

export default Session

import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import client from "../services/sanity"
import imageUrlBuilder from "@sanity/image-url"

const SessionLink = ({ className, ...props }) => {
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const capitalizeWords = str => {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
  const name = capitalizeWords(props.name)
  return (
    <StyledLink
      color={props.color.hex}
      className={`${className ? ` ${className}` : ""} br4`}
    >
      <Container>
        <InnerWrapper>{name}</InnerWrapper>
        {props.image && (
          <StyledImg
            src={urlFor(props.image)
              .auto("format")
              .fit("max")
              .height(100)
              .url()}
          />
        )}
      </Container>
    </StyledLink>
  )
}

const StyledLink = styled(props => <Link {...props} />)`
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.color || "rgba(255, 255, 255, 0.25)"};
  outline: none;
  margin: 0.2rem;
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
  letter-spacing: 0.01em;
  color: white;
  padding: 2.2rem;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
`

const StyledImg = styled.img`
  flex: 0 0 50px;
  position: absolute;
  right: 10px;
  bottom: -20px;
`

export default SessionLink

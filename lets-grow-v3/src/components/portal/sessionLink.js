import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { capitalizeWords, urlFor } from "../../lib/helpers"

const SessionLink = ({ className, ...props }) => {
  const { fileName, name, color, image, slug, visitingBaby } = props
  console.log(visitingBaby)

  return (
    <>
      <StyledLink
        to={`/portal/sessions/${slug?.current}`}
        className={`${className ? ` ${className}` : ""} br4`}
        color={color?.hex}
      >
        <Container>
          <InnerWrapper>
            {name ? (
              <p>{capitalizeWords(name)}</p>
            ) : fileName ? (
              <p>{capitalizeWords(fileName)}</p>
            ) : null}
          </InnerWrapper>
          {image && (
            <StyledImg
              bottom={`${visitingBaby ? "-20px" : "0rem"}`}
              src={urlFor(image).auto("format").fit("max").height(100).url()}
            />
          )}
        </Container>
      </StyledLink>
    </>
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
  padding-top: 2.5rem;
  padding-bottom: 2.35rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
`

const StyledImg = styled.img`
  position: absolute;
  right: 10px;
  bottom: ${props => props.bottom || "0rem"};
`

export default SessionLink

import * as React from "react"
import styled from "styled-components"
import { urlFor } from "../../lib/helpers"
import { GatsbyImage } from "gatsby-plugin-image"
import { capitalizeWords } from "../../lib/helpers"

const SessionResourceLink = ({
  className,
  color,
  play,
  download,
  songs,
  ...props
}) => {
  const { fileCategory, fileName, name, image, url, file, fileAttachment } =
    props

  let linkColor = "rgba(255, 255, 255, 0.25)"
  if (color === "#7ba1aa") {
    linkColor = "#cec7ab"
  } else if (color === "#cec7ab") {
    linkColor = "#9FB7BF "
  }

  return (
    <>
      <StyledLink
        href={`${
          url ? `${url}` : `${file}` ? `${fileAttachment.file.asset.url}` : ""
        }`}
        target="_blank"
        className={`${className ? ` ${className}` : ""} br4`}
        color={linkColor}
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
              src={urlFor(image).auto("format").fit("max").height(100).url()}
            />
          )}
          {fileCategory === "video" && (
            <GatsbyImage
              objectFit="contain"
              image={play.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "image" && (
            <GatsbyImage
              objectFit="contain"
              image={download.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "webpage" && (
            <GatsbyImage
              objectFit="contain"
              image={download.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "pdf" && (
            <GatsbyImage
              objectFit="contain"
              image={download.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "song" && (
            <GatsbyImage
              objectFit="contain"
              image={songs.childImageSharp.gatsbyImageData}
            />
          )}
        </Container>
      </StyledLink>
    </>
  )
}

const StyledLink = styled.a`
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.color || "rgba(255, 255, 255, 0.25)"};
  outline: none;
  margin: 0.75rem;
  text-decoration: none;
  width: 100%;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 32rem;

  div:last-child {
    max-height: 4rem;
    box-sizing: border-box;
    margin: 1rem;
  }
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
  bottom: -20px;
`

export default SessionResourceLink

import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { urlFor } from "../../lib/helpers"
import { GatsbyImage } from "gatsby-plugin-image"
import { capitalizeWords } from "../../lib/helpers"

const SessionResourceLink = ({ className, color, ...props }) => {
  const data = useStaticQuery(graphql`
    query resourceLinkQuery {
      iconDownload: file(relativePath: { eq: "icon-download.png" }) {
        childImageSharp {
          gatsbyImageData(height: 50)
        }
      }
      iconPlay: file(relativePath: { eq: "play-button-white.png" }) {
        childImageSharp {
          gatsbyImageData(height: 60)
        }
      }
      iconSongs: file(relativePath: { eq: "portal/GSG-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150)
        }
      }
    }
  `)
  const { fileCategory, image, fileAttachment, url } = props
  return (
    <>
      <StyledLink
        href={`${
          url
            ? `${url.url}`
            : fileAttachment.file?.asset
            ? `${fileAttachment.file.asset.url}`
            : "resource-not-found"
        }`}
        target="_blank"
        className={`${className ? ` ${className}` : ""} br4`}
        color={color?.hex}
      >
        <Container>
          <InnerWrapper>
            {fileAttachment ? (
              <p>{capitalizeWords(fileAttachment?.fileName)}</p>
            ) : url ? (
              <p>{capitalizeWords(url?.linkName)}</p>
            ) : null}
          </InnerWrapper>
          {image && (
            <StyledImg
              src={urlFor(image).auto("format").fit("max").height(100).url()}
            />
          )}
          {fileCategory === "video" && (
            <GatsbyImage
              alt=""
              objectFit="contain"
              image={data.iconPlay.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "image" && (
            <GatsbyImage
              alt=""
              objectFit="contain"
              image={data.iconDownload.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "webpage" && (
            <GatsbyImage
              alt=""
              objectFit="contain"
              image={data.iconDownload.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "pdf" && (
            <GatsbyImage
              alt=""
              objectFit="contain"
              image={data.iconDownload.childImageSharp.gatsbyImageData}
            />
          )}
          {fileCategory === "song" && (
            <GatsbyImage
              alt=""
              objectFit="contain"
              image={data.iconSongs.childImageSharp.gatsbyImageData}
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
    margin-top: 1rem;
    margin-right: 1rem;
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
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
  p {
    padding-left: 0.25rem;
  }
`

const StyledImg = styled.img`
  position: absolute;
  right: 0px;
  bottom: -20px;
`

export default SessionResourceLink

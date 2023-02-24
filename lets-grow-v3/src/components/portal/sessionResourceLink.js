import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { urlFor } from "../../lib/helpers"
import { GatsbyImage } from "gatsby-plugin-image"
import { LightenDarkenColor } from "../../lib/helpers"

const SessionResourceLink = ({
  className,
  margin,
  gridColumnShift,
  color,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query resourceLinkQuery {
      iconDownload: file(relativePath: { eq: "icon-download.png" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      iconPlay: file(relativePath: { eq: "play-button-white.png" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
      iconSongs: file(relativePath: { eq: "portal/GSG-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 150)
        }
      }
      iconMagGlass: file(relativePath: { eq: "icon-mag-glass.png" }) {
        childImageSharp {
          gatsbyImageData(height: 45)
        }
      }
    }
  `)
  const { fileCategory, image, fileAttachment, url } = props
  console.log(fileAttachment, url)
  return (
    <>
      <StyledBox
        className={`${className ? ` ${className}` : ""} br4`}
        margin={margin}
        color={color ? color : "#bab397"}
      >
        <Container>
          <InnerWrapper
            mw={`${fileCategory === "webpage" ? "20rem" : "12rem"}`}
          >
            {url ? (
              <p>{url?.linkName}</p>
            ) : fileAttachment ? (
              <p>{fileAttachment?.fileName}</p>
            ) : null}
          </InnerWrapper>
          {image && (
            <StyledImg
              src={urlFor(image).auto("format").fit("max").height(100).url()}
            />
          )}
          <StyledIconButton
            href={`${
              url
                ? `${url.url}`
                : fileAttachment?.file?.asset
                ? `${fileAttachment.file.asset.url}`
                : "resource-not-found"
            }`}
            target="_blank"
            className="grow"
          >
            {fileCategory === "video" && (
              <GatsbyImage
                alt=""
                objectFit="contain"
                className="play"
                image={data.iconPlay.childImageSharp.gatsbyImageData}
              />
            )}
            {fileCategory === "folder" && (
              <GatsbyImage
                alt=""
                className="download"
                objectFit="contain"
                image={data.iconDownload.childImageSharp.gatsbyImageData}
              />
            )}
            {fileCategory === "webpage" && (
              <GatsbyImage
                alt=""
                objectFit="contain"
                className="magGlass"
                image={data.iconMagGlass.childImageSharp.gatsbyImageData}
              />
            )}
            {fileCategory === "song" && (
              <GatsbyImage
                alt=""
                objectFit="contain"
                className="song"
                image={data.iconSongs.childImageSharp.gatsbyImageData}
              />
            )}
          </StyledIconButton>

          {fileCategory === "pdf" && (
            <TwoIcons>
              <StyledIconButton
                href={`${
                  url
                    ? `${url.url}`
                    : fileAttachment?.file?.asset
                    ? `${fileAttachment.file.asset.url}`
                    : "resource-not-found"
                }`}
                className="grow"
                target="_blank"
              >
                <GatsbyImage
                  alt=""
                  objectFit="contain"
                  image={data.iconMagGlass.childImageSharp.gatsbyImageData}
                />
              </StyledIconButton>
              <StyledIconButton
                href={`${
                  url
                    ? `${url.url}`
                    : fileAttachment?.file?.asset
                    ? `${fileAttachment.file.asset.url}?dl=`
                    : "resource-not-found"
                }`}
                className="grow"
                target="_blank"
              >
                <GatsbyImage
                  alt=""
                  objectFit="contain"
                  image={data.iconDownload.childImageSharp.gatsbyImageData}
                />
              </StyledIconButton>
            </TwoIcons>
          )}
        </Container>
      </StyledBox>
    </>
  )
}

const StyledIconButton = styled.a`
  outline: none;
  padding: 0rem;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`
const TwoIcons = styled.div`
  display: flex;
  margin-right: 0.8rem;
  gap: 0.5rem;
`

const StyledBox = styled.div`
  height: 6.5rem;
  max-width: 26rem;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${props =>
    LightenDarkenColor(props.color, 20) || "#cec7ab"};
  width: 100%;
  margin: ${props => props.margin || "0rem"};
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 32rem;

  .download {
    margin-right: 1rem;
  }
  .play {
    box-sizing: border-box;
    margin-right: 1.25rem;
  }
  .song {
    margin-right: 0.75rem;
  }
  .magGlass {
    margin-right: 1.5rem;
  }
`

const InnerWrapper = styled.div`
  font: inherit;
  font-weight: 550;
  line-height: 1.6rem;
  letter-spacing: 0.01em;
  color: white;
  max-width: ${props => props.mw || "12rem"};
  padding-left: 1.2rem;
  margin: 0.2rem;

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

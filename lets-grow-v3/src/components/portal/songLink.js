import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const SongLink = ({ iconPlay, ...props }) => {
  const { albums } = props
  return (
    <TwoColumns>
      {albums.map(song => (
        <Album iconPlay={iconPlay} {...song} />
      ))}
    </TwoColumns>
  )
}

const Album = ({ iconPlay, ...props }) => {
  const { name, artist, category, songUpload } = props
  let order = 0
  category === "audio" ? (order = 1) : (order = 2)
  return (
    <>
      <StyledLink href={`${songUpload?.song.asset?.url}`} order={order}>
        <Container>
          <InnerWrapper>
            <p>{name}</p>
            <p className="fw4">{artist}</p>
          </InnerWrapper>
          <GatsbyImage
            className="mr3"
            alt=""
            objectFit="contain"
            image={iconPlay.childImageSharp.gatsbyImageData}
          />
        </Container>
      </StyledLink>
    </>
  )
}

const TwoColumns = styled.div`
  display: grid;
  margin-bottom: ${props => props.mb || "0.25rem"};
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

const StyledLink = styled.a`
  order: ${props => props.order};
  grid-column: ${props => props.order};
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.color || "rgba(255, 255, 255, 0.25)"};
  outline: none;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  text-decoration: none;
  border-radius: 0.7rem;

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
  padding: 1rem;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
    line-height: 1.5rem;
    padding: 1.5rem;
  }

  &:visited {
    color: white;
  }
`

export default SongLink

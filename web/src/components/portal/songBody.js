import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import SongLink from "../../components/portal/songLink"
import { useStaticQuery, graphql } from "gatsby"

const SongBody = ({ ArrayAlbums }) => {
  const data = useStaticQuery(graphql`
    {
      iconSongs: file(relativePath: { eq: "portal/GSG-5.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250)
        }
      }
      iconPlay: file(relativePath: { eq: "play-button-white.png" }) {
        childImageSharp {
          gatsbyImageData(height: 60)
        }
      }
      MrBloom: file(relativePath: { eq: "educationalSettings/mr-bloom.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `)
  return (
    <>
      <GatsbyImage
        style={{ marginTop: "-1rem" }}
        alt="musical notes"
        image={data.iconSongs.childImageSharp.gatsbyImageData}
      />
      <div className="dn db-l absolute" style={{ right: "4rem", top: "-1rem" }}>
        <GatsbyImage
          alt="mr bloom on guitar"
          image={data.MrBloom.childImageSharp.gatsbyImageData}
        />
      </div>
      <StyledBackground className="relative">
        <div className="flex mt3-l mb2">
          <StyledLink className="bg-light-yellow white mv2 mv0-l">
            <InnerWrapper>Audio Recordings</InnerWrapper>
          </StyledLink>
          <StyledLink className="bg-light-yellow white mv2 mv0-l">
            <InnerWrapper>Video Calls</InnerWrapper>
          </StyledLink>
        </div>
        {ArrayAlbums.map(album => (
          <SongLink {...album} iconPlay={data.iconPlay} />
        ))}
      </StyledBackground>
    </>
  )
}

const StyledBackground = styled.div`
  background: rgb(140, 113, 131);
  margin-bottom: 4rem;
`

const StyledLink = styled.div`
  max-width: 36rem;
  flex: 1 1 18rem;
  overflow: hidden;
  border-radius: 0.8rem;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

const InnerWrapper = styled.p`
  font-size: 0.7rem;
  font: inherit;
  font-weight: 550;
  color: white;
  padding-top: 1.75rem;
  padding-bottom: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
    padding-top: 2.5rem;
    padding-bottom: 2.35rem;
  }

  &:visited {
    color: white;
  }
`

export default SongBody

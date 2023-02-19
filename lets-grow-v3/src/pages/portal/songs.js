import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import GraphQLErrorList from "../../components/portal/graphql-error-list"
import Seo from "../../components/seo"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  query SongsPageQuery {
    iconSongs: file(relativePath: { eq: "portal/GSG-5.png" }) {
      childImageSharp {
        gatsbyImageData(width: 200)
      }
    }
    songs: allSanitySongs {
      edges {
        node {
          name
          id
          artist
          category
          songUpload {
            song {
              asset {
                url
              }
            }
          }
        }
      }
    }
  }
`
const SongTemplate = props => {
  const { data, errors } = props
  const songs = data && data.songs

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      <Seo title="Songs" />
      <section className="w-100 ph1 mb2">
        <Tab className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5">
          <Centered className="relative">
            <Heading className="coffeeTea fw6 pv4 tc ttu">Songs</Heading>
            <GatsbyImage
              image={data.iconSongs.childImageSharp.gatsbyImageData}
            />
            <div className="flex mt5-l flex-wrap">
              <StyledLink className="bg-light-yellow white">
                <InnerWrapper>Audio Recordings</InnerWrapper>
              </StyledLink>
              <StyledLink className="bg-light-yellow white">
                <InnerWrapper>Video Calls</InnerWrapper>
              </StyledLink>
            </div>
            
          </Centered>
        </Tab>
      </section>
    </Layout>
  )
}

const Tab = styled.div`
  background-color: ${props => props.color || "rgb(140, 113, 131)"};
  color: white;
  overflow: hidden;
`
const Heading = styled.h1`
  font-size: 1.6rem;
  @media screen and (min-width: 60em) {
    font-size: 2.2rem;
  }
`
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "62rem"};
  margin-left: auto;
  margin-right: auto;
`

const StyledLink = styled.div`
  max-width: 30rem;
  overflow: hidden;
  border-radius: 0.8rem;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.color || "rgba(255, 255, 255, 0.25)"};
  width: 100%;
  text-decoration: none;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

const InnerWrapper = styled.p`
  font: inherit;
  font-weight: 550;
  color: white;
  padding-top: 2.5rem;
  padding-bottom: 2.35rem;
  text-transform: uppercase;
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 60em) {
    font-size: 1.3rem;
  }

  &:visited {
    color: white;
  }
`

export default SongTemplate

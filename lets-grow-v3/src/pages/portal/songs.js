import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import GraphQLErrorList from "../../components/portal/graphql-error-list"
import Seo from "../../components/seo"
import { mapEdgesToNodes, groupBy } from "../../lib/helpers"
import SongBody from "../../components/portal/songBody"
import styled from "styled-components"

export const query = graphql`
  query SongsPageQuery {
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
  const songNodes = (data || {}).songs ? mapEdgesToNodes(data.songs) : []

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const GroupedSongs = groupBy(songNodes, "name")
  const ArrayAlbums = Object.entries(GroupedSongs).map(([key, val]) => ({
    name: key,
    albums: val,
  }))

  return (
    <Layout>
      <Seo title="Songs" />
      <section className="w-100 ph1 mb2">
        <Tab className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5">
          <Centered className="relative">
            <Heading className="coffeeTea fw6 pt4 tc ttu">Songs</Heading>
            <SongBody ArrayAlbums={ArrayAlbums} />
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
  margin-bottom: 4rem;
`

export default SongTemplate

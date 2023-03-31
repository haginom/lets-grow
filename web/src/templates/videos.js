import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import WithAuthCheck from "../components/withAuthCheck"
import Video from "../components/video-page"

export const query = graphql`
  query videoPageTemplate($id: String!) {
    videoCalls: sanitySessionResources(id: { eq: $id }) {
      name
      fileCategory
      id
      videoResources {
        name
        video {
          asset {
            filename
            playbackId
            assetId
          }
        }
      }
    }
    songs: sanitySongVideo(id: { eq: $id }) {
      id
      name
      category
      artist
      videoResources {
        video {
          asset {
            status
            assetId
            playbackId
            filename
          }
        }
      }
    }
  }
`
const VideoTemplateBody = props => {
  const { data, errors } = props
  const songs = data && data.songs
  const videoCalls = data && data.videoCalls
  console.log(videoCalls)
  if (errors) {
    return (
      <Layout portal>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <>
      {songs && <Video song {...songs} />}
      {videoCalls && <Video videoCall {...videoCalls} />}
    </>
  )
}

const VideoTemplate = ({ data, ...props }) => (
  <WithAuthCheck>
    <VideoTemplateBody data={data} {...props} />
  </WithAuthCheck>
)

export default VideoTemplate

import React from "react"
import Layout from "./layout/layout"
import Seo from "./seo"
import MuxPlayer from "@mux/mux-player-react"

const Video = ({ song, videoCall, ...props }) => {
  const { filename, assetId, videoResources } = props
  let playbackId = videoResources?.video?.asset?.playbackId

  return (
    <Layout portal>
      <Seo title="" />
      <MuxPlayer
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{
          video_id: { assetId },
          video_title: { filename },
        }}
      />
    </Layout>
  )
}

export default Video

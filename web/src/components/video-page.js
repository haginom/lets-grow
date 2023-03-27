import React from "react"
import Layout from "./layout/layout"
import Seo from "./seo"
import MuxPlayer from "@mux/mux-player-react"

const Video = ({ song, videoCall, ...props }) => {
  const { songUpload, fileAttachment } = props
  let url
  if (song) {
    url = songUpload?.song?.asset?.url
  } else if (videoCall) {
    url = fileAttachment?.file.asset.url
  }
  return (
    <Layout portal>
      <Seo title="" />
      <MuxPlayer
        streamType="on-demand"
        playbackId="aUYz91kpRzK01oSOQF2QvTLlRXxxvvsuWWckjXdV6Dls"
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
      />

      {/* {url ? (
        <div
          className="db pt2 pb1 ph2"
          style={{ width: "100vw", maxWidth: "100vw" }}
        >
          <video className="w-100 br2 shadow-3" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null} */}
    </Layout>
  )
}

export default Video

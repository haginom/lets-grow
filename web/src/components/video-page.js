import React from "react"
import Layout from "./layout/layout"
import Seo from "./seo"

const Video = ({ song, videoCall, ...props }) => {
  const { songUpload, fileAttachment } = props
  let url
  if (song) {
    url = songUpload?.song?.asset?.url
  } else if (videoCall) {
    url = fileAttachment?.file.asset.url
  }
  return (
    <Layout>
      <Seo title="" />
      {url ? (
        <div
          className="db pt2 pb1 ph2"
          style={{ width: "100vw", maxWidth: "100vw" }}
        >
          <video className="w-100 br2 shadow-3" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </Layout>
  )
}

export default Video

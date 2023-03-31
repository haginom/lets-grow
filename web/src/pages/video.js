import React from "react"
import MuxVideo from "@mux/mux-video-react"

const Video = () => {
  return (
    <>
      <h1>Video to play</h1>
      <MuxVideo
        style={{ height: "100%", maxWidth: "100%" }}
        playbackId="wZTR00XacHvt2lnRkynq02hCUtiAJ2rwwNLjSJsesVOnc"
        streamType="on-demand"
        controls
      />
    </>
  )
}

export default Video

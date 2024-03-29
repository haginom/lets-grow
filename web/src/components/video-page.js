import React from "react"
import Layout from "./layout/layout"
import Seo from "./seo"
import MuxPlayer from "@mux/mux-player-react"
import styled from "styled-components"

const Video = ({ song, videoCall, ...props }) => {
  const { name, assetId, videoResources } = props
  let playbackId = videoResources?.video?.asset?.playbackId
  console.log(playbackId)
  return (
    <Layout portal>
      <Seo title={`${name}`} />
      <StyledContainer>
        <MuxPlayer
          style={{ aspectRatio: "16 / 9" }}
          streamType="on-demand"
          playbackId={playbackId}
          thumbnailTime="0"
          metadata={{
            video_id: { assetId },
            video_title: `${name}`,
          }}
        />
      </StyledContainer>
    </Layout>
  )
}

export default Video

const StyledContainer = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

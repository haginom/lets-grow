import React, { useState, useRef } from "react"
import playButton from "../images/play-button-white.png"

const Video = ({ poster, source }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const togglePlaystate = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }
  return (
    <div className="mb4" style={{ position: "relative", maxWidth: "130vh" }}>
      {!isPlaying && (
        <img
          alt="play button"
          src={playButton}
          style={{
            width: "20%",
            height: "auto",
            position: "absolute",
            left: "40%",
            top: "35%",
            pointerEvents: "none",
          }}
        />
      )}
      <div className="db pt2 pb1" style={{ width: "100%", maxWidth: "130vh" }}>
        <video
          poster={poster}
          className="w-100 br2 shadow-3"
          ref={videoRef}
          onClick={togglePlaystate}
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Video

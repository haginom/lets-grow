import React from "react"
import Video from "./video"
import styled from "styled-components"

const directionStyles = {
  right: { transform: "rotate(2deg)", marginLeft: "1rem", marginRight: "1rem" },
  left: { transform: "rotate(-3deg)", marginLeft: "1rem", marginRight: "1rem" },
}

const FloatingVideo = ({
  poster,
  source,
  className,
  direction,
  marginTop,
  marginTopS,
  marginTopL,
  marginLeft,
  marginBottom,
}) => {
  return (
    <Container
      marginTopS={marginTopS}
      marginTopL={marginTopL}
      style={{
        ...directionStyles[direction],
        marginTop,
        marginLeft,
        marginBottom,
      }}
    >
      <Video
        poster={poster}
        source={source}
        className={`shadow-3 mb4 br2 ${className ? ` ${className}` : ""}`}
      />
    </Container>
  )
}

const Container = styled.div`
  margin-top: ${props => props.marginTopS || "0rem"};

  @media all and (min-width: 60em) {
    margin-top: ${props => props.marginTopL || "0rem"};
  }
`

export default FloatingVideo

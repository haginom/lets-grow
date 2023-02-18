import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const directionStyles = {
  right: { transform: "rotate(3deg)", marginLeft: "1rem", marginRight: "1rem" },
  left: { transform: "rotate(-3deg)", marginLeft: "1rem", marginRight: "1rem" },
  leftLess: {
    transform: "rotate(-1deg)",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
}

const FloatingPhotoBL = ({
  id,
  alt,
  image,
  className,
  direction,
  marginTopL,
  marginTopS,
  marginBottom,
  marginLeft,
  marginRight,
  zIndex,
}) => {
  return (
    <Container
      marginTopS={marginTopS}
      marginTopL={marginTopL}
      id={id}
      className={`${className ? ` ${className}` : ""}`}
      style={{
        ...directionStyles[direction],
        marginBottom,
        marginLeft,
        marginRight,
        zIndex,
        borderRadius: "0.6rem",
      }}
    >
      <GatsbyImage
        alt={alt}
        image={image}
        imgStyle={{ borderRadius: "0.6rem" }}
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

export default FloatingPhotoBL

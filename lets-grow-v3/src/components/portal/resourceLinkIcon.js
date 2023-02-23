import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const IconButton = ({ icon, text, heading, file }) => {
  return (
    <div>
      <button target="_BLANK" rel="noopener noreferrer" href={file}>
        <GatsbyImage image={icon} alt="" />
      </button>
    </div>
  )
}


const StyledButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;

  :visited {
    color: white;
  }
`
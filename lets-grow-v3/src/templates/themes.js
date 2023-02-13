import * as React from "react"
import { graphql } from "gatsby"
import Theme from "../components/themePage"

export const query = graphql`
  query ThemePageTemplateQuery($id: String!) {
    theme: sanityTheme(id: { eq: $id }) {
      id
      name
      backgroundColour {
        hex
      }
      sessions {
        id
        name
        color {
          hex
        }
        image {
          hotspot {
            height
            width
            x
            y
          }
          asset {
            id
            url
          }
          crop {
            bottom
            left
            right
            top
          }
        }
      }
      overview
      handyHints
      slug {
        current
      }
    }
  }
`
const ThemeTemplate = props => {
  const { data, errors } = props
  const theme = data && data.theme
  return <>{theme && <Theme {...theme} />}</>
}

export default ThemeTemplate

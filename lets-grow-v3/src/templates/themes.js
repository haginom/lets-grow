import * as React from "react"
import { graphql } from "gatsby"
import Theme from "../components/portal/themePage"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import WithAuthCheck from "../components/withAuthCheck"

export const query = graphql`
  query ThemePageTemplateQuery($id: String!) {
    theme: sanityTheme(id: { eq: $id }) {
      id
      name
      backgroundColour {
        hex
      }
      image {
        asset {
          id
          url
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
          height
          width
        }
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
      introSession
      welcomeMrBloom
      overview
      handyHints
      slug {
        current
      }
    }
  }
`
const ThemeTemplateBody = props => {
  const { data, errors } = props
  const theme = data && data.theme
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return <>{theme && <Theme {...theme} />}</>
}

const ThemeTemplate = ({ data, ...props }) => (
  <WithAuthCheck>
    <ThemeTemplateBody data={data} {...props} />
  </WithAuthCheck>
)

export default ThemeTemplate

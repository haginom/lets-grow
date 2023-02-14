import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../../components/graphql-error-list"
import Layout from "../../components/layout/layout"
import WithAuthCheck from "../../components/withAuthCheck"
import HandyHintTitle from "../../components/hhTitle"
import ThemeTitle from "../../components/themeTitle"
import { mapEdgesToNodes } from "../../lib/helpers"

export const query = graphql`
  query ResourcesLibraryQuery {
    themes: allSanityTheme {
      edges {
        node {
          id
          name
          backgroundColour {
            hex
          }
          slug {
            current
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
          handyHints
          overview
          sessions {
            _id
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
        }
      }
    }
  }
`

const Lb = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const themeNodes = (data || {}).themes ? mapEdgesToNodes(data.themes) : []

  return (
    <Layout>
      <HandyHintTitle title="resources library" />
      {themeNodes
        ? themeNodes.map(theme => <ThemeTitle key={theme.id} {...theme} />)
        : null}
    </Layout>
  )
}

const ResourcesLibrary = ({ data, ...props }) => (
  <WithAuthCheck>
    <Lb data={data} {...props} />
  </WithAuthCheck>
)

export default ResourcesLibrary

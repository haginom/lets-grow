import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../../components/portal/graphql-error-list"
import Layout from "../../components/layout/layout"
import WithAuthCheck from "../../components/withAuthCheck"
import HandyHintTitle from "../../components/portal/hhTitle"
import ThemeTitle from "../../components/portal/themeTitle"
import { mapEdgesToNodes } from "../../lib/helpers"
import IntroSessionTitle from "../../components/portal/introSessionTitle"
import Seo from "../../components/seo"

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
          introSession
          welcomeMrBloom
          sessions {
            _id
            name
            visitingBaby
            slug {
              current
            }
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
    introSessions: allSanityIntroSessions {
      edges {
        node {
          id
          name
          color {
            hex
          }
          image {
            crop {
              bottom
              left
              right
              top
            }
            hotspot {
              height
              width
              x
              y
            }
            asset {
              url
            }
          }
          slug {
            current
          }
          sessionResources {
            fileCategory
            id
            url {
              linkName
              url
            }
            fileAttachment {
              fileName
              file {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
    sessions: allSanitySessions {
      edges {
        node {
          id
          name
          slug {
            current
          }
          visitingBaby
          characterPrep {
            id
            fileCategory
            fileAttachment {
              fileName
              file {
                asset {
                  url
                }
              }
            }
            url {
              linkName
              url
            }
          }
          howToVideo {
            id
            fileCategory
            url {
              linkName
              url
            }
            fileAttachment {
              fileName
              file {
                asset {
                  url
                }
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
        <Seo title="Resource Library" />
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const themeNodes = (data || {}).themes ? mapEdgesToNodes(data.themes) : []
  const introSessions = (data || {}).introSessions
    ? mapEdgesToNodes(data.introSessions)
    : []

  return (
    <Layout>
      <Seo title="Resource Library" />
      <HandyHintTitle title="resources library" />
      {introSessions ? (
        <IntroSessionTitle introSessions={introSessions} />
      ) : null}
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

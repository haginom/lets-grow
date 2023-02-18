import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../../components/portal/graphql-error-list"
import Layout from "../../components/layout/layout"
import WithAuthCheck from "../../components/withAuthCheck"
import HandyHintTitle from "../../components/portal/hhTitle"
import ThemeTitle from "../../components/portal/themeTitle"
import { mapEdgesToNodes } from "../../lib/helpers"
import IntroSessionTitle from "../../components/portal/introSessionTitle"

export const query = graphql`
  query ResourcesLibraryQuery {
    iconDownload: file(relativePath: { eq: "icon-download.png" }) {
      childImageSharp {
        gatsbyImageData(width: 124)
      }
    }
    iconPlay: file(relativePath: { eq: "play-button-white.png" }) {
      childImageSharp {
        gatsbyImageData(width: 124)
      }
    }
    iconSongs: file(relativePath: { eq: "portal/GSG-5.png" }) {
      childImageSharp {
        gatsbyImageData(width: 124)
      }
    }
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
          name
          color {
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
          id
          slug {
            current
          }
          sessionResources {
            id
            fileName
            fileCategory
            fileTypeUrl
            file
            url
            fileAttachment {
              file {
                asset {
                  id
                  extension
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
  const iconDownload = data && data.iconDownload
  const iconPlay = data && data.iconPlay
  const iconSongs = data && data.iconSongs
  if (errors) {
    return (
      <Layout>
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
      <HandyHintTitle title="resources library" />
      {introSessions ? (
        <IntroSessionTitle
          introSessions={introSessions}
          download={iconDownload}
          play={iconPlay}
          songs={iconSongs}
        />
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

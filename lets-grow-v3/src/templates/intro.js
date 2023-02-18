import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import IntroSessionBody from "../components/portal/intro"
import Seo from "../components/seo"
import { capitalizeWords } from "../lib/helpers"

export const query = graphql`
  query IntroSessionsTemplateQuery($id: String!) {
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
    introSessions: sanityIntroSessions(id: { eq: $id }) {
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
`
const ThemeTemplate = props => {
  const { data, errors } = props
  const introSessions = data && data.introSessions
  const iconDownload = data && data.iconDownload
  const iconPlay = data && data.iconPlay
  const iconSongs = data && data.iconSongs
  const { name } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      {name ? (
        <Seo title={capitalizeWords(name)} />
      ) : (
        <Seo title="Let's Grow Portal" />
      )}

      <IntroSessionBody
        {...introSessions}
        download={iconDownload}
        play={iconPlay}
        songs={iconSongs}
      />
    </Layout>
  )
}

export default ThemeTemplate

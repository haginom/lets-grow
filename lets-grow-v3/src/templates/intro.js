import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import IntroSessionBody from "../components/portal/introSessionBody"
import Seo from "../components/seo"
import { capitalizeWords } from "../lib/helpers"

export const query = graphql`
  query IntroSessionsTemplateQuery($id: String!) {
    introSessions: sanityIntroSessions(id: { eq: $id }) {
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
`
const ThemeTemplate = props => {
  const { data, errors } = props
  const introSessions = data && data.introSessions

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

      <IntroSessionBody {...introSessions} />
    </Layout>
  )
}

export default ThemeTemplate

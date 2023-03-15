import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import IntroSessionBody from "../components/portal/introSessionBody"
import Seo from "../components/seo"
import { capitalizeWords } from "../lib/helpers"
import HandyHintTitle from "../components/portal/hhTitle"

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
        name
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
      <Layout portal>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout portal>
      {name ? (
        <Seo title={capitalizeWords(name)} />
      ) : (
        <Seo title="Let's Grow Portal" />
      )}
      <HandyHintTitle title="resources library" />

      <IntroSessionBody {...introSessions} />
    </Layout>
  )
}

export default ThemeTemplate

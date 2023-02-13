import React from "react"
import { graphql } from "gatsby"
import GraphQLErrorList from "../../components/graphql-error-list"
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../../lib/helpers"
import Layout from "../../components/layout/layout"
import WithAuthCheck from "../../components/withAuthCheck"

export const query = graphql`
  {
    themes: allSanityTheme {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const LB = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const themeNodes = (data || {}).themes ? mapEdgesToNodes(data.themes) : []

  console.log(themeNodes)
  return (
    <>
      <h1>hello</h1>
      <p>hello</p>
    </>
  )
}

const ResourcesLibrary = ({ data, ...props }) => (
  <WithAuthCheck>
    <LB data={data} {...props} />
  </WithAuthCheck>
)

export default ResourcesLibrary

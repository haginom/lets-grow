import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import Seo from "../seo"
import GraphQLErrorList from "./graphql-error-list"
import ThemeDetails from "./themeDetails"
import { capitalizeWords } from "../../lib/helpers"

const Theme = props => {
  const { name, backgroundColour, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      <Seo title={capitalizeWords(name)} />
      <section className="w-100 ph1 mb2">
        <Tab
          color={backgroundColour.hex}
          className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5"
        >
          <Centered className="relative">
            <Heading className="coffeeTea fw6 pv4 tc ttu">{name}</Heading>
            <ThemeDetails {...props} />
          </Centered>
        </Tab>
      </section>
    </Layout>
  )
}

const Tab = styled.div`
  background-color: ${props => props.color || "orange"};
  color: white;
  overflow: hidden;
`
const Heading = styled.h1`
  font-size: 1.6rem;
  @media screen and (min-width: 60em) {
    font-size: 2.2rem;
  }
`
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "62rem"};
  margin-left: auto;
  margin-right: auto;
`
export default Theme

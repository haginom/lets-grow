import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Seo from "./seo"
import Session from "./session"
import GraphQLErrorList from "./graphql-error-list"
import SessionLink from "./sessionLink"

const Theme = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const { name, backgroundColour, overview, handyHints, sessions, slug } = props
  const capitalizeWords = str => {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
  return (
    <Layout>
      <Seo title={capitalizeWords(name)} />
      <section className="w-100 ph1 mb2">
        <Tab
          className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5"
          color={backgroundColour.hex}
        >
          <Centered className="relative">
            <Heading className="coffeeTea fw6 pv4 tc ttu">{name}</Heading>
            <Subheading className="coffeeTea i pv2 ml4">About...</Subheading>
            <TwoColumns className="flex ">
              {overview ? (
                <Session navigation={`../overview/${slug.current}`}>
                  Overview
                </Session>
              ) : null}
              {handyHints ? (
                <Session navigation={`../handy-hints`}>Handy Hints</Session>
              ) : null}
            </TwoColumns>
            <Subheading className="coffeeTea i pv2 ml4">Sessions...</Subheading>
            <ThreeColumns>
              {sessions.map(session => (
                <div key={session.id}>
                  <SessionLink {...session} />
                </div>
              ))}
            </ThreeColumns>
          </Centered>
        </Tab>
      </section>
    </Layout>
  )
}

const TwoColumns = styled.div`
  gap: 1rem;
  margin-bottom: 4rem;
`

const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: 4rem;
  }
`

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

const Subheading = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  @media screen and (min-width: 60em) {
    font-size: 1.8rem;
  }
`
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "62rem"};
  margin-left: auto;
  margin-right: auto;
`
export default Theme

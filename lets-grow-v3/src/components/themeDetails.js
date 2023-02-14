import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "./graphql-error-list"
import SessionLink from "./sessionLink"
import SessionIntroLink from "./sessionIntroLink"
import { urlFor } from "../lib/helpers"

const ThemeDetails = props => {
  const { image, overview, handyHints, sessions, slug, errors } = props
  console.log(image, "theme details")
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <>
      {image ? (
        <StyledImg
          src={urlFor(image).auto("format").fit("max").height(200).url()}
        />
      ) : null}

      <Subheading className="coffeeTea i pv2 ml4">About...</Subheading>
      <TwoColumns className="flex ">
        {overview ? (
          <SessionIntroLink navigation={`../overview/${slug.current}`}>
            Overview
          </SessionIntroLink>
        ) : null}
        {handyHints ? (
          <SessionIntroLink navigation={`../handy-hints`}>
            Handy Hints
          </SessionIntroLink>
        ) : null}
      </TwoColumns>
      <Subheading className="coffeeTea i pv2 ml4">Sessions...</Subheading>
      <ThreeColumns>
        {sessions &&
          sessions.map(session =>
            session ? (
              <div key={session._id}>
                <SessionLink {...session} />
              </div>
            ) : null
          )}
      </ThreeColumns>
    </>
  )
}

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-top: -3rem;
`

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

const Subheading = styled.h3`
  margin-top: -3rem;
  font-size: 1.4rem;
  font-weight: 600;
  @media screen and (min-width: 60em) {
    font-size: 1.8rem;
  }
`

export default ThemeDetails

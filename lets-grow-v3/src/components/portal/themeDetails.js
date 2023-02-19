import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import GraphQLErrorList from "./graphql-error-list"
import SessionLink from "./sessionLink"
import SessionIntroLink from "./sessionIntroLink"
import { urlFor } from "../../lib/helpers"

const ThemeDetails = props => {
  const {
    image,
    mrBloom,
    overview,
    handyHints,
    introSession,
    welcomeMrBloom,
    sessions,
    slug,
    errors,
  } = props
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
      <TwoColumns mb="6.5rem" className="flex ">
        {overview ? (
          <SessionIntroLink
            className="ttu"
            navigation={`../overview/${slug.current}`}
          >
            Overview
          </SessionIntroLink>
        ) : null}
        {handyHints ? (
          <SessionIntroLink className="ttu" navigation={`../handy-hints`}>
            Handy Hints
          </SessionIntroLink>
        ) : null}
      </TwoColumns>
      <Subheading className="coffeeTea i pv2 ml4">Sessions...</Subheading>
      <TwoColumns className="flex ">
        {welcomeMrBloom ? (
          <SessionIntroLink
            color={"#cfc7ac"}
            navigation={`../sessions/welcome-session`}
          >
            Welcome to Let’s Grow with Mr. Bloom
          </SessionIntroLink>
        ) : null}
        {introSession ? (
          <SessionIntroLink
            color={"#cfc7ac"}
            navigation={`../overview/${slug.current}`}
          >
            Introductory session with Bob, Flo & the Babies
          </SessionIntroLink>
        ) : (
          <StyledMrBloom
            src={urlFor(mrBloom).auto("format").fit("max").height(400).url()}
          />
        )}
      </TwoColumns>
      {sessions.length <= 4 ? (
        <TwoColumns>
          {sessions &&
            sessions.map(session =>
              session ? (
                <div key={session._id}>
                  <SessionLink {...session} />
                </div>
              ) : null
            )}
        </TwoColumns>
      ) : (
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
      )}
    </>
  )
}

const StyledMrBloom = styled.img`
  position: absolute;
`
const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: 0;
  margin-top: -3rem;
`

const TwoColumns = styled.div`
  gap: 1rem;
  display: grid;
  margin-bottom: ${props => props.mb || "0.25rem"};
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

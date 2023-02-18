import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import Seo from "../seo"
import GraphQLErrorList from "./graphql-error-list"
import { capitalizeWords } from "../../lib/helpers"
import SessionResourceLink from "./sessionResourceLink"
import { urlFor } from "../../lib/helpers"

const Session = props => {
  const {
    visitingBaby,
    characterPrep,
    howToVideo,
    whiteArt,
    sessionPlan1,
    sessionPlan2,
    videoCall,
    email,
    topTips,
    scrapbook,
    songs,
    name,
    color,
    errors,
  } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  console.log(email, "session page")

  return (
    <Layout>
      <Seo title={capitalizeWords(name)} />
      <section className="w-100 ph1 mb2">
        <Tab
          color={color?.hex}
          className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5"
        >
          <Centered mw="66rem" className="relative">
            <Heading className="coffeeTea fw6 pv4 tc ttu">{name}</Heading>
            {visitingBaby ? (
              <Subheading className="coffeeTea i pv2 ml4">
                Before you start...
              </Subheading>
            ) : null}
            <ThreeColumns>
              {characterPrep ? (
                <SessionResourceLink {...characterPrep} />
              ) : null}
              {howToVideo ? <SessionResourceLink {...howToVideo} /> : null}
              {whiteArt && (
                <StyledImg
                  src={urlFor(whiteArt)
                    .auto("format")
                    .fit("max")
                    .height(100)
                    .url()}
                />
              )}
            </ThreeColumns>
            <Subheading mt="3rem" className="coffeeTea i pv2 ml4">
              Session Plan...
            </Subheading>
            <ThreeColumns>
              {sessionPlan1 ? <SessionResourceLink {...sessionPlan1} /> : null}
              {sessionPlan2 ? <SessionResourceLink {...sessionPlan2} /> : null}
            </ThreeColumns>
            <Subheading mt="3rem" className="coffeeTea i pv2 ml4">
              Resources...
            </Subheading>
            <ThreeColumns>
              {videoCall ? <SessionResourceLink {...videoCall} /> : null}
              {email ? <SessionResourceLink {...email} /> : null}
              {topTips ? <SessionResourceLink {...topTips} /> : null}
            </ThreeColumns>
            <ThreeColumns mt="-0.75rem">
              {scrapbook ? <SessionResourceLink {...scrapbook} /> : null}
              {songs ? <SessionResourceLink {...songs} /> : null}
            </ThreeColumns>
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
const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;

  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-row-gap: 0rem;
    margin-top: ${props => props.mt || "0rem"};
  }
`
const Subheading = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  @media screen and (min-width: 60em) {
    font-size: 1.8rem;
    margin-top: ${props => props.mt || "0rem"};
  }
`

const StyledImg = styled.img``

export default Session

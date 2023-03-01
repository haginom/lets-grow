import React from "react"
import styled from "styled-components"
import Layout from "../layout/layout"
import Seo from "../seo"
import GraphQLErrorList from "./graphql-error-list"
import { capitalizeWords } from "../../lib/helpers"
import SessionResourceLink from "./sessionResourceLink"
import { urlFor } from "../../lib/helpers"
import HandyHintTitle from "./hhTitle"

const Session = props => {
  const {
    visitingBaby,
    characterPrep,
    howToVideo,
    whiteArt,
    sessionPlan1,
    sessionPlan2,
    videoStill,
    videoCall,
    email,
    topTips,
    scrapbook,
    songs,
    sessionResources,
    name,
    color,
    image,
    errors,
  } = props
  if (errors) {
    return (
      <Layout portal>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout portal>
      <Seo title={capitalizeWords(name)} />
      <HandyHintTitle title="resources library" />

      <section className="w-100 ph1 mb2">
        <Tab
          color={color?.hex}
          className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5"
        >
          <Centered mw="66rem" className="relative">
            <Heading className="coffeeTea fw6 pv4-l pv3 tc ttu">{name}</Heading>
            {visitingBaby ? (
              <Subheading className="coffeeTea i pv2 ml4">
                Before you start...
              </Subheading>
            ) : null}
            <ThreeRegColumns>
              {characterPrep ? (
                <SessionResourceLink color="#d0c7a9" {...characterPrep} />
              ) : null}
              {howToVideo && (
                <SessionResourceLink color="#d0c7a9" {...howToVideo} />
              )}
              {whiteArt && (
                <StyledImg
                  className="whiteArt"
                  src={urlFor(whiteArt).auto("format").fit("max").url()}
                />
              )}
            </ThreeRegColumns>
            <Subheading mt="3rem" className="coffeeTea i pv2 ml4">
              Session Plan...
            </Subheading>
            <ThreeRegColumns>
              {sessionPlan1 && (
                <SessionResourceLink color={color?.hex} {...sessionPlan1} />
              )}
              {sessionPlan2 && (
                <SessionResourceLink color={color?.hex} {...sessionPlan2} />
              )}
              {videoStill && (
                <StyledVideoStill
                  className="videoStill dn db-l"
                  src={urlFor(videoStill).auto("format").fit("max").url()}
                />
              )}
            </ThreeRegColumns>
            <Subheading mt="3rem" className="coffeeTea i pv2 ml4">
              Resources...
            </Subheading>
            <Resources>
              <ThreeColumns>
                {visitingBaby && (
                  <PokingBaby className="dn db-l">
                    <img
                      alt="visiting baby for the session"
                      src={urlFor(image)
                        .auto("format")
                        .height(170)
                        .fit("max")
                        .url()}
                    />
                  </PokingBaby>
                )}
                {videoCall ? (
                  <SessionResourceLink color={color?.hex} {...videoCall} />
                ) : null}
                {email ? (
                  <SessionResourceLink color={color?.hex} {...email} />
                ) : null}
                {topTips ? (
                  <SessionResourceLink color={color?.hex} {...topTips} />
                ) : null}
              </ThreeColumns>
              <ThreeColumns mt="0.5rem">
                {scrapbook && (
                  <SessionResourceLink color={color?.hex} {...scrapbook} />
                )}
                {songs && <SessionResourceLink color={color?.hex} {...songs} />}
              </ThreeColumns>
              <ThreeColumns
                visitingBaby={!visitingBaby}
                mt="0.5rem"
                mb={sessionResources.length > 0 ? "4rem" : "8rem"}
              >
                {sessionResources
                  ? sessionResources.map(resource => (
                      <SessionResourceLink
                        key={resource.id}
                        color={color?.hex}
                        {...resource}
                      />
                    ))
                  : null}
                {!visitingBaby && (
                  <WhiteArt className="dn db-l">
                    <img
                      alt=""
                      src={urlFor(image)
                        .auto("format")
                        .height(170)
                        .fit("max")
                        .url()}
                    />
                  </WhiteArt>
                )}
              </ThreeColumns>
            </Resources>
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
const ThreeRegColumns = styled.div`
  display: grid;
  gap: 0.5rem;
  @media screen and (min-width: 30em) {
    grid-template-columns: repeat(2, minmax(15rem, 20rem));
  }

  @media screen and (min-width: 50em) {
    display: block;
    column-count: 3;
    columns: 20rem;
    column-gap: 10px;
  }

  * {
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid-column; /* Firefox is dumb */
    break-inside: avoid-column;
  }

  .videoStill {
    height: 100%;
    transform: rotate(-3deg);
    border-radius: 0.6rem;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.73);
  }
  .whiteArt {
    margin-left: 12rem;
    display: none;

    @media screen and (min-width: 60em) {
      display: block;
      margin-left: 6rem;
      width: 15rem;
      height: 100%;
      object-fit: contain;
    }
  }
`
const Resources = styled.div``

const ThreeColumns = styled.div`
  display: grid;
  position: relative;
  z-index: 4;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 35rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (min-width: 60em) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: ${props => props.mt || "0rem"};
    margin-bottom: ${props => props.mb || "0rem"};

    ${({ visitingBaby }) =>
      visitingBaby &&
      `
    > * {
      &:nth-child(even){
        grid-column:2;
      };
      &:nth-child(odd){
        grid-column:1;
      }
      
    }
  `}
  }
`
const Subheading = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  @media screen and (min-width: 60em) {
    font-size: 1.8rem;
    margin-top: ${props => props.mt || "0rem"};
  }
`
const StyledImg = styled.img`
  justify-self: end;
  align-self: center;
  max-width: 10rem;
`
const StyledVideoStill = styled.img`
  justify-self: end;
  align-self: center;
  height: 6rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 35em) and (max-width: 60em) {
    grid-column: 2;
    margin: 1rem;
  }
  @media-screen and (min-width: 60rem) {
    margin-left: 1rem;
    margin-top: -1.5rem;
  }
`
const PokingBaby = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 16rem;

  @media screen and (min-width: 35em) and (max-width: 60em) {
    right: 0rem;
    bottom: 9rem;
  }

  @media screen and (min-width: 60em) {
    right: 6rem;
    bottom: 4.4rem;
  }
`
const WhiteArt = styled.div`
  position: absolute;
  right: 2rem;
  top: -4rem;
`

export default Session

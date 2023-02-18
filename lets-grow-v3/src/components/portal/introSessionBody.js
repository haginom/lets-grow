import * as React from "react"
import styled from "styled-components"
import { urlFor } from "../../lib/helpers"
import SessionResourceLink from "./sessionResourceLink"

const IntroSessionBody = ({ play, download, songs, ...props }) => {
  const { name, color, image, sessionResources } = props
  return (
    <>
      <section className="w-100 ph1 mv4">
        <Tab
          color={color?.hex}
          className="br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5"
        >
          <Centered className="relative">
            <Heading className="coffeeTea fw6 pv4 tc ttu">{name}</Heading>
            <FlexContainer className="flex flex-wrap w-100 justify-around mv5">
              <div>
                {sessionResources &&
                  sessionResources.map(resource =>
                    resource ? (
                      <SessionResourceLink
                        margin="0.75rem"
                        key={resource.id}
                        {...resource}
                        color={color?.hex}
                      />
                    ) : null
                  )}
              </div>
              {image ? (
                <StyledImg
                  src={urlFor(image).auto("format").fit("max").width(400).url()}
                />
              ) : null}
            </FlexContainer>
          </Centered>
        </Tab>
      </section>
    </>
  )
}

const FlexContainer = styled.div`
  div: first-child {
    flex: 0 1 26rem;
  }
`

const StyledImg = styled.img`
  display: block;
  transform: rotate(-4deg);
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.6rem;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.73);
  align-self: flex-start;
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
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "62rem"};
  margin-left: auto;
  margin-right: auto;
`
export default IntroSessionBody

import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { StyledMediumWidth } from "../../components/styled/styled"
import styled from "styled-components"
import { Paragraph } from "../../components/tachyons/text"
import {OrangeButtonInternalLink} from "../../components/button"

const ArtsAwards = ({ data, portal }) => (
  <FullWidthPanel
    maxWidth={"58rem"}
    image={data.flickRosetta.childImageSharp.gatsbyImageData}
    bottom={portal ? "-8rem" : "-14rem"}
    left="44rem"
    colours="white bg-light-yellow"
  >
    <StyledMediumWidth className="center mw-100-l">
      <Paragraph className="fw6 mt4-l mw7">
        As part of the programme we also enable children to work towards the
        fabulous{" "}
        {portal ? (
          <NonHighlight href="https://www.artsaward.org.uk/site/?id=2300">
            ‘Arts Award Discover’{" "}
          </NonHighlight>
        ) : (
          <Highlight>
            <a href="https://www.artsaward.org.uk/site/?id=2300">
              ‘Arts Award Discover’
            </a>
            <HighlightCurve />
          </Highlight>
        )}
        in partnership with Trinity College London.
      </Paragraph>
      <Paragraph className={"fw6 mw7" + (portal ? " mb0" : " mb6-l")}>
        Arts Award Discover is an introductory award which children can achieve
        as part of their Let’s Grow experience. It’s designed for ages 5 and
        above, and we provide everything educators need.
      </Paragraph>
      <ButtonContainer>
        {portal ? (
          <OrangeButtonInternalLink
            targetBlank={true}
            className="self-center mt4-l grow"
            markup={"coming soon"}
          />
        ) : null}
      </ButtonContainer>
    </StyledMediumWidth>
  </FullWidthPanel>
)

export default ArtsAwards

const NonHighlight = styled.a`
  color: white;
  & :visited {
    color: white;
  }
`

const Highlight = styled.span`
  position: relative;
  padding-right: 0.5rem;
  padding-left: 0.2rem;
  background-color: #836e87;
  display: inline-block;
  transform: rotate(2deg);
  border-radius: 4px;
  border-top-left-radius: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 1px;
  line-height: 1rem;
  a {
    display: inline-block;
    transform: rotate(-2deg);
    line-height: 1.1rem;
    text-decoration: none;
    color: white;

    & :visited {
      color: white;
    }
  }
`
const HighlightCurve = styled.span`
  display: inline-block;
  position: relative;
  &:before {
    content: " ";
    display: block;
    position: fixed;
    background-color: #836e87;
    border-radius: 30% 70% 70% 30% / 100% 100% 100% 100%;
    padding: 0.15em 5.6em 0.05em 4.5em;
    top: -0.09em;
    right: 0.4em;
  }
  &:after {
    content: " ";
    display: block;
    position: absolute;
    background-color: #b7b28a;
    padding: 0.15em 4.75em 0em 4.6em;
    border-radius: 60% 40% 40% 60% / 100% 100% 100% 100%;
    bottom: -0.36em;
    right: -0.5em;
  }
`
const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 60em) {
    margin-left: 5rem;
  }
`

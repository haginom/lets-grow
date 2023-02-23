import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"

const  HandyHintsPanel = ({
  banner,
  health,
  intro,
  children,
  maxWidth,
  image,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <section className="w-100 ph1 mb2 avenir">
      <div
        style={{ overflow: "hidden" }}
        className={`white bg-gold br3 ph3 pv4 ph5-ns pv4-ns f6 f5-ns fw5`}
      >
        <Page className="br3" size="A4">
          <Intro>
            <GatsbyImage
              imgStyle={{
                objectFit: "contain",
              }}
              className="ml4-ns"
              image={banner}
              alt=""
            />
            {health ? (
              <GatsbyImage
                alt=""
                className="health"
                style={{}}
                image={health}
              />
            ) : (
              " "
            )}
            <TextWrapper>{intro}</TextWrapper>
          </Intro>
          {image ? (
            <Display>
              <GatsbyImage
                alt={"decorative vegetable"}
                style={{
                  position: "absolute",
                  top: top,
                  bottom: bottom,
                  left: left,
                  right: right,
                }}
                image={image}
              />
            </Display>
          ) : (
            " "
          )}

          {children}
        </Page>
      </div>
    </section>
  )
}

const Intro = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    flex: 0 0 25%;
    align-self: flex-start;

    @media screen and (min-width: 30em) {
      align-self: center;
    }
  }
  .health {
    margin-left: auto;
    flex: 0 1 25%;
  }

  @media screen and (min-width: 30em) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

const Page = styled.div`
  background: none;
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 62rem;

  @media screen and (min-width: 30em) {
    height: 337mm;
  }
`
const TextWrapper = styled.div`
  margin: 1rem 0.5rem 1rem 0.5rem;

  @media all and (min-width: 60em) {
    margin: 2rem 2rem 0rem 1rem;
  }
`
const Display = styled.div`
  display: none;
  @media all and (min-width: 60em) {
    display: block;
  }
`
export default HandyHintsPanel

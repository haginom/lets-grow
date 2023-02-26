import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const HHGrid = ({ children, className }) => {
  return (
    <>
      <Grid className={`grid ${className ? className : ""}`}>
        {children.map(item => {
          return item && <div>{item}</div>
        })}
      </Grid>
    </>
  )
}

export const HHGridItem = ({ transform, image, text, className }) => {
  return (
    <div className={`flex flex-column ${className ? className : ""}`}>
      <GatsbyImage
        style={{
          border: "2.5px black solid",
          borderRadius: "10px",
          maxHeight: "150px",
        }}
        imgStyle={{ transform: transform }}
        image={image}
        alt=""
      />
      <p className="tc">{text}</p>
    </div>
  )
}

export const HHGridItemTwo = ({ transform, image, text, mt, maxHeight }) => {
  return (
    <GridTwoItemContainer className="flex flex-column" mt={mt}>
      <GatsbyImage
        style={{
          maxHeight: maxHeight,
          borderRadius: "10px",
        }}
        imgStyle={{
          transform: transform,
          maxHeight: "100%",
          objectFit: "contain",
        }}
        image={image}
        alt=""
      />
      <p className="tc">{text}</p>
    </GridTwoItemContainer>
  )
}

const GridTwoItemContainer = styled.div`
  margin-top: ${props => props.mt || "0rem"};
`

const Grid = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-template-areas: "one two" "three four" "five six" "seven eight";
  max-width: 54rem;
  grid-gap: 10px;

  @media screen and (min-width: 35em) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-template-areas: "one two three four" "five six seven eight";
    grid-gap: 20px;
  }

  > div {
    font-size: 1.1rem;
    font-weight: 400;
    max-width: 13rem;

    p {
      margin: auto;
      margin-top: 0.25rem;
      white-space: pre-wrap;
      line-height: 1rem;
      font-size: 0.7rem;

      @media screen and (min-width: 35em) {
        font-size: 0.9rem;
        line-height: 1.1rem;
        padding-bottom: 0.25rem;
        padding-top: 0.25rem;
      }

      @media screen and (min-width: 60em) {
        font-size: 1rem;
        line-height: 1.3rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
    }
  }

  > div:nth-child(1) {
    grid-area: one;
  }
  > div:nth-child(2) {
    grid-area: two;
  }
  > div:nth-child(3) {
    grid-area: three;
  }
  > div:nth-child(4) {
    grid-area: four;
  }
  > div:nth-child(5) {
    grid-area: five;
  }
  > div:nth-child(6) {
    grid-area: six;
  }
  > div:nth-child(7) {
    grid-area: seven;
  }
  > div:nth-child(8) {
    grid-area: eight;
  }
`

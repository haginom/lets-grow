import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { LightenDarkenColor } from "../../lib/helpers"

export const ThemeIntro = ({ data }) => (
  <>
    <Table className="dt dt--fixed">
      <tr>
        <Th className="bg-yellow white">
          Getting to know<br></br>each other
        </Th>
        <Th className="bg-green white">Celebrations</Th>
        <Th className="bg-orange white">Growing Things</Th>
        <Th className="bg-pink white">Seasons</Th>
      </tr>
      <tr>
        <td className="bg-yellow white">
          <Overlay
            className="bg-light-yellow white"
            widthM="403.5%"
            widthS="407%"
            width="408%"
          >
            <p>Welcome to Let's Grow with Mr Bloom</p>
          </Overlay>
        </td>
        <td className="bg-green white"></td>
        <td className="bg-orange white"></td>
        <td className="bg-pink white"></td>
      </tr>
      <tr>
        <td className="bg-yellow white">
          <Overlay className="bg-light-yellow white" width="202.75%">
            <p>Introductory session with bob, flo & the babies </p>
          </Overlay>
        </td>
        <td className="bg-green white"></td>
        <td className="bg-orange white"></td>
        <td className="bg-pink white"></td>
      </tr>
      <tr>
        <td className="bg-yellow white">
          <SessionGrid color="#DDBE4B">
            <div>
              <p>All About Me</p>
            </div>
            <div>
              <p>Feelings</p>
            </div>
            <div>
              <p>Favourite Things</p>
            </div>
            <div>
              <p>My Journey to School</p>
            </div>
            <div>
              <p>Special People</p>
            </div>
            <div>
              <p>Looking After Me</p>
            </div>
            <div>
              <p>Moving On</p>
            </div>
          </SessionGrid>
        </td>
        <td className="bg-green white">
          <SessionGrid color="#6CA67F">
            <div>
              <p>Harvest</p>
            </div>
            <div>
              <p>Halloween</p>
            </div>
            <div>
              <p>Bonfire Night</p>
            </div>
            <div>
              <p>Diwali</p>
            </div>
            <div>
              <p>Christmas</p>
            </div>
            <div>
              <p>Chinese New Year</p>
            </div>
            <div>
              <p>Valentines Day</p>
            </div>
            <div>
              <p>Easter</p>
            </div>
            <div>
              <p>May Day</p>
            </div>
            <div>
              <p>Eid</p>
            </div>
            <div>
              <p>Sports Day</p>
            </div>
            <div>
              <p>Transitions</p>
            </div>
          </SessionGrid>
        </td>
        <td className="bg-orange white">
          <SessionGrid color="#E87D2E">
            <div>
              <p>Seeds</p>
            </div>
            <div>
              <p>Seedlings</p>
            </div>
            <div>
              <p>Mushrooms & Radishes</p>
            </div>
            <div>
              <p>Potatoes</p>
            </div>
          </SessionGrid>
        </td>
        <td className="bg-pink white">
          <SessionGrid color="#DD8385">
            <div>
              <p>Autumn</p>
            </div>
            <div>
              <p>Winter</p>
            </div>
            <div>
              <p>Spring</p>
            </div>
            <div>
              <p>Summer</p>
            </div>
          </SessionGrid>
        </td>
      </tr>
      <tr>
        <Td className="bg-yellow white">
          <GatsbyImage
            style={{
              marginBottom: "0.5rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
            image={data.gsgSix.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Td>
        <Td className="bg-green white">
          <GatsbyImage
            style={{
              marginBottom: "0.5rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
            image={data.gsgSeven.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Td>
        <Td className="bg-orange white">
          <GatsbyImage
            style={{
              marginBottom: "-0.1rem",
              marginLeft: "0.7rem",
              marginRight: "0.7rem",
              marginTop: "1rem",
            }}
            image={data.gsgEight.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Td>
        <Td className="bg-pink white">
          <GatsbyImage
            image={data.gsgNine.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Td>
      </tr>
    </Table>
    <AAbox className="bg-red white">
      <p>ARTS AWARD DISCOVER</p>
      <GatsbyImage
        objectFit={"contain"}
        style={{ marginRight: ".5rem", padding: ".5rem" }}
        image={data.gsgTen.childImageSharp.gatsbyImageData}
        alt=""
      />
    </AAbox>
  </>
)

const Table = styled.table`
  margin-top: 2rem;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px;

  th {
    border-left: 1.3px solid rgb(52, 72, 75);
    border-right: 1.3px solid rgb(52, 72, 75);
  }
  td {
    border-left: 1.3px solid rgb(52, 72, 75);
    border-right: 1.3px solid rgb(52, 72, 75);
  }

  @media screen and (min-width: 60em) {
    th {
      border-left: 3px solid rgb(52, 72, 75);
      border-right: 3px solid rgb(52, 72, 75);
    }
    td {
      border-left: 3px solid rgb(52, 72, 75);
      border-right: 3px solid rgb(52, 72, 75);
    }
  }
`
const Th = styled.th`
  vertical-align: middle;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-top: 0.75rem;
  padding-bottom: 1.5rem;
  text-transform: uppercase;
  line-height: 1rem;
  font-weight: 600;
  font-size: 0.65rem;
  @media screen and (min-width: 60em) {
    line-height: 1rem;
    font-size: 0.85rem;
    padding-bottom: 2.2rem;
  }
`
const Td = styled.td`
  padding-top: 1.5rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  vertical-align: bottom;
  text-align: right;

  > * {
    margin: 0.5rem;
  }

  
`
const Overlay = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  height: 3rem;
  position: relative;
  border-radius: 10px;
  z-index: 1;
  display: table;
  overflow: hidden;
  border-radius: 12px;
  width: ${props => props.widthS || "201%"};

  @media screen and (min-width: 35em) and (max-width: 60em) {
    width: ${props => props.widthM || "201%"};
  }

  @media screen and (min-width: 60em) {
    line-height: 1rem;
    font-size: 0.9rem;
    width: ${props => props.width || "201%"};
    max-width: 57.6rem;
    height: 3.5rem;
  }
  p {
    display: table-cell;
    vertical-align: middle;
    color: white;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;

    @media screen and (min-width: 60em) {
      line-height: 1rem;
      font-size: 0.9rem;
    }
  }
`
const SessionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: fit-content;
  overflow: hidden;

  div {
    display: table;
    overflow: hidden;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    height: 2rem;
    background-color: ${props =>
      LightenDarkenColor(props.color, 25) || "#cec7ab"};
    border-radius: 12px;

    @media screen and (min-width: 60em) {
      height: 3rem;
    }

    p {
      display: table-cell;
      vertical-align: middle;
      color: white;
      text-align: center;
      font-size: 0.4rem;
      font-weight: 600;
      line-height: 0.5rem;

      @media screen and (min-width: 60em) {
        line-height: 1rem;
        font-size: 0.9rem;
      }
    }
  }
`
const AAbox = styled.div`
  margin-top: 0.5rem;
  border-radius: 12px;
  height: 4rem;
  display: flex;

  p {
    display: grid;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 0 auto;
    transform: translateX(45px);
  }

  div {
    width: 20%;
  }

  @media screen and (min-width: 60em) {
    p {
      transform: translateX(90px);
    }
  }
`

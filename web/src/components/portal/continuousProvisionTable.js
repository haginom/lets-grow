import * as React from "react"
import styled from "styled-components"

const VegetableTable = ({
  name,
  singular,
  facts,
  recipeInstructions,
  ingredients,
  moreInfo,
  vegetableImage,
  spacerHeight,
  dug,
}) => {
  return (
    <StyledTable>
      <tr>
        <th className="bg-gold white corner-left corner-bottom-left col-one">
          Area
        </th>
        <th className="bg-gold white">Activity</th>
        <th className="bg-gold white corner-right corner-bottom-right col-three">
          Resources
        </th>
      </tr>
      <tr className="spacer"></tr>
      <tr>
        <th className="bg-gold white corner-left corner-right">
          Handling {name}
        </th>
        <td className="bg-dark-red corner-left corner-right">
          Take time to thoroughly explore {name} with the children, using all
          five senses.
        </td>
        <td className="bg-dark-red corner-left corner-right fw6">
          <p className="fw6">A selection of {name}.</p>
        </td>
      </tr>
      <tr>
        <th className="bg-gold white">Facts about {name}</th>
        <td className="bg-dark-red">
          {facts.map((fact, index) => (
            <p className="mb3" key={index}>
              {fact}
            </p>
          ))}
        </td>
        <td className="bg-dark-red fw6">
          <p className="fw6">
            Access to the internet for visual aids as required.
          </p>
        </td>
      </tr>
      <tr>
        <th className="bg-gold white">Expressive arts and design</th>
        <td className="bg-dark-red">
          Can the children draw some pictures to illustrate some of the{" "}
          {singular} facts they've learnt?
        </td>
        <td className="bg-dark-red">
          <p className="fw6">Art materials.</p>
        </td>
      </tr>
      <tr>
        <th className={`bg-gold white `}>
          <>
            Tasting {name}
            {!moreInfo && <>{vegetableImage}</>}
          </>
        </th>
        <td className="bg-dark-red">
          <p className="mb3">A quick {singular} recipe...</p>
          {recipeInstructions.map((instruction, index) => {
            let className = "mb3"
            if (index === 0) {
              className += " fw6"
            }
            if (instruction.includes("Note to teachers:")) {
              instruction = instruction.replace("Note to teachers:", "").trim()
              return (
                <p className={className} key={index}>
                  <span className="fw6">Note to teachers:</span> {instruction}
                </p>
              )
            } else {
              return (
                <p className={className} key={index}>
                  {instruction}
                </p>
              )
            }
          })}
        </td>
        <td className="bg-dark-red fw6">
          {ingredients.map((item, index) => (
            <p className="mb3" key={index}>
              {item}
            </p>
          ))}
        </td>
      </tr>
      {moreInfo && (
        <>
          <tr>
            <th className="bg-gold white mb5">
              <p className="mb5">
                More fun with {name}...{dug && <>{dug}</>}
              </p>
            </th>
            <td style={{ height: spacerHeight }} className="bg-dark-red">
              {moreInfo}
            </td>
            <td className="bg-dark-red"></td>
          </tr>
          {vegetableImage}
        </>
      )}
    </StyledTable>
  )
}

export const StyledTable = styled.table`
  table-layout: fixed;
  position: relative;
  margin-top: 2rem;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px;
  border: 10px solid white;
  background-color: white;

  tr {
    th {
      text-align: left;
      padding: 1rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 600;
      border-bottom: 3px solid white;
      border-top: 3px solid white;
    }
    td {
      border: 3px solid white;
      border-left: 5px solid white;
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 400;
      padding: 0.75rem;
    }

    .corner-left {
      border-top-left-radius: 12px;
    }
    .corner-right {
      border-top-right-radius: 12px;
    }
    .corner-bottom-left {
      border-bottom-left-radius: 12px;
    }
    .corner-bottom-right {
      border-bottom-right-radius: 12px;
    }
    .col-one {
      width: 18%;
    }
    .col-three {
      width: 19%;
    }
  }

  @media screen and (min-width: 60em) {
    td {
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
  }

  .vegetableImage {
    position: absolute;
  }
`

export default VegetableTable

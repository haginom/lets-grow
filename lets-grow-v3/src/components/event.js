import React from "react";
import OrangeButton from "./button";
import styled from "styled-components";

export const EventContainer = ({ children,
                          tag,  
                          colours,
                          title, 
                          rows,
                          columns,    
}) => {
  return (
    <div>
      <StyledContainer rows={rows} columns={columns}>
        <StyledTag className={`${colours} letsgrowfont`}>
          <StyledSubheading>
            {tag}
          </StyledSubheading>
        </StyledTag>
        <StyledTitle className="bradbunfont">
          {title}
        </StyledTitle>
        {children}
      </StyledContainer>
      <OrangeButton 
      navigation={"#contact"}
      markup={"get in touch"}
      />
    </div>
  );
};


const StyledContainer = styled.div`
  background-color: white;
  color: black;
  border: black solid 0.3rem;
  border-radius: 1rem;
  display: grid;
  max-width: 58rem;
  margin: 2rem;
  grid-template-rows: ${props => props.rows || "0.5fr 0.5fr"};
  grid-template-columns: ${props => props.columns}
`

const StyledTag = styled.div`
  font-size: 2.25rem;
  max-width: 22rem;
  text-align: center;
  border-radius: 0.8rem;
  margin: 0 1rem 0 1rem;
  padding: .5rem;
`
const StyledTitle = styled.h3`
  padding: 0.5rem;
  font-size: 4rem;
  background: #CFCF00;
  background: -webkit-linear-gradient(to bottom, #E6E600 10%, #DE1C19 80%);
  background: -moz-linear-gradient(to bottom, #E6E600 10%, #DE1C19 80%);
  background: linear-gradient(to bottom, #E6E600 10%, #DE1C19 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(-2px 3px 2px #000);
  `
const StyledSubheading = styled.h3`
  font-size: 2.25rem;
  
`




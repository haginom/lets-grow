import styled from "styled-components";

export const StyledEventContainer = styled.div`
  background-color: white;
  color: black;
  border: black solid 0.3rem;
  -webkit-border-radius: 15px; 
  -moz-border-radius: 15px; 
  border-radius: 15px; 
  max-width: 60rem;
  padding: 1rem;
  gap: ${props => props.gap || "0"};
  justify-content: center;
  
  > * {
    margin-bottom: .5rem;
  }
  
  @media screen and (min-width: 30em){
    margin: 1rem
  }
  @media screen and (min-width: 45em){
    
    margin: 2rem
  }


`


export const RegularTitle = styled.h3`
  font-size: 2.25rem;
  padding-left: 0.5rem;
  text-align: center;

  @media screen and (min-width: 70rem){
    text-align: ${props => props.align || "left"}

  }
`

export const StyledTitle = styled.div`
span{
  background: linear-gradient(#E6E600 16%, #DE1C19 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
};
  
  display: inline;
  filter: drop-shadow(-2px 3px 2px #000);
  font-size: 4rem;
  text-align: center;

  @media screen and (min-width: 35em){
    font-size: ${props => props.fs || "4rem"};
    margin-top: ${props => props.mt || "0"};
    line-height: ${props => props.lh};
  }
`

export const ButtonContainer = styled.div`
  max-width:60rem;
  margin:2rem;
  margin-bottom: 3rem;
`

export const StyledTag = styled.h3`
  font-size: 1rem;
  text-align: center;
  -webkit-border-radius: 15px; 
  -moz-border-radius: 15px; 
  border-radius: 15px;
  padding: .5rem;
  align-self: center;
  max-width: 24rem;
  margin-right: 0.5rem;

  @media screen and (min-width: 35em){
    font-size: 2rem;
  }
`

export const FlexRow = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: .5rem;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 60em){
    gap:0em;
  }

  h3:first-child {
    flex: 0 1 34rem;
  }
  h3:last-child {
    flex: 1 1 22rem;
  }
`

export const SecondRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  div:first-child {
    flex: 0 1 32rem 
  }
  div :last-child {
    flex: 1 1 23rem 
  }
  @media screen and (min-width:1146px){
    justify-content:flex-start;
  }

`
export const ThirdRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  > * {
    flex: 0 1 18.75rem 
  }
  @media screen and (min-width:1146px){
    justify-content:flex-start;
  }
`


export const Paragraph = styled.p`
  line-height: 1rem;
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  @media screen and (min-width: 35em){
    font-size: 1rem;
    line-height: 1.3rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`


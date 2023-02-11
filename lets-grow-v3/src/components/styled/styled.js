import styled from "styled-components"

export const StyledSmallWidth = styled.div`
  max-width: 43rem;
  @media all and (min-width: 60em) {
    margin-bottom: 2rem;
  }
  margin-bottom: 1.5rem;
`
export const StyledMediumWidth = styled.div`
  max-width: 58rem;

  @media all and (min-width: 60em) {
    margin-bottom: 1rem;
    margin-right: 4rem;
  }
  margin-bottom: 1.5rem;
`

export const StyledMidWidth = styled.div`
  max-width: 58rem;
  @media all and (min-width: 60em) {
    margin-bottom: 3rem;
  }
  margin-bottom: 1.5rem;
`

export const StyledLargeWidth = styled.div`
  max-width: 62rem;
`

export const StyledSubheading = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0;
  @media screen and (min-width: 35em) {
    font-size: 2.25rem;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    margin-left: 0;
  }
`

export const StyledParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`

import styled from "styled-components"

export const NotepadWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  *:first-child {
    flex: 1 1
      ${props => (props.flexItemOneSize ? props.flexItemOneSize : "20%")};
    max-width: ${props =>
      props.flexItemOneSize ? props.flexItemOneSize : "20%"};
  }

  *:last-child {
    flex: 1 1 80%;
    max-width: 80%;
  }
`

export const NotepadWrapperSwap = styled.div`
  display: flex;
  padding: 1rem;

  *:last-child {
    flex: 1 1 50%;
    max-width: 50%;
  }

  *:first-child {
    flex: 1 1 50%;
    max-width: 50%;
  }
`

export const Spacer = styled.tr`
  height: ${props => (props.height ? props.height : "3rem")};
  width: 100%;
`
export const Subheading = styled.h2`
  font-size: 1.8rem;
  font-style: italic;
  @media screen and (min-width: 35em) {
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`

export const Paragraph = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: ${props => (props.fw ? props.fw : "400")};
  margin-bottom: ${props => (props.mbs ? props.mbs : "0rem")};
  margin-top: ${props => (props.mts ? props.mts : "0.5rem")};

  @media screen and (min-width: 35em) {
    font-size: 1.2rem;
    line-height: 1.3rem;
    margin-top: ${props => (props.mtm ? props.mtm : "0.5rem")};
    margin-bottom: ${props => (props.mbm ? props.mbm : "0rem")};
  }

  @media screen and (min-width: 60em) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-bottom: 0.25rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-bottom: ${props => (props.mbl ? props.mbl : "0rem")};
    margin-top: ${props => (props.mt ? props.mt : "0.25rem")};
  }
`

export const List = styled.ul`
  margin-left: ${props => (props.ml ? props.ml : "2rem")};
  text-indent: ${props => (props.ti ? props.ti : "-3.3rem")};
  margin-bottom: 1rem;

  > li {
    list-style-position: inside;
    list-style-type: none;
    font-size: 1.2rem;
    line-height: 1.3rem;
    max-width: 56rem;
    margin-bottom: ${props => (props.mb ? props.ml : "1rem")};
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-top: ${props => (props.mts ? props.mts : "0rem")};
    font-weight: ${props => (props.fw ? props.fw : "400")};
    vertical-align: top;

    @media screen and (min-width: 35em) {
      font-size: 1.2rem;
      line-height: 1.3rem;
      margin-top: ${props => (props.mt ? props.mtm : "0.5rem")};
      margin-bottom: ${props => (props.mb ? props.ml : "1rem")};
    }
    @media screen and (min-width: 60em) {
      font-size: 1.25rem;
      line-height: 1.5rem;
      margin-left: ${props => (props.ml ? props.ml : "1rem")};
      margin-bottom: ${props => (props.mb ? props.mb : "0rem")};
      margin-bottom: ${props => (props.mb ? props.ml : "1rem")};
    }
  }

  > li:before {
    content: "\\00B7";
    font-size: 5rem;
    margin-left: 1rem;
    padding-right: 1rem;
    vertical-align: middle;
  }
`

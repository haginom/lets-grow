import * as React from "react"
import styled from "styled-components"
import IntroSessionBody from "./introSessionBody"

const IntroSessionTitle = ({ className, introSessions }) => {
  const [showMore, setShowMore] = React.useState(false)
  return (
    <section className="w-100 ph1 mb2">
      <Tab className="br4 mh1 ph3 ph5-ns f6 f5-ns fw5">
        <Centered className="relative">
          <StyledButton
            onClick={() => setShowMore(!showMore)}
            className={`${
              className ? ` ${className}` : ""
            } dt white f8 f5-ns fw5 center`}
          >
            <InnerWrapper className="f2-ns f3 ttu coffeeTea pv3-ns pv1 tc b dtc v-mid">
              Welcome to Let's Grow
            </InnerWrapper>
          </StyledButton>
          {showMore && introSessions
            ? introSessions.map(session => (
                <IntroSessionBody key={session.id} {...session} />
              ))
            : null}
        </Centered>
      </Tab>
    </section>
  )
}

const Tab = styled.div`
  background-color: ${props => props.color || "#9FB7BF"};
  color: white;
  overflow: hidden;
  width: 100%;
`

const StyledButton = styled.button`
  display: block;
  margin-top: 0.25rem;
  text-decoration: none;
  outline: none;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const InnerWrapper = styled.p`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  &:visited {
    color: white;
  }
`
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "68rem"};
  margin-left: auto;
  margin-right: auto;
`
export default IntroSessionTitle

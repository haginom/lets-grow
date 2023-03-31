import * as React from "react"
import styled from "styled-components"
import SongBody from "./songBody"
import ThemeDetails from "./themeDetails"

const ThemeTitle = ({ songs, className, song, ...props }) => {
  const { name, backgroundColour, id, comingSoon } = props
  const [showMore, setShowMore] = React.useState(false)
  return (
    <section className="w-100 ph1 mb2">
      <Tab
        className="br4 mh1 ph3 ph5-ns f6 f5-ns fw5"
        color={backgroundColour?.hex}
      >
        <Centered className="relative">
          <StyledButton
            onClick={() => setShowMore(!showMore)}
            className={`${
              className ? ` ${className}` : ""
            } dt white f8 f5-ns fw5 center`}
          >
            <InnerWrapper className="f2-ns f3 ttu coffeeTea pv3-ns pt3 pb1 tc b dtc v-mid">
              {name}
              {comingSoon ? (
                <span className="ttl">(coming soon ...)</span>
              ) : null}
            </InnerWrapper>
          </StyledButton>
          {!comingSoon && showMore && !song ? (
            <ThemeDetails color={backgroundColour?.hex} key={id} {...props} />
          ) : null}
          {!comingSoon && showMore && song ? <SongBody songs={songs} /> : null}
        </Centered>
      </Tab>
    </section>
  )
}

const Tab = styled.div`
  background-color: ${props => props.color || "rgb(140, 113, 131)"};
  color: white;
  overflow: hidden;
  width: 100%;
`

const StyledButton = styled.button`
  display: block;
  margin-bottom: 0.25rem;
  text-decoration: none;
  outline: none;

  :not(:disabled) {
    cursor: pointer;
    outline: none;
  }
`

const InnerWrapper = styled.p`
  padding-top: 1.65rem;
  padding-bottom: 1rem;
  &:visited {
    color: white;
  }
`
const Centered = styled.div`
  max-width: ${props => props.maxWidth || "62rem"};
  margin-left: auto;
  margin-right: auto;
`
export default ThemeTitle

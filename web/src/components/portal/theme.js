import React from "react"
import styled from "styled-components"

const Theme = props => {
  const [showMore, setShowMore] = React.useState(false)
  const { name } = props

  return (
    <Tab>
      <button className="btn" onClick={() => setShowMore(!showMore)}>
        <Subheading className="coffeeTea f2 mv4 ml3">{name}</Subheading>
        {showMore ? <ThemeBody /> : ""}
      </button>
    </Tab>
  )
}

const ThemeBody = props => (
  <>
    <Subheading className="coffeeTea i mv4 ml3">About...</Subheading>
    <Subheading className="coffeeTea i mv4 ml3">Sessions...</Subheading>
  </>
)

const Tab = styled.div`
  border-radius: 20px;
  background-color: orange;
`

const Subheading = styled.h3`
  font-size: 1.2rem;
  @media screen and (min-width: 60em) {
    font-size: 1.6rem;
  }
`

export default Theme

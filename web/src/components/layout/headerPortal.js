import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { logout } from "../../services/auth.js"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../tachyons/nav/logoLinksInlineCollapse.jsx"

const HeaderLayout = ({ image }) => (
  <header>
    <Nav portal image={image}>
      <Nav.Link to="/portal" className="mr3 mr4-ns">
        HOME
      </Nav.Link>
      <Nav.Link to="/portal/getting-started-guide" className="mr3 mr4-ns">
        GETTING STARTED GUIDE
      </Nav.Link>
      <Nav.Link to="/portal/resources-library" className="mr3 mr4-ns">
        RESOURCES LIBRARY
      </Nav.Link>
      <Nav.Link
        to="/"
        className="mr0"
        onClick={e => {
          e.preventDefault()
          logout(() => navigate("/"))
        }}
      >
        LOG OUT
      </Nav.Link>
    </Nav>
  </header>
)

HeaderLayout.propTypes = {
  image: PropTypes.object.isRequired,
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerLogo: file(
        relativePath: { eq: "portal/educational-settings-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
    }
  `)

  return (
    <HeaderLayout image={data.headerLogo.childImageSharp.gatsbyImageData} />
  )
}

export default Header

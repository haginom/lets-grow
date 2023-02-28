import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import HeaderPortal from "./headerPortal"

import "../styles.scss"

const Layout = ({ noFooter, children, noLinks, portal }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="avenir">
      {portal ? (
        <HeaderPortal
          siteTitle={data.site.siteMetadata.title}
          noLinks={noLinks}
        />
      ) : (
        <Header
          siteTitle={data.site.siteMetadata.title}
          noLinks={noLinks}
          portal={portal}
        />
      )}

      <main>{children}</main>
      {noFooter ? null : <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noLinks: PropTypes.bool,
}

export default Layout

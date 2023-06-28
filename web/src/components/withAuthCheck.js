import { isLoggedIn } from "../services/auth"
import { Link } from "gatsby"
import React from "react"

const WithAuthCheck = ({ children }) => {
  if (isLoggedIn()) {
    return children
  } else {
    if (typeof window === undefined) {
      return null
    } else {
      return (
        <div>
          Access denied. Please&nbsp;
          <Link to="/#login">login</Link>.
        </div>
      )
    }
  }
}

export default WithAuthCheck

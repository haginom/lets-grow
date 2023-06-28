import * as React from "react"
import FlexCollapse from "../components/tachyons/layout/flexCollapse"
import { GatsbyImage } from "gatsby-plugin-image"
import LoginForm from "../components/loginform"

const Login = ({ data, ...props }) => (
  <FlexCollapse className="bg-dark-blue bl br bb b--white bw3" {...props}>
    <div className="h-100 w-100 w-50-l pa4">
      <h2 className="fw5 white mb3">Log in to the Portal</h2>
      <LoginForm />
    </div>
    <div className="w-100 w-50-l bl-l b--white bw3">
      <GatsbyImage
        alt=""
        image={data.loginImage.childImageSharp.gatsbyImageData}
        className="bt b--white bw3 bw0-l"
      />
    </div>
  </FlexCollapse>
)

export default Login

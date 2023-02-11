import * as React from "react"
import { handleLogin } from "../services/auth"

import Button from "./tachyons/buttons"
import { navigate } from "gatsby"

const Input = ({ className, element, label, value, onChange, ...props }) => (
  <label className={`db lh-copy f6 mb2 ${className}`}>
    {label}
    {React.createElement(element, {
      className: "input-reset db mt1 pa2 bg-white ba bw0 w-100 br-form",
      value,
      onChange: e => onChange(e.target.value),
      ...props,
    })}
  </label>
)

const LoginForm = () => {
  const [name, setName] = React.useState("")
  const [organisation, setOrganisation] = React.useState("")
  const [password, setPassword] = React.useState("")
  const handleSubmit = e => {
    e.preventDefault()
    if (handleLogin({ username: name, password }) === false) {
      alert("Please check your username and password")
    } else {
      navigate("/portal")
    }
  }
  return (
    <>
      <form
        className="w-100"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <fieldset id="login-form" className="ba b--transparent pa0 ma0">
          <Input
            element="input"
            type="text"
            name="name"
            placeholder="User name"
            value={name}
            onChange={setName}
            required
          />
          <Input
            element="input"
            type="text"
            name="organisation"
            placeholder="Organisation"
            value={organisation}
            onChange={setOrganisation}
            required
          />
          <Input
            element="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            required
          />
          <div className="">
            <Button
              as="input"
              type="submit"
              value="Log In"
              className="input-reset f5 link ph3 pv2 mb2 dib bg-red white br-pill mt3 grow"
            />
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default LoginForm

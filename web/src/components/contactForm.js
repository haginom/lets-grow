import * as React from "react"
import OrangeSubmitButton from "./button-one"
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

const ContactForm = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [interest, setInterest] = React.useState("")
  const [message, setMessage] = React.useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    let email
    if (interest === "Educational Resources") {
      email = "online@letsgrow.org.uk"
    } else if (interest === "Live Events") {
      email = "events@letsgrow.org.uk"
    } else {
      email = "hello@letsgrow.org.uk"
    }

    fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },

      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        interest,
        message,
      }),
    })
      .then(() => {
        setName("")
        setEmail("")
        setInterest("")
        setMessage("")
      })
      .then(() => alert("message sent"))
      .catch(err => alert(err))
  }
  return (
    <form
      className="w-100"
      data-netlify="true"
      onSubmit={handleSubmit}
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset id="contact" className="ba b--transparent pa0 ma0">
        <Input
          element="input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName}
        />
        <Input
          element="input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          element="select"
          name="interest"
          placeholder="Interest"
          value={interest}
          onChange={setInterest}
        >
          <option style={{ fontWeight: "400" }} defaultValue="">
            I am interested in
          </option>
          <option className="" value="Educational Resources">
            Educational Resources
          </option>
          <option value="Live Events">Live Events</option>
        </Input>
        <Input
          element="textarea"
          rows={5}
          name="message"
          placeholder="Message"
          value={message}
          onChange={setMessage}
        />
      </fieldset>
      {/* <input type="hidden" name="_subject" value={interest}></input> */}
      <div className="">
        <OrangeSubmitButton as="input" value={"Send"} markup={"send"} />
      </div>
    </form>
  )
}

export default ContactForm

import { users } from "./users"

// const users = {
//   mimifaulks: "Swede8562",
//   missinsley: "Tomato525",
//   missfaulkner: "Carrot974",
//   jesshines: "Spud9725",
//   natashabardney: "Pepper864",
//   misshann: "Potato522",
//   ailsausher: "Cabbage837",
//   katestarkie: "Lettuce562",
//   kathryndriver: "Parsnip927",
//   joworthy: "Broccoli822",
//   sahiraarshad: "Brussels752",
//   nathalielongstaff: "Kale23525",
//   missdodd: "Celeriac972",
//   natashaparkinson: "Cauliflower97",
//   angelaauld: "Pickle1246",
//   nicoladanielsgreen: "Avocado397",
//   samanthawalker: "Savoy9742",
// }

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("letsGrowUser")
    ? JSON.parse(window.localStorage.getItem("letsGrowUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("letsGrowUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  const matchingUser = users.find(
    user =>
      user.username.toLowerCase() === username && user.password === password
  )
  if (matchingUser) {
    return setUser({
      username,
      key: "ab8d65fe65cee7d",
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}
export const logout = callback => {
  setUser({})
  callback()
}

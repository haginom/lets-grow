import { users } from "./users"

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

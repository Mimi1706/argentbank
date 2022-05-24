export const login = () => {
  return { type: "LOGGED_IN" }
}

export const logout = () => {
  return { type: "LOGGED_OUT" }
}

export const getName = (firstName, lastName) => {
  return { type: "GET_NAME", payload: { firstName, lastName } }
}

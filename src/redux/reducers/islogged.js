const initialState = false

const isLoggedReducer = (state = initialState, action) => {
  if (action.type === "LOGGED_IN") {
    return true
  } else if (action.type === "LOGGED_OUT") {
    return false
  } else {
    return state
  }
}

export default isLoggedReducer

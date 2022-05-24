const initialState = { firstName: undefined, lastName: undefined }

const getUserInfosReducer = (state = initialState, action) => {
  if (action.type === "GET_NAME") {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    }
  }
  return initialState
}

export default getUserInfosReducer

export const getToken = (credentials) => {
  return fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((resp) => {
      return resp.json()
    })
    .catch((error) => {
      if (error) {
        alert(error)
      }
    })
}

export const getUser = (token) => {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => {
      return resp.json()
    })
    .catch((error) => {
      if (error) {
        alert(error)
      }
    })
}

export const putUser = (token, userFullName) => {
  return fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userFullName),
  })
    .then((resp) => {
      return resp.json()
    })
    .catch((error) => {
      if (error) {
        alert(error)
      }
    })
}

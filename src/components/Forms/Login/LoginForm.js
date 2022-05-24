import "./LoginForm.css"

import { useState } from "react"
import { Navigate } from "react-router-dom"
import { getToken, getUser } from "../../../utils/Apifetch"

import { login, getName } from "../../../redux/actions"
import { useDispatch } from "react-redux"

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState({
    firstName: "",
    lastName: "",
  })

  // When the submit button is clicked
  const HandleSubmit = async (e) => {
    e.preventDefault()

    // Retrieve token
    const dataToken = await getToken({
      email: e.target.email.value,
      password: e.target.password.value,
    })

    if (dataToken.status === 200) {
      const dataUser = await getUser(dataToken.body.token)
      setErrorMsg(null)

      // Check if the token allows access to user profile and saves token (to localStorage) + userInfos (to store)
      if (dataUser.status === 200) {
        localStorage.setItem("token", dataToken.body.token)
        setToken(dataToken.body.token)
        setUserInfos({
          firstName: dataUser.body.firstName,
          lastName: dataUser.body.lastName,
        })
      }
    } else {
      setErrorMsg(dataToken.message)
    }
  }

  const dispatch = useDispatch()

  if (token) {
    dispatch(login())
    dispatch(getName(userInfos.firstName, userInfos.lastName))
    return <Navigate to="/profile" />
  }

  return (
    <form className="loginForm" onSubmit={HandleSubmit}>
      <div className="loginLabel">
        <label>Username </label>
        <input type="email" id="email" />
      </div>

      {errorMsg === "Error: User not found!" ? (
        <div className="errorMsg">User not found</div>
      ) : null}

      <div className="loginLabel">
        <label>Password</label>
        <input type="password" id="password" />
      </div>

      {errorMsg === "Error: Password is invalid" ? (
        <div className="errorMsg">Password is invalid</div>
      ) : null}

      <div>
        <input type="checkbox" />
        <label className="checkboxLabel">Remember me</label>
      </div>

      <input type="submit" value="Sign In" className="loginSubmit" />
    </form>
  )
}

export default LoginForm

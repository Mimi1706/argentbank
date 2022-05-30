import "./LoginForm.css"

import { useState } from "react"
import { Navigate } from "react-router-dom"
import { getToken, getUser } from "../../../utils/Apifetch"

import { login, getName } from "../../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const LoginForm = () => {
  const dispatch = useDispatch()

  const loggingStatus = useSelector((state) => state.isloggedReducer) // true is connected, false is disconnected

  const [errorMsg, setErrorMsg] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const HandleSubmit = async (e) => {
    e.preventDefault()

    // Retrieve token
    const dataToken = await getToken({
      email: email,
      password: password,
    })

    // Check if the token sends back a status 200
    if (dataToken.status === 200) {
      localStorage.setItem("token", dataToken.body.token)
      setErrorMsg(null)
    } else {
      setErrorMsg(dataToken.message)
    }

    const token = localStorage.getItem("token")

    if (token) {
      const dataUser = await getUser(dataToken.body.token)
      dispatch(login())
      dispatch(getName(dataUser.body.firstName, dataUser.body.lastName))
    }
  }

  if (loggingStatus) {
    return <Navigate to="/profile" />
  }

  return (
    <form className="loginForm" onSubmit={HandleSubmit}>
      <div className="loginLabel">
        <label>Username </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      {errorMsg === "Error: User not found!" ? (
        <div className="errorMsg">User not found</div>
      ) : null}

      <div className="loginLabel">
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
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

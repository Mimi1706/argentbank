import "./Header.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/actions"

const Header = () => {
  const loggingStatus = useSelector((state) => state.isloggedReducer) // true is connected, false is disconnected

  const firstName = useSelector((state) => state.getUserInfosReducer.firstName)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logout())
    localStorage.clear("token")
  }

  const LogOut = () => {
    return (
      <div className="signButton">
        <Link to={`/profile`} className="signButton">
          <i className="fa fa-user-circle" /> {firstName}
        </Link>
        <Link to={`/`} className="signOutButton" onClick={logOut}>
          <i className="fa fa-sign-out" /> Sign Out
        </Link>
      </div>
    )
  }

  const SignIn = () => {
    return (
      <Link to={`/login`} className="signButton">
        <i className="fa fa-user-circle" /> Sign In
      </Link>
    )
  }

  return (
    <header>
      <Link to={`/`}>
        <img src={logo} className="headerLogo" alt="Logo Sportsee"></img>
      </Link>
      {loggingStatus === true ? <LogOut /> : <SignIn />}
    </header>
  )
}

export default Header

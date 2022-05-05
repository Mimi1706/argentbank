import "./Header.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to={`/`}>
        <img src={logo} className="headerLogo" alt="Logo Sportsee"></img>
      </Link>
      <Link to={`/login`} className="signInButton">
        <i class="fa fa-user-circle" /> Sign In
      </Link>
    </header>
  )
}

export default Header

import "./LoginForm.css"

const LoginForm = () => {
  return (
    <form className="loginForm">
      <div className="loginLabel">
        <label>Username </label>
        <input type="text" />
      </div>

      <div className="loginLabel">
        <label>Password</label>
        <input type="text" />
      </div>

      <div>
        <input type="checkbox" />
        <label className="checkboxLabel">Remember me</label>
      </div>

      <input type="submit" value="Sign In" className="loginSubmit" />
    </form>
  )
}

export default LoginForm

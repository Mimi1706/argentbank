import LoginForm from "../../components/Forms/Login/LoginForm"
import "./Login.css"

const Login = () => {
  return (
    <main className="loginMain">
      <section className="loginSection">
        <i class="fa fa-user-circle" />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  )
}

export default Login

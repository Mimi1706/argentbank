import { Link } from "react-router-dom"
import "./Error.css"

const Error = () => {
  return (
    <main className="bgMain">
      <div className="errorMessage">
        <p>Oups... On dirait qu'il y a eu une erreur.</p>
        <Link to="/home" className="returnHomeBtn">
          Retour vers l'accueil
        </Link>
      </div>
    </main>
  )
}

export default Error

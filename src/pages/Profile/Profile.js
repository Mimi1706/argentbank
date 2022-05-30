import "./Profile.css"

import AccountBalance from "../../components/AccountInfos/AccountInfos"
import EditName from "../../components/Forms/EditName/EditName"

import { useState } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { accountBalances } from "../../data/accountBalances"

const Profile = () => {
  const loggingStatus = useSelector((state) => state.isloggedReducer) // true is connected, false is disconnected

  // Toggles the EditName form for "Edit Name", "Save" and "Cancel" buttons
  const [toggle, setToggle] = useState(false)
  const toggleEditNameForm = () => {
    setToggle(!toggle)
  }

  const firstName = useSelector((state) => state.getUserInfosReducer.firstName)
  const lastName = useSelector((state) => state.getUserInfosReducer.lastName)

  return loggingStatus === false ? (
    <Navigate to="/error" />
  ) : (
    <main className="profileMain">
      <h1 className="profileTitle">
        Welcome back
        <span>
          {firstName} {lastName}
        </span>
      </h1>
      <EditName
        className={
          toggle === true ? "editNameSection" : "editNameSection hidden"
        }
        toggle={toggleEditNameForm}
      />
      <button
        className={toggle === true ? "editNameBtn hidden" : "editNameBtn"}
        onClick={toggleEditNameForm}
      >
        Edit Name
      </button>
      <section className="allAccountBalances">
        {accountBalances.map(({ name, balance, type }, index) => (
          <AccountBalance
            key={`account-${index}`}
            accountName={name}
            accountBalance={balance.toLocaleString("en")}
            balanceType={type}
          />
        ))}
      </section>
    </main>
  )
}

export default Profile

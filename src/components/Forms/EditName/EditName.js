import "./EditName.css"

import { useDispatch, useSelector } from "react-redux"
import React from "react"
import { putUser } from "../../../utils/Apifetch"
import { getName } from "../../../redux/actions"

const EditName = (props) => {
  // Retrieve names from the store
  const firstName = useSelector((state) => state.getUserInfosReducer.firstName)
  const lastName = useSelector((state) => state.getUserInfosReducer.lastName)

  const dispatch = useDispatch()

  const saveName = (e) => {
    e.preventDefault()
    // Modify the name in the store
    dispatch(
      getName(e.target.firstNameInput.value, e.target.lastNameInput.value)
    )
    // Access the api to modify the fullname
    putUser(localStorage.getItem("token"), {
      firstName: e.target.firstNameInput.value,
      lastName: e.target.lastNameInput.value,
    })
  }

  return (
    <form className={props.className} onSubmit={saveName}>
      <section className="editNameFields">
        <div className="editNameLabel">
          <input
            type="text"
            id="firstNameInput"
            placeholder="firstName"
            defaultValue={firstName}
          />
        </div>
        <div className="editNameLabel">
          <input
            type="text"
            id="lastNameInput"
            placeholder="lastName"
            defaultValue={lastName}
          />
        </div>
      </section>
      <div className="editNameButtons">
        <button onClick={props.toggle} type="submit">
          Save
        </button>
        <button onClick={props.toggle} type="reset">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditName

import styles from './InputForm.module.css'
import { useState } from "react";
import Modal from "../Modal/Modal";

const InputForm = (props) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showEmptyFieldsModal, setShowEmptyFieldsModal] = useState(false)
  const [showInvalidAgeModal, setShowInvalidAgeModal] = useState(false)

  const userSubmitHandler = (event) => {
    event.preventDefault()

    if (!name || age <= 0) {
      if (!name) setShowEmptyFieldsModal(true);
      if (age <= 0) setShowInvalidAgeModal(true);
      return;
    }

    const user = {
      name,
      age
    }
    setAge('')
    setName('')
    props.userData(user)
  }

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(Number(event.target.value))
  }

  const handleCloseModal = () => {
    setShowEmptyFieldsModal(false)
    setShowInvalidAgeModal(false)
    setAge('')
    setName('')
  }



  return (
    <>
      <form className={styles.form} onSubmit={userSubmitHandler}>
        <label>Name</label>
        <input type="text" onChange={nameHandler} value={name} />
        <label>Age</label>
        <input type="number" onChange={ageHandler} value={age} />
        <button>Add User</button>
      </form>

      {showEmptyFieldsModal && <Modal text="The fields cannot be empty" closeModal={handleCloseModal}  openModal={showEmptyFieldsModal}/> ||
        showInvalidAgeModal && <Modal text="Age cannot be 0 or negative" closeModal={handleCloseModal} openModal={showInvalidAgeModal} />}
    </>
  )
}

export default InputForm;
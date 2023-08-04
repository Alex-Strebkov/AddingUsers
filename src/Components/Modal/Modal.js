import styles from './Modal.module.css'
const Modal = (props) => {

  return (
    <>
      {props.openModal &&  <div className={styles.overlay} onClick={props.closeModal}></div>}
    <div className={styles.modal}>
      <div className={styles['modal__header']}>Wrong input</div>
      <div className={styles['modal__text']}> {props.text}</div>
      <button className={styles['modal__button']} onClick={props.closeModal}>Close</button>
    </div>
    </>
  )
}

export default Modal
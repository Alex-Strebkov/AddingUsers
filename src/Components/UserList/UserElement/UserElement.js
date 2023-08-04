import styles from './UserElement.module.css'
const UserElement = (props) => {



  return (
    <div className={styles.element}>
      <span> {props.name} - </span>
      <span>{props.age} years old</span>
    </div>
  )
}

export default UserElement
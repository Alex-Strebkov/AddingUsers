import styles from './UserList.module.css'
import UserElement from "./UserElement/UserElement";
const UserList = (props) => {

  const usersFiltered = props.users


  return (
   <div className={styles.list}>
     {
       usersFiltered.map((user, index) => (
         <UserElement
         key={index}
         name={user.name}
         age={user.age}
         />

       ))
     }
   </div>
  )
}

export default UserList
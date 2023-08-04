import './App.css';
import InputForm from "./Components/InputForm/InputForm";
import UserList from "./Components/UserList/UserList";
import {useState} from "react";
import Modal from "./Components/Modal/Modal";


const users = []

function App() {

  const [user, setUser] = useState(users)

  const userDataHandler = (user) => {
    setUser((prevState) => {
      return [user, ...prevState]
    })
  }
  return (
   <>
    <InputForm userData = {userDataHandler} />
     <UserList users = {user}/>

   </>
  );
}

export default App;

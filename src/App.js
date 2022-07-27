import React  from 'react'
import {useState, useEffect} from 'react' 
import { db } from './firebase_config'
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from '@firebase/firestore'

function App() {

  const [users, setUsers] = useState([]) 
  const [newName, setNewName] = useState('') 
  const [newAge, setNewAge] = useState(0) 

  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };

    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: newAge})
  }

  const updateUser = async(id, age) => {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)

  }


const deleteUser  = async(id) => {
  const userDoc = doc(db, "users", id) 
  await deleteDoc(userDoc)
}

  return (
    <div>
    <input placeholder='name...' 
      onChange={(e) => setNewName(e.target.value)}
      type="string"
    /> 
     <input placeholder='age...' 
      onChange={(e) => setNewAge(e.target.value)}
      type="number"
    />
    <button onClick={createUser}>create</button>
      {users.map((user) => {
        return (
          <div>
            <h1>name:{user.name}</h1>
            <h1>age:{user.age}</h1>
            <button onClick={() => {updateUser(user.id, user.age)}}>update Age</button>
            <button onClick={() => {deleteUser(user.id)}}>delete user</button>
          </div>
        )
      })}
    </div>
  )
}

export default App

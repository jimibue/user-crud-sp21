import './App.css';
import React, {useState, useEffect} from 'react';
import Users from './Users'
import axios from 'axios';
import UserForm from './UserForm';


function App() {
  // when this components mount, meaning it has been render to the dom
  // you can see it, I want to load data
  const [users, setUsers]= useState([])
  const [loading, setLoading]= useState(true)
  const [showForm, setShowForm] = useState(false)
  
  // do stuff when loads
  useEffect(() => {
    // do stuff
    loadData()
  }, []) // by putting this here useEffect will only be trigger once, onMount
 
  // defining function
  const loadData = async () => {
    try{
      console.log('getting dat')
      let res = await axios.get('https://reqres.in/api/users?delay=1')
      setUsers(res.data.data)
      console.log('data loaded')
      setLoading(false)
    }catch(err){
      console.log(err)
      alert('Error occured check log')
      setLoading(false)
    }
  }

  const deleteUser = (id) => {
   
    console.log(users)
    let filterUsers = users.filter( user => user.id !== id )
    setUsers(filterUsers)
    console.log(filterUsers)

  }

  const addUser = (user) => {
    console.log('added user called')
    console.log(user)
    let idUser = {...user, id:Math.random()}
    // want to add to users array, and also not change original one
    setUsers([idUser, ...users])
  }
  




  return (
    <div className="App">
        <h1>NavBar</h1>
        <button onClick={()=> setShowForm(!showForm)}> {showForm ? "hide" : 'Show'}</button>
        {showForm && <UserForm addUser={addUser} />}
        {loading && <p>Loading</p>}
        <Users deleteUser={deleteUser} users={users} />
    </div>
  );
}

export default App;

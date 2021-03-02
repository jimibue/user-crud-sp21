import './App.css';
import React, {useState, useEffect} from 'react';
import Users from './Users'
import axios from 'axios';


function App() {
  // when this components mount, meaning it has been render to the dom
  // you can see it, I want to load data

  // do stuff when loads
  useEffect(() => {
    // do stuff
    loadData()
  }, []) // by putting this here useeffect will only be trigger once, onMount
 
  // defining function
  const loadData = async () => {
    try{
      let res = await axios.get('https://reqres.in/api/users?page=2')
      setUsers(res.data.data)
    }catch(err){
      console.log(err)
      alert('Error occured check log')
    }
  }
  
  const [users, setUsers]= useState([])


  return (
    <div className="App">
        <h1>NavBar</h1>
        <Users users={users} />
    </div>
  );
}

export default App;

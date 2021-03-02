import React, { useState} from 'react'

const UserForm = (props) => {
    const {addUser} = props
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleSubmit = (e)=>{
        console.log(e)
        // prevents page from reloading
        // reloading is bad in react generally
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        // I want to add these to my users array in app.js
        addUser({first_name: firstName , last_name:lastName})
        setFirstName('')
        setLastName('')
    }
    return (
        <div>
            <h1>Form here</h1>
            <form onSubmit={handleSubmit}>
                <p>first name</p>
                <input
                  value={firstName}
                  onChange={(e)=>{setFirstName(e.target.value)}}
                />
                <p>last name</p>
                <input
                  value={lastName}
                  onChange={(e)=>{setLastName(e.target.value)}}
                />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default UserForm
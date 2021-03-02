import React from 'react'

// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://reqres.in/img/faces/7-image.jpg"
// },

const User = (props) => {
    const {id, email, first_name, last_name, avatar, deleteUser} = props
    
    return (
        <div style={{border:'12px solid black', margin:'20px'}}>
        <p>id: {id}</p>
        <p>email: {email}</p>
        <p>first_name: {first_name}</p>
        <p>last_name: {last_name}</p>
        <p>avatar: {avatar}</p>
        <button onClick={() => deleteUser(id)}>delete user with id {id}</button>
        </div>
    )
}

export default User
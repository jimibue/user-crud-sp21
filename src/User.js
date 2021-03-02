import React from 'react'

// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://reqres.in/img/faces/7-image.jpg"
// },

const User = (props) => {
    const {id, email, first_name, last_name, avatar} = props
    return (
        <div>
        <p>id: {id}</p>
        <p>email: {email}</p>
        <p>first_name: {first_name}</p>
        <p>last_name: {last_name}</p>
        <p>avatar: {avatar}</p>
        </div>
    )
}

export default User
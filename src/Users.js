import React from 'react'
import User from './User'

const Users = (props)=> {
    const {users, deleteUser } = props
    const renderUsers = () => {
        if(users.length === 0){
            return (<p>No users</p>)
        }

        return users.map( user=> {
            return <User deleteUser={deleteUser} key={user.id} {...user} /> 
        })
    }
    return(
        <div>
            <h1>Users</h1>
            {renderUsers()}
        </div>
    )
}

export default Users
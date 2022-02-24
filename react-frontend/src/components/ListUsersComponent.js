import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserService from '../services/UserService'

const ListUsersComponent = () => {

    const [users, setUser] = useState([])

    useEffect(() => {

        getAllUsers();

    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUser(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) => {
            getAllUsers();
        
        }).catch(error => {
            console.log(error);
        })
         
     }

    return (
        <div className='container'>
            <h2 className = "text-center"> USERS </h2>
            <Link to = "/add-user" className = "btn btn-primary mb-2" > Add User </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th> User Id </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email Id </th>
                    <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}> 
                                <td> {user.id} </td>
                                <td> {user.firstName} </td>
                                <td>{user.lastName}</td>
                                <td>{user.emailId}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-user/${user.id}`}> Update </Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUsersComponent

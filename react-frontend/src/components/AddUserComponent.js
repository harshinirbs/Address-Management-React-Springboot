import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../services/UserService'

const AddUserComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [passWord, setPassWord] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = { firstName, lastName, emailId, passWord }

        if (id) {
            UserService.updateUser(id, user).then((response) => {
                navigate('/users')
            }).catch(error => {
                console.log(error)
            })

        } else {
            UserService.createUser(user).then((response) => {

                console.log(response.data)

                navigate('/address')

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if (id) {
            UserService.getUserById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.emailId)
                setPassWord(response.data.passWord)

            }).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Details</h2>
        } else {
            return <h2 className="text-center" style={{color: 'blueviolet'}}>Sign Up</h2>
        }
    }

    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className="card col-md-4 offset-md-4">
                        <br />
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> <b>First Name</b></label>
                                    <input
                                        type="text"
                                        placeholder="Enter First name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"><b>Last Name</b> </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> <b>Email Id</b></label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> <b>Password</b></label>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        name="passWord"
                                        className="form-control"
                                        value={passWord}
                                        onChange={(e) => setPassWord(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br />
                                <button className="btn" style={{'backgroundColor': 'blueviolet' , color:'white'}} onClick={(e) => saveOrUpdateUser(e)} >Submit </button> &nbsp;
                                <br /><br />
                                Have an account?
                                <Link style={{color: 'blueviolet', textDecoration: 'none'}} to="/login"> Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddUserComponent
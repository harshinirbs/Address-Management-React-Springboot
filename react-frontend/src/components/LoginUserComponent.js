import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginUserComponent = () => {

    
    const [emailId, setEmailId] = useState('')
    const [passWord, setPassWord] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    return(
            <div>
                <br />
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-4 offset-md-4">
                            <br />
                            <h2 className="text-center" style={{color: 'blueviolet'}}> Login </h2>
                            <div className='card-body'>
                                <form>

                                <div className="form-group mb-2">
                                        <input
                                            type="email"
                                            placeholder="Email Id"
                                            name="emailId"
                                            className="form-control"
                                            value={emailId}
                                        >
                                        </input>
                                    </div>
                                    <br />
                                    <div className="form-group mb-2">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="passWord"
                                            className="form-control"
                                            value={passWord}
                                        >
                                        </input>
                                    </div>
                                    <br />
                                    <button className="btn" style={{'backgroundColor': 'blueviolet' , color:'white'}} onClick = { () => {navigate('/welcome')}} > Login </button>
                                    <br /><br />
                                    Don't have an account?
                                    <Link style={{color:'blueviolet', textDecoration: 'none'}} to="/add-user"> Sign Up</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        )
}

export default LoginUserComponent
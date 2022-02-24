import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddressService from '../services/AddressService'

const ShowUserComponent = () => {

    const [address, setAddress] = useState([])

    useEffect(() => {

        getAllAddress();

    }, [])

    const getAllAddress = () => {
        AddressService.getAllAddress().then((response) => {
            setAddress(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    const deleteAddress = (useraid) => {
        AddressService.deleteAddress(useraid).then((response) => {
            getAllAddress();
        
        }).catch(error => {
            console.log(error);
        })
         
     }

    return (
        <div className='container'>
            <h3 className = "text-center"> Address List </h3>
            <br />
            <Link to = "/add-address" className="btn" style={{'backgroundColor': 'blueviolet' , color:'white'}} > Add Address </Link>
            <br /><br />
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th> Id </th>
                    <th> Address Line 1 </th>
                    <th> Address Line 1 </th>
                    <th> Country </th>
                    <th> Zip/Postal Code </th>
                    <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        address.map(
                            user =>
                            <tr key = {user.aid}> 
                                <td> {user.aid} </td>
                                <td> {user.address1} </td>
                                <td>{user.address2}</td>
                                <td>{user.country}</td>
                                <td>{user.zipPostal}</td>
                                <td>
                                    <Link className="btn" style={{'backgroundColor': 'blueviolet' , color:'white'}} to={`/edit-address/${user.aid}`}> Update </Link>
                                    <button className="btn" style={{'backgroundColor': 'lightslategray' , color:'white', marginLeft:"10px"}} 
                                    onClick = {() => deleteAddress(user.aid)}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowUserComponent

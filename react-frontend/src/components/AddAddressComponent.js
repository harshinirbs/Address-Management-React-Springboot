import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import AddressService from '../services/AddressService'

const AddAddressComponent = () => {

    const [address1, setaddress1] = useState('')
    const [address2, setaddress2] = useState('')
    const [country, setcountry] = useState('')
    const [zipPostal, setzipPostal] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateAddress = (e) => {
        e.preventDefault();

        const addr = { address1, address2, country, zipPostal }

        if (id) {
            AddressService.updateAddress(id, addr).then((response) => {
                navigate("/address")
            }).catch(error => {
                console.log(error)
            })

        } else {
            AddressService.createAddress(addr).then((response) => {

                console.log(response.data)

                navigate("/address")

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        if (id) {
            AddressService.getAddressById(id).then((response) => {
                setaddress1(response.data.address1)
                setaddress2(response.data.address2)
                setcountry(response.data.country)
                setzipPostal(response.data.zipPostal)

            }).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Details</h2>
        } else {
            return <h2 className="text-center" style={{color: 'blueviolet'}}>Add Address</h2>
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
                                    <label className="form-label"> <b>Address Line 1</b></label>
                                    <input
                                        type="text"
                                        placeholder="Address Line 1"
                                        name="address1"
                                        className="form-control"
                                        value={address1}
                                        onChange={(e) => setaddress1(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"><b>Address Line 2</b> </label>
                                    <input
                                        type="text"
                                        placeholder="Address Line 2"
                                        name="address2"
                                        className="form-control"
                                        value={address2}
                                        onChange={(e) => setaddress2(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> <b>Country</b></label>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        name="country"
                                        className="form-control"
                                        value={country}
                                        onChange={(e) => setcountry(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> <b>Zip/Postal Code</b></label>
                                    <input
                                        type="text"
                                        placeholder="Zip/Postal Code"
                                        name="zipPostal"
                                        className="form-control"
                                        value={zipPostal}
                                        onChange={(e) => setzipPostal(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br />
                                <button className="btn" style={{'backgroundColor': 'blueviolet' , color:'white'}} onClick={(e) => saveOrUpdateAddress(e)} >Submit </button> &nbsp;

                                <Link className="btn" style={{backgroundColor: 'blueviolet', color:'white'}} to="/address"> Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddAddressComponent
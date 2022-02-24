import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const EditProfile = () => {
    const [profile, setUser] = useState({})
    const navigate = useNavigate()
    const getUser = () => {
        fetch('http://localhost:4000/api/profile', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(profile => {
                setUser(profile)
            }).catch(e => {
            console.log('未登录')
            // navigate('/login')
        })
    }
    useEffect(getUser, [])
    console.log('TEST FETCH USER', profile)

    // const [newUserName, setNewUserName] = useState(profile.username)
    const [newEmail, setNewEmail] = useState(profile.email)
    const [newPhone, setNewPhone] = useState(profile.phone)
    const [newLocation, setNewLocation] = useState(profile.location)
    const saveClickHandler = () => {
        const newProfile = {
            ...profile,
            email: newEmail,
            phone: newPhone,
            location: newLocation
        }
        console.log('TSET EDIT PROFILE *** :', newProfile)

        fetch('http://localhost:4000/api/profile', {
            method: 'PUT',
            body: JSON.stringify(newProfile),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                return response.json()
            }).then(
            navigate('/profile')
        )

    }
    return (
        <>
            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                   disabled="disabled"
                                                   type="text" className="form-control" id="username"
                                                   placeholder="Username"
                                                   value={profile.username}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={(e) => {setNewEmail(e.target.value)}}
                                                   type="text" className="form-control" id="email"
                                                   placeholder="Email"
                                                   value={newEmail}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="website">Phone</label>
                                            <input onChange={(e) => {setNewPhone(e.target.value)}}
                                                   type="text" className="form-control" id="phone"
                                                   placeholder="Phone Number"
                                                   value={newPhone}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="Street">Location</label>
                                            <input onChange={(e) => {setNewLocation(e.target.value)}}
                                                   type="text" className="form-control" id="location"
                                                   placeholder="Location"
                                                   value={newLocation}/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">

                                            <br/>
                                                <button type="button" id="submit" name="submit"
                                                        className="btn btn-primary" onClick={saveClickHandler}>Update
                                                </button>
                                            <Link to="/profile">
                                                <button type="button" id="submit" name="submit"
                                                        className="btn btn-secondary">Cancel
                                                </button>
                                            </Link>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile
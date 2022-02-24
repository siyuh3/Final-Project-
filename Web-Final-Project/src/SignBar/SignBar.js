import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Welcome from './Welcome'

const SignBar = () => {
    const state = useSelector((state) => state.cart)
    let initial = 0
    for (let i = 0; i < state.length; i++) {
        initial += state[i].qty
    }

    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getUser = () => {
        fetch('http://localhost:4000/api/profile', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user)
            }).catch(e => {
            console.log('未登录')
            // navigate('/login')
        })
    }
    useEffect(getUser, [])
    const profileOnClickHandler = () => {
        if (user._id) {
            navigate('/profile')
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Welcome/>

                    <Link to="/products" className="btn btn-outline-dark float-end">
                        <span>
                            Products
                        </span>
                    </Link>
                </div>

                <div className=" col">
                    <span className="float-end">
                        <Link to="/register">
                        <button className="badge rounded-pill bg-primary">
                            Sign up
                        </button>
                    </Link>
                        <Link to="/seller">
                            <button className="badge rounded-pill bg-primary ms-1 me-1">
                                         Sell
                            </button>
                        </Link>
                        <Link to='/home'>
                            <button className="badge rounded-pill bg-primary me-1">
                                         Buyer
                            </button>
                        </Link>

                        {/*<Link to="">*/}
                        {/*    <span className="me-2 text-black ">*/}
                        {/*        Watch List*/}
                        {/*    </span>*/}
                        {/*</Link>*/}


                        {/*<Link to="">*/}
                        {/*    <span className='me-3 text-black'>*/}
                        {/*        My E-bay*/}
                        {/*    </span>*/}
                        {/*</Link>*/}
                        <span className='me-2'>
                            <i className="fas fa-bell "></i>
                        </span>
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart text-black "></i> cart({initial})
                        </Link>


                        <Link to="/home">
                            <i className="fas fa-home text-black"></i> Home
                        </Link>

                        <button className="btn" onClick={profileOnClickHandler}>
                            <i className="fas fa-user-alt text-black"></i> Profile
                        </button>

                    </span>
                </div>
            </div>
        </div>

    )
}

export default SignBar
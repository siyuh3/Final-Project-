import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:4000'

const Welcome = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const getProfile = () => {
        fetch(`${API_URL}/api/profile`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user)
            }).catch(e => {
                console.log("未登录")
                // navigate('/login')
            })
    }
    const logout = () => {
        fetch(`${API_URL}/api/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => navigate('/'))
    }

    useEffect(getProfile, [])

    const welcome = () => {
        console.log(user)
        if (user.username) {
            return (
                <>
                    <span> Welcome, <span className="lead fw-bold text-primary">{user.username} </span></span>
                    <Link to="/login">
                        <button className="badge rounded-pill bg-primary" onClick={logout}>
                            Log out
                        </button>
                    </Link>
                </>
            )
        }
        return (
            <Link to="/login">
                <button className="badge rounded-pill bg-primary">
                    Log in
                </button>
            </Link>
        )
    }

    return (
        <>
            {welcome()}
        </>
    )
}
export default Welcome
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let API_URL = 'http://localhost:4000'
    const [user, setUser] = useState({ username: 'alice', password: 'alice123' })
    const navigate = useNavigate()
    const register = () => {
        fetch(`${API_URL}/api/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(res => {
            navigate('/login')
        })

    }
    return (
        <div className="container d-flex">
            <div className="row w-100 justify-content-center">
                <div className="col-4" style={{ verticalAlign: 'center' }}>

                    <h1>Register</h1>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="username"
                        className="form-control my-3"/>
                    <input
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="password"
                        type="password"
                        className="form-control my-3"/>
                    <input
                        onChange={(e) => setUser({ ...user, verifyPassword: e.target.value })}
                        placeholder="verify password"
                        type="password"
                        className="form-control"/>
                    {
                        user && user.password !== user.verifyPassword &&
                        <span className="text-danger">Password Don`t Match</span>

                    }
                    <br/>
                    <button
                        className="btn btn-primary my-3 float-end"
                        onClick={register}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Register
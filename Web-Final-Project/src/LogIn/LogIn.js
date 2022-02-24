import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const API_URL = 'http://localhost:4000'

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({})


    const buyerLogin = () => {
        fetch(`${API_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res=> res.json())
            .then(json => {

                navigate("/home")
            })
            .catch(() => {})
    }

    const sellerLogin = () => {
        fetch(`${API_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res=> res.json())
            .then(json => {

                navigate("/seller")
            })
            .catch(() => {})
    }

    return (
        <div className="container d-flex">
            <div className="row w-100 justify-content-center">
                <div className="col-4" style={{verticalAlign: "center"}}>
                    <h1 >Login</h1>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="username"
                        className="form-control my-3" />
                    <input
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="password"
                        type="password"
                        className="form-control my-3"/>
                    <button
                        className="btn btn-outline-primary float-end "
                        onClick={buyerLogin}>
                        Buyer Login
                    </button>
                    <button
                        className="btn  btn-outline-dark float-end"
                        onClick={sellerLogin}>
                        Seller Login
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Login
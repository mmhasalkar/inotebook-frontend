import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';

const Login = () => {
    const host = "http://localhost:5000"

    const context = useContext(noteContext);
    const { showAlert } = context;

    // eslint-disable-next-line
    const [creds, setCreds] = useState({email: '', password: ''})
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${host}/api/auth/login`, {
            method: 'post',
            body: JSON.stringify({email: creds.email, password: creds.password}),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json()
        
        if (data.success) {
            localStorage.setItem("token", data.authtoken)
            showAlert("Logged in successfully!", "success")
            history.push("/")
        } else {
            showAlert(data.error, "danger")
        }
    }

    const handleInputChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }


    return (
        <div className="my-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={creds.email} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={creds.password} onChange={handleInputChange}/>
                </div>
                <button disabled={creds.email.length === 0 || creds.password.length === 0} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login

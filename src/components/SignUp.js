import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import noteContext from '../context/notes/noteContext';

const SignUp = () => {
    const host = "http://localhost:5000"

    const context = useContext(noteContext);
    const { showAlert } = context;

    // eslint-disable-next-line
    const [creds, setCreds] = useState({ name: '', email: '', password: '', cPassword: '' })
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, cPassword } = creds;

        if (password !== cPassword) {
            alert("Password and Confirm Password did not match!")
        } else {
            const response = await fetch(`${host}/api/auth/register`, {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
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
    }

    const handleInputChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    return (
        <div className="my-3">
            <h2 className="my-4">Create account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={creds.name} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={creds.email} onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={creds.password} onChange={handleInputChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cPassword" name="cPassword" value={creds.cPassword} onChange={handleInputChange} minLength={5} required />
                </div>
                <button disabled={
                    creds.name.length === 0 ||
                    creds.email.length === 0 ||
                    creds.password.length < 5 ||
                    creds.cPassword.length < 5
                } type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp

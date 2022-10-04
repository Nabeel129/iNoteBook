import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login(props) {
    const host = "http://localhost:5000";
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `${host}/api/Auth/login`,
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }), // body data type must match "Content-Type" header
            }
        );
        let json = await response.json(); // parses JSON response into native JavaScript objects
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            console.log(json.success, json.authToken);
            navigate("/home");
            props.showAlert('User Logged In Successfully', 'success');
        }
        else {
            props.showAlert('Failed to Log In', 'danger');
            navigate("/login");
            // alert("Invalid Credentials")
        }
        // console.log(token);

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="container">
                <div className="container my-3">
                    <h3 className='text-center'> Log In to iNoteBook</h3>
                </div>
                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} name='email' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
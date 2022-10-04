import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Signup() {
    const host = "http://localhost:5000";
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(
            `${host}/api/Auth/createuser`,
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }), // body data type must match "Content-Type" header
            }
        );
        let json = await response.json(); // parses JSON response into native JavaScript objects
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            // console.log(json.success, json.authToken);
            navigate("/");
            // navigate(`${host}/home`);
        }
        else {
            alert("Invalid Credentials")
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
                    <h3 className='text-center'> Sign Up to iNoteBook</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={onChange} value={credentials.name} name='name' aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} name='email' aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' required minLength={5} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" onChange={onChange} value={credentials.cpassword} name='cpassword' required minLength={5} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup
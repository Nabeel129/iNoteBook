import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

// // Add this in your component file
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

function Navbar(props) {
    let location = useLocation();
    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        navigate("/login");
        props.showAlert('User Logged Out Successfully', 'success');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    {!localStorage.getItem('token') ?
                        <div className="d-flex">
                            <Link className="btn btn-primary mx-2" to="/login" role="button">LogIn</Link>
                            <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
                        </div>
                        : <button type="button" onClick={handleClick} className="btn btn-primary">Log Out</button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
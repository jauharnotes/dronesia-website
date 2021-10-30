import React from 'react';
import './css/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
         <div className="logo">
             <img src="https://static.thenounproject.com/png/1054424-200.png" alt="logo" />
             <p>Droneisa</p>
         </div>
            <ul>
                <li><a to="#">Home</a></li>
                <li><a to="#">Gallery</a></li>
                <li><a to="#">Product</a></li>
                <li><a to="#">Review</a></li>
                <li><a to="#">Support</a></li>
            </ul>
            <div className="login">
                <a to="#">Sign In</a>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Navbar;
import React from 'react'

import "./navbar.scss";


function navbar() {
    return (
        <nav>
            <div className="left display-flex-row">
                <a href="" className='image-logo'>
                    <img src="..\..\images\logo.png" alt="logo" />
                    <span>KajuEstate</span>
                </a>
                <a href="" className='nav-item'>Home</a>
                <a href="" className='nav-item'>About</a>
                <a href="" className='nav-item'>Contact</a>
                <a href="" className='nav-item'>Agents</a>
            </div>
            <div className="right">
                <a href="">Sign In</a>
                <a href="" className='yellow-btn-color'>Sign Up</a>
            </div>
        </nav>
    )
}

export default navbar

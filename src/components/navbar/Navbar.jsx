import React from 'react'

import { useState, useEffect } from 'react';

import "./navbar.scss";


function Navbar() {

    const [isMenuOpen, toggleMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleClick = () => {
        toggleMenu(!isMenuOpen)
    }


    //need to clarify this
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            toggleMenu(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




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
                <a href="" className='user-item'>Sign In</a>
                <a href="" className='yellow-btn-color user-item'>Sign Up</a>
                <div className="spacer">

                </div>
                <div className="menu-icon">
                    <img src="..\..\images\menu.png" alt="" onClick={handleClick} />
                </div>
                <div className={isMenuOpen ? "menu active" : "menu inactive"}>
                    <a href="" className='menu-item'>Home</a>
                    <a href="" className='menu-item'>About</a>
                    <a href="" className='menu-item'>Contact</a>
                    <a href="" className='menu-item'>Agents</a>
                    <a href="" className='menu-item'>Sign In</a>
                    <a href="" className='menu-item'>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

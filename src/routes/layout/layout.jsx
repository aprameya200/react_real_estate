import React from 'react'

import "./layout.scss"

import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="layout">
            <Navbar></Navbar>

            <div className="content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout

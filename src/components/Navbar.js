import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <NavLink className="nav-link" to={'/'}>
            <div className="navbar-brand">
                Logo
            </div>
        </NavLink>
    </nav>
)
import React from 'react'

import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container container-fluid">
                <NavLink className="navbar-brand" aria-current="page" to='./'>ContextApp</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <NavLink activeclassname='active' className="nav-link" aria-current="page" to='./'>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname='active' className="nav-link" to='./home'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname='active' className="nav-link" to='./about'>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

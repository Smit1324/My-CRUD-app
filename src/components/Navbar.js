import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        
            <nav className="navbar navbar-expand-lg nav">
                <div className="container">
                    <NavLink className="navbar-brand" to='/'>React Users</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <Link className="btn btn-outline-danger px-4" to="/func/add">ADD USER</Link>
                        </form>
                    </div>
                </div>
            </nav>
        
    )
}

export default Nav;
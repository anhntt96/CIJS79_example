import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const activeClass = (params) => {
        return params.isActive ? "nav-link active" : "nav-link"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a> */}
                            <NavLink to="/" className={activeClass}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/products">
                                Products
                            </a> */}
                            <NavLink to="/products" className={activeClass}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/profile">
                                Profile
                            </a> */}
                            <NavLink to="/profile" className={activeClass}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

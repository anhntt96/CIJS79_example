import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const activeClass = (params) => {
    return params.isActive ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className={activeClass}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/invoices" className={activeClass}>
                Invoices
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className={activeClass}>
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className={activeClass}>
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={activeClass}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

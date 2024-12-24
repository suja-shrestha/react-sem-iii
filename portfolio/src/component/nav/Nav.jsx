import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link

const Nav = () => {
  return (
    <>
      <div className="head">
        <div className="nav">
          <h1>Sujal Shrestha</h1>
          <ul className="left">
            <li>
              <NavLink className="link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about" activeClassName="active">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/project" activeClassName="active">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Nav;

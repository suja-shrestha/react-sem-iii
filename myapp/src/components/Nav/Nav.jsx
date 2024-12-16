import React from "react";
import "./Nav.css";
import logo from "../../assets/logo-right.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

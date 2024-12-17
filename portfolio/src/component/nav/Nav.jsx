import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="head">
        <div className="nav">
          <h1>Sujal Shrestha</h1>
          <ul className="left">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

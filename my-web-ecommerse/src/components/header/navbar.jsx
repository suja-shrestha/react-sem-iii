import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../../assets/logo.png";

function Tauko() {
  return (
    <div className="head">
      <div className="nav">
        <img src={logo} alt="Kaneki Logo" />
        <ul className='left'>
          <li><Link className='link' to="/">Home</Link></li> 
          <li><Link className='link' to="/shop">Shop</Link></li>
          <li><Link className='link' to="/about">About Us</Link></li> 
          <li><Link className='link' to="/contact">Contact</Link></li> 
          <li><Link className='link' to="/blog">Blogs</Link></li> 
        </ul>
        <ul className='right'>
          <li><i className="bi bi-facebook fs-4" style={{ color: 'blue' }}></i></li>
          <li><i className="bi bi-pinterest fs-4" style={{ color: "red" }}></i></li>
          <li><i className="bi bi-instagram fs-4" style={{ color: "pink" }}></i></li>
          <li><i className="bi bi-linkedin fs-4" style={{ color: "blue" }}></i></li>
          <li><button>Start Shopping now <i className="bi bi-arrow-right fs-5"></i></button></li>
        </ul>
      </div>
    </div>
  );
}

export default Tauko;

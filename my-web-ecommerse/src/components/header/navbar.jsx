import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../../assets/logo.png";

function Tauko() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="head">
      <div className="nav">
        <img src={logo} alt="Kaneki Logo" className="logo" />
        
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`left ${menuOpen ? 'active' : ''}`}>
          <li><Link className='link' to="/" onClick={toggleMenu}>Home</Link></li> 
          <li><Link className='link' to="/shop" onClick={toggleMenu}>Shop</Link></li>
          <li><Link className='link' to="/about" onClick={toggleMenu}>About Us</Link></li> 
          <li><Link className='link' to="/contact" onClick={toggleMenu}>Contact</Link></li> 
          <li><Link className='link' to="/blog" onClick={toggleMenu}>Blogs</Link></li> 
        </ul>

        <ul className="right">
          <li><i className="bi bi-facebook fs-4" style={{ color: 'blue' }}></i></li>
          <li><i className="bi bi-pinterest fs-4" style={{ color: "red" }}></i></li>
          <li><i className="bi bi-instagram fs-4" style={{ color: "pink" }}></i></li>
          <li><i className="bi bi-linkedin fs-4" style={{ color: "blue" }}></i></li>
          <li>
            <button>
              Start Shopping now <i className="bi bi-arrow-right fs-5"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tauko;

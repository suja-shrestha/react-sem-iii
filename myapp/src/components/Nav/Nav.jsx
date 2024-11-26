import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-items">
            <img src="lolo" alt="logo" />
            <ul>
                <a href={'/'}><li>Home</li></a>
               <a href={'/about'}> <li>About</li></a>
               <a href={'/contact'}><li>Contact</li></a> 
            </ul>
        </div>

    </div>
  )
}

export default Nav
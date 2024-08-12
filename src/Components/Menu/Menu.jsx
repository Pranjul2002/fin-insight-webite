import React from 'react'
import { Link } from 'react-router-dom/dist';

import '../Menu/MenuStyle.css';
import Logo from '../Image/logo.jpeg'

const Menu = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <div className="logo-main">
          FIN-INSIGHTS
        </div>
        <div className="logo-sub">
          It starts from YOU
        </div>
      </div>
        <div className="menu-option">
            <ul className='menu-options-list'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/blogs'><li>Blogs</li></Link>
                <Link to='/about-us'><li>About Us</li></Link>
                <Link to='/contact-us'><li>Contact</li></Link>
                <Link to='/login'><li>login</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Menu
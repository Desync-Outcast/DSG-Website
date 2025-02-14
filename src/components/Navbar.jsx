import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="./dr_logo.png" alt="Desync Games" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/servers">Servers</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <a 
              href="https://discord.gg/g2nnmWzgj5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="discord-link"
            >
              <i className="fab fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 
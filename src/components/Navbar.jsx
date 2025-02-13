import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/dr_logo.png" alt="Desync Games" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#servers">Servers</a></li>
          <li><a href="#about">About</a></li>
          <li>
            <a 
              href="https://discord.gg/your-invite-code" 
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
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import NavIcon from './images/s.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <img src={NavIcon} />
              <h1 className="hidden md:block lg:block">Siddarth Pai</h1>
              <h1 className="md:hidden lg:hidden">Siddarth </h1>
            </Link>
            <div
              className="menu-icon"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  ~/
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  ~./about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  ~./blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  ./contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

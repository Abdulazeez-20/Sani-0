import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return(<>
    <p><a href="#home">home</a></p>
    <p><a href="#whatIsSani">what is sani ?</a></p>
    <p><a href="#possibility">oper ai</a></p>
    <p><a href="#features">case studies</a></p>
    <p><a href="#blog">library</a></p>
  </>)
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbar-links">

        <div className="navbar-link-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>

      <div className="navbar-sign">
        <p>sing in</p>
        <button type="button">Sign up</button>
      </div>

      <div className='navbar-menu'>
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-links'>
              <Menu />
            </div>

              <div className="navbar-menu-sign">
                <p>sing in</p>
                <button type="button">Sign up</button>
              </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark header py-3'>
      <div className='navbar-brand header__logo'>
        <img src={ logo } alt="logo" className='mr-3'/>
        <p>Sailor</p>
      </div>
      <button className='navbar-toggler' data-toggle='collapse' data-target="#navbarNav">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
        <div className='navbar-nav'>
            <NavLink 
              className='header__navLink' 
              to='/asdasd'>
              Logout
            </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;
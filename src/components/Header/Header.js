import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { withRouter } from 'react-router';
import './Header.scss';

const Header = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark header py-3'>
      <div className='navbar-brand header__logo' onClick={() => props.history.push('/')}>
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
              activeClassName='active'
              to='/sign-in'>
              Sign in
            </NavLink>
            <NavLink 
              className='header__navLink ml-3' 
              to='/sign-up'>
              Sign up
            </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header);
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='main-nav'>
      <ul className='nav-bar clean-list flex'>
        <li className='flex'>
          <NavLink activeClassName='active' to='/' exact>
            home
          </NavLink>
        </li>
        <li className='flex'>
          <NavLink activeClassName='active' to='/about' exact>
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

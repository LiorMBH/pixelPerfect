import React from 'react';
import NavBar from './NavBar';

import siteLogo from '../assets/img/layout/logo.svg';

export default function Header() {
  return (
    <div className='main-header-container container flex'>
      <div className='left-wrapper flex-70 flex align-center'>
        <div className='site-logo'>
          <img src={siteLogo} alt={siteLogo} />
        </div>
        <NavBar></NavBar>
      </div>

      <div className='right-wrapper flex-30 flex justify-end'>
        <button className='btn-round-primary-light'>contact us</button>
      </div>
    </div>
  );
}
